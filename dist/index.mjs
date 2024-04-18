var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// src/function.ts
function calculateArea(base, height) {
  return 0.5 * base * height;
}
function calculatePerimeter(sideA, sideB, sideC) {
  return sideA + sideB + sideC;
}
async function getInput(promptMessage) {
  return new Promise((resolve) => {
    const readline2 = __require("readline").createInterface({
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
import * as readline from "readline";
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
