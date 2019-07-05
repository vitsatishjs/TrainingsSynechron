import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'icon-input',
    templateUrl: 'icon-input.component.html'
})

export class IconInputComponent implements OnInit {
    @Input() icon: string;

    constructor() { }

    ngOnInit() { }
}