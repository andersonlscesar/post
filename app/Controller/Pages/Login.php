<?php
namespace App\Controller\Pages;

use App\Utils\View;

class Login extends Page
{
    /**
     * Método responsável por renderizar o conteú da página de login
     * @return strin
     */

    public static function renderContent(): string
    {
        $content = View::render('login/login');

        return parent::renderMainLayout('Login', $content);
    }
}