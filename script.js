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
    image: "/imgs/user-1.png",
    username: "Yves Tanguy",
  },

  {
    commentHeader: "Love it",
    comment: "Lovely people and great service",
    rating: 5,
    image: "/imgs/user-2.png",
    username: "Lady Barrera",
  },
  {
    commentHeader: "Great people",
    comment: "I would like to use their services again",
    rating: 3,
    image: "/imgs/user-3.png",
    username: "Mike Lamadrid",
  },
];

const ratingNumber = (number) => {
  for (let i = 0; i < number; i++) {
    const element = commentRating[i];
    element.classList.add("checked");
  }
};

let testimonialHeader = document.querySelector(
  ".testimonial__comment-section h3"
);
let testimonialParagraph = document.querySelector(
  ".testimonial__comment-section p"
);
let testimonialUser = document.querySelector(".comment__user-comment");

let commentImageSource = document.querySelector(".comment__username-image");

const renderComments = (array) => {
  let index = 0;

  setInterval(function () {
    if (index >= array.length) {
      index = 0;
    }
    const { commentHeader, comment, image, rating, username } = array[index];
    index++;

    commentImageSource.src = image;
    testimonialHeader.innerHTML = commentHeader;
    testimonialParagraph.innerHTML = comment;
    testimonialUser.innerHTML = username;
    ratingNumber(rating);
  }, 4000);
};

renderComments(comments);
