document.addEventListener("DOMContentLoaded", function () {
  const currentTimeElement = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  const currentDayElement = document.querySelector(
    '[data-testid="currentDay"]'
  );

  function updateTimeAndDay() {
    const now = new Date();
    currentTimeElement.textContent = now.toUTCString().split(" ")[4];
    currentDayElement.textContent = now.toLocaleDateString("en-US", {
      weekday: "long",
    });
  }

  setInterval(updateTimeAndDay, 1000);
  updateTimeAndDay();
});

function toggleMenu(hamburger) {
  hamburger.classList.toggle("toggle");
  document.querySelector(".nav-links ul").classList.toggle("show");
}
