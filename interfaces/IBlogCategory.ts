import { IBlogPost } from "./IBlogPost";

export interface IBlogCategory {
  id: string;
  name: string;
  description: string
  blogPosts: IBlogPost[]
  createdAt: string
  updatedAt: string
  deletedAt?: string | null;
}

export default IBlogCategory;
