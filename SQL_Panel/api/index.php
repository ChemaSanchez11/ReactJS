<?php

// Incluir el archivo de rutas
require_once(__DIR__ . '/config/config.php');
require_once (__DIR__ . '/routes.php');
// Obtener la URL actual
$url = explode('?', $_SERVER['REQUEST_URI'])[0];

// Obtener la ruta correspondiente
$route = getRoute($url);

// Requerimos el controlador correspondiente
if($route !== '404'){
    require_once(__DIR__ . '/src/'.$route);
} else {;
    header("HTTP/1.1 405 Service Not Found");
    echo json_encode(['success' => false, 'error' => 1, 'output' => 'Servicio No Encontrado']);
}