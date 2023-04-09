<?php

header('Content-Type: application/json');

$servers = @file_get_contents(__DIR__ . '/../hosts.json');

if (empty($servers)){
    $servers = [];
    //Añadimos al archivo
    $db = fopen(__DIR__ . '/../hosts.json', "w") or die("Error 405!");
    fwrite($db, json_encode($servers, JSON_PRETTY_PRINT));
    fclose($db);
}

header("HTTP/1.1 200 OK");
echo json_encode(['success' => true, 'error' => 0, 'output' => $servers]);