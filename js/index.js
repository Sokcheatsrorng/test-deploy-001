// index.js
import { footerComponent } from "./component/footer.js";
import { navbarComponent } from "./component/navbar.js";

document.addEventListener("DOMContentLoaded", () => {
  // Inject navbar
  let navbar = document.querySelector("#navbar");
  if (navbar) {
    navbar.innerHTML = navbarComponent();
  } else {
    console.error("Element with ID 'navbar' not found.");
    return;
  }

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", toggleMobileMenu);
    mobileMenuButton.addEventListener("touchstart", toggleMobileMenu);
  }

  // Search button
  const searchButton = document.getElementById("search-button");
  if (searchButton) {
    searchButton.addEventListener("click", function (event) {
      event.stopPropagation();
      const searchContainer = document.getElementById("search-container");
      const searchInput = document.getElementById("search-input");
      if (searchContainer && searchInput) {
        searchContainer.style.width = window.innerWidth < 640 ? "80%" : "60%";
        setTimeout(() => {
          searchInput.classList.remove("opacity-0");
          searchInput.focus();
        }, 150);
        const mobileMenu = document.getElementById("mobile-menu");
        if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden");
          mobileMenu.style.display = "none";
        }
      }
    });
  }

  // Search close
  const searchClose = document.getElementById("search-close");
  if (searchClose) {
    searchClose.addEventListener("click", closeSearch);
  }

  // Outside click/touch
  document.addEventListener("click", handleOutsideClick);
  document.addEventListener("touchend", handleOutsideClick);

  // Escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeSearch();
    }
  });

  // Search input
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        console.log("Searching for:", this.value); // Replace with real search logic
        closeSearch();
      }
    });
  }

  // Resize handler
  window.addEventListener("resize", function () {
    const searchContainer = document.getElementById("search-container");
    if (
      searchContainer &&
      searchContainer.style.width !== "0px" &&
      searchContainer.style.width !== ""
    ) {
      searchContainer.style.width = window.innerWidth < 640 ? "80%" : "60%";
    }
  });

  // AOS initialization
  AOS.init();
});

function toggleMobileMenu(event) {
  event.stopPropagation();
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu) {
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
      mobileMenu.style.display = "block";
    } else {
      mobileMenu.classList.add("hidden");
      mobileMenu.style.display = "none";
    }
    // Close search if open
    const searchContainer = document.getElementById("search-container");
    if (
      searchContainer &&
      searchContainer.style.width !== "0px" &&
      searchContainer.style.width !== ""
    ) {
      closeSearch();
    }
  }
}

function closeSearch() {
  const searchContainer = document.getElementById("search-container");
  const searchInput = document.getElementById("search-input");
  if (searchContainer && searchInput) {
    searchInput.classList.add("opacity-0");
    setTimeout(() => {
      searchContainer.style.width = "0";
      searchInput.value = "";
    }, 100);
  }
}

function handleOutsideClick(event) {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const searchContainer = document.getElementById("search-container");
  const searchButton = document.getElementById("search-button");

  if (
    mobileMenuButton &&
    mobileMenu &&
    !mobileMenuButton.contains(event.target) &&
    !mobileMenu.contains(event.target) &&
    !mobileMenu.classList.contains("hidden")
  ) {
    mobileMenu.classList.add("hidden");
    mobileMenu.style.display = "none";
  }

  if (
    searchContainer &&
    searchButton &&
    !searchContainer.contains(event.target) &&
    !searchButton.contains(event.target) &&
    searchContainer.style.width !== "0px" &&
    searchContainer.style.width !== ""
  ) {
    closeSearch();
  }
}
