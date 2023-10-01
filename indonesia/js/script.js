"use strict"

const linksWithId = document.querySelectorAll('a[href^="#"]');

linksWithId.forEach(item => item.addEventListener('click',
 function(e) {
	e.preventDefault();
	const id = item.getAttribute('href').slice(1);

	document.getElementById(id).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
}));


const lines = document.querySelector("#lines");
const popup = document.querySelector("#popup");
const body = document.body;

const menu = document.querySelector("#menu-list").cloneNode(1);

lines.addEventListener("click", barHandler);

function barHandler(e){
    e.preventDefault();
    popup.classList.toggle("open");
    lines.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}

function renderPopup(){
    popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link)=>{
    link.addEventListener ("click", closeOnClick);
}); 

function closeOnClick() {
    popup.classList.remove("open");
    lines.classList.remove("active");
    body.classList.remove("noscroll");
}


var swiper = new Swiper(".secrets__photos", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    breakpoints:{
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
        },
        1150: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
        },
    }
  });

  var ppbutton = document.querySelectorAll(".button-play");
  var video = document.querySelectorAll(".video");

for (let i=0; i<ppbutton.length; ++i){
    function playPause() { 
        if (video[i].paused) {
            video[i].play();
            ppbutton[i].classList.toggle('active')
            video[i].setAttribute('controls', '')
            }
        else {
            video[i].pause(); 
        }
    }
    ppbutton[i].addEventListener("click", playPause);
} 
