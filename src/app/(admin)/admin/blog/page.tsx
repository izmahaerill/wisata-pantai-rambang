"use client";

import dynamic from "next/dynamic";

const BlogTable = dynamic(() => import("@/components/admin/blog/blog-table"), {
  ssr: false,
});

export default function AdminBlog() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
      <BlogTable />
    </div>
  );
}
