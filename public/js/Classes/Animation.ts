export class Animation {

    element: HTMLElement | null = null



    leftDirectionKeyframe: object[] = [
        { transform: 'translateX(40%)', opacity: '.9' },
        { opacity: '.5' },
        { transform: 'translateX(-100%)', opacity: '0' }
    ]

    options: object = {
        duration: 500,
        fillMode: 'forwards'
    }

    protected addElement(element: HTMLElement | null) {
        if(element) {
            this.element = element
        }
    }

    protected animateToLeftDirection() {
        console.log(this.element)
    }

}