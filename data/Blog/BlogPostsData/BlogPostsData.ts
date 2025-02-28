import { IBlogPost } from "@/interfaces/IBlogPost";
import BlogCategoriesData from "../BlogCategoriesData/BlogCategoriesData";

export const BlogPostsData: IBlogPost[] = BlogCategoriesData.flatMap((category) =>
  category.blogPosts.map((post) => ({
    ...post,
    blogCategory: {
      id: category.id,
      name: category.name,
      description: category.description,
      blogPosts: [],
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
      deletedAt: category.deletedAt,
    },
  }))
);

export default BlogPostsData;
