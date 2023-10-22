let mobileBtn = document.querySelector(".open__mobile--navigation");
let mobileNavbar = document.querySelector(".navigation");
let closeBtnMobile = document.querySelector(".navigation__close--btn");
let htmlBody = document.querySelector("body");

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

const observer = new IntersectionObserver((entries) => {
  console.log(entries[0]);
});

observer.observe(htmlBody);
