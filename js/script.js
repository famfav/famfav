// Logo animation
const logoText = "FamFav";
const logoContainer = document.getElementById("logoAnim");

[...logoText].forEach((letter) => {
  const span = document.createElement("span");
  span.textContent = letter;
  logoContainer.appendChild(span);
});

// Header scroll effect
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});

// Multiple modals
const modalBtns = document.querySelectorAll(".modal-btn");
const modals = document.querySelectorAll(".modal");
const closeBtns = document.querySelectorAll(".modal .close");

modalBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const modalId = btn.dataset.modal;
    const modal = document.getElementById(modalId);
    if(modal) modal.style.display = "block";
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  modals.forEach(modal => {
    if (e.target === modal) modal.style.display = "none";
  });
});
