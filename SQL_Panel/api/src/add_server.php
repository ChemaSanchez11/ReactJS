<?php

//$_SERVER['REMOTE_ADDR']

require_once(__DIR__ . '/../lib/functions.php');

if (!empty($_POST) && (!isset($_POST['new_server_host']) || !empty($_POST['new_server_host'])) && (!isset($_POST['new_server_user']) || !empty($_POST['new_server_user'])) && (!isset($_POST['new_server_port']) || !empty($_POST['new_server_port']))) {

    header("Content-type:application/json");

    $host = !empty($_POST['new_server_host']) ? $_POST['new_server_host'] : 'localhost';
    $user = !empty($_POST['new_server_user']) ? $_POST['new_server_user'] : 'root';
    $pass = !empty($_POST['new_server_pass']) ? $_POST['new_server_pass'] : '';
    $port = !empty($_POST['new_server_port']) ? $_POST['new_server_port'] : 3306;
    $ip = $_SERVER['REMOTE_ADDR'];
    $token = encrypt($ip . '_' . $host . '_' . $user . '_' . $pass . '_' . $port);

    $json = @file_get_contents(__DIR__ . '/../hosts.json');
    $json = json_decode($json);

    $id = 0;
    if (!empty($json)) {
        $id = end($json)->id;
    }

    $id++;

    $host = array(
        "id" => $id,
        "token" => "$token",
        "ip" => "$ip",
        "host" => "$host",
        "user" => "$user",
        "password" => "$pass",
        "port" => $port,
        "active" => "yes"
    );

    !empty($json) ? array_push($json, $host) : $json = [$host];

//    if (!empty($json)) array_push($json, $host);
//    else $json = [$host];

    $db = fopen(__DIR__ . '/../hosts.json', "w") or die("Error 405!");

    fwrite($db, json_encode($json, JSON_PRETTY_PRINT));
    fclose($db);

    header("HTTP/1.1 200 OK");
    header('Content-type:application/json');
    header("HTTP/1.1 200 OK");
    echo json_encode(['success' => true, 'error' => 0, 'output' => $json]);

} else {
    header("HTTP/1.1 400 Bad Request");
    header('Content-type:application/json');
    die(json_encode(['success' => false, 'error' => 2, 'output' => 'Faltan parametros']));
}

