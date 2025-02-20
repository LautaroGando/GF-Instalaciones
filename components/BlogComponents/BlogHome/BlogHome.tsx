"use client";

import React from "react";
import FeaturedArticleCard from "./FeaturedArticleCard/FeaturedArticleCard";
import BlogSection from "./BlogSection/BlogSection";
import BlogCategoriesData from "@/data/Blog/BlogCategoriesData/BlogCategoriesData";

const BlogHome: React.FC = () => {
  return (
    <div className="py-5 text-blog-letterColor font-medium mx-auto max-w-[360px] sm:max-w-[600px] md:max-w-[730px] lg:max-w-full">
      <FeaturedArticleCard />
      <div>
        {/* <BlogSection showViewAllButton={false} title="Instalaciónes Más Populares" /> */}
        {BlogCategoriesData.map((category, i) => (
          <BlogSection key={i} blogCategory={category} />
        ))}
      </div>
    </div>
  );
};

export default BlogHome;
