/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');

const sampleRate = 44100;
const duration = 12; // 12 seconds loop
const numSamples = sampleRate * duration;
const buffer = new Float32Array(numSamples);

// 1. Generate Brown Noise (Continuous low traffic drone)
let lastOut = 0;
for (let i = 0; i < numSamples; i++) {
  const white = Math.random() * 2 - 1;
  buffer[i] = (lastOut + (0.02 * white)) / 1.02;
  lastOut = buffer[i];
  buffer[i] *= 1.5; // Drone gain
}

// 2. Add passing cars (whooshes of filtered pink noise)
const numCars = 8;
for (let c = 0; c < numCars; c++) {
  const startSample = Math.floor(Math.random() * (numSamples - sampleRate*2));
  const carLength = sampleRate * (1.5 + Math.random() * 2); // 1.5-3.5 seconds
  
  let b0=0, b1=0, b2=0, b3=0, b4=0, b5=0, b6=0;
  for (let i = 0; i < carLength; i++) {
    const white = Math.random() * 2 - 1;
    // Pink noise algorithm
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.96900 * b2 + white * 0.1538520;
    b3 = 0.86650 * b3 + white * 0.3104856;
    b4 = 0.55000 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.0168980;
    let pink = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
    b6 = white * 0.115926;
    pink *= 0.11;

    // Doppler envelope for whoosh (fade in, peak, fade out)
    const pos = i / carLength;
    const envelope = Math.pow(Math.sin(pos * Math.PI), 2); // Squared sine for sharper peak
    
    if (startSample + i < numSamples) {
        buffer[startSample + i] += pink * envelope * 2.5; // Mix passing car
    }
  }
}

// 3. Write to 16-bit PCM WAV file
const wavHeader = Buffer.alloc(44);
wavHeader.write('RIFF', 0);
wavHeader.writeUInt32LE(36 + numSamples * 2, 4);
wavHeader.write('WAVE', 8);
wavHeader.write('fmt ', 12);
wavHeader.writeUInt32LE(16, 16);
wavHeader.writeUInt16LE(1, 20); // PCM
wavHeader.writeUInt16LE(1, 22); // Mono
wavHeader.writeUInt32LE(sampleRate, 24);
wavHeader.writeUInt32LE(sampleRate * 2, 28);
wavHeader.writeUInt16LE(2, 32);
wavHeader.writeUInt16LE(16, 34);
wavHeader.write('data', 36);
wavHeader.writeUInt32LE(numSamples * 2, 40);

const pcmData = Buffer.alloc(numSamples * 2);
for (let i = 0; i < numSamples; i++) {
  let s = Math.max(-1, Math.min(1, buffer[i] * 0.5)); // Master volume
  pcmData.writeInt16LE(s < 0 ? s * 0x8000 : s * 0x7FFF, i * 2);
}

fs.writeFileSync('public/sounds/city.wav', Buffer.concat([wavHeader, pcmData]));
console.log('City traffic WAV generated successfully.');
