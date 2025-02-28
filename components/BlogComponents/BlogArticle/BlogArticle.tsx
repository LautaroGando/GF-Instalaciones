"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import ArticleTemplate from "./ArticleTemplate/ArticleTemplate";
import BlogSocialIcons from "@/components/ui/BlogComponents/BlogSocialIcons/BlogSocialIcons";

const BlogArticle: React.FC = () => {
  const searchParams = useSearchParams();

  if (!searchParams) return null;

  const articleName = searchParams.get("articleName");
  const template = searchParams.get("template");

  if (!articleName || !template || !["1", "2", "3"].includes(template)) {
    return (
      <div className="text-center text-red-500 font-bold text-xl mt-10">
        Artículo no encontrado
      </div>
    );
  }

  return (
    <div className="max-w-[817px] mx-auto relative text-blog-letterColor flex">
      <div className="flex-1 lg:pr-10">
        <ArticleTemplate template={template} />
      </div>
      <div className="mt-[50px] relative">
        <BlogSocialIcons isMobile={false} />
      </div>
    </div>
  );
};

export default BlogArticle;
