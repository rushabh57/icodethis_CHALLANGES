document.addEventListener("DOMContentLoaded", function () {
  const pages = document.querySelector(".pages");
  const pageNums = document.querySelector(".pag-nums");
  const prev = document.getElementById("prev");
  const nxt = document.getElementById("nxt");

  const pagesList = [
    { id: 1, title: "Home" },
    { id: 2, title: "Kitchen" },
    { id: 3, title: "Beauty" },
  ];

  const pageContent = [
    {
      id: 1,
      title: "Home Content 1",
      subP: "Lorem ipsum 1",
    },
    { id: 2, title: "Kitchen Content 1", subP: "Lorem ipsum 2" },
    { id: 3, title: "Beauty Content 1", subP: "Lorem ipsum 3" },
  ];

  function createPage(page) {
    return `<div class="page" id='page${page.id}'></div>`;
  }

  function createInnerPageContent(content) {
    return `<div class="content">${content.title} - ${content.subP}</div>`;
  }

  function createPageNumber(page) {
    return `<div class="pageNum" data-id="${page.id}">${page.id}</div>`;
  }

  function createPagination() {
    pagesList.forEach((page) => {
      pages.innerHTML += createPage(page);
      pageNums.innerHTML += createPageNumber(page);
    });

    pageContent.forEach((content) => {
      const pageDiv = document.getElementById(`page${content.id}`);
      if (pageDiv) {
        pageDiv.innerHTML += createInnerPageContent(content);
      } else {
        console.error(`Element with ID 'page${content.id}' not found.`);
      }
    });

    displayPage(pagesList[0].id);
  }

  function displayPage(pageId) {
    const pageElement = document.getElementById(`page${pageId}`);
    if (pageElement) {
      document.querySelectorAll(".page").forEach((page) => {
        page.classList.remove("active");
      });
      pageElement.classList.add("active");
    } else {
      console.error(`Element with ID 'page${pageId}' not found.`);
    }
  }

  function navigatePage(direction) {
    const activePage = document.querySelector(".page.active");
    const activePageId = parseInt(activePage.id.replace("page", ""), 10);
    const newPageId = activePageId + direction;

    if (newPageId >= 1 && newPageId <= pagesList.length) {
      displayPage(newPageId);
    }
  }

  pageNums.addEventListener("click", (e) => {
    if (e.target.classList.contains("pageNum")) {
      const pageId = e.target.getAttribute("data-id");
      displayPage(pageId);
    }
  });

  prev.addEventListener("click", () => navigatePage(-1));
  nxt.addEventListener("click", () => navigatePage(1));

  createPagination();
});
