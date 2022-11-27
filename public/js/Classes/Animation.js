export class Animation {
    constructor() {
        this.element = null;
        this.leftDirectionKeyframe = [
            { transform: 'translateX(40%)', opacity: '.9' },
            { opacity: '.5' },
            { transform: 'translateX(-100%)', opacity: '0' }
        ];
        this.options = {
            duration: 500,
            fillMode: 'forwards'
        };
    }
    addElement(element) {
        if (element) {
            this.element = element;
        }
    }
    animateToLeftDirection() {
        console.log(this.element);
    }
}
