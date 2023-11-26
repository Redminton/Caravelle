// Variáveis globais:
    var dolar;
    const login_admin = 'admin';
    const senha_admin = 'admin';
    const login_conta = 'conta';
    const senha_conta = '12345';
    var dias2;
    var diasElement;
    var dias;
    var preco, precoR ;
    //console.log("cookies", document.cookies);


    document.addEventListener("DOMContentLoaded", function() {
        carregamento();
    });

    setInterval(coletarDias, 500);



// função de mostrar a página de login
function login(){
    var elemento = document.getElementById('login');
    if (elemento.style.display === 'none' || elemento.style.display === '') {
        elemento.style.display = 'block';
    } else {
        elemento.style.display = 'none';
    } 
} 
function coletarDias() {
   // return new Promise((resolve, reject) => {
        var dias = document.getElementById('dias').value;
        //document.cookie = `iddias=${dias}; path=/;`;
        //var dias2 = obterDias();
       // console.log(dias2);
       // resolve(dias2);
    //});
        var categoria = document.getElementById('opcoes').value;
        preco = categoria * dias;
    //    console.log("preço", preco);
        var  preco_card = document.getElementById("preco_card");
        preco_card.innerHTML = '$ ' + preco;
        precoR = preco * localStorage.getItem('dolar');
       // console.log('terterttert', localStorage.getItem('dolar'));
        var  preco_cardR = document.getElementById("preco_cardR");
        preco_cardR.innerHTML = '$ ' + precoR;
}

/* function obterDias() {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith('iddias=')) {
            return cookie.substring('iddias='.length);
        }
    }
    return null;
} */
//função de acesso de admin
/*async*/ function acesso() {
    var x = document.getElementById('usuario').value;
    var y = document.getElementById('senha').value;
   // try {
     //   await coletarDias(); // Espera pela conclusão da função coletarDias()
        if (x === login_admin && y === senha_admin) {
            console.log('Acessando admin');
            window.location.href = 'admin.html';

        } 
        else if (x === login_conta && y === senha_conta) {
            console.log('Acessando conta');
            window.location.href = 'minha_conta.html';

        } 
        else {
            alert('Usuário ou senha incorretos. Tente novamente.');
         
        }
   // } catch (error) {
   //     console.error('Erro ao coletar dias:', error);
 //   }
}







function descerPix() {
    var elemento2 = document.getElementById('imgPix');
    if (elemento2.style.display === 'none' || elemento2.style.display === '') {
        elemento2.style.display = 'block';
    } else {
        elemento2.style.display = 'none';
    } 
  }
function pagar(){
    var elemento3 = document.getElementById('bot_verifica');
    var elemento4 = document.getElementById('tabelapag');
    if (elemento3.style.display === 'none' || elemento3.style.display === '') {
        elemento3.style.display = 'block';
    } else {
        elemento3.style.display = 'none';
    } 
    if (elemento4.style.display === 'none' || elemento4.style.display === '') {
        elemento4.style.display = 'block';
    } else {
        elemento4.style.display = 'none';
    } 
  }
 







  var shownDivs = [];

  function filtro(type) {
      var index = shownDivs.indexOf(type);
      if (index === -1) {
          shownDivs.push(type);
          //console.log('quais estão ativos', shownDivs);
      } else {
          shownDivs.splice(index, 1);
      }
      //console.log('divs', divs);
      var divs = document.getElementsByClassName('box');

      for (var i = 0; i < divs.length; i++) {
          divs[i].style.display = 'none';
      }
      //console.log('type', type);
      for (var j = 0; j < shownDivs.length; j++) {
          var currentType = shownDivs[j];
          // Mostra as divs específicas e as que começam com o mesmo prefixo
          if (currentType === type || currentType.startsWith(type + '_')) {
                var prefix = currentType.split('_')[0];
                document.querySelectorAll('[id^="' + prefix + '_"]').forEach(function (elem) {
                    elem.style.display = 'block';
                    //console.log('funfa');
                });
          }
      }
    }


function carregamento(){
    console.log('Carregou');
}
