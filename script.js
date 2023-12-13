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
}

//Comments slideshow
let commentSection = document.querySelector(".testimonial__comment-section");
let commentRating = document.querySelector(
  ".testimonial__comment-ratings"
).children;

const comments = [
  {
    commentHeader: "Great service",
    comment: "Great support such as time server. highly recommended",
    rating: 4,
    image: "url",
    username: "Yves Tanguy",
  },

  {
    commentHeader: "Love it",
    comment: "Lovely people and great service",
    rating: 5,
    image: "url",
    username: "Lady Barrera",
  },
];

const ratingNumber = (number) => {
  for (let i = 0; i < number; i++) {
    const element = commentRating[i];
    element.classList.add("checked");
  }
};

const renderComments = (array) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    const { commentHeader, comment, img, rating, username } = element;

    const html = `
  <div class="testimonial__comment-section">
    <h3>${commentHeader}</h3>
    <p>${comment}</p>
      <div class="testimonial__comment-ratings">
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
      </div>
    <div src="" alt="" class="comment__user-img"></div>
  <p class="comment__user-comment">${username}</p>
 </div>
`;

    commentSection.insertAdjacentHTML("afterend", html);
  }
};

renderComments(comments);
