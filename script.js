let rodada = 1; // VARIÁVEL PARA CONTROLAR A RODADA ATUAL
let caminhoVitoria = []; // ARRAY PARA ARMAZENAR OS CAMINHOS CORRETOS

// INICIA A PRIMEIRA RODADA DO JOGO
novaRodada();

function novaRodada() {
    document.getElementById("rodada-texto").innerText = "Rodada " + rodada;

    // DEFININDO OS CAMINHOS CORRETOS E ERRADOS DEPENDENDO DA RODADA
    if (rodada === 1 || rodada === 2) {
        // NAS DUAS PRIMEIRAS RODADAS: 2 CAMINHOS CERTOS (GOBLIN) E 1 ERRADO (DRAGÃO)
        let caminhoErrado = Math.floor(Math.random() * 3); // ESCOLHE ALEATORIAMENTE UM CAMINHO ERRADO
        caminhoVitoria = [0, 1, 2].filter(num => num !== caminhoErrado); // OS OUTROS DOIS SÃO CAMINHOS CERTOS
    } else if (rodada === 3) {
        // NA TERCEIRA RODADA: 1 CAMINHO CERTO (GOBLIN) E 2 ERRADOS (DRAGÃO)
        caminhoVitoria = [Math.floor(Math.random() * 3)]; // APENAS UM CAMINHO É CERTO
    } else if (rodada === 4) {
        // QUARTA RODADA: MOSTRA A TELA DE RECOMPENSA FINAL
        setTimeout(() => {
            document.getElementById("tela-recompensa").style.display = "flex";
        }, 500);
        return;
    }
}

// FUNÇÃO PARA ESCOLHER UM CAMINHO NA DUNGEON
function escolherCaminho(caminhoEscolhido) {
    if (caminhoVitoria.includes(caminhoEscolhido)) {
        // SE O JOGADOR ESCOLHER UM CAMINHO CERTO (GOBLIN)
        rodada++; // AVANÇA PARA A PRÓXIMA RODADA

        if (rodada > 3) {
            // SE A RODADA FOR MAIOR QUE 3, MOSTRA A TELA DE RECOMPENSA FINAL
            setTimeout(() => {
                document.getElementById("tela-recompensa").style.display = "flex";
            }, 500);
        } else {
            // CASO CONTRÁRIO, MOSTRA A TELA DE VITÓRIA E CONTINUA O JOGO
            setTimeout(() => {
                document.getElementById("tela-vitoria").style.display = "flex";
            }, 500);
        }
    } else {
        // SE O JOGADOR ESCOLHER UM CAMINHO ERRADO (DRAGÃO), MOSTRA A TELA DE DERROTA
        setTimeout(() => {
            document.getElementById("tela-derrota").style.display = "flex";
        }, 500);
    }
}

// FUNÇÃO PARA CONTINUAR O JOGO APÓS UMA VITÓRIA
function continuarJogo() {
    document.getElementById("tela-vitoria").style.display = "none"; // ESCONDE A TELA DE VITÓRIA
    novaRodada(); // INICIA UMA NOVA RODADA
}

// FUNÇÃO PARA MOSTRAR A TELA FINAL APÓS A RECOMPENSA
function mostrarTelaFinal() {
    document.getElementById("tela-recompensa").style.display = "none"; // ESCONDE A TELA DE RECOMPENSA
    document.getElementById("tela-vitoria-final").style.display = "flex"; // EXIBE A TELA FINAL DO JOGO
}

// FUNÇÃO PARA REINICIAR O JOGO E VOLTAR PARA A PRIMEIRA RODADA
function reiniciarJogo() {
    location.reload(); // RECARREGA A PÁGINA PARA REINICIAR O JOGO
}
