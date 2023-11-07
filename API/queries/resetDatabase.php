<?php

// url: http://localhost/calculator/API/queries/resetDatabase.php

include("../connection.php");
include("../cors.php");

function resetDatabase()
{
    $connection = connection();

    try {
        $sql  = 'DROP TABLE IF EXISTS deliveries;';
        $sql .= 'DROP TABLE IF EXISTS dimensions;';
        $sql .= 'DROP TABLE IF EXISTS sides;';
        $sql .= 'DROP TABLE IF EXISTS papers;';
        $sql .= 'DROP TABLE IF EXISTS units;';
    
        $sql .= 
               'CREATE TABLE deliveries (
                id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                parameter VARCHAR(100) UNIQUE NOT NULL,
                price DECIMAL(10,2) NOT NULL
                );';
        
        $sql .= 
               'CREATE TABLE dimensions (
                id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                parameter VARCHAR(100) UNIQUE NOT NULL,
                price DECIMAL(10,2) NOT NULL
                );';
    
        $sql .= 
               'CREATE TABLE sides (
                id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                parameter VARCHAR(100) UNIQUE NOT NULL,
                price DECIMAL(10,2) NOT NULL
                );';
    
        $sql .= 
               'CREATE TABLE papers (
                id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                parameter VARCHAR(100) UNIQUE NOT NULL,
                price DECIMAL(10,2) NOT NULL
                );';
    
        $sql .= 
               'CREATE TABLE units (
                id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                parameter INTEGER UNSIGNED UNIQUE NOT NULL
                );';

        $connection -> exec($sql);
        print("Base de datos reseteada." . "\n");
    
    } catch(PDOException $error) {
        echo $error -> getMessage();
    }
}

resetDatabase();

?>