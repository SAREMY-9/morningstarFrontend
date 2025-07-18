document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");

            // Toggle between ☰ and ✖
            if (navLinks.classList.contains("active")) {
                menuToggle.textContent = "✖";
            } else {
                menuToggle.textContent = "☰";
            }
        });
    } else {
        console.error("Menu toggle or nav links not found.");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const denyBtn = document.getElementById("deny-cookies");

    // Check if user already made a choice
    if (localStorage.getItem("cookieConsent")) {
        banner.style.display = "none";
    }

    // Accept Cookies
    acceptBtn.addEventListener("click", function () {
        localStorage.setItem("cookieConsent", "accepted");
        gtag('consent', 'update', {
            'ad_storage': 'granted',
            'analytics_storage': 'granted'
        });
        banner.style.display = "none";
    });

    // Deny Cookies
    denyBtn.addEventListener("click", function () {
        localStorage.setItem("cookieConsent", "denied");
        gtag('consent', 'update', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied'
        });
        banner.style.display = "none";
    });
});


document.addEventListener("DOMContentLoaded", function () {
  const headingText = " ";
  const subText = "Love, Education & Skill—Building Brighter Futures for Street Children.";

  const headingElement = document.getElementById("animated-heading");
  const subTextElement = document.getElementById("animated-subtext");

  if (!headingElement || !subTextElement) return; // prevent crash if missing

  let i = 0, j = 0;

  function typeHeading() {
    if (i < headingText.length) {
      headingElement.innerHTML += headingText.charAt(i);
      i++;
      setTimeout(typeHeading, 50);
    } else {
      setTimeout(typeSubtext, 300);
    }
  }

  function typeSubtext() {
    if (j < subText.length) {
      subTextElement.innerHTML += subText.charAt(j);
      j++;
      setTimeout(typeSubtext, 30);
    }
  }

  typeHeading();
});


document.addEventListener("DOMContentLoaded", function () {
  // Toggle buttons
  const buttons = document.querySelectorAll(".toggle-btn");
  const tables = document.querySelectorAll(".table-wrapper");

  buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // prevent <a href="#"> from jumping

      // Remove active class
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Hide all tables
      tables.forEach(table => table.classList.add("hidden"));

      // Show selected
      const target = btn.getAttribute("data-target");
      const selected = document.getElementById(target);
      if (selected) selected.classList.remove("hidden");
    });
  });
});


  const counters = document.querySelectorAll('.counter');
  let started = false;

  function animateCounters() {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const speed = 20;
        const increment = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 40);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }

  function checkCountersInView() {
    const section = document.getElementById('impact');
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && !started) {
      animateCounters();
      started = true;
    }
  }

  window.addEventListener('scroll', checkCountersInView);

