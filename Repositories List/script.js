const addBtn = document.querySelector(".addBtn");
const repoArea = document.getElementById("repoList");
const submit = document.getElementById("sbmit");
const cancle = document.getElementById("cancle");
const fileIcon = `https://www.svgrepo.com/show/532809/file-zipper.svg`;
const popup = document.querySelector(".popup");
const popupInput = document.querySelector(".popup input");

const preRepoList = [
  { id: 1, link: "https://www.google.co.in/" },
  { id: 1, link: "https://www.tatamotors.com/" },
  { id: 1, link: "https://x.com/home?lang=enr" },
];

// const randome3DiGIT = Math.round(Math.random() * 360);
const randome3DiGIT = 350;

addBtn.addEventListener("click", () => {
  popup.style.top = "0%";
  popup.style.opacity = "1";
});
cancle.addEventListener("click", () => {
  popup.style.top = "100%";
  popup.style.opacity = "0";
});
function generateRepo(link) {
  return `
  <li>
    <img class="fileIcon" style="filter: hue-rotate(${randome3DiGIT}deg);" src="${fileIcon}" alt="">
    <a href="${link}" target="_blank"
    class="link">${link}</a>
  </li>
 `;
}

preRepoList.forEach((link) => {
  const repoHTML = generateRepo(link.link);
  repoArea.innerHTML += repoHTML;
});
