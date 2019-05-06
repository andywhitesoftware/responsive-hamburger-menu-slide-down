// Make sure the DOM is loaded before executing JS
document.addEventListener("DOMContentLoaded", function() { 
  let mainMenu = document.getElementById('js-menu');
  let hamburgerIcon = document.getElementById('js-hamburger-icon');

  hamburgerIcon.addEventListener('click', function () {
    
    mainMenu.classList.toggle('toggle-menu');
  });
});