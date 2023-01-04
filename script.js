const humburger = document.querySelector('#botao-menu');
const menuMobile = document.querySelector('#menu-mobile');

humburger.addEventListener("click", () =>{
    humburger.classList.add("active");
    menuMobile.classList.toggle("active");
})

const close = document.querySelector('#close');

close.addEventListener("click", () =>{
    menuMobile.classList.remove("active");
})
