function ClickFotos() {
  const tabMenu = document.querySelectorAll(
    ".js-foto-descricao .fotos-gatos img"
  );
  const tabContent = document.querySelectorAll(".js-foto-descricao .item-gato");

  tabContent[0].classList.add("ativo");

  function clickTab(index) {
    tabContent.forEach((itemContent) => {
      itemContent.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo");
  }

  tabMenu.forEach((item, index) => {
    item.addEventListener("click", () => {
      clickTab(index);
    });
  });
}

ClickFotos();

function ActiveDarkMode() {
  const imgMode = document.querySelectorAll(".img-dark-light");
  const htmlDoc = document.querySelector("html");

  function clickImgMode() {
    htmlDoc.classList.toggle("dark-ativo");

    imgMode.forEach((item) => {
      if (item.classList.contains("ativo")) {
        item.classList.remove("ativo");
      } else {
        item.classList.add("ativo");
      }
    });
  }

  imgMode.forEach((item) => {
    item.addEventListener("click", () => {
      clickImgMode();
    });
  });
}
ActiveDarkMode();

function IncreaseText() {
  const textMode = document.querySelectorAll(".img-text");
  const bodyDoc = document.querySelector("body");

  function clickTextMode() {
    bodyDoc.classList.toggle("letra-maior");

    textMode.forEach((item) => {
      if (item.classList.contains("ativo")) {
        item.classList.remove("ativo");
      } else {
        item.classList.add("ativo");
      }
    });
  }

  textMode.forEach((item) => {
    item.addEventListener("click", () => {
      clickTextMode();
    });
  });
}
IncreaseText();

function OpenFaq() {
  const titleFaq = document.querySelectorAll(".js-itens-faq dt");
  titleFaq[0].nextElementSibling.classList.add("ativo");
  titleFaq[0].classList.add("open");

  function activeTextFaq() {
    this.nextElementSibling.classList.toggle("ativo");
    this.classList.toggle("open");
  }

  titleFaq.forEach((item) => {
    item.addEventListener("click", activeTextFaq);
  });
}
OpenFaq();
