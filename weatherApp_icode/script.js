document.addEventListener("DOMContentLoaded", (event) => {
  // Marcin Malecki's thumbnail hack
  if (navigator.userAgent.includes("Headless")) {
    document.body.style.setProperty("padding-block-end", "0");
    document.body.style.setProperty("margin-block-start", "152px");
    document.body.style.setProperty("min-block-size", "0");
    document.body.style.setProperty("block-size", "calc(100vh - 304px)");
    document.body.style.setProperty("position", "relative");
  }
  const forecastData = [
    { day: "Sunday", deg: 17 },
    { day: "Monday", deg: 22 },
    { day: "Tuesday", deg: 19 },
    { day: "Wednesday", deg: 25 },
    { day: "Thursday", deg: 20 },
    { day: "Friday", deg: 18 },
    { day: "Saturday", deg: 21 },
  ];

  const forecastContainer = document.querySelector(".forecast");

  forecastData.forEach(({ day, deg }) => {
    const forecastCard = document.createElement("div");
    forecastCard.classList.add("forecast-card");

    forecastCard.innerHTML = `
        <div class="data">
            <div class="day">${day}</div>
            <div class="deg">${deg}°C</div>
        </div>
        <img class="icon" src="https://www.svgrepo.com/show/505080/weather.svg" alt="Weather Icon" />
    `;

    forecastContainer.appendChild(forecastCard);
  });
});
