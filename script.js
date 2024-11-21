// update greeting
function updateGreeting() {
  const greetingElement = document.getElementById("greeting");
  const hours = new Date().getHours();
  let greeting;

  if (hours < 12) {
    greeting = "Good Morning, Jiven!";
  } else if (hours < 18) {
    greeting = "Good Afternoon, Jiven!";
  } else {
    greeting = "Good Evening, Jiven!";
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
document.getElementById("searchInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const query = this.value.trim();
    if (query) {
      const searchURL = `https://www.duckduckgo.com/search?q=${encodeURIComponent(query)}`;
      window.open(searchURL, "_blank");
    }
  }
});

// Initialize page
function initializePage() {
  updateGreeting();
  updateClockAndDate();
  setInterval(updateClockAndDate, 1000);
}

document.addEventListener("DOMContentLoaded", initializePage);

