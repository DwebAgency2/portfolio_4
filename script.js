document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".navbar a");

  // Toggle menu on icon click
  menuIcon.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });

  // Close menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navbar.classList.remove("active");
    });
  });
});
