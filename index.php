<?php
require_once __DIR__.'/vendor/autoload.php';

use App\Controller\Pages\Login;

print Login::renderContent();