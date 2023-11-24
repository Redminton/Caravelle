<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["author"];
    $email = $_POST["email"];
    $telefone = $_POST["phone"];
    $mensagem = $_POST["text"];

    $destino = "barrigudobueno@gmail.com"; // Substitua pelo seu endereço de e-mail

    $assunto = "Nova mensagem do formulário de contato";
    
    $corpo_email = "Nome: $nome\n";
    $corpo_email .= "Email: $email\n";
    $corpo_email .= "Telefone: $telefone\n";
    $corpo_email .= "Mensagem:\n$mensagem";

    // Envia o e-mail
    mail($destino, $assunto, $corpo_email);

    // Redireciona de volta para a página do formulário
    header("Location: contact.html");
    exit();
}
?>
