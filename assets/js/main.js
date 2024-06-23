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
// faq ========
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


