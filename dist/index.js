"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/function.ts
function calculateArea(base, height) {
  return 0.5 * base * height;
}
function calculatePerimeter(sideA, sideB, sideC) {
  return sideA + sideB + sideC;
}
async function getInput(promptMessage) {
  return new Promise((resolve) => {
    const readline2 = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout
    });
    readline2.question(promptMessage, (input) => {
      readline2.close();
      const value = parseFloat(input);
      resolve(value);
    });
  });
}

// src/index.ts
var readline = __toESM(require("readline"));
async function main() {
  console.log("=== Hitung Luas dan Keliling Segitiga ===");
  let continueProgram = true;
  while (continueProgram) {
    const menu = await getInput(
      "Pilih operasi yang ingin Anda lakukan:\n1. Hitung Luas\n2. Hitung Keliling\n3. Keluar\n"
    );
    switch (menu) {
      case 1:
        const base = await getInput("Masukkan panjang alas segitiga: ");
        const height = await getInput("Masukkan tinggi segitiga: ");
        const area = calculateArea(base, height);
        console.log(`Luas segitiga: ${area}`);
        break;
      case 2:
        const sideA = await getInput("Masukkan panjang sisi A: ");
        const sideB = await getInput("Masukkan panjang sisi B: ");
        const sideC = await getInput("Masukkan panjang sisi C: ");
        const perimeter = calculatePerimeter(sideA, sideB, sideC);
        console.log(`Keliling segitiga: ${perimeter}`);
        break;
      case 3:
        console.log("Program telah ditutup.");
        continueProgram = false;
        break;
      default:
        console.log("Pilihan tidak valid.");
    }
    if (continueProgram) {
      const answer = await askContinue();
      if (answer === 2) {
        console.log("Program telah ditutup.");
        continueProgram = false;
      } else {
        console.clear();
      }
    }
  }
}
async function askContinue() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise((resolve) => {
    rl.question("Apakah ingin dilanjutkan?\n1. Iya\n2. Keluar\n", (answer) => {
      rl.close();
      resolve(parseInt(answer));
    });
  });
}
main();
