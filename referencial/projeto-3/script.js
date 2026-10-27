// Projeto 3 — Tema claro e escuro

// Elementos da página
const botaoTema = document.getElementById("btn-tema");
const corpo = document.body;

// Liga ou desliga o tema escuro
function aplicarTema(escuro) {
    corpo.classList.toggle("escuro", escuro);
    botaoTema.textContent = escuro ? "☀ Modo claro" : "☾ Modo escuro";
    botaoTema.setAttribute("aria-pressed", escuro);
}

// Inverte o tema atual
function alternarTema() {
    const estaEscuro = corpo.classList.contains("escuro");
    aplicarTema(!estaEscuro);
}

botaoTema.addEventListener("click", alternarTema);

// Começa com o tema escolhido no sistema
aplicarTema(window.matchMedia("(prefers-color-scheme: dark)").matches);

// Botões "Ler mais" de todos os cartões
const botoesLerMais = document.querySelectorAll(".ler-mais");
botoesLerMais.forEach(function (btn) {
    btn.addEventListener("click", function () {
        const card = btn.closest(".card");
        const aberto = card.classList.toggle("aberto");
        btn.textContent = aberto ? "Ler menos" : "Ler mais";
    });
});

// Atalho: tecla T alterna o tema
document.addEventListener("keydown", function (evento) {
    if (evento.key === "t") {
        alternarTema();
    }
});
