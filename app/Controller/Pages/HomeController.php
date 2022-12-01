<?php
namespace App\Controller\Pages;

use App\Utils\View;

class HomeController extends Controller 
{
    public static function renderContent(): string 
    {
        $content = View::render('home/index');
        return parent::renderFeedLayout('Home', $content);
    }
}