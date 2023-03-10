const navBtn = document.querySelector('.btn-mobile-nav');
const navElem = document.querySelector('.header');

console.log(navBtn)
console.log(navElem)

navBtn.addEventListener("click", function() {
  navElem.classList.toggle("nav-open")
});