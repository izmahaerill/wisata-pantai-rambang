"use client";

import useSWR from "swr";
import AddBlog from "./add-blog";
import EditBlog from "./edit-blog";
import DeleteBlog from "./delete-blog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { charAt, toUpperCase } from "string-ts";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type BlogPost = {
  id: string;
  title: string;
  summary: string;
  image: string;
  published: string;
};

export default function BlogTable() {
  const {
    data: blogs,
    isLoading,
    mutate,
  } = useSWR<BlogPost[]>("/api/blog", fetcher);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end">
        <AddBlog onSuccess={mutate} />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Summary</TableHead>
            <TableHead>Published</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs && blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <TableRow key={blog.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={blog.image}
                      alt={blog.title}
                      loading="lazy"
                    />
                    <AvatarFallback>
                      {toUpperCase(charAt(blog.title, 0))}
                    </AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>{blog.title}</TableCell>
                <TableCell className="max-w-[200px] truncate">
                  {blog.summary}
                </TableCell>
                <TableCell>
                  {new Date(blog.published).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </TableCell>
                <TableCell className="flex justify-end gap-2">
                  <EditBlog id={blog.id} onSuccess={mutate} />
                  <DeleteBlog id={blog.id} onSuccess={mutate} />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="py-8 text-center">
                Tidak ada blog.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
