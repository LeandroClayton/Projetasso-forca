const elementos = {
    TelaInicial: document.getElementById('inicial'),
    TelaCadastro: document.getElementById('cadastro'),
    telaJogo: document.getElementById('jogo'),
    telaMensagem: document.querySelector('.mensagem'),
    textoMensagem: document.querySelector('.mensagem . texto'),
    teclado: document.querySelector('.teclado'),
    palavra: document.querySelector('.palavra'),
    dica: document.querySelector('.dica'),
    botoes: {
        facil: document.querySelector('.facil'),
        medio: document.querySelector('.medio'),
        dificil: document.querySelector('.dificil'),
        cadastrar: document.querySelector('.cadastrar'),
        realizarCadastro: document.querySelector('.botao-realizar-cadastro'),
        voltar: document.querySelector('.botao-voltar'),
        reiniciar: document.querySelector('.reiniciar'),
    },
    campos: {
        dificuldade: {
            facil: document.getElementById('facil'),
            medio: document.getElementById('medio'),
            dificil: document.getElementById('dificil'),
        },
        palavra: document.getElementById('palavra'),
        dica: document.getElementById('dica'),
    },
    boneco: [
        document.querySelector('.boneco-cabeca'),
        document.querySelector('.boneco-corpo'),
        document.querySelector('.boneco-braco-esquerdo'),
        document.querySelector('.boneco-braco-direito'),
        document.querySelector('.boneco-perna-esquerda'),
        document.querySelector('.boneco-perna-direita'),
    ],
};

const palavras = {
    facil: [{
            palavra:'série',
            dica: 'Game of Thrones é a melhor...'
        },
        {
            palavra:'ímpar',
            dica: 'Se não é par é...'
        },
    ],
};


function criarTeclado() {
    
}

function mostrarErro() {
    
}

function mostrarMensagem(vitoria) {
    
}

function abrirTelaCadastroPalavra() {
    
}

function voltarInicio() {
    
}

function cadastrarPalavra() {
    
}

function sortearPalavra() {
    
}

function mostrarPalavra() {
    
}

function novoJogo() {
   jogo = {
    dificuldade: undefined,
    palavra: {
        original: undefined,
        semAcentos: undefined,
        tamanho: undefined,
        dica: undefined,
    },
    acertos: undefined,
    jogadas: [],
    chances: 6,
    definirPalavra: function (palavra, dica){
        this.palavra.original = palavra;
        this.palavra.tamanho = palavra.length;
        this.acertos = '';

        this.palavra.semAcentos = this.palavra.original.normalize('NFD').replace(/[\u0300-\u36f]/g, '');
        
    }
   } 
}

function selecionarLetra(Letra) {
    
}

function iniciarJogo(dificuldade) {
    
}

function substituirCaractere(str,indice,novoCaractere) {
    

    const parteAntes = str.substring(0,indice);

    const parteDepois = str.substring(indice + 1);

    const novaString = parteAntes + novoCaractere + parteDepois;

    return novaString;

}


