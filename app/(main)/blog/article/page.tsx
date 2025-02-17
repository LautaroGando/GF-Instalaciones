import BlogArticle from "@/components/BlogComponents/BlogArticle/BlogArticle";
import { Suspense } from "react";

export default function BlogPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogArticle />
    </Suspense>
  );
}
