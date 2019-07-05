var Mode;
(function (Mode) {
    Mode["Read"] = "READ";
    Mode["Write"] = "WRITE";
    Mode["ReadWrite"] = "READ_WRITE";
})(Mode || (Mode = {}));
function Open(mode) {
    console.log("File opened in \"" + mode + "\" mode");
}
Open(Mode.Read);
Open(Mode.Write);
Open(Mode.ReadWrite);
