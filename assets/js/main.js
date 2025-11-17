// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("open");
    mainNav.classList.toggle("open");
  });

  // Close nav when clicking a link on mobile
  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("open");
      mainNav.classList.remove("open");
    });
  });
}

// Reveal on scroll
const revealElems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  revealElems.forEach(el => observer.observe(el));
} else {
  // Fallback if IntersectionObserver is not available
  revealElems.forEach(el => el.classList.add("visible"));
}

// Publication filters
const filterButtons = document.querySelectorAll(".filter-btn");
const pubItems = document.querySelectorAll(".pub-item");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");

    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    pubItems.forEach(item => {
      const type = item.getAttribute("data-type");
      if (filter === "all" || filter === type) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Blur background on scroll
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (scrollY > 80) {
    document.body.classList.add("blur-bg");
  } else {
    document.body.classList.remove("blur-bg");
  }
});
