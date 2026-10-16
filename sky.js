
/* ==========================
   SKYVISTA - INTERACTIONS
========================== */

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.textContent = isOpen ? "✕" : "☰";
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

// Gallery category filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryCards = document.querySelectorAll(".gallery-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Update the active filter button
    filterButtons.forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    const selectedCategory = button.dataset.filter;

    // Show matching cards
    galleryCards.forEach((card) => {
      const matches =
        selectedCategory === "all" ||
        card.dataset.category === selectedCategory;

      card.classList.toggle("hidden", !matches);
    });
  });
});

// Automatically update the footer year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Log a message when the page loads
console.log("SkyVista website loaded successfully!");
