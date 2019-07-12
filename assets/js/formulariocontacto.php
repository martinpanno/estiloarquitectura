<?php

$email_to = "martin.julian89@gmail.com";
$email_message = "Contenido del Mensaje.\n\n";
 
 
 
    function clean_string($string) {
 
      $bad = array("content-type","bcc:","to:","cc:","href");
 
      return str_replace($bad,"",$string);
 
    }
 
 
 
    $email_message .= "Nombre: ".clean_string($nombre)."\n";
 
    
    $email_message .= "Email: ".clean_string($email_from)."\n";
 
    
 
    $email_message .= "Mensaje: ".clean_string($msg)."\n";
 
 
//Se crean los encabezados del correo
 
$headers = 'From: '.$email_from."\r\n".
 
'Reply-To: '.$email_from."\r\n" .
 
'X-Mailer: PHP/' . phpversion();
 
@mail($email_to, $email_subject, $email_message, $headers);
 
?>
 
 
 
<!-- Mensaje de que fue enviado-->
 
Gracias! Nos pondremos en contacto contigo a la brevedad
 
<?php
 
}
 
?>