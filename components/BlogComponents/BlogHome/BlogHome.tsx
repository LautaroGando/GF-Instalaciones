"use client";

import React from "react";
import FeaturedArticleCard from "./FeaturedArticleCard/FeaturedArticleCard";
import BlogSection from "./BlogSection/BlogSection";
import { useSearchParams } from "next/navigation";

const BlogHome: React.FC = () => {
  const searchParams = useSearchParams();

  const category = searchParams.get("category");
  const template = searchParams.get("template");
  const id = searchParams.get("id");

  return (
    <div className="py-5 text-blog-letterColor font-medium mx-auto max-w-[360px] sm:max-w-[600px] md:max-w-[730px] lg:max-w-full">
      <FeaturedArticleCard />

      {}

      <div>
        <BlogSection showViewAllButton={false} title="Instalaciónes Más Populares"/>
        <BlogSection title="Instalaciónes Aereas"/>
        <BlogSection title="Instalaciónes Acuaticas"/>
        <BlogSection title="Instalaciónes Terrestres"/>
        <h1>Categoría: {category}</h1>
        <p>Template: {template}</p>
        <p>ID: {id}</p>
      </div>
    </div>
  );
};

export default BlogHome;
