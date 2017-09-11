$.getJSON('http://sistema-delivery.herokuapp.com/produtos', function(data) {
    var listaBolo = $('#listaBolo');
    var listaPizza = $('#listaPizza');
    var listaSalgado = $('#listaSalgado');
    var listaBebida = $('#listaBebida');
    for (i = 0; i < data.length; i++) {
        if (data[i].tipo == 'bolo') {
          listaBolo.append(addDados(data[i]));
        } else if(data[i].tipo == 'pizza') {
          listaPizza.append(addDados(data[i]));
        } else if(data[i].tipo == 'hamburguer') {
          listaSalgado.append(addDados(data[i]));
        } else if(data[i].tipo == 'bebida') {
          listaBebida.append(addDados(data[i]));
        }
    }
    $('.modal-trigger').leanModal();
    carregaControls();

});

function addDados(dado) {

    var linha = "<li><div class='item z-depth-1' style='background-image: url(" + dado.imagem + ")'><div class='div-container'>                        <h5 id='nome-produto' class='center'>" + dado.nome + "</h5><br><p id='preco-produto'>" + dado.preco + "<spam id='spam-" + formataID(dado._id) + "' class='qtd-produto brown-text'></spam></p><br><div id='ic-ingredients' class='ic-menu modal-trigger' href='#modal-" + formataID(dado._id) + "'></div></div><div class='right ic-controls'><div id='" + formataID(dado._id) + "' class='ic-delete ic-menu waves-effect waves-light'></div><div id='" + formataID(dado._id) + "' class=' ic-add add ic-menu waves-effect waves-light'></div></div></div></li><div id='modal-" + formataID(dado._id) + "' class='modal'><div class='modal-content'><h4 class='center'>Informações</h4><p>" + dado.descricao + "</p></div><div class='modal-footer'><a href='#!' class=' modal-action modal-close waves-effect waves-green btn-flat'>Close</a></div></div>";
    return linha;
}

function formataID(data) {
  return (data && data._str) || data;
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

$('.confirmar').click(function(){
  var texto = '';
  $('#resumo').text('');
  $('li').children().each(function(){
    var quantidade = parseInt($(this).find('.qtd-produto').text().substring(2));
    var valor_total = 0;
    if(quantidade > 0){
      var produto = $(this).find('#nome-produto').text();
      var valor = parseFloat($(this).find('#preco-produto').text().substring(3,7).replace(',','.'));
      valor_total = (quantidade * valor);
      texto += produto + ": " + quantidade + " * " + valor + " = " + valor_total + ";\n";
      $('#resumo').append(texto + "<br>");
      texto = '';
    }
  });
});

$('.acao-limpar').click(function() {
  $('.qtd-produto').text('');
});

$('.acao-finalizar').click(function() {
    $.ajax({
        url: 'http://sistema-delivery.herokuapp.com/novo-pedido',
        data: {
            nome: $('#nome-cliente').val(),
            endereco: $('#endereco-cliente').val(),
            observacao: $('#observacao-cliente').val(),
            celular: $('#celular-cliente').val(),
            itens: $('#resumo').text()
        },
        success: function(resposta) {
            Materialize.toast(resposta, 2000);

            $('#nome-cliente').val('');
            $('#endereco-cliente').val('');
            $('#observacao-cliente').val('');
            $('#celular-cliente').val('');
            $('#resumo').text('');
            $('.qtd-produto').text('');
        },
        error: function(erro) {
            Materialize.toast(erro.responseText, 3000, 'red-text');
        }
    })
});
$(document).ready(function () {
    //Abas são inicializadas automaticamente, mas se você adicionar abas dinamicamente você terá que inicializa-las assim.
    $('ul.tabs').tabs();

});
