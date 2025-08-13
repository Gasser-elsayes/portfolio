document.addEventListener("DOMContentLoaded", () => {
  const texts = ["Computer Science Student", "Frontend Developer"];
  const speed = 100;
  const textElements = document.querySelector(".span2");
  let textIndex = 0;
  let characterIndex = 0;

  if (textElements) {
    textElements.textContent = ""; // ابدأ فاضي

    function typeWriter() {
      if (characterIndex < texts[textIndex].length) {
        textElements.textContent += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
      } else {
        setTimeout(eraseText, 1000);
      }
    }

    function eraseText() {
      if (textElements.textContent.length > 0) {
        textElements.textContent = textElements.textContent.slice(0, -1);
        setTimeout(eraseText, 50);
      } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
      }
    }

    // ابدأ التأثير
    typeWriter();
  }

  // Sidebar
  function getSidebar() {
    return document.querySelector(".sidebar");
  }

  window.showSidebar = function () {
    const sidebar = getSidebar();
    if (sidebar) sidebar.style.display = "flex";
  };

  window.hideSidebar = function () {
    const sidebar = getSidebar();
    if (sidebar) sidebar.style.display = "none";
  };
});
