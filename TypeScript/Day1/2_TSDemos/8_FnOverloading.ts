function Hello(): void;
function Hello(n: string): void;

function Hello(...args: Array<string>) {
    if (args.length == 0)
        console.log("Hello World");
    else
        console.log("Hello,", args[0]);
}

Hello();
Hello("Manish");
// Hello("Manish", "Sharma");

function Addition(x: number, y: number): number;
function Addition(x: string, y: string): string;

function Addition(x: any, y: any) {
    return x + y;
}

Addition(2, 3);
Addition("Manish", "Sharma");
// Addition(2, "ABC");
// Addition(true, "ABC");
