const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
console.log("hey");
const handleClick = () => {
  nav.classList.toggle("active");
};

hamburger.addEventListener("click", handleClick);
