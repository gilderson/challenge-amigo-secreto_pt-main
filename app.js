let lista = [];//array para agrupar os nomes dos amigos

function adicionarAmigo() {
    let nomes = document.querySelector('input').value
     
    if (nomes == ''){
        alert('O campo não pode ficar em branco, informe um nome');
    } else {
       nomes == lista.push(nomes);
    }

};
adicionarAmigo();

