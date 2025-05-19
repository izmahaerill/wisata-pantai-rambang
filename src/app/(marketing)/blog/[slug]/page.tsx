import { posts } from "@/lib/blog-posts/posts-data";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default function Page({ params }: Props) {
  const post = posts.find((p) => p.id === params.slug);

  if (!post) return notFound();

  return (
    <article className="prose prose-neutral dark:prose-invert mx-auto pt-28 md:pt-16">
      <div className="mb-8 text-center">
        <div className="mb-12">
          <div className="relative aspect-[16/9] overflow-hidden rounded-md">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <p className="text-muted-foreground text-sm">{post.published}</p>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
          {post.title}
        </h1>
      </div>
      <div>
        <p>{post.summary}</p>
        <p className="mt-4 text-blue-500">
          Sumber:{" "}
          <a href={post.url} className="underline" target="_blank">
            {post.url}
          </a>
        </p>
      </div>
    </article>
  );
}
