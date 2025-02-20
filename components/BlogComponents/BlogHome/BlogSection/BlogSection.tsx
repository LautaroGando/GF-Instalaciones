import React from "react";
import Link from "next/link";
import BlogArticleCard from "@/components/ui/BlogComponents/BlogArticleCard/BlogArticleCard";
import TitleBlog from "@/components/ui/BlogComponents/TitleBlog/TitleBlog";
import IBlogCategory from "@/interfaces/IBlogCategory";

const BlogSection: React.FC<{ isFullCategoryView?: boolean; blogCategory: IBlogCategory }> = ({
  isFullCategoryView = false,
  blogCategory,
}) => {
  const postsToShow = isFullCategoryView
    ? blogCategory.blogPosts
    : blogCategory.blogPosts.slice(0, 3);

  return (
    <section className="text-center sm:text-left">
      <TitleBlog text={blogCategory.name} />
      <p className="text-base text-blog-letterColor pb-4 sm:pb-6 xl:pb-10">
        {blogCategory.description}
      </p>

      <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-between">
        {postsToShow.map((post) => (
          <BlogArticleCard key={post.id} post={post} />
        ))}
      </div>

      {!isFullCategoryView && (
        <div className="w-full pb-[30px]">
          <Link
            href={`/blog/category?name=${encodeURIComponent(blogCategory.name)}`}
            className="text-primaryColor font-semibold transition-all duration-100 hover:text-primaryColorHover sm:text-[18px]"
          >
            Ver Todo
          </Link>
        </div>
      )}
    </section>
  );
};

export default BlogSection;
