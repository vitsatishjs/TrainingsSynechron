function Reverse(strOrarr) {
    if (typeof strOrarr == "string")
        return strOrarr.split("").reverse();
    else
        return strOrarr.slice().reverse();
}
console.log(Reverse("Manish"));
console.log(Reverse(["PQR", "XYZ", "ABC"]));
