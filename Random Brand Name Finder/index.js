let first,second,third;

let ran= Math.random();
if(ran<=0.33){
    first="Crazy "
}
else if(ran<0.66 && ran>0.33){
    first="Amazing "
}
else{
    first="Fire "
}
ran= Math.random();
if(ran<=0.33){
    second="Engine "
}
else if(ran<0.66 && ran>0.33){
    second="Foods "
}
else{
    second="Garments "
}
ran= Math.random();
if(ran<=0.33){
    third="Bros"
}
else if(ran<0.66 && ran>0.33){
    third="Limited"
}
else{
    third="Hub"
}
console.log(`${first }${second }${third}`)