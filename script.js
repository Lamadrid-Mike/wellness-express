let mobileBtn = document.querySelector(".open__mobile--navigation");
let mobileNavbar = document.querySelector(".navigation");
let closeBtnMobile = document.querySelector(".navigation__close--btn");
let htmlBody = document.querySelector("body").children;

//Hamburger mobile menu effect!
let anchorLinks = Array.from(
  document.querySelectorAll(".navigation__overlay--content a")
);

mobileBtn.addEventListener("click", function () {
  mobileNavbar.style.width = "0%";
  anchorLinks.forEach((el) => (el.style.opacity = "1"));

  mobileBtn.classList.toggle("change");

  if (mobileBtn.classList.contains("change")) {
    mobileNavbar.style.width = "100%";
  } else {
    anchorLinks.forEach((el) => (el.style.opacity = "0"));
  }
});

//Lazy loading effect!
const observer = new IntersectionObserver((entries) => {
  entries.forEach((el) => {
    const isIntersecting = el.isIntersecting;
    isIntersecting
      ? el.target.classList.add("opacity-smooth-effect-on")
      : el.target.classList.add("opacity-smooth-effect-off");
  });
});

for (let i = 1; i < htmlBody.length - 1; i++) {
  const element = htmlBody[i];
  observer.observe(element);
  console.log(element);
}
