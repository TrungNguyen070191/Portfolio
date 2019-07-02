import { Image } from './image';
import { Comment } from './comment';

export class Post {
    postId: string;
    categoryId: string;
    userId: string;
    userName: string;
    title: string;
    shortDescription: string;
    tags: string[];
    mainImage: string;
    imgList: Image[];
    content: string;
    comments: Comment[];
    createdDate: string;
}
