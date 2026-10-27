// Projeto 1 — Contador de cliques

// Primeiros comandos
console.log("Olá, JavaScript!");
let curso = "MBA USP ESALQ";
console.log("Bem-vindos ao " + curso);
console.log(document.title);

// Elementos da página
const valorEl = document.getElementById("valor");
const mensagemEl = document.getElementById("mensagem");
const btnMais = document.getElementById("btn-mais");
const btnMenos = document.getElementById("btn-menos");
const btnZerar = document.getElementById("btn-zerar");
console.log(valorEl.textContent);

// Estado: quanto vale o contador agora
let contador = 0;

// Desenha o estado na tela
function atualizar() {
    valorEl.textContent = contador;
    if (contador > 0) {
        mensagemEl.textContent = "Está no positivo!";
    } else if (contador < 0) {
        mensagemEl.textContent = "Ficou negativo...";
    } else {
        mensagemEl.textContent = "Clique em um botão para começar";
    }
    valorEl.classList.toggle("positivo", contador > 0);
    valorEl.classList.toggle("negativo", contador < 0);
}

// Eventos dos botões
btnMais.addEventListener("click", function () {
    contador = contador + 1;
    atualizar();
});

btnMenos.addEventListener("click", () => {
    contador--;
    atualizar();
});

btnZerar.addEventListener("click", () => {
    contador = 0;
    atualizar();
});
