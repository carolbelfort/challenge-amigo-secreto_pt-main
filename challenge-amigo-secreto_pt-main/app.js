 //O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    // Validação
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);

    // Limpa o campo de entrada
    input.value = "";

    // Atualiza a lista na tela
    atualizarLista();
}

// Função para atualizar a lista visível de amigos
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpa a lista atual

    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    // Validação: precisa haver pelo menos um amigo na lista
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indiceSorteado];

    resultado.innerHTML = `<li>🎉 Amigo sorteado: <strong>${nomeSorteado}</strong></li>`;
}
