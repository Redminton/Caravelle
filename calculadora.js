var x = 4; // quantidade de itens no carrinho;
var totalU;
var dolar = 4.9;
var  totalR;
//localStorage.setItem('dolar', dolar);

setInterval(mostrarTot, 500);
setInterval(carrinhoDisplay, 500);
setInterval(pegarDolar, 500);
setInterval(calcular_tudo, 500);
setInterval(mostrarTot, 500);


function carrinhoDisplay(){
    var carrinhoDisplay = document.getElementById('carrinhoDisplay');
    carrinhoDisplay.innerHTML = x + ' itens';
 //   console.log('carrinho ', x);
}





// calcula com base na cidade
function calcularPreco(cidadeId, diasId, opcoesId, displayId) {
    var dias = document.getElementById(diasId).value;
    var opcoes = document.getElementById(opcoesId).value;
    var cidadeElement = document.getElementById(cidadeId);

    var preco;
    if (cidadeElement && cidadeElement.style.display !== "none") {
        preco = dias * opcoes;
    } else {
        preco = 0;
    }

   // console.log(`Preço final para ${cidadeId}:`, preco);
    
    var displayElement = document.getElementById(displayId);
    displayElement.innerHTML = '$' + preco;

    return preco;
}

// Função para remover uma cidade
function removerCidade(cidadeId) {
    var preco = 0;
    remover_tabela();
    var cidadeElement = document.getElementById(cidadeId);
    if (cidadeElement) {
        cidadeElement.style.display = "none";
        preco = calcularPreco(cidadeId, 'dias' + cidadeId, 'opcoes' + cidadeId, 'display_preco' + cidadeId);
    }

    return preco;
}

// Função para calcular o preço total
function calcular_tudo() {
    var precoSal = calcularPreco('salC', 'diasSal', 'opcoesSal', 'display_precoSal');
    var precoNap = calcularPreco('napC', 'diasNap', 'opcoesNap', 'display_precoNap');
    var precoMum = calcularPreco('mumC', 'diasMum', 'opcoesMum', 'display_precoMum');
    var precoMel = calcularPreco('melC', 'diasMel', 'opcoesMel', 'display_precoMel');
    // Calcular o preço total somando os preços individuais
    var precoTotal = precoNap + precoMum + precoMel + precoSal;

    var displayTot = document.getElementById('displayTot');
    var displayTotR = document.getElementById('displayTotR');
    displayTot.innerHTML = '$' + precoTotal;
    localStorage.setItem('valor_total', precoTotal);

    // preço em dolar
    dolar = localStorage.getItem('dolar');
    precoTotalR = precoTotal * dolar;
    displayTotR.innerHTML = '$' + precoTotalR;
}



// funçao pagamento
function mostrarTot(){
    var valorTotalU = document.getElementById('valorTotalU');
    var valorTotalR = document.getElementById('valorTotalR');
    totalU = localStorage.getItem('valor_total');
    totalU = parseFloat(totalU);
   // console.log("total R$", totalR);
  //  console.log('cotacao', dolar);
   var dolarPagamento = localStorage.getItem('dolar');
 //  console.log('cvegerger', dolarPagamento);
    totalR = totalU * dolarPagamento;
    console.log('xxxxxsfsef', dolarPagamento);
//    console.log("total em USD", totalU);
    valorTotalR.innerHTML = '$ ' + totalR;
    valorTotalU.innerHTML = '$ ' + totalU;
}

function remover_tabela(){
    var tabela = document.getElementById('tabelaC');
    x -= 1;
    carrinhoDisplay();
//    console.log('x ', x );
    if(x < 1){
        tabela.style.display = "none";
    }
}

function pegarDolar(){
    dolar = document.getElementById('cotacao').value;
    localStorage.setItem('dolar', dolar);
    var admin_dolar = document.getElementById('cotacaoAtual');
    admin_dolar.innerHTML = 'R$' + dolar;
    console.log('cotacao admin', dolar);
    }


