export default function sum(x, y) {
    return x + y;
}

export function subtract(x, y) {
    return x - y;
}

export function getText() {
    return "Hello World!";
}

export function multiply(x, y) {
    return x * y;
}

export function divide(x, y) {
    if (y === 0) {
        throw new Error("Cannot divide by zero");
    }
    return x / y;
}

export let name = "Elon Musk";