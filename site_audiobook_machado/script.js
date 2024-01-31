const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const botaoAvancar = document.getElementById('proximo')
const botaoVoltar = document.getElementById('voltar')

const numeroCapitulos = 10 ;
let taTocando = 0;
let capituloAtual = 1
let nomeCapitulo = document.getElementById('capitulo')


function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill')
    botaoPlayPause.classList.add('bi-pause-circle')

}

function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause-circle')
    botaoPlayPause.classList.add('bi-play-circle-fill')
}

function tocarOuPausar(){
    if(taTocando === 0){
        tocarFaixa();
        taTocando = 1; 
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}

function trocarNomeDaFaixa(){
    nomeCapitulo.innerText = 'Capítulo ' + capituloAtual
}

function proximaFaixa(){
    if (capituloAtual === numeroCapitulos){
        
        capituloAtual = 1 

    } else {
        capituloAtual = capituloAtual + 1
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3"
    tocarFaixa();
    trocarNomeDaFaixa()
    taTocando = 1;
}


function voltarFaixa(){
    if (capituloAtual === 1){
        
        capituloAtual = numeroCapitulos ; 

    } else {
        capituloAtual = capituloAtual - 1
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3"
    tocarFaixa();
    trocarNomeDaFaixa()
    taTocando = 1;
}




botaoPlayPause.addEventListener('click',tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);