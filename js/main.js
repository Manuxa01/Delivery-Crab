function toggle_Modal()
{
    modal.classList.toggle("active");
}

const cart_button = document.querySelector("#cart-button");
const modal = document.querySelector('.modal');
const close = document.querySelector(".close");

cart_button.addEventListener("click", toggle_Modal);
close.addEventListener("click", toggle_Modal);

new WOW().init();