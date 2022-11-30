<?php
namespace App\Http;

class Response 
{
    private int $httpCode;
    private string $content;
    private string $contentType;
    private array $headers = [];

    public function __construct(int $httpCode, string $content, string $contentType = 'text/html')
    {
        $this->httpCode = $httpCode;
        $this->content= $content;
        $this->setContentType($contentType);
    }

    /**
     * Define o tipo do conteúdo
     * @param string $contentType
     */

    private function setContentType(string $contentType): void
    {
        $this->contentType = $contentType;
        $this->addHeader('Content-type', $contentType);
    }

    /**
     * Adiciona ao header o tipo de conteúdo escolhido
     * @param string $key
     * @param string $valeu
    */

    private function addHeader(string $key, string $value): void 
    {
        $this->headers[$key] = $value;
    }

    /**
     * Envia as informações sobre o status e o tipo da response
     */

    private function sendHeader(): void
    {
        http_response_code($this->httpCode);
        foreach($this->headers as $key => $value) {
            header($key.':'.$value);
        }
    }

    /**
     * Realiza a response
     */

    public function sendResponse()
    {
        $this->sendHeader();

        switch($this->contentType) {
            case 'text/html':
                print $this->content;
                break;
        }

        exit;
    }
}