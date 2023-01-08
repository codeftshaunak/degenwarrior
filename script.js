const items = document.querySelectorAll(".accordion-item h2");

function toggleAccordion() {
        const itemToggle = this.getAttribute('aria-expanded');

        for (i = 0; i < items.length; i++) {
                items[i].setAttribute('aria-expanded', 'false');
        }

        if (itemToggle == 'false') {
                this.setAttribute('aria-expanded', 'true');
        }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

//responsive navbar
const bars = document.getElementById('bar');
const navbar = document.getElementById('navbar');

bars.onclick = function () {
        navbar.classList.toggle("active__navbar")
}