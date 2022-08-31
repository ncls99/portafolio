const contextMenu = document.querySelector("#hamburguer")
console.log(contextMenu)
const menu = document.querySelector("#menuDesp")

contextMenu.addEventListener("click", () => {
    menu.classList.toggle("menuHamCon");
})
