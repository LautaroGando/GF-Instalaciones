import IBlogCategory from "./IBlogCategory";
import IBlogPostContent from "./IBlogPostContent";

export type BlogPostTemplate = "TEMPLATE_A" | "TEMPLATE_B" | "TEMPLATE_C";
export type BlogPostStatus = "PUBLICADO" | "BORRADOR";

export interface IBlogPost {
  id: string;
  title: string;
  isHighlight: boolean;
  description: string;
  blogCategory: IBlogCategory;
  blogPostTemplate: BlogPostTemplate;
  status: BlogPostStatus;
  content: IBlogPostContent[];
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
}
