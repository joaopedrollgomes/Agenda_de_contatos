class Contato {
    constructor(nome, numero, email) {
        this.nome = nome;
        this.numero = numero;
        this.email = email;
    }
}

const contatos = [];

function addContato(nome, numero, email) {
    const contato = new Contato(nome, numero, email);
    contatos.push(contato);
    listaAtualizada();
}

// Função para atualizar a lista de contatos
function listaAtualizada() {
    const listaContatos = document.getElementById('listaContatos');
    listaContatos.innerHTML = '';

    contatos.forEach((contato, index) => {
        const itemLista = document.createElement('li');
        itemLista.className = 'style-contato';

        itemLista.innerHTML = `
        <span class = "nome">${contato.nome}</span> <span class = "numero">${contato.numero}</span> <span class = "email">${contato.email}</span>
        <button class="editar-button" onclick="editarContato(${index})">Editar</button>
        <button class="deletar-button" onclick="deletarContato(${index})">Excluir</button>
      `;

        listaContatos.appendChild(itemLista);
    });
}

// Função para editar um contato
function editarContato(index) {
    const novoNome = prompt('Novo Nome:', contatos[index].nome);
    const novoNumero = prompt('Novo Número:', contatos[index].numero);
    const novoEmail = prompt('Novo Email:', contatos[index].email);

    if (novoNome !== null && novoNumero !== null && novoEmail !== null) {
        contatos[index] = new Contato(novoNome, novoNumero, novoEmail);
        listaAtualizada();
    }
}

// Função para excluir um contato
function deletarContato(index) {
    if (confirm('Tem certeza de que deseja excluir este contato?')) {
        contatos.splice(index, 1); // Remove o contato
        listaAtualizada();
    }
}

// "Ativando" o formulário de adição de contato
const formulario = document.querySelector('form');
formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const nome = document.querySelector('input[name="nome"]').value;
    const numero = document.querySelector('input[name="telefone"]').value;
    const email = document.querySelector('input[name="email"]').value;
    addContato(nome, numero, email);
    formulario.reset();
});

listaAtualizada();
