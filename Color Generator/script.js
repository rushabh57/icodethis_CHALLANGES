document.addEventListener("DOMContentLoaded", (event) => {
  // Marcin Malecki's thumbnail hack
  if (navigator.userAgent.includes("Headless")) {
    document.body.style.setProperty("padding-block-end", "0");
    document.body.style.setProperty("margin-block-start", "152px");
    document.body.style.setProperty("min-block-size", "0");
    document.body.style.setProperty("block-size", "calc(100vh - 304px)");
    document.body.style.setProperty("position", "relative");
  }

  const genBtn = document.getElementById("genBtn");
  const navigationLinks = document.querySelectorAll("nav ul li");
  const HexaContainer = document.getElementById("HexaContainer");
  // Create overlay container
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  const closeImage = "https://www.svgrepo.com/show/521106/close.svg";
  const overlayHeadingImg = document.createElement("img");

  const input_Btn_wrapper = document.createElement("div");
  const inputHexa = document.createElement("input");
  const btnHexa = document.createElement("button");

  navigationLinks.forEach((nLink) => {
    nLink.addEventListener("click", () => {
      document.querySelector(".active")?.classList.remove("active");

      nLink.classList.add("active");
    });
  });
  function customPopup(text) {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerText = `Color ${text} copied to your clipboard!`;

    document.body.appendChild(popup);

    // Remove the popup after 2 seconds
    setTimeout(() => {
      popup.remove();
    }, 2000);
  }

  genBtn.addEventListener("click", () => generatePalette());
  function OverlayContainer(heading) {
    const input_Btn_wrapper = document.createElement("div");
    // Create heading
    const overlayHeading = document.createElement("h2");
    overlayHeading.textContent = heading;

    // Create close button (image)

    overlayHeadingImg.src = closeImage;
    overlayHeadingImg.style.cursor = "pointer"; // Make it look clickable

    // Append elements
    overlay.appendChild(overlayHeadingImg);
    overlay.appendChild(overlayHeading);
    document.body.appendChild(overlay);
  }
  HexaContainer.addEventListener("click", () => {
    OverlayContainer("Hexa Code");

    // Destructure returned elements correctly
  });

  function generatePalette(size = 5) {
    const paletteOne = document.getElementById("palette-one");
    paletteOne.innerHTML = "";
    for (let i = 0; i < size; i++) {
      let color =
        "#" +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0");
      let ChildDiv = document.createElement("div");

      ChildDiv.className = "palette-one-color-child-box";
      ChildDiv.style.background = color;

      let Parentdiv = document.createElement("div");
      Parentdiv.className = "palette-one-color-box";
      let colorBoxText = document.createElement("p");

      // Parentdiv.style.background = "gray";
      colorBoxText.innerText = color;

      Parentdiv.appendChild(ChildDiv);
      Parentdiv.appendChild(colorBoxText);

      paletteOne.appendChild(Parentdiv);
    }
    const Parentdiv = document.querySelectorAll(".palette-one-color-box");
    Parentdiv.forEach((pd) => {
      pd.addEventListener("click", () => {
        const color = pd.querySelector("p").innerText;
        navigator.clipboard.writeText(color).then(() => {
          customPopup(color);
        });
      });
    });
  }
});
