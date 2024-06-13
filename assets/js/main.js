// //  language dropdown menu ======
// var dropdown = document.querySelector(".Dropdwon");
// var dropdonwItem = document.querySelector(".Dropdown-item");
// function handdleDropdown() {
//   dropdown.addEventListener('click', () => {
//     if (dropdonwItem.style.display === "none") {
//       dropdonwItem.style.display = "block";
//     } else {
//       dropdonwItem.style.display = "none";
//     }
//   });
// }
//   handdleDropdown(); 

// // product dropdown menu =====
// var dropdownproduct = document.querySelector(".product-dropdown");
// var dropdonwItemproduct = document.querySelector(".product-dropdown-item");
// function Dropdownproduct() {
//   dropdownproduct.addEventListener('click', () => {
//     if (dropdonwItemproduct.style.display === "none") {
//       dropdonwItemproduct.style.display = "block";
//     } else {
//       dropdonwItemproduct.style.display = "none";
//     }
//   });
// }
//   Dropdownproduct(); 



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
var faqItem = document.getElementById("faq-ans");
 function faqItemHanddle () {
  if(faqItem.style.height === "0px") {
    faqItem.style.height ="100%";
  } else {
    faqItem.style.height ="0px";
  }
 }
