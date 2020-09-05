const color = document.querySelector("span.color")
const btn = document.querySelector(".btn")
const html = document.querySelector("html")
const mode = document.querySelector(".mode")

// get random value
function random() {
    return Math.ceil(Math.random()*200)
}

// change color
btn.addEventListener("click", e => {
    const rgb = `rgb(${random()}, ${random()}, ${random()})`
    color.innerHTML = rgb;
    html.style.backgroundColor = rgb;
})

// function to convert rgb to hex
function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

