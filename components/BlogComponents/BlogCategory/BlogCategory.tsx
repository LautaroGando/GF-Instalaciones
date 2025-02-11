"use client";

import React from "react";
import BlogSection from "../BlogHome/BlogSection/BlogSection";
import { useSearchParams } from "next/navigation";


const BlogCategory: React.FC = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("name");

  if(!category) return

  return (
    <div>
      <BlogSection showViewAllButton={false} numbers={4} title={category}/>
    </div>
  );
};

export default BlogCategory;
