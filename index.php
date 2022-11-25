<?php
require_once __DIR__.'/vendor/autoload.php';

use App\Controller\Pages\Login;
use App\Common\Environment;
use App\Utils\View;

Environment::laod(__DIR__.'/.env');

View::setDefaultMVCVariables([
    'URL' => getenv('URL')
]);

print Login::renderContent();