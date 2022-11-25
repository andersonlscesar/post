<?php
namespace App\Controller\Pages;

use App\Utils\View;

class Page 
{
    /**
     * Renderiza o corpo do HTML
     * 
     * @param string $title
     * @param string $content
     * @return string
     */
    public static function renderMainLayout(string $title, string $content): string
    {
        return View::render('layout/main', [
            'title'     => $title,
            'content'   => $content
        ]);
    }
}