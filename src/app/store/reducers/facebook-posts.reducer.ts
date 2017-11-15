import * as facebookPosts from './../actions/facebook-posts.actions';
import * as facebookPostsClass from './../classes/facebook-posts.class';
import * as postClass from './../classes/post.class';
import { PostInterface, LikesInterface, CommentsInterface } from './../interfaces/post.interface';
import { FacebookPostsInterface } from './../interfaces/facebook-posts.interface';

export const initialState: FacebookPostsInterface = {
  post_ids: [],
  facebook_posts: []
}

export function reducer(
    state = initialState,
    action: facebookPosts.Actions
): FacebookPostsInterface {
    switch(action.type){
        case facebookPosts.GET_FACEBOOK_POSTS_SUCCESS: {
            let post = state.facebook_posts;
            post.push(action.payload);

            let posts = new facebookPostsClass.FacebookPostsClass(state.post_ids, post)
            
            return Object.assign({}, state, posts);
        }
        case facebookPosts.GET_COMMENTS_SUCCESS: {
            let payload: CommentsInterface = action.payload;
            let posts: FacebookPostsInterface = state;
            // Find Post object by id, change the comments value
            let index = posts.facebook_posts.findIndex(i => i.id == action.payload.id);
            posts.facebook_posts[index].comments = action.payload.comments;
            return Object.assign({}, state, posts);
        }
        case facebookPosts.GET_LIKES_SUCCESS:{
            let payload: LikesInterface = action.payload;
            let posts: FacebookPostsInterface = state;
            // Find Post object by id, change the likes value
            let index = posts.facebook_posts.findIndex(i => i.id == action.payload.id);
            posts.facebook_posts[index].likes = action.payload.likes;
            return Object.assign({}, state, posts);
        }
        case facebookPosts.GET_FACEBOOK_POSTS_FAIL: {

        }
        default: {
            return state;
        }
    }
}