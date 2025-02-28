import Link from "next/link";
import React from "react";
import img from "@/public/assets/images/blog/blog.png";
import Image from "next/image";
import { IBlogPost } from "@/interfaces/IBlogPost";
import { usePathname } from "next/navigation";

const BlogArticleCard: React.FC<{ post: IBlogPost }> = ({ post }) => {
  const pathName = usePathname().split("/").pop();
  const isRender = pathName !== "category";

  return (
    <div className="w-full mb-[15px] md:max-w-[230px] lg:max-w-[290px] xl:max-w-[350px]">
      <Link href={`/blog/article?articleName=${post.title}&template=1`}>
        <Image src={img} alt="Blog img" className="w-full h-[200px] rounded-[8px] group"></Image>
      </Link>
      <div className="flex flex-col gap-[6px] pt-[20px] pb-[30px] sm:gap-[12px]">
        <p className="text-primaryColor text-[14px]">
          27 aug •{" "}
          {isRender ? (
            <Link
              href={`/blog/category?name=${encodeURIComponent(post.blogCategory.name)}`}
              className="font-bold transition-all duration-100 hover:text-primaryColorHover"
            >
              {post.blogCategory.name}
            </Link>
          ) : (
            post.blogCategory.name
          )}
        </p>
        <Link href="/blog/article?name=articulo1&template=1">
        <h3 className="text-[19px] text-primaryColor font-semibold transition-all duration-200 group-hover:text-primaryColorHover hover:text-primaryColorHover sm:text-[20px] xl:text-[21px]">

            {post.title}
          </h3>
        </Link>
        <p className="text-blog-letterColor text-[16px]">{post.description}</p>
      </div>
    </div>
  );
};

export default BlogArticleCard;
