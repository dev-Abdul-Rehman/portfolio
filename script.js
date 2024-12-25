const menuBar = document.getElementById("menu-bar");
const navItems = document.getElementById("navItems");
const navLinks = document.querySelectorAll(".navlinks");
const contactBtn = document.getElementById("contact-btn");
const formData = document.getElementById("formData");

// Toggle the navigation menu on click
menuBar.addEventListener("click", () => {
  navItems.classList.toggle("active");

  if (menuBar.classList.contains("fa-bars")) {
    menuBar.classList.remove("fa-bars");
    menuBar.classList.add("fa-times");
  } else {
    menuBar.classList.remove("fa-times");
    menuBar.classList.add("fa-bars");
  }
});

// controls navlinks to hide menubar
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuBar.classList.add("fa-bars");
    menuBar.classList.remove("fa-times");
    navItems.classList.remove("active"); // Hide the navbar
  });
});

// Select relevant elements
const arrow = document.querySelector(".arrow-bottom-to-home");
const aboutSection = document.getElementById("about"); // Assuming the About section has an id="about"

// Function to show or hide the arrow based on scroll position
window.addEventListener("scroll", () => {
  const aboutSectionTop = aboutSection.getBoundingClientRect().top;

  if (aboutSectionTop < window.innerHeight * 0.8) {
    arrow.style.display = "flex";
  } else {
    arrow.style.display = "none";
  }
});
// Form data handling
contactBtn.addEventListener("click", function () {
  // Get form fields
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Check if all fields are filled
  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  // Submit the form via POST
  const form = document.getElementById("formData");
  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result === "success") {
        alert("Message sent successfully!");
      } else {
        alert("There was an error. Please try again.");
      }
      // Clear form fields
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    })
    .catch((error) => {
      alert("Error sending the message. Please check your connection.");
      console.error(error);
    });
});

// Initialize typeWritter
var typed = new Typed("#typeWritter", {
  strings: ["Frontend Website Developer.", "Web Desginer."],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
});

// Initialize AOS (Animate on Scroll) library for smooth scrolling and animations
AOS.init({
  offset: 250,
  delay: 100,
  once: false,
  mirror: false,
});
