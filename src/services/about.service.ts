import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {
    comments = [
        { message: 'A' },
    ];

    addComment(cm) {
        this.comments.push(cm);
    }

    getAllComments() {
        return this.comments;
    }
}
