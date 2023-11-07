<?php

function connection()
{
    $server = "localhost";
    $dbname = "calculator";
    $user = "root";
    $password = "root";

    $database = new PDO("mysql:host=$server;dbname=$dbname", $user, $password);
    $database->query("set names utf8;");
    $database->setAttribute(PDO::ATTR_EMULATE_PREPARES, FALSE);
    $database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $database->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
    
    return $database;
}

?>