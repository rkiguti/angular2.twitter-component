export class TwitterService {
    getFeed() {
        return [
            {
                picture: 'http://lorempixel.com/100/100/people/',
                title: 'Windward',
                message: 'Looking for a better company reporting or docgen app?',
                user: '@windwardstudios',
                likeCount: 1,
                isLiked: true
            },
            {
                picture: 'http://lorempixel.com/100/100/people/1',
                title: 'AngularJS News',
                message: 'Right relevance: influencers, Articles and Conversations',
                user: '@angularjs_news',
                likeCount: 5,
                isLiked: true
            },
            {
                picture: 'http://lorempixel.com/100/100/people/2',
                title: 'UX & Bootstrap',
                message: '10 reasons why web projects fail',
                user: '@3rdwave',
                likeCount: 0,
                isLiked: false
            }
        ];
    }
}