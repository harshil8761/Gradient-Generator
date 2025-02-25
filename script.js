let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
let copyDiv = document.querySelector(".copycode");
let rgb1 = "#004773";
let rgb2 = "#54d542";


const hexaValue = () => {
    let myHexa = "0123456789ABCDEF";
    let colors = "#";
    for(let i =0; i < 6; i++){
        colors = colors + myHexa[Math.floor(Math.random() * 16)];
    }
    return colors;
}

const handleButton = () => {
    rgb1 = hexaValue();
    btn1.innerText = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1},${rgb2})`;
    copyDiv.innerText = `background-image: linear-gradient(to right, ${rgb1},${rgb2})`;
}

const handleButton2 = () => {
    rgb2 = hexaValue();
    btn2.innerText = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1},${rgb2})`;
    copyDiv.innerText = `background-image: linear-gradient(to right, ${rgb1},${rgb2})`;
}

copyDiv.addEventListener("click",() => {
    navigator.clipboard.writeText(copyDiv.innerHTML);
    alert("Your Text His Copy Succesfully");
})

btn1.addEventListener("click",handleButton);
btn2.addEventListener("click",handleButton2);