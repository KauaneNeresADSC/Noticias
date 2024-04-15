const body = document.querySelector("body")
const nav = document.querySelector("header .mobile")

const botaoFechar = document.querySelector("header nav button")
const botaoAbrir = document.querySelector("header > button")

console.log(botaoAbrir)

botaoAbrir.addEventListener('click',abrirMenu)

botaoFechar.addEventListener('click',fecharMenu)

function abrirMenu() {
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}

function fecharMenu(){
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")
}