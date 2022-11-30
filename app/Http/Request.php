<?php
namespace App\Http;

class Request 
{
    private string $uri;
    private string $httpMethod;
    private array $postVariables = [];
    private array $getVariables = [];
    private array $headers = [];

    public function __construct()
    {
        $this->uri              = $_SERVER['REQUEST_URI'] ?? '';
        $this->httpMethod       = $_SERVER['REQUEST_METHOD'] ?? '';
        $this->postVariables    = $_POST ?? [];
        $this->getVariables     = $_GET ?? [];
        $this->headers          = getallheaders();
    }

    /**
     * Retorna a URI
     * @return string
     */

    public function getUri(): string
    {
        return $this->uri;
    }

    /**
     * Retorna o método usado no momento da requisição
     * @return string
    */

    public function getHttpMethod(): string 
    {
        return $this->httpMethod;
    }

    /**
     * Retorna o array com os valores do post
     * @return array
     */

    public function getPostVariables(): array 
    {
        return $this->postVariables;
    }

    /**
     * Retorna o array com os valores do get
     * @return array
     */

    public function getQueryVariables(): array 
    {
        return $this->getVariables;
    }

    /**
     * retorna as informações do header da requisição
     * @return array
     */

    public function getHeaders(): array 
    {
        return $this->headers;
    }
}