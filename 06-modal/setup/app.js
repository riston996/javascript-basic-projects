// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const btn = document.querySelector(".btn.modal-btn");
const modal = document.querySelector(".modal-overlay");
const close = document.querySelector(".close-btn");

btn.addEventListener("click",function() {
    modal.classList.toggle("open-modal");

});

close.addEventListener("click",function() {
    modal.classList.toggle("open-modal");

});