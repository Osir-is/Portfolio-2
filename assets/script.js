const navToggleBtn = document.querySelector(".nav-toggle")
const navListLinks = document.querySelectorAll(".navigation__link")

navToggleBtn.addEventListener("click",() =>{
    document.body.classList.toggle("nav-open")
});

navListLinks.forEach(link => {
    link.addEventListener("click",()=>{
        document.body.classList.remove("nav-open")
    })
})
  
 //