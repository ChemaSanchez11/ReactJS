<?php
require_once(__DIR__ . '/../lib/functions.php');
require_once(__DIR__ . '/../lib/database.php');

header('Content-Type: application/json');

if(!empty($_POST)){
    $host = $_POST['server'];

    $values = decrypt($host);

    $info = explode("_", $values);

    $link = @mysqli_connect($info[1].':'.$info[4], $info[2], $info[3]);

    //$enlace = null;
    if($link)
    {
        $_SESSION['server'] = $info;
        $array_databases = [];
        $database = new database($info[1].':'.$info[4], $info[2], $info[3]);

        foreach($database->get_databases() as $databases){
            array_push($array_databases, $databases->database);
        }

        header("HTTP/1.1 200 OK");
        echo json_encode(['success' => true, 'error' => 0, 'output' => $array_databases]);
    } else {
        header("HTTP/1.1 400 Bad Request");
        echo json_encode(['success' => false, 'error' => 6, 'output' => mysqli_connect_error()]);
    }
}

