import { allBlogs } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

import Link from "next/link";

export default function Blog() {
  const blogs = allBlogs.sort((x, y) => {
    return compareDesc(new Date(x.date), new Date(y.date));
  });

  return (
    <div className="py-8">
      <h1 className="mb-8 scroll-m-20 text-center text-4xl font-extrabold tracking-tight">
        All Blogs
      </h1>
      <div className="flex flex-col gap-8">
        {blogs.map((blog, idx) => (
          <Link key={idx} href={blog.url} className="flex items-center gap-4">
            <div className="w-full max-w-[200px]">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={blog.image ?? ""}
                  alt={blog.title}
                  fill
                  className="h-full w-full rounded-md object-cover"
                />
              </AspectRatio>
            </div>
            <div>
              <p>{blog.title}</p>
              <time
                dateTime={blog.date}
                className="text-muted-foreground text-xs">
                {format(parseISO(blog.date), "MMMM d, yyyy")}
              </time>
              <p className="text-sm">{blog.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
