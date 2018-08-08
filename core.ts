function hiddenFunction() {
    console.log("I should not be seen from outside");
}

export function helloCore() {
    console.log("Hello from function core");
}

export class Core {
    hello() {
        console.log("Hello from class Core");
    }
}