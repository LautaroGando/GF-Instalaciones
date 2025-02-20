"use client";
import React from "react";
import BlogSection from "../BlogHome/BlogSection/BlogSection";
import { useSearchParams } from "next/navigation";
import BlogCategoriesData from "@/data/Blog/BlogCategoriesData/BlogCategoriesData";
import Link from "next/link";


const BlogCategory: React.FC = () => {
  const searchParams = useSearchParams();
  const categoryName = searchParams.get("name");

  const category = BlogCategoriesData.find((ctr)=> ctr.name === categoryName)

  if (!category) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-bold text-red-500">Categoría no encontrada</h2>
        <Link href="/blog" className="text-primaryColor hover:text-primaryColorHover">
          Volver al Blog
        </Link>
      </div>
    );
  }

  

  return (
    <div>
      <BlogSection isFullCategoryView ={true} blogCategory={category}/>
    </div>
  );
};

export default BlogCategory;
