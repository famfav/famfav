document.addEventListener("DOMContentLoaded", function() {
  // LETTER-BY-LETTER LOGO ANIMATION
  const logoText = "FamFav";
  const logoContainer = document.getElementById("logoAnim");
  if (logoContainer) {
    [...logoText].forEach((letter) => {
      const span = document.createElement("span");
      span.textContent = letter;
      logoContainer.appendChild(span);
    });
  }

  // HEADER SCROLL EFFECT
  const header = document.getElementById("header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    });
  }
});
