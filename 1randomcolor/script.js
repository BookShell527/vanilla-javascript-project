const color = document.querySelector("span.color")
const btn = document.querySelector(".btn")
const html = document.querySelector("html")
const mode = document.querySelector(".mode")

// variables needed
let b1 = 255;
let b2 = 255;
let b3 = 255;
let bColor = color.innerHTML;

// get random value
function random() {
    return Math.ceil(Math.random()*200)
}

// change color
btn.addEventListener("click", () => {
    b1 = random();
    b2 = random();
    b3 = random();
    bColor = `rgb(${b1}, ${b2}, ${b3})`
    color.innerHTML = bColor;
    html.style.backgroundColor = bColor;
})

// function to convert rgb to hex
function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

mode.addEventListener("click", () => {
    if (mode.innerHTML === "rgb") {
        mode.innerHTML = "hex";
        color.innerHTML = rgbToHex(b1,b2,b3);
        return;
    } else if (mode.innerHTML === "hex") {
        color.innerHTML = bColor;
        mode.innerHTML = "rgb";
        return;
    }
})
