// nav button
const navBtn = document.getElementById("nav-btn");
const sidebar = document.getElementById("sidebar");
const lessBtn = document.querySelector(".less-btn");
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
// close button
const closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

// smooth scroll
const link = document.querySelectorAll(".nav-items");
link.forEach((link) => {
  link.addEventListener(click, (e) => {
    e.preventDefault();
    links.classList.remove("show-sidebar");
    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 62;
    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});
// read more
const readBtn = document.querySelector(".read-btn");
const moreInfo = document.querySelector(".more");
readBtn.addEventListener("click", () => {
  moreInfo.classList.add("show-more");
  readBtn.classList.add("hide-btn");
  lessBtn.classList.add("show-less");
});
// show less
lessBtn.addEventListener("click", () => {
  moreInfo.classList.remove("show-more");
  lessBtn.classList.remove("show-less");
  readBtn.classList.remove("hide-btn");
});
// year
const date = new Date();

const year = document.getElementById("date");
year.innerHTML = date.getFullYear();
// button to the top

const mybutton = document.querySelector(".top-btn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
