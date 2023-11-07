<?php
    try {
        $bd = new PDO ("mysql:host=hostname; dbname=resto", "root", "");
        $bd -> setAttribute(PDo::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        die("Erruer de connexion:" .$e -> getMessage());
    }
?>