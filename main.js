const listaMenus = document.getElementsByClassName("hideMenu") 
console.log(listaMenus)
const contextMenu = document.querySelector("#hamburguer")
console.log(contextMenu)
const menu = document.querySelector("#menuDesp")

function showMenu() {
    menu.classList.toggle("menuHamCon");
}

contextMenu.addEventListener("click", showMenu )

for (let i in listaMenus){
    listaMenus[i].addEventListener("click", showMenu)
}