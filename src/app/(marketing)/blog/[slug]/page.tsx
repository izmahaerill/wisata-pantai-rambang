import { AspectRatio } from "@/components/ui/aspect-ratio";
import { allBlogs } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import Image from "next/image";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return allBlogs.map((blog) => ({
    slug: blog._raw.flattenedPath,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const { slug } = await params;

  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === slug);

  if (!blog) {
    return;
  }

  return {
    title: blog.title,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === slug);

  if (!blog) {
    return;
  }

  return (
    <article className="prose prose-neutral dark:prose-invert mx-auto py-8">
      <div className="mb-8 text-center">
        <div className="mb-12">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={blog.image ?? ""}
              alt={blog.title}
              fill
              className="h-full w-full rounded-md object-cover"
            />
          </AspectRatio>
        </div>
        <time dateTime={blog.date} className="text-muted-foreground text-sm">
          {format(parseISO(blog.date), "MMMM d, yyyy")}
        </time>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
          {blog.title}
        </h1>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: blog.body.html,
        }}
      />
    </article>
  );
}
