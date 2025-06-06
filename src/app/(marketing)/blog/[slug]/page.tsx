import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

interface Blog {
  id: string;
  title: string;
  summary: string;
  image: string;
  published: string;
  url?: string;
}

export default async function Page({ params }: Props) {
  const res = await fetch(`http://localhost:3000/api/blog/${params.slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return notFound();

  const post: Blog = await res.json();

  const formattedDate = new Date(post.published).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

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
        <p className="text-muted-foreground text-sm">{formattedDate}</p>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
          {post.title}
        </h1>
      </div>
      <div>
        <p>{post.summary}</p>
        {post.url && (
          <p className="mt-4 text-blue-500">
            Sumber:{" "}
            <a href={post.url} className="underline" target="_blank">
              {post.url}
            </a>
          </p>
        )}
      </div>
    </article>
  );
}
