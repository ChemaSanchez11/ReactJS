<?php

global $CFG;

// Definir las rutas
$routes = array(
    $CFG->wwwroot . '/get_servers' => 'get_servers.php',
    $CFG->wwwroot . '/add_server' => 'add_server.php',
    $CFG->wwwroot . '/connect' => 'connect.php',
);

// Retornar la ruta correspondiente al controlador o función
function getRoute($url) {

    global $routes;

    if (isset($routes[$url])) {
        return $routes[$url];
    }

    return '404'; // Si no se encuentra la ruta, retornar un error 404
}