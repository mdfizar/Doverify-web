// banner section slider ======
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// wthats new slider ==========
var swiper = new Swiper(".whatsNew_slider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    571: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

   
  },

});

// aos ======
AOS.init();
var showHide = document.querySelectorAll(".faq-item")

showHide.forEach((item) => {
  item.addEventListener("click", () => {
    var icon = item.querySelector(".faq-item span i");
    var description = item.querySelector(".faq-description");
    if (description.style.height === "0px") {
     description.style.height = "140px";  
     icon.style.transform = "rotate(-90deg)"; 
    } else {
      description.style.height = "0px";
      icon.style.transform = "rotate(90deg)";
    }
  });
});
// card desing popup ==========
function cardDesignPopup () {
  var cardPopup = document.querySelector(".design-popup");
  if(cardPopup.style.display ==="none") {
    cardPopup.style.display ="block";
  }  
}
function cardDesignPopupClose () {
  var cardPopup = document.querySelector(".design-popup");
  if(cardPopup.style.display ==="block") {
    cardPopup.style.display ="none";
  }  
}



