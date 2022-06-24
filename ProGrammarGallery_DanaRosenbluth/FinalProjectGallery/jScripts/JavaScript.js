var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusPic(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentPic(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("img_gallery");
    var opacityhover = document.getElementsByClassName("defaultMouse");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < opacityhover.length; i++) {
        opacityhover[i].className = opacityhover[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    opacityhover[slideIndex - 1].className += " active";
    captionText.innerHTML = opacityhover[slideIndex - 1].alt;
}