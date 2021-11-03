var currentSlide = 1;
var lastSlide = 4;


// Show slide number
function showSlideNo() {
    const text = `${window.currentSlide} / ${window.lastSlide}`;
    const span = document.getElementById('slideno');
    span.innerHTML = text;
}


// Next slide button
function showNext() {
    if (window.currentSlide < window.lastSlide) {
        // Hide old slide
        let divId = window.currentSlide.toString();
        let div = document.getElementById(divId);
        div.style.display = 'none';

        // Show new slide
        window.currentSlide = window.currentSlide + 1;
        divId = window.currentSlide.toString();
        div = document.getElementById(divId);
        div.style.display = 'block';

        showSlideNo();
    }
}

// Previous slide button
function showPrev() {
    if (window.currentSlide > 1) {
        // Hide old slide
        let divId = window.currentSlide.toString();
        let div = document.getElementById(divId);
        div.style.display = 'none';

        // Show new slide
        window.currentSlide = window.currentSlide - 1;
        divId = window.currentSlide.toString();
        div = document.getElementById(divId);
        div.style.display = 'block';

        showSlideNo();
    }
}


document.addEventListener("DOMContentLoaded", function(){
    const nextLink = document.getElementById('next');
    nextLink.addEventListener('click', () => {showNext()});
    nextLink.style.color = '#023eff';

    const prevLink = document.getElementById('prev');
    prevLink.addEventListener('click', () => {showPrev()});
    prevLink.style.color = '#023eff';

    for (let i = 2; i <= window.lastSlide; i++) {
        let divId = i.toString();
        let div = document.getElementById(divId);
        div.style.display = 'none';
    }

    showSlideNo();
});
