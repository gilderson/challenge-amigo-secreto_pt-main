let lista = [];//array para agrupar os nomes dos amigos

let amigos = document.getElementById('listaAmigos');

let ul = document.createElement('ul');

function adicionarAmigo() {
    let nomes = document.querySelector('input').value
     
    if (nomes == ''){
        alert('O campo não pode ficar em branco, informe um nome');
    } else {
       lista.push(nomes);
       console.log(lista);
       console.log(lista[1]);
       limparCampo();
    }
    for (let i = 0; i < lista.length; i++){
        let li = document.createElement('li');
        li.textContent = lista[i];
        ul.appendChild(li);
    }
    amigos.appendChild(ul);
};

function limparCampo() {
    nomes = document.querySelector('input')
    nomes.value="";
}

adicionarAmigo();