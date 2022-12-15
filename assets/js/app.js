const primaryNavigation = document.getElementById("primary-navigation");
const navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener("click", () => {
  primaryNavigation.classList.toggle("nav-active");
});
