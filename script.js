const form = document.getElementById("holiday-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Turn date into year-mm-day to match the format
  const [month, day, year] = document.getElementById("date-input").value.split("-");
  const date = `${year}-${month}-${day}`;
  const country = document.getElementById("country-select").value;

  const response = await fetch(`https://caldays.com/api/holidays/${country}`);
  const data = await response.json();

  const holiday = data.holidays.find((h) => h.date === date);

  document.getElementById("result").textContent = holiday
    ? holiday.name
    : "No holiday on this day.";
});