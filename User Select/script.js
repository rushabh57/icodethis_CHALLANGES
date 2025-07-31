const addCardBtn = document.querySelector("#addCardBtn");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close");
const saveBtn = document.querySelector(".save");
const popupImageInput = document.querySelector("#imgIn");
const popupNameInput = document.querySelector("#nameIn");
const cardsContainer = document.querySelector(".cards");
const manageUserBtn = document.querySelector("#manageUserBtn");

const backupImg = `https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?w=826`;

const deleteicon = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_iconCarrier">
        <path d="M10 11V17" stroke="#ec4b4b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M14 11V17" stroke="#ec4b4b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M4 7H20" stroke="#ec4b4b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#ec4b4b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#ec4b4b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </g>
</svg>`;

function cardLayout(name, img) {
  const card = document.createElement("div");
  card.classList.add("card");

  const deleteBtn = document.createElement("div");
  deleteBtn.classList.add("deleteUserBtn");
  deleteBtn.innerHTML = deleteicon;
  deleteBtn.style.display = "none"; // Hide by default

  const cardImage = document.createElement("img");
  cardImage.src = img ? backupImg : img; // Fixed ternary condition

  const cardName = document.createElement("p");
  cardName.textContent = name;

  card.appendChild(cardImage);
  card.appendChild(cardName);
  card.appendChild(deleteBtn);
  cardsContainer.appendChild(card);
}

// Show popup when adding a card
addCardBtn.addEventListener("click", () => {
  popup.style.left = "0%";
});

// Close popup
closeBtn.addEventListener("click", () => {
  popup.style.left = "-100%";
});

// Save card and append to container
saveBtn.addEventListener("click", () => {
  if (popupImageInput.value.trim() && popupNameInput.value.trim()) {
    cardLayout(popupNameInput.value.trim(), popupImageInput.value.trim());
    popup.style.left = "-100%";
    popupImageInput.value = "";
    popupNameInput.value = "";
  } else {
    alert("Please enter valid details!");
  }
});

let isClick = false;
manageUserBtn.addEventListener("click", () => {
  isClick = !isClick; // Toggle the state once

  document.querySelectorAll(".deleteUserBtn").forEach((delBtn) => {
    delBtn.style.display = isClick ? "block" : "none";
  });
});

// **Use event delegation to delete dynamically added cards**
cardsContainer.addEventListener("click", (event) => {
  if (event.target.closest(".deleteUserBtn")) {
    event.target.closest(".card").remove();
  }
});
