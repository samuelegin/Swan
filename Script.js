let opennav = document.querySelector(".bi-list");
let closenav = document.querySelector(".bi-x");
let nav = document.querySelector(".nav-links");

opennav.addEventListener("click",()=>{
  nav.style.display="flex"
  opennav.style.display="none"
})

closenav.addEventListener("click",()=>{
  nav.style.display="none"
  opennav.style.display="flex"
})