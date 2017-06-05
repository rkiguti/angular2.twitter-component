import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'like',
    template: `
        <i class="glyphicon glyphicon-heart"  
            [style.color]="isLiked ? 'deeppink' : '#ccc'"
            (click)="onClick()">
        </i>
        <span>{{ counter }}</span>
    `,
    styles: ['.glyphicon { cursor: pointer; }']
})
export class LikeComponent {
    @Input() isLiked = false;
    @Input() counter = 0;

    @Output() change = new EventEmitter();

    onClick() {
        if (this.isLiked) {
            this.counter--;
        } else {
            this.counter++;
        }
        this.isLiked = !this.isLiked; 
        this.change.emit({ isLiked: this.isLiked, counter: this.counter });
    }
}