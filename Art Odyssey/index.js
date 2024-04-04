// Listen for clicks on the button
backToTopButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls to the top smoothly
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".nav-item.dropdown");
  const dropdownMenu = dropdown.querySelector(".dropdown-menu");

  let timeoutId;

  dropdown.addEventListener("mouseenter", function () {
    clearTimeout(timeoutId); // Prevent immediate hiding on quick hover
    this.classList.add("show");
    dropdownMenu.classList.add("show");
  });

  dropdown.addEventListener("mouseleave", function () {
    // Delay removal of 'show' class to allow for moving to the dropdown
    timeoutId = setTimeout(() => {
      this.classList.remove("show");
      dropdownMenu.classList.remove("show");
    }, 200); // 500 ms delay; adjust as necessary
  });

  dropdownMenu.addEventListener("mouseenter", function () {
    clearTimeout(timeoutId); // Prevent hiding when mouse is over the menu
  });

  dropdownMenu.addEventListener("mouseleave", function () {
    // Hide immediately when leaving the menu
    dropdown.classList.remove("show");
    this.classList.remove("show");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const housesLink = document.querySelector(".nav-item.dropdown > a");

  // Function to handle navigation or dropdown display
  function handleHousesLinkClick(event) {
    // Check if dropdown is already shown
    if (!this.nextElementSibling.classList.contains("show")) {
      // Prevent default if dropdown not shown, and navigate
      event.preventDefault();
      window.location.href = this.getAttribute("href");
    }
    // If dropdown is shown, do nothing and let Bootstrap handle it
  }

  // Attach click event listener to the Houses link
  if (housesLink) {
    housesLink.addEventListener("click", handleHousesLinkClick);
  }

  // Existing code for hover functionality
  const dropdown = document.querySelector(".nav-item.dropdown");
  const dropdownMenu = dropdown.querySelector(".dropdown-menu");
  let timeoutId;
  dropdown.addEventListener("mouseenter", function () {
    clearTimeout(timeoutId);
    this.classList.add("show");
    dropdownMenu.classList.add("show");
  });
  dropdown.addEventListener("mouseleave", function () {
    timeoutId = setTimeout(() => {
      this.classList.remove("show");
      dropdownMenu.classList.remove("show");
    }, 200);
  });
  dropdownMenu.addEventListener("mouseenter", function () {
    clearTimeout(timeoutId);
  });
  dropdownMenu.addEventListener("mouseleave", function () {
    dropdown.classList.remove("show");
    this.classList.remove("show");
  });
});
