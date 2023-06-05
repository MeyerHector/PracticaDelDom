const btn = document.getElementsByClassName("btn")[0];
const prfo = document.getElementsByClassName("prfo")[0];
let colorChange = false;

btn.addEventListener("click", function() {
    if (colorChange === false) {
        prfo.style.color = "#F90";
        colorChange = true;
    } else {
        prfo.style.color = "#808";
        colorChange = false;
    }
});
