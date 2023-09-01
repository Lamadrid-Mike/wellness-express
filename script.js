let mobileBtn = document.querySelector(".open__mobile--navigation");
let mobileNavbar = document.querySelector(".navigation");
let closeBtnMobile = document.querySelector(".navigation__close--btn");

mobileBtn.addEventListener("click", function () {
  mobileNavbar.style.width = "0%";
  mobileBtn.classList.toggle("change");
  if (mobileBtn.classList.contains("change")) {
    mobileNavbar.style.width = "100%";
  }
});
