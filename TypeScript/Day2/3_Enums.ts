// function Open(mode: string) {
//     console.log(`File opened in "${mode}" mode`);
// }

// Open("Read");
// Open("Write");
// Open("ReadWrite");
// Open("Manish");

// enum Mode { Read, Write, ReadWrite }
// enum Mode { Read = 10, Write = 20, ReadWrite = 30 }
enum Mode { Read = "READ", Write = "WRITE", ReadWrite = "READ_WRITE" }

function Open(mode: Mode) {
    console.log(`File opened in "${mode}" mode`);
}

Open(Mode.Read);
Open(Mode.Write);
Open(Mode.ReadWrite);
// Open("Manish");