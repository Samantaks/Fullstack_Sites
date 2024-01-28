const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(" .btn-plataforma .plataformas");

botao.addEventListener("click", () => {
//toggle tira um elemento ou coloca se ele não tiver
    elementoPlataformas.classList.toggle("ativo");

});