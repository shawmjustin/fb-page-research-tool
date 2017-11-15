export interface PostInterface {
  id: string | null;
  likes: number | null;
  comments: number | null;
}

export interface CommentsInterface {
  id: string;
  comments: number;
}

export interface LikesInterface {
  id: string;
  likes: number;
}