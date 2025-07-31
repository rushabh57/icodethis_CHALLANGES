document.addEventListener("DOMContentLoaded", (event) => {
  // Marcin Malecki's thumbnail hack
  if (navigator.userAgent.includes("Headless")) {
    document.body.style.setProperty("padding-block-end", "0");
    document.body.style.setProperty("margin-block-start", "152px");
    document.body.style.setProperty("min-block-size", "0");
    document.body.style.setProperty("block-size", "calc(100vh - 304px)");
    document.body.style.setProperty("position", "relative");
  }
  const body = document.body;
  const N_uploadBtn = document.getElementById("N_uploadBtn");
  const searchInput = document.getElementById("searchID");
  const imgWrapper = document.querySelector(".uploaded_img_wrapper");

  N_uploadBtn.addEventListener("click", () => {
    popup("Upload Image");
  });

  function popup(heading) {
    const popup = document.createElement("div");
    popup.className = "overLay_popup";

    const h1 = document.createElement("h1");
    h1.textContent = heading;
    h1.className = "overLay_popup_h1";

    const ImageUploadContainer = document.createElement("div");
    ImageUploadContainer.className = "img_container_popup";
    ImageUploadContainer.textContent = "Click to Upload";

    const input_img = document.createElement("input");
    input_img.type = "file";
    input_img.style.display = "none";

    let uploadedImage = null;

    ImageUploadContainer.addEventListener("click", () => input_img.click());

    input_img.addEventListener("change", () => {
      const file = input_img.files[0];
      if (file && file.type.startsWith("image/")) {
        uploadedImage = file;
        displayImage(file, ImageUploadContainer);
      }
    });

    const input_caption = document.createElement("input");
    input_caption.className = "img_caption";
    input_caption.placeholder = "Enter caption (max 20 words)";
    input_caption.type = "text";

    const btnGrp = document.createElement("div");
    btnGrp.className = "btngrp_popup";

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Close";
    closeBtn.className = "closeBtn_popup";
    closeBtn.addEventListener("click", () => body.removeChild(popup));

    const SaveBtn = document.createElement("button");
    SaveBtn.textContent = "Save";
    SaveBtn.className = "saveBtn_popup";

    SaveBtn.addEventListener("click", () => {
      if (uploadedImage) {
        const caption = input_caption.value.trim();
        appendImage(uploadedImage, caption);
        body.removeChild(popup);
      } else {
        alert("No image uploaded!");
      }
    });

    btnGrp.appendChild(closeBtn);
    btnGrp.appendChild(SaveBtn);

    popup.appendChild(h1);
    popup.appendChild(ImageUploadContainer);
    popup.appendChild(input_caption);
    popup.appendChild(btnGrp);
    body.appendChild(popup);
  }

  function displayImage(file, container) {
    const reader = new FileReader();
    reader.onload = (e) => {
      container.innerHTML = `<img src="${e.target.result}" alt="Preview" class="preview_popup">`;
    };
    reader.readAsDataURL(file);
  }

  function appendImage(file, caption) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img_con = document.createElement("div");
      img_con.className = "img_card";
      img_con.setAttribute("data-caption", caption.toLowerCase());

      const img = document.createElement("img");
      img.src = e.target.result;
      img.alt = "Uploaded Image";

      const captionElement = document.createElement("p");
      captionElement.className = "img_caption_text";
      captionElement.textContent = caption || "No caption provided";

      img_con.appendChild(img);
      img_con.appendChild(captionElement);

      imgWrapper.appendChild(img_con);
    };
    reader.readAsDataURL(file);
  }

  // Search functionality
  searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();
    const imgCards = document.querySelectorAll(".img_card");

    imgCards.forEach((card) => {
      const caption = card.getAttribute("data-caption") || "";
      card.style.display = caption.includes(searchValue) ? "block" : "none";
    });
  });
});
