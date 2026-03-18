/* CARD 3D EFFECT */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("mousemove",(e)=>{

let x = e.offsetX;

let y = e.offsetY;

let centerX = card.offsetWidth/2;

let centerY = card.offsetHeight/2;

let rotateX = -(y-centerY)/18;

let rotateY = (x-centerX)/18;

card.style.transform =
`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0)";

});

});

/* =========================
   SCROLL PROGRESS BAR
========================= */

window.addEventListener("scroll",()=>{

let height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

let scrolled =
(window.scrollY/height)*100;

document.querySelector(".progress")
.style.width = scrolled+"%";

});


/* SCROLL REVEAL */

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

sections.forEach(sec=>{

const top=window.scrollY;

const offset=sec.offsetTop-400;

const height=sec.offsetHeight;

if(top>=offset && top<offset+height){

sec.classList.add("show");

}

});

});


/* NAV ACTIVE */

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

document.querySelectorAll("section").forEach(section=>{

const sectionTop=section.offsetTop-200;

if(scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});

