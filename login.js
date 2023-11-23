// Variáveis globais:
    var login_admin = 'admin';
    var senha_admin = 'admin';
    var dias2;
    var diasElement;
    var dias;
    var preco ;
    //console.log("cookies", document.cookies);


    document.addEventListener("DOMContentLoaded", function() {
        carregamento();
    });


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
        localStorage.setItem('iddias', dias);
        dias2 = localStorage.getItem('iddias');
        //document.cookie = `iddias=${dias}; path=/;`;
        //var dias2 = obterDias();
        console.log(dias2);
       // resolve(dias2);
    //});
        var categoria = document.getElementById('opcoes').value;
        preco = categoria * dias;
        console.log("preço", preco);
        var  preco_card = document.getElementById("preco_card");
        preco_card.innerHTML = '$ ' + preco;
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
        } else {
            alert('Usuário ou senha incorretos. Tente novamente.');
            dias2= localStorage.getItem('iddias');
            console.log(dias2);
             //console.log(obterDias());
            //console.log(document.cookie);
        }
   // } catch (error) {
   //     console.error('Erro ao coletar dias:', error);
 //   }
}


function carregamento(){
    console.log('Carregou');
}
