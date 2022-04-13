function ClickFotos(){
  const tabMenu = document.querySelectorAll(
    ".js-foto-descricao .fotos-gatos img"
  );
  const tabContent = document.querySelectorAll(".js-foto-descricao .item-gato");
  
  tabContent[0].classList.add('ativo')
  
  function clickTab(index){
    tabContent.forEach((itemContent)=>{
      itemContent.classList.remove('ativo')
    })
    tabContent[index].classList.add('ativo')
  }
  
  tabMenu.forEach((item, index) => {
    item.addEventListener("click", ()=>{
      clickTab(index)
    });
  });
  
}

ClickFotos()

function ActiveDarkMode(){
  const imgMode = document.querySelector('.img-dark-light')
  const htmlDoc = document.querySelector('html')
  
  
  function clickImgMode(){
    htmlDoc.classList.toggle('dark-ativo')
  }
  
  imgMode.addEventListener("click", clickImgMode)
}
ActiveDarkMode()



