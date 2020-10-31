//1. mouseover, over website logo randomizes color
const logo = document.querySelector("header > div > h1");

logo.addEventListener('mouseover', (e) => {
    //multiply by 256 bc of rgb values
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    var randomColor = 'rgb(' + r +',' + g + ',' + b +')'
    //add randomizer to logo
    logo.style.color = randomColor;
});

//2. double click, over first sign me up btn changes p color
const btn1 = document.querySelector('section.content-pick > div:nth-child(1) > div');
const btn1Txt = document.querySelector('section.content-pick > div:nth-child(1) > p');

btn1.addEventListener('dblclick', (e) => {
    btn1Txt.style.backgroundColor = 'skyblue'
});

//3. mouseleave, over second sign me up btn transforms btn size by x1.2
const btn2 = document.querySelector("section.content-pick > div:nth-child(2) > div");

btn2.addEventListener('mouseleave', (e) => {
    btn2.style.transform ="scale(1.2)";
    btn2.style.transition ="all 0.3s";
});

//4 .keydown, changes body color to grey
const bodyColor = document.querySelector('body');

bodyColor.addEventListener('keydown', e => {
    e.target.style.backgroundColor =  "lightgrey";
});

//5. mouseenter, on header img scales it by x1.2
const imgHover = document.querySelector("img")

imgHover.addEventListener("mouseenter", () => {
  imgHover.style.transform ="scale(1.2)";
  imgHover.style.transition = "all 0.3s"
});

imgHover.addEventListener("mouseleave", () => {
    imgHover.style.transform ="scale(1.0)";
    imgHover.style.transition = "all 0.3s"
  });

//6. Load, when bus image loads
const bus = document.querySelector(".intro img");

bus.addEventListener("load", event => {
    bus.style.border = "5px solid teal";
  });

//7. Wheel, color of nav changes when scrolling
const nav = document.querySelector("header");

document.addEventListener("wheel", () => {
    nav.style.backgroundColor = "darkred";
  });

//8. click, when clicking on first middle img it transforms the size
const middleImg = document.querySelector(".img-content")

middleImg.addEventListener("click", () => {
    middleImg.style.transform ="scale(1.2)";
});

//9. Copy, if you copy the paragraph under the header it will turn red
const copyP = document.querySelector(".intro p");

copyP.addEventListener("copy", event => 
    (copyP.style.color = "red")
);


//10. Drag, if you drag "Welcome to the fun bus!" it will console log a message

const title = document.querySelector("h2");

title.addEventListener("drag", () => {
    console.log("Welcome to FUN BUS!")
})

title.addEventListener("dragend", () => {
    return;
})

//Stretch: GASP
