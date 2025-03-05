let lista = [];//array para agrupar os nomes dos amigos

let amigos = document.getElementById('listaAmigos');



function adicionarAmigo() {
    let nomes = document.querySelector('input').value

    if (nomes == '') {
        alert('O campo não pode ficar em branco, informe um nome');
    } else {
        lista.push(nomes);
        console.log(lista);
        console.log(lista[1]);
        limparCampo();
        listaAmigos();
    }
};

function limparCampo() {
    nomes = document.querySelector('input')
    nomes.value = "";
}

adicionarAmigo();

function listaAmigos() {

    let listaHTML = "<ul>";

    for (let i = 0; i < lista.length; i++) {
        listaHTML += "<li>" + lista[i] + "</li>";
    }

    listaHTML += "</ul>"

    amigos.innerHTML = listaHTML;
}