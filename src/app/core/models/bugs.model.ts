import { Comment } from './comments.models';

export interface Bug {
  title: string;
  description: string;
  priority: number;
  reporter: string;
  status: string;
  comments: Array<Comment>;
 }
