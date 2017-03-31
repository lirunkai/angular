import {Component} from "@angular/core";

@Component({
    selector: 'empty',
    template: "<h3>404</h3>",
    styles: [`
        :host {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    `]
})

export class EmptyComponent {}