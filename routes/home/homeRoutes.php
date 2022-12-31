<?php
use App\Http\Response;
use App\Controller\Pages;

$route->get('/home', [
    fn() => new Response(200, Pages\HomeController::renderContent())
]);

$route->get('/pagina/{id}/{categoria}', [
    fn($id, $categoria) => new Response(200, "Página - $id - categoria - $categoria")
])->whereNumber('id');


