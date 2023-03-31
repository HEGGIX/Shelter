const burger =  document.querySelector(".header-burger");
const menu = document.querySelector(".nav-conatiner");
const closeItem = document.querySelector(".burger-close");
const body = document.querySelector(".body");
const opacityBurger = document.querySelector(".opacity");

function showBurger(){
    burger.addEventListener("click",() => {
       menu.classList.add("nav-conatiner_active");
       burger.classList.add("header-burger_unactive");
       body.classList.add("body_active");
       opacityBurger.classList.add("opacity_active");

    })
    closeItem.addEventListener("click",() => {
        menu.classList.remove("nav-conatiner_active");
        burger.classList.remove("header-burger_unactive");
        body.classList.remove("body_active");
        opacityBurger.classList.remove("opacity_active");
    })
}
showBurger()