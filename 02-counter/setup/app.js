
const btns = document.querySelectorAll(".btn");
const count = document.getElementById('value');
let y = 0;

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            y-- ;
        } else if (styles.contains("increase")) {
            y++ ;
        } else {
            y = 0;
        }
        if (y > 0) {
            count.style.color = "green";
        } else if (y < 0) {
            count.style.color = "red";
        } else {
            count.style.color = "black";
        }
        count.textContent = y;
    });
});

