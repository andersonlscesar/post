<?php 
use App\Http\Response;
use App\Controller\Pages;


$route->get('/', [
    fn() => new Response(200, Pages\Login::renderContent())
]);