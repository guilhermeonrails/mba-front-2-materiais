# Aula 2 — JavaScript

## Sobre o tema

JavaScript é a linguagem que dá **comportamento** à página. Na aula 1 vimos HTML (estrutura) e CSS (aparência); nesta aula a página passa a reagir ao usuário.

A aula começa pela história da linguagem (quem criou, por que o nome, a diferença para o Java e o padrão ECMAScript), passa pelos primeiros comandos no Console e no `document`, e segue com três projetos curtos que manipulam o **DOM** do zero. O HTML e o CSS dos projetos já vêm prontos, para o foco ficar 100% no JavaScript.

Formato: 3 blocos de 1 hora, cada um com uma parte de slides e uma prática.

## Como subir o projeto

Pré-requisitos: um navegador atual (Chrome, Firefox, Safari ou Edge) e o VS Code. Não precisa instalar nada nem rodar servidor.

1. **Professor:** abra `aula-2-javascript-professor.pptx` (slides com notas: fala, artigos e links). Para projetar ou compartilhar com a turma, use `aula-2-javascript-alunos.pptx`, que é o mesmo deck sem as notas. Dê um duplo clique em `roteiro-professor.html` para o passo a passo dos projetos.
2. **No roteiro:** use `←` `→` para navegar, `M` para o índice, `F` para tela cheia e `+` / `−` para o tamanho do código. Os botões "Projeto 1/2/3" levam direto a cada projeto.
3. **Alunos:** abram no VS Code a pasta `src/projeto-1` (depois `projeto-2` e `projeto-3`). Cada uma já tem `index.html` e `style.css`. Criem o arquivo `script.js` e acompanhem o roteiro.
4. **Para testar:** abram o `index.html` da pasta no navegador (duplo clique) e recarreguem com `F5` a cada alteração. O Console fica em `F12`.
5. **Para conferir:** compare com os projetos prontos em `referencial/projeto-N`.

### Estrutura

```
aula-2-javascript/
├── referencial/        projetos finais completos (index.html, style.css, script.js)
├── src/                onde os alunos codam (index.html e style.css prontos; script.js criado na aula)
└── readme.md
```

## Projetos

### Projeto 1 — Contador de cliques
Um contador com botões de `+ 1`, `− 1` e zerar. O número muda de cor conforme fica positivo, negativo ou zero, e uma mensagem acompanha o valor. Os alunos começam pelos primeiros comandos (`console.log`, variáveis, `document`) e chegam a funções, eventos de clique, `if / else` e `classList`.

### Projeto 2 — Lista de tarefas
Uma lista em que a pessoa adiciona, conclui, remove e limpa tarefas. Os dados ficam em um array de objetos e a tela é redesenhada a partir deles com `createElement` e `appendChild`. Trabalha `forEach`, `filter`, `push`, `splice` e o evento `submit`.

### Projeto 3 — Tema claro e escuro
Um blog com botão para alternar entre tema claro e escuro (sem `localStorage`), cartões com "Ler mais" e atalho de teclado. O tema inicial respeita a preferência do sistema. Trabalha `classList.toggle`, `querySelectorAll`, passagem de funções como valor e `matchMedia`.

## Objetivos de aprendizagem

Ao final da aula, a pessoa deve ser capaz de:

- Contar a origem do JavaScript (Netscape, 1995, Brendan Eich), explicar a mudança de nome e diferenciar JavaScript de Java.
- Explicar o que é o ECMAScript e onde o JavaScript roda hoje.
- Usar o Console do navegador e `console.log` para testar e depurar código.
- Declarar variáveis com `let` e `const` e reconhecer os tipos de dados básicos.
- Escrever funções e ligá-las a eventos com `addEventListener`.
- Encontrar elementos do DOM (`getElementById`, `querySelector`, `querySelectorAll`) e alterar seu conteúdo (`textContent`).
- Criar e inserir elementos novos com `createElement` e `appendChild`.
- Controlar a aparência com `classList`, sem escrever estilos pelo JavaScript.
- Guardar dados em arrays e objetos e atualizar a tela a partir deles.
- Ler uma mensagem de erro do Console e corrigir os erros mais comuns.

---

MBA - USP ESALQ
