// Lista de contatos do localStorage
let listaContatos = JSON.parse(localStorage.getItem('contatos')) || [];

//Local na página index onde será add os contatos 
let listaNovoContato = document.getElementById('listaContatos');

// Loop para add os contatos ao index
for (let i = 0; i < listaContatos.length; i++) {
    let contato = listaContatos[i];
    let novoContato = document.createElement('li');
    novoContato.innerHTML = `
        <p>${contato.nome}</p>
        <p>${contato.numero}</p>
        <p>${contato.email}</p>
    `;
    listaNovoContato.appendChild(novoContato);
}

localStorage.clear();