// Mobile menu

function toggleMenu() {
    const nav = document.getElementById("navLinks");

    nav.classList.toggle("active");
}


// Contact form

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your message has been received.");

    this.reset();

});


// Gallery click effect

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        window.open(this.src, "_blank");

    });

});