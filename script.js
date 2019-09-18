//Lånt kode fra w3school
//Link: https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp

// Sætter slide nummer til 1
var slideIndex = 1;

// Viser det gældende slide
showSlides(slideIndex);

// Næste/forrige kontrol knapper
function plusSlides(n) {
    // Øger slidet's indeks til 1 og viser det slide
    showSlides(slideIndex += n);
}

// "Thumbnail" billede kontrol
function currentSlide(n) {

    // Viser det gældende slide
    showSlides(slideIndex = n);
}

// Skifter korrekt slide
function showSlides(n) {
    let i;

    // Alle slides med class'en "mySlides"
    let slides = document.getElementsByClassName("mySlides");

    // Alle slide punkter i dokumentet
    let dots = document.getElementsByClassName("demo");

    // Tager al billedtekst fra dokumentet
    let captionText = document.getElementById("caption");

    // Hvis slidet's nummer er større end det totale nummer af slides
    if (n > slides.length) {
        slideIndex = 1
    }

    // Hvis slidet's nummer er mindre end det totale nummer af slides
    if (n < 1) {
        slideIndex = slides.length
    }

    // Skjuler hvert 'ikke-vist' slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Erstatter hvert punkt med class'en "active" med ""
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Sætter det gældende slide til at blive vist som et "block" element
    slides[slideIndex - 1].style.display = "block";

    // Sætter det gældende slide's respektive punkt til class'en "active"
    dots[slideIndex - 1].className += " active";

    // Alt attribut tekst kommer på slidet
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
