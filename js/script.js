const navBtn = document.querySelector('.btn-mobile-nav');
const navElem = document.querySelector('.header');

navBtn.addEventListener("click", function() {
  navElem.classList.toggle("nav-open")
});