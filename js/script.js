const contatos = [
    { nome: "Marcela Ellen", telefone: "(81) 12345-6789" , email:"marcela@gmail.com"},
    { nome: "Edenize Souza", telefone: "(81) 98765-4321" , email:"edenize@gmail.com"},
    { nome: "João Pedro Gomes", telefone: "(81) 92175-6456" , email:"JoaoPedro@gmail.com"},
    { nome: "Roberto Dias", telefone: "(81) 97354-6284" , email:"roberto@gmail.com"},
    // Adicione mais contatos conforme necessário
];

// Função para atualizar um contato existente

function renderizarContatos() {
    const listaContatos = document.getElementById("listaContatos");

    listaContatos.innerHTML = ""; // Limpa a lista antes de renderizar

    contatos.forEach((contato) => {
        const li = document.createElement("li");

        // Adiciona o nome
        const nomeParagrafo = document.createElement("p");
        nomeParagrafo.textContent = `${contato.nome}`;
        li.appendChild(nomeParagrafo);

        // Adiciona o número
        const numeroParagrafo = document.createElement("p");
        numeroParagrafo.textContent = `${contato.telefone}`;
        li.appendChild(numeroParagrafo);

        const emailParagrafo = document.createElement("p");
        emailParagrafo.textContent = `${contato.email}`;
        li.appendChild(emailParagrafo);

        listaContatos.appendChild(li);
    });
}

console.log("Chamando renderizarContatos");
renderizarContatos();
