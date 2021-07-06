<?php
$name = $POST['name'];
$email = $POST['email'];
$trabajo = $POST['trabajo'];
$mensaje = $POST['mensaje'];

$header = 'From: ' . $mail . "\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . "\r\n";
$message .= "Su email es: " . $email . "\r\n";
$message .= "Trabajo al que postulas: " . $trabajo . "\r\n";
$message .= "Mensaje: " . $POST['mensaje'] . " \r\n";
$message .="Enviado el: " . date('d/m/Y', time());

$para = 'erickdaniel.aguilarflores@gmail.com';
$asunto = 'Nuevo mensaje de la página';

mail($para, $asunto, utf8_decode($mensaje), $header);
header("Location: index.html");
?>

