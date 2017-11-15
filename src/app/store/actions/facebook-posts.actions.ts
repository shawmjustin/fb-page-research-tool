import { Action } from '@ngrx/store';
import { FacebookPostsInterface } from './../interfaces/facebook-posts.interface';
import { PostInterface, CommentsInterface, LikesInterface } from './../interfaces/post.interface';

export const GET_FACEBOOK_POSTS = '[Facebook Posts] Get Posts';
export const GET_FACEBOOK_POSTS_SUCCESS = '[Facebook Posts] Get Posts Success';
export const GET_FACEBOOK_POSTS_FAIL = '[Facebook Posts] Get Posts Fail';
export const START_REQUESTS = "[Facebook Posts] Start Requests"; 
export const GET_COMMENTS_SUCCESS = "[Facebook Posts] Get Comments Success";
export const GET_COMMENTS_FAIL = "[Facebook Posts] Get Comments Fail";
export const GET_LIKES_SUCCESS = "[Facebook Posts] Get Likes Success";
export const GET_LIKES_FAIL = "[Facebook Posts] Get Likes Fail";


export class StartRequestsAction implements Action {
  readonly type = START_REQUESTS;
}

// Get Facebook Posts Ids actions
export class GetFacebookPostsAction implements Action {
  readonly type = GET_FACEBOOK_POSTS;
}

export class GetFacebookPostsSuccessAction implements Action {
  readonly type = GET_FACEBOOK_POSTS_SUCCESS;
  
  constructor(public payload: PostInterface) { }
}

export class GetFacebookPostsFailAction implements Action {
  readonly type = GET_FACEBOOK_POSTS_FAIL;
  
  constructor(public payload: any) { }
}

export class GetCommentsSuccessAction implements Action {
  readonly type = GET_COMMENTS_SUCCESS;
  
  constructor(public payload: CommentsInterface) { }
}

export class GetCommentsFailAction implements Action {
  readonly type = GET_COMMENTS_FAIL;
  
  constructor(public payload: any) { }
}

export class GetLikesSuccessAction implements Action {
  readonly type = GET_LIKES_SUCCESS;
  
  constructor(public payload: LikesInterface) { }
}

export class GetLikesFailAction implements Action {
  readonly type = GET_LIKES_FAIL;
  
  constructor(public payload: any) { }
}

export type Actions = 
    | GetFacebookPostsAction
    | GetFacebookPostsFailAction
    | GetFacebookPostsSuccessAction
    | StartRequestsAction
    | GetCommentsSuccessAction
    | GetLikesSuccessAction
