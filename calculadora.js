var x = 3;


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
    var precoNap = calcularPreco('napC', 'diasNap', 'opcoesNap', 'display_precoNap');
    var precoMum = calcularPreco('mumC', 'diasMum', 'opcoesMum', 'display_precoMum');
    var precoMel = calcularPreco('melC', 'diasMel', 'opcoesMel', 'display_precoMel');
    // Calcular o preço total somando os preços individuais
    var precoTotal = precoNap + precoMum + precoMel;

    var displayTot = document.getElementById('displayTot');
    displayTot.innerHTML = '$' + precoTotal;
}
function remover_tabela(){
    var tabela = document.getElementById('tabelaC');
    x -= 1;
    console.log('x ', x );
    if(x < 1){
        tabela.style.display = "none";
    }
}
setInterval(calcular_tudo, 500);