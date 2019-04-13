import { Comments } from "./comments.models";

export interface Bugs {
  title: string;
  description: string;
  priority: number;
  reporter: string;
  status: string;
  comments: Array<Comments>;
 }
