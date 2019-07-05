import { Directive, ElementRef, Renderer2, OnInit, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective implements OnInit {
    
    // @Input() highlightColor: string;
    @Input('highlight') highlightColor: string;

    borderColor: string;

    constructor(private element: ElementRef<HTMLElement>,
        private renderer: Renderer2) { }

    ngOnInit(): void {
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        console.log(this.highlightColor);
        // this.renderer.setStyle(this.element.nativeElement, "background-color", "skyblue");
        this.renderer.setStyle(this.element.nativeElement, "background-color", this.highlightColor);
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.renderer.removeStyle(this.element.nativeElement, "background-color");
    }
}

// import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

// @Directive({
//     selector: '[highlight]'
// })
// export class HighlightDirective implements OnInit {
//     constructor(private element: ElementRef<HTMLElement>,
//         private renderer: Renderer2) { }

//     ngOnInit(): void {
//         this.element.nativeElement.addEventListener('mouseenter', () => {
//             this.renderer.setStyle(this.element.nativeElement, "background-color", "skyblue");
//         });

//         this.element.nativeElement.addEventListener('mouseleave', () => {
//             this.renderer.removeStyle(this.element.nativeElement, "background-color");
//         });
//     }
// }