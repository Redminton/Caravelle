


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

    console.log(`Preço final para ${cidadeId}:`, preco);
    
    var displayElement = document.getElementById(displayId);
    displayElement.innerHTML = '$' + preco;

    return preco;
}

// Função para remover uma cidade
function removerCidade(cidadeId) {
    var preco = 0;
    var cidadeElement = document.getElementById(cidadeId);
    if (cidadeElement) {
        cidadeElement.style.display = "none";
        preco = calcularPreco(cidadeId, 'dias' + cidadeId, 'opcoes' + cidadeId, 'display_preco' + cidadeId);
    }

    return preco;
}

// Função para calcular o preço total
function calcular_tudo() {
    var precoCuri = calcularPreco('curitibaC', 'diasCuri', 'opcoesCuri', 'display_precoCuri');
   // var precoOutraCidade = calcularPreco('outraCidade', 'diasOutraCidade', 'opcoesOutraCidade', 'display_precoOutraCidade');
    // Calcular o preço total somando os preços individuais
    var precoTotal = precoCuri;// + precoOutraCidade;

    var displayTot = document.getElementById('displayTot');
    displayTot.innerHTML = '$' + precoTotal;
}
setInterval(calcular_tudo, 500);