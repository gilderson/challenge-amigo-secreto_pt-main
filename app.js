let listaDeAmigosSorteio = [];//array para agrupar os nomes dos amigos

let amigos = document.getElementById('listaAmigos');

function adicionarAmigo() {
    let nomes = document.querySelector('input').value

    if (nomes == '') {
        alert('O campo não pode ficar em branco, informe um nome');
    } else {
        listaDeAmigosSorteio.push(nomes);
        console.log(listaDeAmigosSorteio);
        limparCampo();
    }

    let listaHTML = "<ul>";

    for (let i = 0; i < listaDeAmigosSorteio.length; i++) {
        listaHTML += "<li>" + listaDeAmigosSorteio[i] + "</li>";
    }

    listaHTML += "</ul>"

    amigos.innerHTML = listaHTML;
};

function limparCampo() {
    nomes = document.querySelector('input')
    nomes.value = "";
}
