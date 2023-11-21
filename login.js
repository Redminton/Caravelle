// logins:
    var login_admin = 'admin';
    var senha_admin = 'admin';

// função de mostrar a página de login
function login(){
    var elemento = document.getElementById('login');
    if (elemento.style.display === 'none' || elemento.style.display === '') {
        elemento.style.display = 'block';
    } else {
        elemento.style.display = 'none';
    } 
}

//função de acesso de admin
function acesso(){
    var x = document.getE/lementById('username').value;
    var y = document.getElementById('password').value;
    if (x=== login_admin && y=== senha_admin){
        window.location.href = 'admin.html';
    }
    else{
        alert('Usuário ou senha incorretos. Tente novamente.');
    }
}