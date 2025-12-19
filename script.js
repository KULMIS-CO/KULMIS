// ------------------------------
//  MOBILE MENU TOGGLE
// ------------------------------

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });
  });
}



// ------------------------------
//  BUTTON SCROLLING (Hero buttons)
// ------------------------------

document.addEventListener("DOMContentLoaded", function () {

  const btnOpen = document.getElementById("btn-open-account");
  const btnHow = document.getElementById("btn-see-how");
  const contactSection = document.getElementById("contact");
  const howSection = document.getElementById("how");

  if (btnOpen && contactSection) {
    btnOpen.addEventListener("click", () => {
      contactSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (btnHow && howSection) {
    btnHow.addEventListener("click", () => {
      howSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});



// ------------------------------
//  SCROLL-SPY (Highlights nav links as you scroll)
// ------------------------------

const sections = {
  home: document.getElementById("home"),
  how: document.getElementById("how"),
  benefits: document.getElementById("benefits"),
  microlending: document.getElementById("microlending"),
  business: document.getElementById("business"),
  contact: document.getElementById("contact")
};

const navLinks = {
  home: document.getElementById("nav-home"),
  how: document.getElementById("nav-how"),
  benefits: document.getElementById("nav-benefits"),
  microlending: document.getElementById("nav-microlending"),
  business: document.getElementById("nav-business"),
  contact: document.getElementById("nav-contact")
};

function updateActiveNav() {
  let scrollPos = window.scrollY + 150; // offset for clarity

  for (let key in sections) {
    let section = sections[key];
    if (
      section &&
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      Object.values(navLinks).forEach(link => link.classList.remove("active"));
      if (navLinks[key]) navLinks[key].classList.add("active");
    }
  }
}

window.addEventListener("scroll", updateActiveNav);
// FAQ toggle logic
const faqItems = document.querySelectorAll(".faq-item");
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;

    // Close others
    faqItems.forEach((i) => {
      if (i !== item) i.classList.remove("open");
    });

    // Toggle this one
    item.classList.toggle("open");
  });
});

// SMART FAQ SEARCH
const faqSearch = document.getElementById("faqSearchInput");

faqSearch.addEventListener("input", () => {
    const value = faqSearch.value.toLowerCase().trim();
    let firstMatch = null;

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question").innerText.toLowerCase();
        const answer = item.querySelector(".faq-answer").innerText.toLowerCase();

        // SHOW/HIDE ITEM
        if (question.includes(value) || answer.includes(value)) {
            item.style.display = "block";

            // AUTO-OPEN MATCH
            if (!firstMatch) {
                firstMatch = item;
            }
        } else {
            item.style.display = "none";
        }
    });

    // If user typed something, auto-open the first match
    if (value && firstMatch) {
        faqItems.forEach((i) => i.classList.remove("open"));
        firstMatch.classList.add("open");

        // Smooth scroll to the first match
        firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
    }
});
