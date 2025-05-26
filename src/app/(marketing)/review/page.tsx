"use client";

import { useState, useEffect } from "react";
import Heading from "@/components/micro/Heading";
import AddReview from "@/components/reviewer/add-reviewer";
import { Button } from "@/components/ui/button";
import { Testimonials } from "@/components/ui/testimonials";

export default function Review() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState<
    { image: string; name: string; date: string; text: string }[]
  >([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/review");
        if (!res.ok) throw new Error("Failed to fetch reviews");

        const data = await res.json();

        const formatted = data.map((r: any) => ({
          image: r.image || "/images/review/mubariz.jpg", // default avatar
          name: r.username,
          date: new Date(r.date).toISOString().split("T")[0],
          text: r.text,
        }));

        setReviews(formatted);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const handleAddReview = async (newReview: {
    username: string;
    date: string;
    text: string;
  }) => {
    try {
      const response = await fetch("/api/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });

      if (!response.ok) throw new Error("Failed to post review");

      const savedReview = await response.json();

      const formattedReview = {
        image: savedReview.image || "/images/review/mubariz.jpg",
        name: savedReview.username,
        date: new Date(savedReview.date).toISOString().split("T")[0],
        text: savedReview.text,
      };

      setReviews((prev) => [formattedReview, ...prev]);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <>
      <Heading
        heading="Read what people are saying"
        subheading="Real feedback from our virtual visitors!"
      />
      <Testimonials testimonials={reviews} />
      <Button
        className="mt-4 underline underline-offset-4"
        onClick={() => setIsModalOpen(true)}>
        Write Your Own Review Here!
      </Button>
      <AddReview
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onSubmit={handleAddReview}
      />
    </>
  );
}
