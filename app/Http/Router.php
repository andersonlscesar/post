<?php
namespace App\Http;

use Closure;
use Exception;

class Router 
{
    private string $url;
    private string $prefix;
    private array $routes = [];
    private Request $request;

    public function __construct($url) 
    {
        $this->url = $url;
        $this->request = new Request;
        $this->setPrefix();
    }

    /**
     * Define o prefixo
     */

    private function setPrefix(): void
    {
        $parseUrl = parse_url($this->url);
        $this->prefix = $parseUrl['path'] ?? '';
    }

    /**
     * Função responsável por válidar as rotas, espeficicar e validar os métodos
     * @param string $method
     * @param string $route
     * @param array $params
     */

    private function addRouter(string $method, string $route, array $params = [])
    {
        foreach($params as $key => $value) {
            if($value instanceof Closure) {
                unset($params[$key]);
                $params['controller'] = $value;
            }
        }
        
        $patternRoute = '/^'.str_replace('/', '\/', $route).'$/';
        $this->routes[$patternRoute][$method] = $params;
    }

    /**
     * Método responsável por criar as rotas do sistema
     * @param string $route
     * @param array $params
     */

    public function get(string $route, array $params = [])
    {
        return $this->addRouter('GET', $route, $params);
    }

    /**
     * Retorna a barra da uri
     * @return string
     */

    private function getUri(): string
    {
        $uri = $this->request->getUri();
        $explodeUri = strlen($this->prefix) ? explode($this->prefix, $uri) : [$uri];
        return end($explodeUri);       
    }

    /**
     * Verifica se a rota bate com o padrão e valida o método
     * @throws Exception 
     */

    private function getRoute()
    {
        $uri = $this->getUri();
        $httpMethod = $this->request->getHttpMethod();

        foreach($this->routes as $pattern => $method) {

            if(preg_match($pattern, $uri)) {
                if(isset($method[$httpMethod])) {
                    return $method[$httpMethod];
                }

                throw new Exception('Método não permitido', 405);
            }
        }
        throw new Exception('Página não encontrada', 404);      
    }


    public function run()
    {
        try {
            $route = $this->getRoute();

            if(!isset($route['controller'])) {
                throw new Exception('A URL não pôde ser processada', 500);
            }

            $args = [];

            return call_user_func_array($route['controller'], $args);

        } catch(Exception $e) {
            return new Response($e->getCode(), $e->getMessage());
        }
    }


}