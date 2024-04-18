// Function to calculate the area of a triangle
export function calculateArea(base: number, height: number): number {
    return 0.5 * base * height;
}

// Function to calculate the perimeter of a triangle
export function calculatePerimeter(sideA: number, sideB: number, sideC: number): number {
    return sideA + sideB + sideC;
}

// Function to get user input from command line
export async function getInput(promptMessage: string): Promise<number> {
    return new Promise((resolve) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        readline.question(promptMessage, (input) => {
            readline.close();
            const value = parseFloat(input);
            resolve(value);
        });
    });
}
