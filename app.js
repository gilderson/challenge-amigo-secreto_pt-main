let listaDeAmigosSorteio = [];//array para agrupar os nomes dos amigos

let amigos = document.getElementById('listaAmigos');

let resultadoSorteio = document.getElementById('resultado');

//função para adicionar amigos na lista que será gerada
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

function sortearAmigo() {
    if (listaDeAmigosSorteio.length === 0){
        alert ('Adicione amigos antes de sortear.');
        return;
    }
    
    let amigoAleatorio = Math.floor(Math.random() * listaDeAmigosSorteio.length);
    let amigoSorteado = listaDeAmigosSorteio[amigoAleatorio];

    resultadoSorteio.textContent = `Amigo sorteado: ${amigoSorteado}`;
}
