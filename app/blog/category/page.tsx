import BlogCategory from "@/components/BlogComponents/BlogCategory/BlogCategory";
import { Suspense } from "react";

export default function BlogCategoryPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogCategory />
    </Suspense>
  );
}
