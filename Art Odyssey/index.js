//------------------- NAV BAR FUNCTION

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".nav-item.dropdown");
  const dropdownMenu = dropdown.querySelector(".dropdown-menu");
  const dropdownToggle = document.querySelector(".nav-item.dropdown > a");
  let timeoutId;

  function handleHover() {
    clearTimeout(timeoutId);
    dropdown.classList.add("show");
    dropdownMenu.classList.add("show");
  }

  function removeHover() {
    // Set timeout to remove 'show' class, making the dropdown stay visible for 200ms
    timeoutId = setTimeout(() => {
      dropdown.classList.remove("show");
      dropdownMenu.classList.remove("show");
    }, 200); // Delay before hiding the dropdown
  }

  if (window.innerWidth > 992) {
    dropdown.addEventListener("mouseenter", handleHover);
    dropdown.addEventListener("mouseleave", removeHover);
    dropdownMenu.addEventListener("mouseenter", handleHover);
    dropdownMenu.addEventListener("mouseleave", removeHover);
  }

  dropdownToggle.addEventListener("click", function (event) {
    if (window.innerWidth <= 992) {
      // Prevent default on mobile to allow Bootstrap to handle the dropdown functionality
      event.preventDefault();
    } else {
      // On desktop, navigate directly
      window.location.href = this.getAttribute("href");
    }
  });

  window.addEventListener("resize", function () {
    clearTimeout(timeoutId);
    if (window.innerWidth > 992) {
      // Re-bind hover events if resized back to desktop width
      dropdown.addEventListener("mouseenter", handleHover);
      dropdown.addEventListener("mouseleave", removeHover);
      dropdownMenu.addEventListener("mouseenter", handleHover);
      dropdownMenu.addEventListener("mouseleave", removeHover);
    } else {
      // Remove hover events if resized to mobile width
      dropdown.removeEventListener("mouseenter", handleHover);
      dropdown.removeEventListener("mouseleave", removeHover);
      dropdownMenu.removeEventListener("mouseenter", handleHover);
      dropdownMenu.removeEventListener("mouseleave", removeHover);
      // Reset dropdown state
      dropdown.classList.remove("show");
      dropdownMenu.classList.remove("show");
    }

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
  });

  //POP UP COOKIE FUNCTION//

  document.addEventListener("DOMContentLoaded", function () {
    // Get the link that triggers the cookie consent popup
    var consentLink = document.getElementById("consent_link");

    // Add event listener to the consent link
    consentLink.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior (e.g., following the href)

      // Show the cookie consent popup
      openCookiePreferences();
    });

    // Function to hide the entire cookie consent container
    function hideCookieContainer() {
      var cookieContainer = document.getElementById("cookie_consent_container");
      cookieContainer.classList.add("cookie_hide");
    }

    // Function to show the cookie consent popup
    function openCookiePreferences() {
      var cookieContainer = document.getElementById("cookie_consent_container");
      cookieContainer.classList.remove("cookie_hide");
    }

    // In Ordnung Button
    var acceptButton = document.getElementById("accept_cookie_settings");
    acceptButton.addEventListener("click", function () {
      // Hide the cookie consent popup
      hideCookieContainer();

      // Set the cookie to remember the user's choice
      createCookie("cookiePreferences", "true", 365); // Set cookie to expire in 365 days
      console.log("Accepted Cookie Usage");
    });

    // Function to create a cookie
    function createCookie(c_name, c_value, c_days) {
      // Your createCookie function implementation
    }

    // Function to read a cookie
    function readCookie(name) {
      // Your readCookie function implementation
    }
  });
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
