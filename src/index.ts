import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers.js';

function test(): void {
    const array = [
        41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86,
        51,
    ];

    console.log(array.map((x) => x * 2));

    const test = (x: number) => x * 4;
    console.log(array.map((x) => test(x)));

    console.log(array.filter((x) => x % 2 === 0));

    const reducer = (accumulator: number, currentValue: number) =>
        accumulator + currentValue;
    console.log(array.reduce(reducer));
}

consoleStart();
test();

consoleEnd();

export {};
