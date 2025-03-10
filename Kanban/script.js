const cardsData = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1600px-Uber_logo_2018.png",
    progress: "HIGH",
    title: "Prepare Structural",
    taskType: ["Development", "Architecture"],
    color: "var(--text_bg_color)",
    date: "27/02/2025",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/e7/Rapido-logo.png?20191127170906",
    progress: "MEDIUM",
    title: "UI Design",
    taskType: ["Design", "Prototype"],
    color: "var(--text_bg_color)",
    date: "20/02/2025",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/800px-Figma-logo.svg.png",
    progress: "LOW",
    title: "Testing",
    taskType: ["QA", "Automation"],
    color: "var(--text_bg_color)",
    date: "12/02/2025",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/242px-Java_programming_language_logo.svg.png",
    progress: "LOW",
    title: "Backend Development",
    taskType: ["QA", "API"],
    color: "var(--text_bg_color)",
    date: "08/02/2025",
  },
];

const cardContainer = document.getElementById("kaban-card--container");

cardsData.forEach((card) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  cardElement.innerHTML = `
  <div class='date-card'>${card.date}</div>
        <div class="card--image">
            <img src="${card.image}" alt="${card.title}">
        </div>
        <div class="card--details">
  <p class="card---progress-level ${card.progress}" style="background: ${
    card.color
  };">
    ${card.progress}
</p>

            <h6 class="card---title">${card.title}</h6>
            <div class="card---task-type">
                ${card.taskType.map((type) => `<p>${type}</p>`).join("")}
            </div>
        </div>
    `;

  cardContainer.appendChild(cardElement);
});

const addCard = document.getElementById("addCard");
