<?php 
require_once __DIR__.'/../vendor/autoload.php';

use App\Common\Environment;
use App\Utils\View;
use App\Http\Router;

Environment::laod(__DIR__.'/../.env'); // Carregando variáveis de ambiente
View::setDefaultMVCVariables([ // Definindo variável MVC que será acessada em todo o sistema
    'URL' => getenv('URL')
]);
$route = new Router(getenv('URL')); // Instância de router definindo URL
include_once __DIR__.'/../routes/web.php'; // Inclusão de todas as rotas
$route->run()->sendResponse(); // Execução das closures e envio do status da response


