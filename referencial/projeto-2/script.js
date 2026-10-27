// Projeto 2 — Lista de tarefas

// Elementos da página
const form = document.getElementById("form");
const input = document.getElementById("nova-tarefa");
const lista = document.getElementById("lista");
const btnLimpar = document.getElementById("limpar");

// Dados: cada tarefa é um objeto
let tarefas = [
    { texto: "Estudar JavaScript", feita: false },
    { texto: "Tomar um café", feita: true }
];

// Desenha a lista a partir dos dados
function renderizar() {
    lista.innerHTML = "";

    tarefas.forEach(function (tarefa, indice) {
        const item = document.createElement("li");
        item.textContent = tarefa.texto;
        item.classList.toggle("feita", tarefa.feita);

        item.addEventListener("click", function () {
            tarefa.feita = !tarefa.feita;
            renderizar();
        });

        const btnRemover = document.createElement("button");
        btnRemover.textContent = "×";
        btnRemover.className = "remover";
        btnRemover.addEventListener("click", function (evento) {
            evento.stopPropagation();
            tarefas.splice(indice, 1);
            renderizar();
        });
        item.appendChild(btnRemover);

        lista.appendChild(item);
    });
}

// Adicionar uma tarefa nova
form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const texto = input.value.trim();
    if (texto === "") return;

    tarefas.push({ texto: texto, feita: false });
    input.value = "";
    input.focus();
    renderizar();
});

// Remover as tarefas concluídas
btnLimpar.addEventListener("click", function () {
    tarefas = tarefas.filter(function (t) { return !t.feita; });
    renderizar();
});

renderizar();
