// Função que add contato
function adicionarContato() {
    let nome = document.querySelector('input[name="nome"]').value;
    let numero = document.querySelector('input[name="numero"]').value;
    let email = document.querySelector('input[name="email"]').value;

    if (nome === '' || numero === '' || email === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    let contato = {
        nome: nome,
        numero: numero,
        email: email
    };

    // Obtém a lista de contatos existente do localStorage ou cria uma lista vazia se não existir
    let listaContatos = JSON.parse(localStorage.getItem('contatos')) || [];
    
    listaContatos.push(contato);
    
    localStorage.setItem('contatos', JSON.stringify(listaContatos));
    
    document.querySelector('input[name="nome"]').value = '';
    document.querySelector('input[name="numero"]').value = '';
    document.querySelector('input[name="email"]').value = '';
    
    alert('Contato adicionado com sucesso!');
}

//document.querySelector('form').addEventListener('submit', adicionarContato() );

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    adicionarContato();
});

localStorage.clear("contatos");
