const number = document.getElementById("number");
const difficulty = document.querySelector(".difficulty")
const generate = document.querySelector(".generate")
const error = document.querySelector(".error")
const password = document.querySelector(".password")

const alphabet = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z'];
const num = ["1","2","3","4","5","6","7","8","9","0"];
const char = [',', '.', '/', '\'', '"', ';', ':', ']', '[', '}', '{', '\\', '|', '+', '=', '-', '_', ')', '(', '*', '&', '^', '%', '$', '#', '@', '!', '~', '`'];

let passwd = "";

generate.addEventListener("click", () => {
    if (!number.value || !difficulty.value) {
        error.innerHTML = "Number or difficulty is empty";
    } else if (difficulty.value === "easy") {
        for (let i = 0; i < parseInt(number.value); i++) {
            let rand = Math.floor(Math.random() * alphabet.length)
            passwd += alphabet[rand]
        }
    } else if (difficulty.value === "medium") {
        for (let i = 0; i < parseInt(number.value); i++) {
            const choose = Math.ceil(Math.random() * 2);
            if (choose ===  1) {
                let rand = Math.floor(Math.random() * alphabet.length);
                passwd += alphabet[rand];
            } else {
                let rand = Math.floor(Math.random() * num.length);
                passwd += num[rand];
            }
        }
    } else {
        for (let i = 0; i < parseInt(number.value); i++) {
            const choose = Math.ceil(Math.random() * 3);
            if (choose ===  1) {
                let rand = Math.floor(Math.random() * alphabet.length);
                passwd += alphabet[rand];
            } else if (choose === 2) {
                let rand = Math.floor(Math.random() * num.length);
                passwd += num[rand];
            } else {
                let rand = Math.floor(Math.random() * char.length);
                passwd += char[rand];
            }
        }
    }
    password.value = passwd;
    passwd = "";
})