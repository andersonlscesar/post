<?php
namespace App\Controller\Pages;

use App\Utils\View;

class LoginController extends Controller
{
    /**
     * Método responsável por renderizar o conteú da página de login
     * @return string
     */

    public static function renderContent(): string
    {
        $content = View::render('login/login');
        return parent::renderMainLayout('Login', $content);
    }
}