let typescript: number=90,nextjs:number=80,react:number=92,tailwind:number=91,outof:number= 100;

let perca= (totalmarks:number):number=>(totalmarks/400*100)
//  let perca= (totalmarks:number)=>(totalM/400*100)
console.log("\n================Mark sheet================= ")
console.log("Subject Name   Total Marks   Obtain Marks     ")
console.log("==============================================")
console.log(`TypeScript :        ${outof}     ${typescript} `)
console.log(`Nextjs     :        ${outof}     ${nextjs} `)
console.log(`react      :        ${outof}     ${react} `)
console.log(`tailwind   :        ${outof}     ${tailwind} `)
console.log("\n=============================================")
let totalM=Markssum(typescript,nextjs,react,tailwind);
console.log(`Total Marks:        ${outof*4}    ${totalM}     `)
console.log("Percentage :\t\t  ",perca(totalM),"%")
let abc=perca(totalM)

Grading(abc);

function Markssum(n1:number,n2:number,n3:number,n4:number){
    let tot=n1+n2+n3+n4;
    return(tot)
}
function Grading(p:number){
    if (p>=90 && p<= 99.99 ){console.log("Grade \t\t\t     A1")} 
        else if (p>=80 && p<=90){console.log("Grade \t\t\t  A")} 
        else if (p>=70 && p<=80) {console.log("Grade \t\t\t B")} 
        else if (p>=60 && p<=70) {console.log("Grade \t\t\t C")} 
        else if (p>=50 && p<=60) {console.log("Grade \t\t\t D")} 
        else {console.log("Fail")}
}


