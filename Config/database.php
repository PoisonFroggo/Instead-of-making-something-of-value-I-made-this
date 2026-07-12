<?php
//Establish PDO and database connection
    $db_host = 'localhost';
    $db_name = 'lannie_db';
    $dsn = 'mysql:host=localhost;dbname=lannie_db';
    $username = 'lannie_admin';
    $password = 'password';

    //Attempt connection to Database
    try {
        $db = new PDO($dsn, $username, $password);
    } catch (PDOException $e) {
        $error_message =$e->getMessage();
        include('database_error.php');
        exit();
    }

    ?>