///<reference types="../@types/jquery" />
const menuMobile = document.getElementById("menuMobile");
const menu = document.getElementById("menu");
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
let swiper1 = new Swiper(".mySwiper1", {
  effect: "cards",
  grabCursor: true,
  loop: true,
});
menuMobile.addEventListener("click", function () {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menu.classList.add(
      "absolute",
      "top-[100%]",
      "right-0",
      "bg-white",
      "w-full",
      "text-center",
      "py-4"
    );
  } else {
    menu.classList.add("hidden");  
  }
});
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav'); // Replace '.navbar' with your navbar's selector

  if (window.scrollY > 100) {
    navbar.classList.add('bg-white'); // Add a class to change the navbar's style
  } else {
    navbar.classList.remove('bg-white'); // Remove the class when at the top
  }
});
// $("#menuMobile").on('click', function (){
//   $('.menu').toggle(500)
// })
