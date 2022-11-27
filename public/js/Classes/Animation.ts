export class AnimationForm {

    element!: HTMLElement

    // -------------------------------------------------------
    // Joga o elemento para a esquerda
    // Objeto com as propridades do @keyframes
    leftDirectionKeyframe: Keyframe[] = [
        { transform: 'translateX(0%)', opacity: '1' },
        { transform: 'translateX(30%)', opacity: '.9' },
        { opacity: '.5' },
        { transform: 'translateX(-100%)', opacity: '0' }
    ]

    // Opções de tempo e estilo da animação
    options: object = {
        duration: 300,
        easing: 'ease-in-out',
        fill: 'forwards',
        delay: 100
    }
    // -------------------------------------------------------
    // Traz algum elemente que esteja na direita
    fromRightDirectionKeyframe: Keyframe[] = [
        { transform: 'translateX(200%)', opacity: '0' },
        { transform: 'translateX(-50%)', opacity: '.5' },
        { transform: 'translateX(0%)', opacity: '1'}
    ]

    optionsForRightDirectionKeyframe: object = {
        duration: 300,
        delay: 200,
        easing: 'ease-in-out',
        fill: 'forwards'
    }

    // -------------------------------------------------------
    // Manda o elemento de volta para a direita
    fromRightDirectionKeyframeReverse: Keyframe[] = [
        { transform: 'translateX(0%)', opacity: '1'},
        { transform: 'translateX(-50%)', opacity: '.5' },
        { transform: 'translateX(200%)', opacity: '0' }
    ]


    // -------------------------------------------------------
    // Traz o elemento da esquerda
    leftDirectionKeyframeReverse: Keyframe[] = [
        { transform: 'translateX(-100%)', opacity: '0' },
        { transform: 'translateX(30%)', opacity: '.5' },
        { opacity: '.9' },
        { transform: 'translateX(0%)', opacity: '1' }
    ]

    optionsLeftReverse: object = {
        duration: 300,
        easing: 'ease-in-out',
        fill: 'forwards',
        delay: 500
    }

    /**
     * Método responsável por definir o elemento que será animado
     * @param element 
     * @returns { AnimationForm }
     */

    protected addElement(element: HTMLElement | null): AnimationForm {
        if(element) {           
            this.element = element            
        }
        return this
    }

     animateToLeftDirection() {
        this.element.animate(this.leftDirectionKeyframe, this.options)
        this.element.style.pointerEvents = 'none'

    }

    animateFromRightDirection() {
        this.element.animate(this.fromRightDirectionKeyframe, this.optionsForRightDirectionKeyframe)
        this.element.style.pointerEvents = 'all'
    }

    animateToRightDirection() {
        this.element.animate(this.fromRightDirectionKeyframeReverse, this.optionsForRightDirectionKeyframe)
        this.element.style.pointerEvents = 'none'
    }

    animateFromLeftDirection() {
        this.element.animate(this.leftDirectionKeyframeReverse, this.optionsLeftReverse)
        this.element.style.pointerEvents = 'all'
    }

}