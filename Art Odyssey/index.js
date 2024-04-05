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

document.addEventListener('DOMContentLoaded', function() {
  // Check if the user has already accepted the cookies
  var cookiePreferences = readCookie('cookiePreferences');
  console.log('Cookie Preferences:', cookiePreferences);

  if (!cookiePreferences) {
      // Show the cookie consent popup
      openCookiePreferences();
  } else {
      // User has already accepted the cookies, hide the popup
      hideCookieContainer();
      console.log('Cookie Preferences already accepted');
  }

  // In Ordnung Button
  var acceptButton = document.getElementById('accept_cookie_settings');
  acceptButton.addEventListener('click', function() {
      // Hide the cookie consent container
      hideCookieContainer();
      // Set the cookie to remember the user's choice
      createCookie('cookiePreferences', 'true', 365); // Set cookie to expire in 365 days
      console.log('Accepted Cookie Usage');
  });

  // Function to hide the entire cookie consent container
  function hideCookieContainer() {
      var cookieContainer = document.getElementById('cookie_consent_container');
      cookieContainer.classList.add('cookie_hide');
  }

  // Function to show the cookie consent popup
  function openCookiePreferences() {
      var cookieContainer = document.getElementById('cookie_consent_container');
      cookieContainer.classList.remove('cookie_hide');
  }

  // Function to create a cookie
  function createCookie(c_name, c_value, c_days) {
      var expires;
      if (c_days) {
          var date = new Date();
          date.setTime(date.getTime() + (c_days * 24 * 60 * 60 * 1000));
          expires = "; expires=" + date.toUTCString();
      } else {
          expires = "";
      }
      document.cookie = c_name + "=" + c_value + expires + "; path=/";
  }

  // Function to read a cookie
  function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
  }
});