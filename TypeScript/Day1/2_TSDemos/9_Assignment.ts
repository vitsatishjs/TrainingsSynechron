// function Reverse(str: string): string[];
// function Reverse(arr: string[]): string[];

// function Reverse(strOrarr: any) {
//     if(typeof strOrarr == "string")
//         return strOrarr.split("").reverse();
//     else
//         return [...strOrarr].reverse();
//         // return strOrarr.slice().reverse();
// }

// console.log(Reverse("Manish"));
// console.log(Reverse(["PQR", "XYZ", "ABC"]));
// // console.log(Reverse(10));

// ------------------------ TypeGuards

// var data: (number | string);
// data = 10;
// data = "ABC";

function Reverse(str: string): string[];
function Reverse(arr: string[]): string[];

function Reverse(strOrarr: (string | string[])) {
    if (typeof strOrarr == "string")
        return strOrarr.split("").reverse();
    else
        return [...strOrarr].reverse();
    // return strOrarr.slice().reverse();
}

console.log(Reverse("Manish"));
console.log(Reverse(["PQR", "XYZ", "ABC"]));
