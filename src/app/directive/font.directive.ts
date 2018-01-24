import { Directive, Renderer2, ElementRef, HostListener, Input } from '@angular/core';

// change font size by clicking: click -> larger, click -> default etc...
@Directive({
    selector: '[appFont]'
})
export class FontDirective {
    // tslint:disable-next-line:no-input-rename
    @Input('appFont') fontSize: string;
    private el: HTMLElement;

    private isClick = false;

    constructor(el: ElementRef, private renderer: Renderer2) {
        this.el = el.nativeElement;
    }

    @HostListener('mousedown') onMouseDown() {
        this.isClick = !this.isClick;
        this.isClick ? this.addFont() : this.removeFont();

    }

    private addFont() {
        this.renderer.setStyle(
            this.el,
            'fontSize',
            this.fontSize ? this.fontSize : '20px'
        );
    }

    private removeFont() {
        this.renderer.removeStyle(
            this.el,
            'fontSize'
        );
    }
}
