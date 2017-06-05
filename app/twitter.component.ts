import { Component, Input, Output, EventEmitter } from '@angular/core'
import { TwitterService } from './twitter.service'

@Component({
    selector: 'twitter',
    template: `
        <ul class="list-unstyled">
            <li *ngFor="let feed of twitterFeed" class="media">
                <div class="media-left">
                    <a href="#">
                        <img class="media-object" [src]="feed.picture" alt="...">
                    </a>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">{{ feed.title }}<span>{{ feed.user }}</span></h4>
                    <p>{{ feed.message }}</p>
                    <like [isLiked]="feed.isLiked" [counter]="feed.likeCount"></like>
                </div>
            </li>
        </ul>
    `,
    styles: [`
        img {
            border-radius: 10px;
        }

        h4 {
            font-weight: bold;
        }

        h4 > span {
            color: #ccc;
            margin-left: 6px;
        }
    `],
    providers: [ TwitterService ]
})
export class TwitterComponent {
    twitterFeed;

    constructor(twitterService: TwitterService) {
        this.twitterFeed = twitterService.getFeed();
    }
}