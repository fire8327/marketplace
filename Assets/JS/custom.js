/* navigation */
/*jshint esnext: true */
const toggler = document.getElementById("toggler");
const mNav = document.getElementById("mobile__nav");
const close = document.getElementById("toggler__expanded");
const overlay = document.getElementById("overlay");
const body = document.getElementsByTagName("body")[0];

toggler.addEventListener("click", () => {
  mNav.classList.remove("translate-x-full");
  overlay.classList.remove("hidden");
  body.classList.add("overflow-hidden");
});

close.addEventListener("click", () => {
  mNav.classList.add("translate-x-full");
  overlay.classList.add("hidden");
  body.classList.remove("overflow-hidden"); 
});

overlay.addEventListener("click", () => {
  mNav.classList.add("translate-x-full");
  overlay.classList.add("hidden"); 
  body.classList.remove("overflow-hidden"); 
});

/* cart */
/*jshint esnext: true */
const toggler2 = document.getElementById("toggler2");
const mNav2 = document.getElementById("mobile__nav2");
const close2 = document.getElementById("toggler__expanded2");

toggler2.addEventListener("click", () => {
  mNav2.classList.remove("translate-x-full");
  overlay.classList.remove("hidden");
  body.classList.add("overflow-hidden");
});

close2.addEventListener("click", () => {
  mNav2.classList.add("translate-x-full");
  overlay.classList.add("hidden");
  body.classList.remove("overflow-hidden"); 
});

overlay.addEventListener("click", () => {
  mNav2.classList.add("translate-x-full");
  overlay.classList.add("hidden"); 
  body.classList.remove("overflow-hidden"); 
});


