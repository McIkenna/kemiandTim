document.querySelectorAll('a').forEach(link => {
    if(link.href === window.location.href){
        link.setAttribute('aria-current', 'page')
    }

})

const toggle = document.querySelector('.toggle');
const toggleIcon = document.querySelector('.toggle i');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownItems = document.querySelectorAll('.dropdown-menu li');

// Toggle the visibility of each dropdown item when the toggle icon is clicked
toggle.onclick = function () {
 dropdownMenu.classList.toggle('open');
const isOpen = dropdownMenu.classList.contains('open');

toggleIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars';

// Toggle visibility of each dropdown item
dropdownItems.forEach(item => {
item.style.display = isOpen ? 'flex' : 'none';
});
}; 
// Close the dropdown menu and remove the 'open' class on any click outside the menu
document.body.addEventListener('click', function (event) {
    if (!dropdownMenu.contains(event.target) && !toggle.contains(event.target)) {
        dropdownMenu.classList.remove('open');
        toggleIcon.classList = 'fa-solid fa-bars';
        dropdownItems.forEach(item => {
            item.style.display = 'none';
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {

            this.classList.toggle("active");
            this.parentElement.classList.toggle("active");

            var panel = this.nextElementSibling;

            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});