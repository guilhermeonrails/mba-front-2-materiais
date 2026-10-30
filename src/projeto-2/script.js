// elementos da página
const form = document.getElementById("form")
const input = document.getElementById("nova-tarefa")
const lista = document.getElementById("lista")
const btnLimpar = document.getElementById("limpar")

let tarefas = [
    {texto: "Estudar JavaScript", feita: false}, 
    {texto: "Tomar um suco de laranja", feita: true}, 
    {texto: "Viajar para Australia", feita: false}, 
]

console.log(lista.innerHTML)

function renderizar() {
    lista.innerHTML = ""

    tarefas.forEach(function (tarefa, indice) {
        const item = document.createElement("li")
        item.textContent = tarefa.texto
        item.classList.toggle("feita", tarefa.feita)

        item.addEventListener("click", () => {
            tarefa.feita = !tarefa.feita
            renderizar()
        })

        const btnRemover = document.createElement("button")
        btnRemover.textContent = "x"
        btnRemover.className = "remover"
        btnRemover.addEventListener("click", function() {
            tarefas.splice(indice, 1)
            renderizar()
        })

        item.appendChild(btnRemover)

        lista.appendChild(item)
    })
}

form.addEventListener("submit", function (evento) {
    evento.preventDefault()
    const textoDigitadoNoInput = input.value.trim()
    tarefas.push({texto: textoDigitadoNoInput, feita: false})
    renderizar()
})

renderizar()