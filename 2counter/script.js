const counter = document.querySelector(".counter")
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const decrease = document.querySelector(".decrease");

function check() {
    if (parseInt(counter.innerHTML) > 0) {
        counter.style.color = "green";
    } else if (parseInt(counter.innerHTML) < 0) {
        counter.style.color = "red";
    } else {
        counter.style.color = "black";
    }
}

increase.addEventListener("click", () => {
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
    check()
})

reset.addEventListener("click", () => {
    counter.innerHTML = 0;
    check()
})

decrease.addEventListener("click", () => {
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
    check()
})