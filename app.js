var responsive = false;

var header = document.querySelector("header");
var navbar = document.querySelector("nav ul");

window.addEventListener("resize", function () {
  var vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  if (vw <= 991 && !responsive) {
    responsive = true;
    slider();
  } else if (vw >= 992 && responsive) {
    responsive = false;
    slider();
  }
});

let count_slider = 0;
let image_src = ["-image-hero-1.jpg", "-image-hero-2.jpg", "-image-hero-3.jpg"];

let content_text = [
  {
    h2: "Discover innovative ways to decorate",
    p:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    h2: "We are available all across the globe",
    p:
      "With stores all over the world, it' s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    h2: "Manufactured with the best materials",
    p:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

function rightClick() {
  if (count_slider === 2) {
    count_slider = 0;
  } else {
    ++count_slider;
  }
  slider();
}

function leftClick() {
  if (count_slider === 0) {
    count_slider = 2;
  } else {
    --count_slider;
  }
  slider();
}

function slider() {
  if (responsive) {
    document.querySelector(
      ".hero"
    ).style.backgroundImage = `url(images/mobile${image_src[count_slider]})`;
  } else {
    document.querySelector(
      ".hero"
    ).style.backgroundImage = `url(images/desktop${image_src[count_slider]})`;
  }
  document.querySelector(".main-top article section h2").innerHTML = content_text[count_slider].h2;
  document.querySelector(".main-top article section p").innerHTML = content_text[count_slider].p;
}

function handleMenu() {
  document.querySelector(".hamburger").classList.toggle("active");
  header.classList.toggle("bg-white");
  navbar.classList.toggle("d-none");
}