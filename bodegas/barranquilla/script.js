$(document).ready(function() {
    initOwlCarousel("#owlCarousel1", 5000);
    initOwlCarousel("#owlCarousel2", 3000);
});

function initOwlCarousel(selector, timeout) {
    $(selector).owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: timeout,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
}