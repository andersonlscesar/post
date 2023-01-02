<?php
namespace App\Http;

use Closure;
use Exception;
use ReflectionFunction;

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
     * @return Router
     */

    private function addRouter(string $method, string $route, array $params = []): Router
    {
        foreach($params as $key => $value) {
            if($value instanceof Closure) {
                unset($params[$key]);
                $params['controller'] = $value;
            }
        }

        $params['variables'] = [];
        $patterVariables = '/{(.*?)}/';

        if(preg_match_all($patterVariables, $route, $matches)) {
            $route = preg_replace($patterVariables, '(.*?)', $route);
            $params['variables'] = $matches[1];

        } 
        
        $patternRoute = '/^'.str_replace('/', '\/', $route).'$/';
        $this->routes[$patternRoute][$method] = $params;
        return $this;
    }

    /**
     * Método responsável por criar as rotas do sistema
     * @param string $route
     * @param array $params
     * @return Router
     */

    public function get(string $route, array $params = []): Router
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

            if(preg_match($pattern, $uri, $matches)) {
                if(isset($method[$httpMethod])) {
                    unset($matches[0]);
                    $keys = $method[$httpMethod]['variables'];
                    $method[$httpMethod]['variables'] = array_combine($keys, $matches);
                    $method[$httpMethod]['variables']['request'] = $this->request;
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
            $reflection = new ReflectionFunction($route['controller']);

            foreach($reflection->getParameters() as $parameter) {
                $name = $parameter->getName();
                $args[$name] = $route['variables'][$name] ?? '';
            }
       
            return call_user_func_array($route['controller'], $args);

        } catch(Exception $e) {
            return new Response($e->getCode(), $e->getMessage());
        }
    }

     /**
      * Valida se o que está sendo passado no parâmetro da closure é numérico
      * @param string $param
      * @return void
      */

    public function whereNumber(string $param): void 
    {
        $route = $this->getRoute()['variables'];
        if(isset($route[$param])) {
            if(!preg_match('/^[0-9]*$/', $route[$param])) die('Parâmetro inválido');
        }
     
    }

}