import { AnimationElement } from "../Classes/Animation.js";
export function formSwitch() {
    const linkCadElement = document.querySelector('a[data-js="cad--link"]');
    const linkLoginElement = document.querySelector('a[data-js="login--link"]');
    // Verificando existência dos elementos
    if (linkCadElement !== null && linkLoginElement !== null) {
        const animationElement = new AnimationElement;
        /**
         * Trecho responsável por identificar o click no link de "cadastre-se aqui", assim fazendo com que o form de login
         * vá para a esquerda e desapereça e em seguida fazendo surgir o form de cadastro, que virá da direita.
         */
        linkCadElement.addEventListener('click', (e) => {
            e.preventDefault();
        });
    }
}
