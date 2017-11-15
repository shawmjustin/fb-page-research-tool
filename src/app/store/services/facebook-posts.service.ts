import { Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CONSTANTS } from './../../constants';
import * as postClass from './../classes/post.class';
import { PostInterface, LikesInterface, CommentsInterface } from './../interfaces/post.interface';
import { FacebookPostsInterface } from './../interfaces/facebook-posts.interface';
import * as facebookPostsClass from './../classes/facebook-posts.class';
import * as facebookPostsActions from './../actions/facebook-posts.actions';

// ngrx
import { Store } from '@ngrx/store';

// rxjs
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';

interface AccessToken {
  accessToken: string;
}

interface DataObject {
  id: string;
}

interface Paging {
  next: string;
}

interface Summary {
  total_count: number;
}

interface ResponseObject {
  data: DataObject[];
  error: any;
  paging: Paging;
  summary: Summary;
}



@Injectable()
export class FacebookPostsService {
  posts: PostInterface[];
  post: PostInterface;


  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private store: Store<FacebookPostsInterface>) { }

  getAccessToken(){
    let token: string = null;
    this.activatedRoute.queryParams.subscribe((params: AccessToken) => {
      token = params.accessToken;
    });
    return token;
  }

  getPostIds(){
    let accessToken: string = this.getAccessToken();
    let ids: DataObject[];
    let url = CONSTANTS.graph_api_url + CONSTANTS.ids.noahs_dad + CONSTANTS.feed + CONSTANTS.access_token + accessToken;

    try { 
      this.http.get(url)
      .subscribe((res: ResponseObject)=> {
        if(res.data){
           url = res.paging.next;
          var data_length: number = 5;
          var arr: string[] = [];

          res.data.forEach(obj => {
            arr.push(obj.id);
          });
          
          // do{
          //   this.http.get(url)
          //   .subscribe((res: ResponseObject) => {
          //     res.data.forEach((obj: DataObject) => {
          //       arr.push(obj.id);
          //     })
          //     console.log(res.data.length)
          //     data_length++;
          //     url = res.paging.next;
          //   });
          // } while(data_length > 0);

          arr.forEach((id: string) => {
            this.post = new postClass.Post(null, 0, 0);
            this.post.id = id;
            this.getIds(id);
            this.getLikes(id, accessToken)
            this.getComments(id, accessToken);
          })
        }
      });
    }
    catch(e){
      console.log("ERROR")
    }
    return of(new facebookPostsActions.StartRequestsAction());
  }

  getIds(id){
    const post = new postClass.Post(id, null, null);
    this.store.dispatch(new facebookPostsActions.GetFacebookPostsSuccessAction(post));
    return;
  }

  getComments(id: string, accessToken: string){
    this.http.get(CONSTANTS.graph_api_url + id + CONSTANTS.comments + CONSTANTS.access_token + accessToken)
    .subscribe((res: ResponseObject) => {
      const comments: number = res.summary.total_count;
      const obj: CommentsInterface = {
        id: id,
        comments: comments
      }
      this.store.dispatch(new facebookPostsActions.GetCommentsSuccessAction(obj));
    })
  }

  getLikes(id: string, accessToken: string){
    this.http.get(CONSTANTS.graph_api_url + id + CONSTANTS.likes + CONSTANTS.access_token + accessToken)
    .subscribe((res: ResponseObject) => {
      const likes = res.summary.total_count;
      const obj: LikesInterface = {
        id: id,
        likes: likes
      }
      this.store.dispatch(new facebookPostsActions.GetLikesSuccessAction(obj))
    })
  }
}
