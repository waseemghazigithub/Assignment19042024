var typescript = 90, nextjs = 80, react = 92, tailwind = 91, outof = 100;
var perca = function (totalmarks) { return (totalmarks / 400 * 100); };
//  let perca= (totalmarks:number)=>(totalM/400*100)
console.log("\n================Mark sheet================= ");
console.log("Subject Name   Total Marks   Obtain Marks     ");
console.log("==============================================");
console.log("TypeScript :        ".concat(outof, "     ").concat(typescript, " "));
console.log("Nextjs     :        ".concat(outof, "     ").concat(nextjs, " "));
console.log("react      :        ".concat(outof, "     ").concat(react, " "));
console.log("tailwind   :        ".concat(outof, "     ").concat(tailwind, " "));
console.log("\n=============================================");
var totalM = Markssum(typescript, nextjs, react, tailwind);
console.log("Total Marks:        ".concat(outof * 4, "    ").concat(totalM, "     "));
console.log("Percentage :\t\t  ", perca(totalM), "%");
var abc = perca(totalM);
Grading(abc);
function Markssum(n1, n2, n3, n4) {
    var tot = n1 + n2 + n3 + n4;
    return (tot);
}
function Grading(p) {
    if (p >= 90 && p <= 99.99) {
        console.log("Grade \t\t\t A1");
    }
    else if (p >= 80 && p <= 90) {
        console.log("Grade \t\t\t A");
    }
    else if (p >= 70 && p <= 80) {
        console.log("Grade \t\t\t B");
    }
    else if (p >= 60 && p <= 70) {
        console.log("Grade \t\t\t C");
    }
    else if (p >= 50 && p <= 60) {
        console.log("Grade \t\t\t D");
    }
    else {
        console.log("Fail");
    }
}
