let a = prompt("Enter the first number");
let b = prompt("Enter the second number");
let op = prompt("Enter the operation expression");
let ran = Math.random();
if (ran < +0.1) {
    if (op == "+") {
        op = "-"
        alert(eval(`${a}${op}${b}`));
    }
    else if (op == "*") {
        op = "+";
        alert(eval(`${a}${op}${b}`));

    }
    else if (op == "-") {
        op = "/";
        alert(eval(`${a}${op}${b}`));

    }
    else if (op == "/") {
        op = "**";

        alert(eval(`${a}${op}${b}`));

    }
}
else {

    alert(eval(`${a}${op}${b}`));
}


// let a=prompt("Enter first num");
// let c=prompt("Enter operation");
// let b=prompt("Enter second num");
// let random=Math.random();
// let obj={
//     "+":"-",
//     "*":"+",
//     "-":"/",
//     "/":"**",
// }

// console.log(random);

// if(random>0.1){
//     console.log(`The result is ${a}${c}${b}`)
//     alert(`The result is ${eval(`${a}${c}${b}`)}`)
// }
// else{
//     c=obj[c]
//     alert(`The result is ${eval(`${a}${c}${b}`)}`)
// }
