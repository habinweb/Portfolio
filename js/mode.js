const root = document.documentElement;
const modeBtn = document.querySelector(".modeBtn");

function toggleTheme() {
  const darkMode = root.getAttribute("data-theme") === "dark";
  root.setAttribute("data-theme", darkMode ? "light" : "dark");
}

modeBtn.addEventListener("click", toggleTheme);
