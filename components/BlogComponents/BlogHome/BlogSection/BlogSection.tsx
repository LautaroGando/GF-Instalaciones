import React from "react";
import Link from "next/link";
import BlogArticleCard from "@/components/ui/BlogComponents/BlogArticleCard/BlogArticleCard";
import TitleBlog from "@/components/ui/BlogComponents/TitleBlog/TitleBlog";

const BlogSection: React.FC<{ showViewAllButton?: boolean; numbers?: number; title: string }> = ({
  showViewAllButton = true,
  numbers = 1,
  title
}) => {
  return (
    <section className="text-center sm:text-left">
      <TitleBlog text={title} />
      <p className="text-base text-blog-letterColor pb-4 sm:pb-6 xl:pb-10">
        ¿Eres nuevo en Hostinger Tutoriales? Comienza con nuestras guías y recursos más vistos.
      </p>
      
      {Array.from({ length: numbers }).map((_, i) => (
        <div key={i} className="flex flex-col justify-between md:flex-row">
          <BlogArticleCard />
          <BlogArticleCard />
          <BlogArticleCard />
        </div>
      ))}

      {showViewAllButton && (
        <div className="w-full pb-[30px]">
          <Link href={`/blog/category?name=${encodeURIComponent(title)}`} className="text-primaryColor font-semibold sm:text-[18px]">
            Ver Todo
          </Link>
        </div>
      )}
    </section>
  );
};

export default BlogSection;
