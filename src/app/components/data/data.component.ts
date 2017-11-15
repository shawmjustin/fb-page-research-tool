import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FacebookPostsInterface } from './../../store/interfaces/facebook-posts.interface';
import * as facebookPostsActions from './../../store/actions/facebook-posts.actions'
import * as facebookPostsClass from './../../store/classes/facebook-posts.class';
import { FacebookPostsService } from './../../store/services/facebook-posts.service';
import { PostInterface } from './../../store/interfaces/post.interface';

interface AppState {
  facebook_posts_store: FacebookPostsInterface;
}

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  token: string;
  posts: PostInterface[];

  constructor(private store: Store<AppState>, private service: FacebookPostsService) { 
    store.select('facebook_posts_store').subscribe((store) => {
      this.posts = store.facebook_posts;
    })
  }

  ngOnInit() {
    this.store.dispatch(new facebookPostsActions.GetFacebookPostsAction());
    this.service.getPostIds();
  }

}
