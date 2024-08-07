// banner section right text typeing effect ========
const texts = ["NFC Smart Card !", "NFC Corporate Card !","Tap, Share & Connect"];
    let textIndex = 0;
    let charIndex = 0;

    function typeEffect() {
        if (charIndex < texts[textIndex].length) {
            document.getElementById("typing-effect").innerHTML += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 150);
        } else {
            setTimeout(() => {
                document.getElementById("typing-effect").innerHTML = "";
                charIndex = 0;
                textIndex++;
                if (textIndex < texts.length) {
                    setTimeout(typeEffect, 200); // 1-second pause before typing the next text
                } else {
                    // Optional: Restart from the beginning after a delay
                    textIndex = 0;
                    setTimeout(typeEffect, 200); // 1-second pause before restarting
                }
            }, 200); // 1-second pause before clearing the current text
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        typeEffect();
    });

// banner section slider 
    var swiper = new Swiper(".banner-slider", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
//  watch vedio =======
var watchPopUp = document.querySelector(".watch-vedio");
function showWatcVedioPopup() {
  if(watchPopUp.style.display ==="none") {
      watchPopUp.style.display ="block";
  }
}
function hideWatchVedioPopup() {
  if(watchPopUp.style.display ==="block") {
    watchPopUp.style.display ="none";
  }
}


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
// handdle card desing popup ================= !!!!!!!!!!!

// store the frontside conainer
var frontside = document.querySelector(".card-img-container .front-part");
function backPart(){
  frontside.style.transform = "rotateY(90deg)";
}
// store the backside container 
var backside = document.querySelector(".card-img-container .front-part");
function frontPart(){
  backside.style.transform = "rotateY(0deg)";
 }
//  store the card =========
var customCard = document.querySelector(".card-img");
function redCard() {
  frontside.style.backgroundColor = "red";
  customCard.style.backgroundColor = "red";
}
function blackCard() {
  frontside.style.backgroundColor = "black";
  customCard.style.backgroundColor = "black";
}
function whiteCard() {
  frontside.style.backgroundColor = "white";
  customCard.style.backgroundColor = "white";
}
function blueCard() {
  frontside.style.backgroundColor = "blue";
  customCard.style.backgroundColor = "blue";
}
function pinkCard() {
  frontside.style.backgroundColor = "pink";
  customCard.style.backgroundColor = "pink";
}
function oliveCard() {
  frontside.style.backgroundColor = "olive";
  customCard.style.backgroundColor = "olive";
}
function lightblueCard() {
  frontside.style.backgroundColor = "lightblue";
  customCard.style.backgroundColor = "lightblue";
}
var colorPic = document.querySelector(".custom-color");
var customColor = document.querySelector(".custom-color-container-overlay");
colorPic.addEventListener('input', () => {
  const selectedColor = colorPic.value;
  customColor.style.backgroundColor = selectedColor;
  frontside.style.backgroundColor = selectedColor;
  customCard.style.backgroundColor = selectedColor;
})
// store the fontcolor 
var fontColor = document.querySelectorAll(".font-color");
var fontColorPic = document.querySelector(".custom-font-color");
var fontColorOvarlay = document.querySelector(".custom-font-color-container-overlay");
fontColorPic.addEventListener('input', () => {
  const selectedColor = fontColorPic.value;
  fontColorOvarlay.style.backgroundColor = selectedColor;
  fontColor.forEach((element => {
    element.style.color = selectedColor;
  }));
});

// reques demo ===========
    const phoneInputField = document.querySelector("#phone");
    const phoneInput = window.intlTelInput(phoneInputField, {
      preferredCountries: ["us", "gb", "ca", "au"],
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });



