const textarea = document.querySelector('.input-mensagem');
const areaMensagens = document.querySelector('.area-mensagens');
const btnEnviar = document.querySelector('.btn-enviar-mensagem');

class Mensagem{
    constructor(conteudo, horario){
        this.conteudo = conteudo;
        this.horario = horario;
    }
}


textarea.addEventListener('input', function () {
    this.style.height = 'auto'; // Reseta a altura
    this.style.height = (this.scrollHeight) + 'px'; // Ajusta a altura para o conteúdo
    // Move a posição do textarea para cima conforme ele cresce
    this.style.top = `${-this.scrollHeight + 30}px`; // Controla quanto o campo se move para cima
});

btnEnviar.addEventListener('click', () => {
    enviarMensagem();
});

document.addEventListener('keyup', (ev) => {
    if(ev.key == "Enter"){
        enviarMensagem();
    }
})

function enviarMensagem(){
    if(textarea.value !== ""){
        const mensagem = document.createElement('div');
        const texto = document.createElement('p');
        const hora = document.createElement('div');
        const textHora = document.createElement('p');

        mensagem.classList.add('mensagem');
        texto.classList.add('texto-mensagem');
        hora.classList.add('hora');
        textHora.classList.add('paragrafo-hora');

        const horario = new Date();
        const mensagemObj = new Mensagem(textarea.value, `${horario.getHours()}:${horario.getMinutes()}`);
        texto.textContent = mensagemObj.conteudo;
        textarea.value = "";
        textarea.style.height = 'auto';
        textHora.textContent = mensagemObj.horario;

        hora.appendChild(textHora);
        mensagem.appendChild(texto);
        mensagem.appendChild(hora)
        areaMensagens.appendChild(mensagem);
    }
}