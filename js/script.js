const hamb_icon = document.querySelector(".hamb-icon");
const nav_ul = document.querySelector(".nav-div ul");

hamb_icon.addEventListener("click",()=>{
    nav_ul.classList.toggle("active");
})
