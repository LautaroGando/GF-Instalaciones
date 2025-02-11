"use client";

import React from "react";
import FeaturedArticleCard from "./FeaturedArticleCard/FeaturedArticleCard";
import BlogSection from "./BlogSection/BlogSection";

const BlogHome: React.FC = () => {


  return (
    <div className="py-5 text-blog-letterColor font-medium mx-auto max-w-[360px] sm:max-w-[600px] md:max-w-[730px] lg:max-w-full">
      <FeaturedArticleCard />
      <div>
        <BlogSection showViewAllButton={false} title="Instalaciónes Más Populares"/>
        <BlogSection title="Instalaciónes Aereas"/>
        <BlogSection title="Instalaciónes Acuaticas"/>
        <BlogSection title="Instalaciónes Terrestres"/>
      </div>
    </div>
  );
};

export default BlogHome;
