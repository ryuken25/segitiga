import { calculateArea, calculatePerimeter, getInput } from './function';
import * as readline from 'readline';

async function main() {
    console.log("=== Hitung Luas dan Keliling Segitiga ===");

    let continueProgram = true;

    while (continueProgram) {
        const menu = await getInput(
            'Pilih operasi yang ingin Anda lakukan:\n1. Hitung Luas\n2. Hitung Keliling\n3. Keluar\n'
        );

        switch (menu) {
            case 1:
                const base = await getInput('Masukkan panjang alas segitiga: ');
                const height = await getInput('Masukkan tinggi segitiga: ');
                const area = calculateArea(base, height);
                console.log(`Luas segitiga: ${area}`);
                break;
            case 2:
                const sideA = await getInput('Masukkan panjang sisi A: ');
                const sideB = await getInput('Masukkan panjang sisi B: ');
                const sideC = await getInput('Masukkan panjang sisi C: ');
                const perimeter = calculatePerimeter(sideA, sideB, sideC);
                console.log(`Keliling segitiga: ${perimeter}`);
                break;
            case 3:
                console.log('Program telah ditutup.');
                continueProgram = false; // Set continueProgram to false to exit the loop
                break;
            default:
                console.log('Pilihan tidak valid.');
        }

        if (continueProgram) {
            const answer = await askContinue(); // Menanyakan apakah ingin dilanjutkan
            if (answer === 2) {
                console.log('Program telah ditutup.');
                continueProgram = false;
            } else {
                console.clear(); // Membersihkan layar
            }
        }
    }
}

async function askContinue(): Promise<number> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question('Apakah ingin dilanjutkan?\n1. Iya\n2. Keluar\n', (answer) => {
            rl.close();
            resolve(parseInt(answer));
        });
    });
}

main();
