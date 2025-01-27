function reset() {
    var popupImg = document.getElementsByClassName("popup-image");
    for (var i = 0; i < popupImg.length; i++) {
        popupImg[i].style.visibility = "hidden";
        console.log(i);
    }
}

function openPopupImg(openId) {
    document.getElementById(openId).style.visibility = "visible";
}

function resetText() {
    var text = document.getElementsByClassName("description-text");
    for (var i = 0; i < text.length; i++) {
        text[i].style.display = "none";
        console.log(i);
    }
}
function openText(openId) {
    var text = document.getElementsByClassName("show-text-container");
    for (var i = 0; i < text.length; i++) {
        text[i].style.display = "block";
        console.log(i);
    }
    document.getElementById(openId).style.display = "block";
}
function openAllText() {
    var text = document.getElementsByClassName("show-all-text");
    for (var i = 0; i < text.length; i++) {
        text[i].style.display = "none";
        console.log(i);
    }
    var text = document.getElementsByClassName("description-text");
    for (var i = 0; i < text.length; i++) {
        text[i].style.display = "block";
        console.log(i);
    }
}



//slideshow time
let slideIndex = 0;

// Next/previous controls
function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("CAD-slides");
    let dots = document.getElementsByClassName("slides-thumbnail");
    let captionText = document.getElementById("caption");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
    captionText.innerHTML = dots[slideIndex].alt;
} 

//event listeners
document.addEventListener("DOMContentLoaded", function() {
    showSlides(0); // This will initialize the first slide when the DOM is ready
});