import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { FacebookPostsService } from './../services/facebook-posts.service';
import * as actions from './../actions/facebook-posts.actions';

// rxjs
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class FacebookPostsEffects {
    constructor(
        private service: FacebookPostsService,
        private actions$: Actions,
    ) { }

    @Effect() getIds$: Observable<Action> = this.actions$.ofType(actions.GET_FACEBOOK_POSTS)
    .mergeMap(() => this.service.getPostIds());
}