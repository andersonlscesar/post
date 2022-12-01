<?php
use App\Http\Response;
use App\Controller\Pages;

$route->get('/home', [
    fn() => new Response(200, Pages\HomeController::renderContent())
]);