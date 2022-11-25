<?php
namespace App\Utils;

class View
{
    /**
     * Pega o conteúdo da view
     * @param string $view
     * @return string
     */

    private static function getContentView(string $view): string
    {
        $file = __DIR__.'/../../resources/view/'.$view.'.html';
        return file_exists($file) ? file_get_contents($file) : '';
    }

    /**
     * Renderiza o conteúdo da víew
     * @param string $view
     * @param array $params
     * @return string
     */

    public static function render(string $view, array $params = [])
    {
        $content = self::getContentView($view);
        $keys = array_keys($params);
        $keys = array_map(fn($item) => '{{'.$item.'}}', $keys); 
        $finalContent =  preg_replace(['({{.*?}})'], $keys, $content);
        return str_replace($keys, array_values($params), $finalContent);
    }

}