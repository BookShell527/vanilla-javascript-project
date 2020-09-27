const input = document.getElementById("input");
const button = document.getElementById("submit");
const show = document.getElementById("number");

button.addEventListener("click", () => {
    const fibonacci_series = n => {
        if (n === 1) {
            return [0, 1];
        } else {
            let s = fibonacci_series(n - 1);
            s.push(s[s.length - 1] + s[s.length - 2]);
            return s;
        }
    };

    const showedNum = fibonacci_series(input.value);
    show.innerHTML = showedNum[showedNum.length - 1];
})