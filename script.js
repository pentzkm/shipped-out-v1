const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll("#site-nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#signup-form").addEventListener("submit", e => {
  e.preventDefault();
  document.querySelector("#form-message").textContent = "You're on the route. (Demo only — email service not connected yet.)";
});
