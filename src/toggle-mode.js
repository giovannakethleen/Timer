let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => {
  //adicionar e tirar o light
document.documentElement.classList.toggle("light")

  //acessibilidade//
 const mode = darkMode ? "light" : "dark"

event.currentTarget
.querySelector('span').textContent = `${mode} mode ativado!`

//troca toda vez que clicar o botão//
darkMode = !darkMode

})

