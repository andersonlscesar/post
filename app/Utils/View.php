<?php
namespace App\Utils;

class View
{
    private static array $default = [];

    public static function setDefaultMVCVariables(array $default): void 
    {
        self::$default = $default;
    }
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
        $params = array_merge($params, self::$default);
        $keys = array_keys($params);
        $keys = array_map(fn($item) => '{{'.$item.'}}', $keys); 
     
        return str_replace($keys, array_values($params), $content);
    }

}