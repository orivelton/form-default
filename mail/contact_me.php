<?php
// Check for empty fields
if(empty($_POST['nome'])      ||
   empty($_POST['telefone'])  ||
   empty($_POST['email'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "Preenchimento Obrigatório";
   return false;
   }
   
$nome = $_POST['nome'];
$telefone = $_POST['telefone'];
$email_address = $_POST['email'];
$message = $_POST['message'];
   
// Create the email and send the message
$to = 'orivelton10@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Formulário de Contato";
$email_body = "Você recebeu uma nova mensagem de seu formulário de contato.\n\n"."Aqui estão os detalhes:\n\nNome: \n$nome\n\nTelefone : \n$telefone\n\nE-mail: \n$email_address\n\nMenssagem:\n$message";
$headers = "From: orivelton10@gmail.com \n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);
return true;         
?>