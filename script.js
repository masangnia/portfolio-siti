

let menuIcon = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll(".section");
let navLinks = document.querySelectorAll(".header nav a");

// Fungsi untuk menangani pengaktifan kelas 'active' pada tautan menu
function activateMenuLink(id) {
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
  document.querySelector(`.header nav a[href="#${id}"]`).classList.add("active");
}

// Tambahkan event listener untuk setiap tautan menu
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Menghindari default behavior saat mengklik tautan
    let targetId = this.getAttribute("href").slice(1);
    activateMenuLink(targetId);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

// Fungsi untuk menangani event scroll
window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      activateMenuLink(id);
    }
  });
});

// Fungsi untuk menangani event klik pada ikon menu
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
