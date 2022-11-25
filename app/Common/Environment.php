<?php
namespace App\Common;

class Environment 
{
    /**
     * Carrega as variáveis de ambiente
     * @param string $dir
     * @return boolean
     */
    public static function laod(string $dir): bool
    {
        if(!file_exists($dir)) return false;

        $lines = file($dir);

        foreach($lines as $line) {
            putenv(trim($line));
        }
        
        return true;
    }
}