let boxes=document.getElementsByClassName("box");

// let ran=Math.floor(Math.random() * 5);
// boxes[ran].style.backgroundColor="red";

// let ran2=Math.floor(Math.random() * 5);
// boxes[ran2].style.color="red";

// let ran3=Math.floor(Math.random() * 5);
// boxes[ran3].style.bordercolor="blue";


function getrandom(){
    let ran1=Math.ceil(0+Math.random() * 255);
    let ran2=Math.ceil(0+Math.random() * 255);
    let ran3=Math.ceil(0+Math.random() * 255);
    return `rgb(${ran1},${ran2},${ran3})`
};
Array.from(boxes).forEach(element => {
    element.style.backgroundColor=getrandom()
    element.style.color=getrandom()
});