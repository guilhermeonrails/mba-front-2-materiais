// console.log precisa abrir e fechar os parenteses
// console.log("guilherme")
// isso é um comentário

let valor = document.getElementById("valor");
let mensagem = document.getElementById("mensagem")
let btnMais = document.getElementById("btn-mais")
let btnMenos = document.getElementById("btn-menos")
let btnZerar = document.getElementById("btn-zerar")
console.log(valor);

// sempre iniciar com o valor zero
let contador = 0

function atualizar() {
    valor.textContent = contador;
    // se valor for maior do que zero +
    if (contador > 0) {
        // tudo que estiver entre as chaves, execute se for
        // true (verdadeiro)
        mensagem.textContent = "Valor positivo!"
    } else if (contador < 0) {
        mensagem.textContent = "Valor negativo!"
    } else {
        mensagem.textContent = "Clique em um botão para começar"
    }

    valor.classList.toggle("positivo", contador > 0)
    valor.classList.toggle("negativo", contador < 0)
    
}

btnMais.addEventListener("click", function () {
    contador = contador + 1;
    // contador++;
    // contador += 1;
    atualizar()
})

btnMenos.addEventListener("click", function () {
    // contador = contador - 1;
    contador--;
    // contador -= 1;
    atualizar()
})

btnZerar.addEventListener("click", () => {
    contador = 0
    atualizar()
})

