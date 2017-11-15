import { PostInterface } from "./../interfaces/post.interface"

export class FacebookPostsClass {
  constructor(
    public post_ids: string[] | null,
    public facebook_posts: PostInterface[] | null,
  ) { }
}
