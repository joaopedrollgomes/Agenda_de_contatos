class Contato {
    constructor(nome, numero, email, grupo) {
        this.nome = nome;
        this.numero = numero;
        this.email = email;
        this.grupo = grupo;
    }
}

const contatos = [];

//add contato
function addContato(nome, numero, email, grupo) {
    grupo = document.getElementById("selectGrupo").value;
    const contato = new Contato(nome, numero, email, grupo);
    contatos.push(contato);
    listaAtualizada();
}

const abrirModalButton = document.getElementById("abrir-modal");
const fecharModalButton = document.getElementById("fechar-modal");
const bottonFechar = document.getElementById("fechar-formulario");
const Foramodal = document.getElementById("Foramodal");

abrirModalButton.addEventListener("click", function () {
    Foramodal.style.display = "block";
});

fecharModalButton.addEventListener("click", function () {
    Foramodal.style.display = "none";
});

bottonFechar.addEventListener('click', function () {
    Foramodal.style.display = "none";
});

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
        <button class="editar-button" onclick="criarFormularioEdicao(contatos[${index}], ${index})"><i><img class="icon" src="/img/do-utilizador.png"></i>
        <div class="text">Editar</div></button>
        <button class="deletar-button" onclick="deletarContato(${index})"><i><img class="icon" src="/img/excluir.png"></i>
        <div class="text">Excluir</div></button>
        </div>
      `;

        listaContatos.appendChild(itemLista);
    });
}

// Função formulário de edição
function criarFormularioEdicao(contato, index) {
    const edicaoModal = document.getElementById('edicaoModal');

    const section = document.createElement('section');
    section.id = 'adicionar';

    section.innerHTML = `
    <div class="caixa">
    <form id="edicaoForm">
        <input type="text" class="edicao-nome" name="nome" placeholder="Nome" value="${contato.nome}">
        <input type="text" class="edicao-telefone" name="telefone" placeholder="Número" value="${contato.numero}">
        <input type="text" class="edicao-email" name="email" placeholder="Email" value="${contato.email}">
        <label for="text">Escolha um grupo:</label>
        <select class="edicao-grupo" id="selectGrupo" name="grupo">
            <optgroup label="Grupo">
                <option value=""></option>
                <option value="Família">Família</option>
                <option value="Amigos">Amigos</option>
                <option value="Trabalho">Trabalho</option>
            </optgroup>
        </select>
        <div class="botao-add">
            <button type="submit">
                <i><img class="icon" src="/img/do-utilizador.png"></i>
                <div class="text">Confirmar Edição</div>
            </button>
            <button class="fechar-edicao-modal" onclick="fecharEdicao()">
                <i><img class="icon" src="/img/sair.png"></i>
                <div class="text">Fechar</div>
            </button>
        </div>
        </form>
        </div>
    `;

    section.addEventListener('submit', function (event) {
        event.preventDefault();
        const novoNome = section.querySelector('.edicao-nome').value;
        const novoNumero = section.querySelector('.edicao-telefone').value;
        const novoEmail = section.querySelector('.edicao-email').value;
        const novoGrupo = section.querySelector('.edicao-grupo').value;

        if (novoNome !== '' && novoNumero !== '' && novoEmail !== '' && novoGrupo !== '') {
            contatos[index] = new Contato(novoNome, novoNumero, novoEmail, novoGrupo);
            listaAtualizada();
            edicaoModal.style.display = 'none';
        }
    });

    edicaoModal.innerHTML = ''; // Limpa qualquer formulário de edição anterior
    edicaoModal.appendChild(section);
    edicaoModal.style.display = 'block';
}


// Função para fechar o formulário de edição
function fecharEdicao() {
    const edicaoModal = document.getElementById('edicaoModal');
    edicaoModal.style.display = 'none';
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

//busca de contatos por o nome
function pesquisarContatos() {
    const nomePesquisa = document.getElementById("barra-pesquisa").value.toLowerCase();
    const contatosFiltrados = contatos.filter((contato) =>
        contato.nome.toLowerCase().startsWith(nomePesquisa)
    );
    listaAtualizada(contatosFiltrados);
}