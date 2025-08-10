$(document).ready(function () {
    $("#open-menu").click(function (e) {
        e.preventDefault();
        $("#menu").toggleClass("hidden");
    });

    $("#open-nav").click(function (e) {
        e.preventDefault();
        $("#navbar").toggleClass("hidden");
    });

    $("#kol").click(function (e) {
        e.preventDefault();
        $("#navbar").addClass("hidden");
    });

    $("#icon").click(function (e) {
        e.preventDefault();
        $("#navbar").toggleClass("hidden");
    });

    $("#open-md").click(function (e) {
        e.preventDefault();
        $("#ul-md").toggleClass("hidden");
    });

    

    let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}



const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });
});
const name = document.getElementById('name1')

const form = document.getElementById('form')
const error = document.getElementById('error')

form.addEventListener('submit' , (e) => {
  let messages =[] 
  if (name1.value.length <= 3) {
    messages.push ('بیشتر از 3 تا کارکتر')
    
  }
})