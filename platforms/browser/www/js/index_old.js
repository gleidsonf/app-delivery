$.getJSON('https://raw.githubusercontent.com/gleidsonf/test-json/master/produto.json', function (data) {
    var lista = document.createElement("ul");
    var listaBolo = $('#listaBolo');
    var listaPizza = $('#listaPizza');
    var listaSalgado = $('#listaSalgado');
    var listaBebida = $('#listaBebida');

    this.qtd = data.bolo.length;
    for (i = 0; i < this.qtd; i++) {
        listaBolo.append(addDados(data.bolo[i]));
    }
    this.qtd = data.pizza.length;
    for (i = 0; i < this.qtd; i++) {
        listaPizza.append(addDados(data.pizza[i]));
    }
    this.qtd = data.hamburguer.length;
    for (i = 0; i < this.qtd; i++) {
        listaSalgado.append(addDados(data.hamburguer[i]));
    }
    this.qtd = data.bebida.length;
    for (i = 0; i < this.qtd; i++) {
        listaBebida.append(addDados(data.bebida[i]));
    }
    $('.modal-trigger').leanModal();
    carregaControls();

});

function addDados(dado) {

    var linha = "<li><div class='item z-depth-1' style='background-image: url(" + dado.imagem + ")'><div class='div-container'>                        <h5 id='nome-produto' class='center'>" + dado.nome + "</h5><br><p id='preco-produto'>" + dado.preco + "<spam id='spam-" + dado.id + "' class='qtd-produto brown-text'></spam></p><br><div id='ic-ingredients' class='ic-menu modal-trigger' href='#modal-" + dado.id + "'></div></div><div class='right ic-controls'><div id='" + dado.id + "' class='ic-delete ic-menu waves-effect waves-light'></div><div id='" + dado.id + "' class=' ic-add add ic-menu waves-effect waves-light'></div></div></div></li><div id='modal-" + dado.id + "' class='modal'><div class='modal-content'><h4 class='center'>Informações</h4><p>" + dado.descricao + "</p></div><div class='modal-footer'><a href='#!' class=' modal-action modal-close waves-effect waves-green btn-flat'>Close</a></div></div>";
    return linha;
}

function carregaControls() {


    $('.ic-add').on("click", function (e) {
        var qtd = $('#spam-' + $(this).attr('id'));
        var cont = 1;
        if (qtd.text() == "") {
            qtd.html('x ' + cont);
            qtd.css("padding", "5px");

        } else {

            cont = parseInt(qtd.html().substring(2)) + 1;
            qtd.html('x ' + cont);
        }

    });

    $('.ic-delete').on('click', function () {
        var qtd = $('#spam-' + $(this).attr('id'));
        var cont = 1;
        if (qtd.text() == "") {
            Materialize.toast("Nenhum produto!", 4000, 'rounded');
        } else if (qtd.html().substring(2) == 1) {
            qtd.html("");
        } else {
            cont = parseInt(qtd.html().substring(2)) - 1;
            qtd.html('x ' + cont);
        }

    });
}

$(.acao - finalizar).click( function() {
    
});
$(document).ready(function () {
    //Abas são inicializadas automaticamente, mas se você adicionar abas dinamicamente você terá que inicializa-las assim.
    $('ul.tabs').tabs();

});