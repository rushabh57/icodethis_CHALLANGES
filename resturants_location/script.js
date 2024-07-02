const menuBtn = document.getElementById("menu");
const main_component = document.querySelector(".main-component");
const filter_component = document.querySelector(".filter-component");
let isClick = false;
menuBtn.addEventListener("click", () => {
  if (!isClick) {
    filter_component.style.width = "0";
    filter_component.style.display = "none";
    isClick = true;
  } else {
    filter_component.style.width = "150px";
    filter_component.style.display = "block";
    isClick = false;
  }
});
const list = [
  {
    id: 0,
    name: "Pizzara",
    rate: "⭐⭐⭐⭐⭐",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiTi2VTDYsW7_5GsvYwHNBh2HGE2g7JeGltw&s",
    distance: "1.3",
    content: ["food", "veg", "italian"],
  },
  {
    id: 0,
    name: "Nibh",
    rate: "⭐⭐⭐⭐⭐",
    image:
      "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?t=st=1719904401~exp=1719908001~hmac=2048a4f9f854c7cb9d3ae5caedd1bfc70710cf0c33efdb5d048f7b5cc781dfd4&w=996",
    distance: "1",
    content: ["food", "veg", "chinise"],
  },
  {
    id: 0,
    name: "Non Inter",
    rate: "⭐⭐⭐",
    image:
      "https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?t=st=1719903036~exp=1719906636~hmac=7fb04081a2d963084f36caadb9d93b56a1e5ed3a34d2a41b2334d7bc47119975&w=1060",
    distance: "3.3",
    content: ["fast food"],
  },
  {
    id: 0,
    name: "Sira",
    rate: "⭐⭐⭐",
    image:
      "https://img.freepik.com/free-photo/typical-french-restaurant-scene-tables-chairs_1147-445.jpg?w=996&t=st=1719905588~exp=1719906188~hmac=48f9fd5508d52ae619020ff3ce8a8ae75acbef176f1c2acd22caec2cee5bb3fe",
    distance: "4.3",
    content: ["food", "veg", "italian"],
  },
  {
    id: 0,
    name: "Malesuda",
    rate: "⭐⭐",
    image:
      "https://img.freepik.com/free-photo/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling_140725-8504.jpg?t=st=1719905586~exp=1719909186~hmac=f9bc85c3aa33970d27615720500d5c646a4c459c187d027c5b59f6aef744aecd&w=826",
    distance: "3.0",
    content: ["food", "non-veg"],
  },
];

let delay = 50;
function generateCard(card) {
  let animationDelay = (delay += 50);
  return `
<div class='card-wrap' style='animation-delay:${animationDelay}ms'>
<div class="card">
    <div class="img">
        <img src="${card.image}" alt="">
    </div>
    <div class="detail">
        <h6 class="name">${card.name}</h6>
        <div class="stars">${card.rate}</div>
        <ul class="tags">
            ${card.content
              .map((item) => `<li class='${item}'>${item}</li>`)
              .join("")}
        </ul>
    </div>
    <div class='distance'>
   <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M11.39 10.39L7.5 14.277 3.61 10.39a5.5 5.5 0 1 1 7.78 0zM7.5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm12.89 10.89l-3.89 3.888-3.89-3.889a5.5 5.5 0 1 1 7.78 0zM16.5 17.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path> </g> </g></svg>
    <p>${card.distance}KM</p>    
    </div>
</div>

<div class='call box'>
 <svg  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000">
<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
<g id="SVGRepo_iconCarrier">
    <path 
        d="M498.782,120.738c-0.196-4.898-0.435-10.462-2.048-16.179c-8.141-28.851-17.314-49.604-40.141-70.323 c-6.17-5.606-13.278-9.404-19.55-12.757c-2.773-1.485-5.555-2.961-8.218-4.599l-2.099-1.289l-12.177-2.116l-8.926,9.634 l-0.742,0.879c-22.093,28.621-49.596,64.23-66.765,105.353l-3.618,9.421l11.247,12.809c3.226,3.558,5.513,6.093,7.305,7.885 l-0.06,0.051c2.944,3.243,5.129,5.666,7.236,8.073c38.519,44.023,45.756,84.557-31.181,161.485 c-40.422,40.422-72.439,59.255-100.77,59.255c-19.567,0.009-38.861-8.9-60.689-28.006c-2.432-2.15-4.881-4.343-8.141-7.313 l-8.158-7.441l-12.553-11.025l-9.975,3.814l-0.597,0.307C90.479,357.803,50.97,379.076,18.458,409.95l-4.966,4.719l2.091,12.066 l1.289,2.099c1.638,2.662,3.115,5.436,4.599,8.209c3.362,6.272,7.159,13.389,12.766,19.558 c23.612,26.001,56.721,41.131,93.244,42.598l0.521,0c91.46,0,190.993-42.709,259.746-111.454 C456.491,318.993,499.2,219.46,499.2,128v-0.64l-0.068-0.631C498.944,124.74,498.867,122.743,498.782,120.738z">
    </path>
    <g>
        <path 
            d="M409.6,0c-38.4,38.4-76.8,102.4-89.6,140.8c38.4,51.2,102.4,76.8,0,179.2s-128,38.502-179.2,0 C102.4,332.8,38.4,371.302,0,409.6C0,448,51.2,512,128,512c64,0,179.2-25.6,268.8-115.2S512,192,512,128C512,51.2,448,0,409.6,0z M486.4,128c0,80.247-36.343,179.328-107.699,250.701C307.328,450.065,208.247,486.4,128,486.4 c-32-1.28-62.498-14.43-84.284-38.417c-6.81-7.501-10.624-17.254-15.94-25.882l-0.503-2.876 c31.13-29.559,68.804-49.92,106.692-69.171l2.133-0.819l6.75,5.931c1.826,1.664,8.815,8.055,7.979,7.287 c3.328,3.038,5.82,5.274,8.32,7.458c54.298,47.531,103.475,43.691,178.961-31.804c75.477-75.469,79.292-124.629,31.77-178.953 c-2.167-2.466-4.395-4.958-7.398-8.26c0.725,0.811-5.581-6.093-7.219-7.91l-6.033-6.861l0.845-2.193 c15.77-37.743,40.175-70.042,64.947-102.118l4.198-4.531l2.893,0.503c8.627,5.308,18.381,9.114,25.882,15.932 c20.821,18.901,28.885,37.598,36.429,64.316C486.229,114.466,485.734,121.344,486.4,128z">
        </path>
    </g>
</g>
</svg>
<p>call</p>
</div>
<div class='bookMark box'>
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z" stroke="#000000" stroke-width="2" stroke-linejoin="round"></path> </g></svg>
<p>BookMark</p>    
</div>

</div>
`;
}

list.forEach((card) => {
  main_component.innerHTML += generateCard(card);

  const bookMarks = document.querySelectorAll(".bookMark svg");
  bookMarks.forEach((bookMark) => {
    bookMark.addEventListener("click", () => {
      bookMark.classList.toggle("bokked");
    });
  });
});

// const FilterComps =
const srch = document.getElementById("srch");
let svgSrchTran = document.querySelector("#svgSrchTran path");
let svgSrch = document.querySelector("#svgSrchTran");
const searchComp = document.querySelector(".searchComp");

let arrow = "M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8";
let ogSearchPath =
  "M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z";

svgSrch.addEventListener("click", () => {
  if (!isClick) {
    searchComp.style.position = "absolute";
    searchComp.style.width = "calc(100% - 140px)";
    svgSrchTran.setAttribute("d", arrow);
    svgSrch.classList.add("aniTranRev");
    svgSrch.classList.remove("aniTran");
    isClick = true;
  } else {
    searchComp.style.position = "relative";
    searchComp.style.width = "40px";
    svgSrchTran.setAttribute("d", ogSearchPath);
    svgSrch.classList.remove("aniTranRev");
    svgSrch.classList.add("aniTran");
    isClick = false;
  }
});

srch.addEventListener("input", () => {
  const cards = document.querySelectorAll(".card-wrap");
  const searchValue = srch.value.trim().toLowerCase();

  cards.forEach((card) => {
    const cardName = card.querySelector(".name").textContent.toLowerCase();

    if (cardName.includes(searchValue)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});
