import { PostInterface } from './post.interface';

export interface FacebookPostsInterface {
  post_ids: string[] | null;
  facebook_posts: PostInterface[] | null;
}