function toggleMenu(element) {
    const submenu = element.nextElementSibling;
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
  }
  
  function loadPage(name) {
    document.getElementById("page-title").textContent = name;
    document.getElementById("page-content").innerHTML = `<p>${name}の画面です（今は仮）</p>`;
  }