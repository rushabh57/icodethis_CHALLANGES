let isClick = false;

const persons_container = document.querySelector("#persons .wrapper");
const settingBtn = document.getElementById("settingBtn");

const nav_Person = document.querySelector("nav .person");
const opSide = document.getElementById("op-side");
const ourSide = document.getElementById("our-side");
const msgInput = document.getElementById("msgInput");
const sendBtn = document.getElementById("sendBtn");

const persons_list = [
  {
    id: 0,
    name: "Elnora",
    profile:
      "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1719987925~exp=1719991525~hmac=4443f9aa58f50d202ce9ce03dadd60e2e616cc12eb2927183654bab89395107b&w=996",
  },
  {
    id: 1,
    name: "Lella",
    profile:
      "https://img.freepik.com/free-photo/close-up-excited-person-portrait_23-2151186651.jpg?t=st=1719989048~exp=1719992648~hmac=47147f796e9ff9a9ed60c5ebb7f682f72a525f0d18d88a5862e42ad435015866&w=360",
  },
  {
    id: 2,
    name: "Lucinda",
    profile:
      "https://img.freepik.com/free-photo/close-up-excited-person-portrait_23-2151186597.jpg?t=st=1719989105~exp=1719992705~hmac=1817b317c02d56abfc2b293088705b697bc109906f0157c1581132d9dbf21ebb&w=360",
  },
];
function generatePersons(person) {
  return `
      <div class="p-card">
                    <img src="${person.profile}" alt="${person.name}">
                    <p>${person.name}</p>
                </div>
    `;
}
const noPageText = document.querySelector(".no-page-text");

persons_list.forEach((person) => {
  persons_container.innerHTML += generatePersons(person);
});
settingBtn.addEventListener("click", () => {
  if (!isClick) {
    persons_container.parentElement.style.right = "0%";
    isClick = true;
  } else {
    persons_container.parentElement.style.right = "-100%";
    isClick = false;
  }

  const updatedpersons = document.querySelectorAll(".p-card");
  updatedpersons.forEach((person) => {
    noPageText.style.display = "none";
    sendBtn.classList.remove("disable");

    person.addEventListener("click", () => {
      nav_Person.innerHTML = `
             <img src="${person.querySelector("img").src}" alt="">
                <div class="name">
                    <h2>${person.querySelector("p").innerHTML}</h2>
                    <p>We Tipically reply in a few minutes</p>
                </div>
            `;
      opSide.innerHTML = `
              <img src="${person.querySelector("img").src}" alt="">
                    <p class="msg">
                    Hi! there! <br/>
                    Looking to get started? i can help answer to you questions!</p>
            `;
    });
  });
});
const agree = document.getElementById("agree");
agree.addEventListener("click", () => {
  agree.parentNode.style.display = "none";
});
sendBtn.addEventListener("click", (person) => {
  if (msgInput.value !== "") {
    const newMsg = document.createElement("div");
    newMsg.classList.add("message-container");

    newMsg.innerHTML = `
        <img src="https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/1dd3dbc2-d0ac-43ed-b0b5-399935a4de6a.jpeg" alt="">
        <p class="msg">${msgInput.value}</p>
      `;

    ourSide.appendChild(newMsg);
    msgInput.value = "";
  } else {
    sendBtn.classList.add("disable");
  }
});
