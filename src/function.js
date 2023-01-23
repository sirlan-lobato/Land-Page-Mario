const botaoTrailer = document.querySelector(".botao__trailer");
const botaoFecharModal = document.querySelector(".fechar__modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkVideo = video.src;

function alternarModal(){
    modal.classList.toggle("modal__aberto");
}

botaoTrailer.addEventListener('click', ()=>{
    alternarModal();
    video.setAttribute("src", linkVideo)
});

botaoFecharModal.addEventListener('click', ()=>{
    alternarModal();
    video.setAttribute("src", "")
});