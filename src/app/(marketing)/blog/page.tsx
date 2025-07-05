"use client";

import { Card } from "@/components/ui/card";
import Heading from "@/components/micro/Heading";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Footer } from "@/components/sections/Footer";

type BlogPost = {
  id: string;
  title: string;
  summary: string;
  image: string;
  published: string;
  url?: string;
};

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) =>
        setPosts(
          data.map((post: any) => ({
            ...post,
            published: new Date(post.published).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }),
          }))
        )
      );
  }, []);

  return (
    <>
      <main className="pt-16">
        <Heading
          heading="Blog Posts"
          subheading="Berita, informasi wisata, dan potret keindahan Pantai Rambang langsung dari sumbernya."
        />
        <section className="py-2">
          <div className="container flex flex-col items-center gap-16">
            <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
              {posts.map((post) => (
                <Card
                  key={post.id}
                  className="order-last border-0 bg-transparent shadow-none sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2">
                  <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                    <div className="sm:col-span-5">
                      <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                        <Link
                          href={`/blog/${post.id}`}
                          className="hover:underline">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground mt-4 line-clamp-6 md:mt-5 md:line-clamp-4 lg:line-clamp-6">
                        {post.summary}
                      </p>
                      <div className="mt-6 flex items-center space-x-4 text-sm md:mt-8">
                        <span className="text-muted-foreground">
                          {post.published}
                        </span>
                      </div>
                    </div>
                    <div className="order-first sm:order-last sm:col-span-5">
                      <Link href={`/blog/${post.id}`} className="block">
                        <div className="border-border aspect-[16/9] overflow-clip rounded-lg border">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="fade-in h-full w-full object-cover transition-opacity duration-200 hover:opacity-70"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
