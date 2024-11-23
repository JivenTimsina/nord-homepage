// update greeting
function updateGreeting() {
  const greetingElement = document.getElementById("greeting");
  const hours = new Date().getHours();
  let greeting;

  if (hours < 12) {
    greeting = "Good Morning, Jiven! ☕";
  } else if (hours < 18) {
    greeting = "Good Afternoon, Jiven! 🙌";
  } else {
    greeting = "Good Evening, Jiven! 🌓";
  }

  greetingElement.textContent = greeting;
}

// Update clock and date
function updateClockAndDate() {
  const clockElement = document.getElementById("clock");
  const dateElement = document.getElementById("date");

  const now = new Date();
  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateString = now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' });

  clockElement.textContent = timeString;
  dateElement.textContent = dateString;
}

// Perform search on enter key
const searchInput = document.querySelector("#searchInput");
if (searchInput) {
  searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default action
      const query = this.value.trim();
      if (query) {
        const searchURL = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
        window.open(searchURL, "_blank"); // Open search URL in a new tab
        this.value = "";
      }
    }
  });
}
// Initialize page
function initializePage() {
  updateGreeting();
  updateClockAndDate();
  setInterval(updateClockAndDate, 1000);
}

document.addEventListener("DOMContentLoaded", initializePage);

