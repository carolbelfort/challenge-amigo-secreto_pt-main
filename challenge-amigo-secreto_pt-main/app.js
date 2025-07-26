 //O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const listaDeAmigos = [];

function adicionarAmigo() {
    const campo = document.getElementById("nome-amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    listaDeAmigos.push(nome);
    campo.value = "";
    exibirLista();
}

function exibirLista() {
    const lista = document.getElementById("lista-amigos");
    lista.innerHTML = "";

    for (let i = 0; i < listaDeAmigos.length; i++) {
        const item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }

}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
    
}
