function toggleMenu() {
  const navLinks = document.getElementById("mobile-nav-link");
  navLinks.classList.toggle("active");
  
}

document.querySelector(".menu-icon").addEventListener("click", toggleMenu);
