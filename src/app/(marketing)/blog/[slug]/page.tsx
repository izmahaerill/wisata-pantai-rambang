import { Footer } from "@/components/sections/Footer";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: decodeURIComponent(params.slug),
  };
}

export default async function Page({ params }: Props) {
  const res = await fetch(`http://localhost:3000/api/blog/${params.slug}`);

  if (!res.ok) return notFound();

  const post = await res.json();

  const formattedDate = new Date(post.published).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <article className="prose prose-neutral dark:prose-invert mx-auto pt-28 md:pt-16">
        <div className="mb-8 text-center">
          <div className="mb-12">
            <div className="relative aspect-[16/9] overflow-hidden rounded-md">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <p className="text-muted-foreground text-sm">{formattedDate}</p>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            {post.title}
          </h1>
        </div>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: post.summary.replace(/\n/g, "<br />"),
            }}
          />
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
      <Footer />
    </>
  );
}
