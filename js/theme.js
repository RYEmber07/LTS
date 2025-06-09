let darkMode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkMode = () => {
  document.documentElement.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkMode = () => {
  document.documentElement.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkMode === "active") enableDarkMode();

themeSwitch.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkmode");
  darkMode !== "active" ? enableDarkMode() : disableDarkMode();
});
