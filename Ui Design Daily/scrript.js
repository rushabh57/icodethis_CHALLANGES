let isClick = false;
const menu = document.querySelector(".menuBtn");
const menuLine1 = document.querySelector("  .line:first-of-type");
const menuLine2 = document.querySelector(".line:nth-of-type(2)");
const menuLine3 = document.querySelector("  .line:last-of-type");
const navUL = document.querySelector("nav ul");

menu.addEventListener("click", () => {
  if (!isClick) {
    menuLine1.style.transform = "translate(-0%, -0%) rotate(45deg)";
    menuLine3.style.transform = "translate(-0%, -0%) rotate(-45deg)";
    menuLine3.style.top = "58%";

    menuLine1.style.width = "25%";
    menuLine2.style.width = "50%";
    menuLine3.style.width = "25%";

    navUL.style.right = "0%";
    isClick = true;
  } else {
    isClick = false;
    menuLine1.style.transform = "translate(-50%, -50%) rotate(0deg)";
    menuLine3.style.transform = "translate(-50%, -50%) rotate(-0deg)";
    menuLine3.style.top = "65%";

    menuLine1.style.width = "90%";
    menuLine2.style.width = "90%";
    menuLine3.style.width = "90%";
    navUL.style.right = "-100%";
  }
});

// Array of objects
const cardData = [
  {
    filterTagSrc: "https://www.svgrepo.com/show/313128/diamond.svg",
    userImgSrc:
      "https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/1dd3dbc2-d0ac-43ed-b0b5-399935a4de6a.jpeg",
    userName: "Rushabh",
    buildImg:
      "https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/previews/8c8064a2-adc6-4c17-94f6-a13efac2e197.png",
    userCode: 12,
    userReach: 50,
  },
  {
    filterTagSrc: "https://www.svgrepo.com/show/313128/diamond.svg",
    userImgSrc:
      "https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/1dd3dbc2-d0ac-43ed-b0b5-399935a4de6a.jpeg",
    userName: "Rushabh",
    buildImg:
      "https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/previews/c0941ce9-016d-4133-870c-e649574e8161.png",
    userCode: 12,
    userReach: 50,
  },
  {
    filterTagSrc: "https://www.svgrepo.com/show/313128/diamond.svg",
    userImgSrc:
      "https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/1dd3dbc2-d0ac-43ed-b0b5-399935a4de6a.jpeg",
    userName: "Rushabh",
    buildImg:
      "https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/previews/e1357fce-e9f8-47c4-8937-712895013844.png",
    userCode: 12,
    userReach: 50,
  },
  {
    filterTagSrc: "https://www.svgrepo.com/show/313128/diamond.svg",
    userImgSrc:
      "https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/1dd3dbc2-d0ac-43ed-b0b5-399935a4de6a.jpeg",
    userName: "Rushabh",
    buildImg:
      "https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/previews/3fa6c81f-a7a2-4916-81b7-5cd22305e372.png",
    userCode: 12,
    userReach: 50,
  },
  {
    filterTagSrc: "https://www.svgrepo.com/show/313128/diamond.svg",
    userImgSrc:
      "https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/1dd3dbc2-d0ac-43ed-b0b5-399935a4de6a.jpeg",
    userName: "Rushabh",
    buildImg:
      "https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/previews/7ad2e450-66cc-43d4-ad1b-e80b3b6aec57.png",
    userCode: 12,
    userReach: 50,
  },
  // Add more objects as needed
];

// Function to generate card HTML
function generateCardHTML(card) {
  return `
                <div class="card">
                    <div class="filterTag gold">
                        <img src="${card.filterTagSrc}" alt="">
                    </div>
                    <div class="placeHolder">
                        <img src='${card.buildImg}' alt='build of ${card.userName}' /></div>
                    <div class="userDetails">
                        <div>
                            <img class="userImg"
                                src="${card.userImgSrc}"
                                alt="" />
                            <p class="userName">by <strong class="user">${card.userName}</strong></p>
                        </div>
                        <div>
                            <div class="userCode">
                                <img src='https://www.svgrepo.com/show/525814/code.svg' />
                                <p>${card.userCode}</p>
                                
                                </div>
                                <div class="userReach">
                                    <img src='https://www.svgrepo.com/show/525402/like.svg' />
                                <p>${card.userReach}</p>
                                </div>
                        </div>
                    </div>
                </div>
            `;
}

// Get the container
const cardContainer = document.getElementById("card-container");

// Map over the array and generate the cards
cardData.forEach((card) => {
  cardContainer.innerHTML += generateCardHTML(card);
});
