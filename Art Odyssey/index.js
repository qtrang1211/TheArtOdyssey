//-----------------------NAV BAR OLD

/*document.addEventListener("DOMContentLoaded", function () {
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
    }, 500);
  });
  dropdownMenu.addEventListener("mouseenter", function () {
    clearTimeout(timeoutId);
  });
  dropdownMenu.addEventListener("mouseleave", function () {
    dropdown.classList.remove("show");
    this.classList.remove("show");
  });
});*/

//------------------NAV BAR NEW
document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".nav-item.dropdown");
  const dropdownMenu = dropdown.querySelector(".dropdown-menu");
  const housesLink = dropdown.querySelector("a");

  let timeoutId;

  function setupDesktopBehavior() {
    // Show the dropdown on mouse enter
    dropdown.addEventListener("mouseenter", function () {
      clearTimeout(timeoutId);
      this.classList.add("show");
      dropdownMenu.classList.add("show");
    });

    // Hide the dropdown on mouse leave
    dropdown.addEventListener("mouseleave", function () {
      timeoutId = setTimeout(() => {
        dropdown.classList.remove("show");
        dropdownMenu.classList.remove("show");
      }, 200);
    });

    // Direct navigation on click
    housesLink.addEventListener("click", function (event) {
      if (window.innerWidth > 992) {
        window.location.href = this.getAttribute("href");
      }
      // No need to prevent default or stop propagation, as we want the link to work normally
    });
  }

  // Determine whether to apply desktop or mobile behaviors based on the initial window width
  if (window.innerWidth > 992) {
    setupDesktopBehavior();
  } else {
    setupMobileBehavior();
  }

  // Optional: Add a resize listener to handle window resizing across the 992px threshold
  // This is not typically necessary unless you expect users to frequently resize across this breakpoint
  window.addEventListener("resize", function () {
    // Debounce resize events for performance
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      if (window.innerWidth > 992) {
        setupDesktopBehavior();
      } else {
        setupMobileBehavior();
      }
    }, 200);
  });
});

//-----------------------------------------------POP UP COOKIE FUNCTION

document.addEventListener("DOMContentLoaded", function () {
  var consentLink = document.getElementById("consent_link");
  consentLink.addEventListener("click", function (event) {
    event.preventDefault();

    openCookiePreferences();
  });

  function hideCookieContainer() {
    var cookieContainer = document.getElementById("cookie_consent_container");
    cookieContainer.classList.add("cookie_hide");
  }

  function openCookiePreferences() {
    var cookieContainer = document.getElementById("cookie_consent_container");
    cookieContainer.classList.remove("cookie_hide");
  }

  var acceptButton = document.getElementById("accept_cookie_settings");
  acceptButton.addEventListener("click", function () {
    hideCookieContainer();

    createCookie("cookiePreferences", "true", 365);
    console.log("Accepted Cookie Usage");
  });

  function createCookie(c_name, c_value, c_days) {}

  function readCookie(name) {}
});
