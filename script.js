const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const viewCookie = document.querySelector(".screen2 span")

const btnOpen = document.querySelector('#open')
const btnAgain = document.querySelector('#again')

const cookie = [
    'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
    'Se expressarmos gratidão pelo que temos, teremos mais por que expressar gratidão.',
    'Quem cultiva gratidão é capaz de realizar sonhos que parecem inalcançáveis!',
    'Apreciando cada passo, mas já sonhando com as próximas conquistas!',
    'Desejar algo maior pra sua vida não significa que você está insatisfeito com o que tem.',
    'É importante agradecer pelo hoje sem nunca desistir do amanhã!'
]

let randomCookie = Math.round(Math.random() * (cookie.length - 1))

function toggle() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
    viewCookie.classList.toggle('animation')
    randomCookie = Math.round(Math.random() * (cookie.length - 1))
}

function openCookie() {
    setTimeout(function () {
        viewCookie.innerText = cookie[randomCookie]
        toggle()
    }, 1000)
}

function again() {
    toggle()
    btnOpen.focus()
    openCookie()

}

btnOpen.addEventListener('click', openCookie)
btnAgain.addEventListener('click', again)