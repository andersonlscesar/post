<?php
namespace App\Controller\Pages;

use App\Utils\View;

class Controller 
{
    /**
     * Renderiza o corpo do HTML* 
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

    /**
     * Renderiza o corpo do HTML em relação as páginas pós login* 
     * @param string $title
     * @param string $content
     * @return string
     */

    public static function renderFeedLayout(string $title, string $content): string
    {
        return View::render('layout/feed', [
            'title'     => $title,
            'content'   => $content,
            'menu'      => self::renderMenu(),
            'loading'   => self::getLoading()
        ]);
    }

    /**
     * Responsável por pegar o conteúdo do menu
     * @return string
     */

    private static function renderMenu(): string 
    {
        return View::render('layout/feed_menu');
    }

    /**
     * Responsável por pegar o conteúdo do loading
     * @return string
     */

    private static function getLoading(): string 
    {
        return View::render('layout/loading');
    }
}