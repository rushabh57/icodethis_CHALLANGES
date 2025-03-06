document.addEventListener("DOMContentLoaded", (event) => {
  // Marcin Malecki's thumbnail hack
  if (navigator.userAgent.includes("Headless")) {
    document.body.style.setProperty("padding-block-end", "0");
    document.body.style.setProperty("margin-block-start", "152px");
    document.body.style.setProperty("min-block-size", "0");
    document.body.style.setProperty("block-size", "calc(100vh - 304px)");
    document.body.style.setProperty("position", "relative");
  }

  document.addEventListener("DOMContentLoaded", () => {
    const player = new Plyr("#player");
  });

  let flag = false;
  const menubtn = document
    .querySelector(".menuBtn")
    .addEventListener("click", () => {
      if (!flag) {
        document.querySelector(".sidebar").style.display = "block";
        flag = true;
      } else {
        document.querySelector(".sidebar").style.display = "none";
        flag = false;
      }
    });
});
