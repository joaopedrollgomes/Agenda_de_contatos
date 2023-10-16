class Contato {
    constructor(nome, numero, email, grupo) {
        this.nome = nome;
        this.numero = numero;
        this.email = email;
        this.grupo = grupo;
    }
}

const contatos = [];

function addContato(nome, numero, email, grupo) {
    grupo = document.getElementById("selectGrupo").value;
    const contato = new Contato(nome, numero, email, grupo);
    contatos.push(contato);
    listaAtualizada();
}

// Função para atualizar a lista de contatos
function listaAtualizada(contatosExibidos = contatos) {
    const listaContatos = document.getElementById('listaContatos');
    listaContatos.innerHTML = '';

    contatosExibidos.forEach((contato, index) => {
        const itemLista = document.createElement('li');
        itemLista.className = 'style-contato';

        itemLista.innerHTML = `
        <span class="nome">${contato.nome}</span> <span class="numero">${contato.numero}</span> <span class="email">${contato.email}</span><span class="grupo">${contato.grupo}</span>
        <div id="botoes-lista">
        <button class="editar-button" onclick="editarContato(${index})">Editar</button>
        <button class="deletar-button" onclick="deletarContato(${index})">Excluir</button>
        </div>
      `;

        listaContatos.appendChild(itemLista);
    });
}


// Função para editar um contato
function editarContato(index) {
     const novoNome = prompt('Novo Nome:', contatos[index].nome);
    const novoNumero = prompt('Novo Número:', contatos[index].numero);
    const novoEmail = prompt('Novo Email:', contatos[index].email);
    const novoGrupo = prompt('Novo Grupo:', contatos[index].grupo);

    if (novoNome !== null && novoNumero !== null && novoEmail !== null && novoGrupo !== null) {
        contatos[index] = new Contato(novoNome, novoNumero, novoEmail, novoGrupo);
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
    const grupo = document.getElementById("selectGrupo").value;
    addContato(nome, numero, email, grupo);
    formulario.reset();
});

listaAtualizada();


function pesquisarContatos() {
    const nomePesquisa = document.getElementById("barra-pesquisa").value.toLowerCase();
    const contatosFiltrados = contatos.filter((contato) =>
        contato.nome.toLowerCase().includes(nomePesquisa)
    );
    listaAtualizada(contatosFiltrados);
}


// Função para abrir modal de add contato
const abrirModalButton = document.getElementById("abrir-modal");
const fecharModalButton = document.getElementById("fechar-modal")
const Foramodal = document.getElementById("Foramodal");

abrirModalButton.addEventListener("click", function() {
    Foramodal.style.display = "block";
});

fecharModalButton.addEventListener("click", function() {
    Foramodal.style.display = "none";
});

