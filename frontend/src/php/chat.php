<?php
require "bd.php";

if (isset($_POST["submit"])) {
    $subject = "contact nous";
    $message  = "Bonjour et merci de nous avoir contacter";
    $headers = "From : consisto185@gmail.com";

    if (mail($_POST["email"], $subject, $message, $headers)) {
        echo "Message envoyé";
    } else {
        die("Erreur");
    }
    
}