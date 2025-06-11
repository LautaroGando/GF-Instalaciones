import React from "react";
import { articleParagraphs } from "@/data/TemplatesData/Template1Data";
import BlogSocialIcons from "@/components/ui/BlogComponents/BlogSocialIcons/BlogSocialIcons";
import BlogParagraph from "@/components/ui/BlogComponents/BlogParagraph/BlogParagraph";
import BlogPostsData from "@/data/Blog/BlogPostsData/BlogPostsData";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const Template1: React.FC = () => {
  const searchParams = useSearchParams();
  const articleName = searchParams.get("articleName");
  
  const post = BlogPostsData.find((post) => post.title === articleName);

  if (!post) {
    return (
      <div className="text-center text-red-500 font-bold text-xl mt-10">
        Artículo no encontrado
      </div>
    );
  }

  return (
    <div className="py-[40px] max-w-[730px] mx-auto">
      <div  className="flex gap-[15px] pb-[20px] text-[14px] text-primaryColor">
        <Link href={`/blog/category?name=${encodeURIComponent(post?.blogCategory.name)}`} className="bg-primaryColor/20 font-semibold py-[2px] px-3 rounded-[50px] transition-all duration-200 hover:bg-primaryColorHover/30">{post?.blogCategory.name}</Link>
        <p className="font-semibold">Feb 10, 2025</p>
      </div>

      <h2 className="text-[20px] text-primaryColor font-bold sm:text-[30px] sm:mb-[15px] xl:text-[46px]">
        {post?.title}
      </h2>
      <BlogSocialIcons isMobile={true} />
      <div className="text-[14px] sm:text-[16px]">
        {articleParagraphs.map((text, index) => (
          <BlogParagraph key={index} text={text} />
        ))}
      </div>
    </div>
  );
};

export default Template1;
