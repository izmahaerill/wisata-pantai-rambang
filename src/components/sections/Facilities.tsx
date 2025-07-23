"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Heading from "../micro/Heading";

type Facility = {
  id: string;
  name: string;
  image: string;
};

export default function Facilities() {
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const res = await fetch("/api/facilities");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFacilities(data);
      } catch (err) {
        console.error("Error fetching facilities:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFacilities();
  }, []);

  if (loading) {
    return (
      <section className="w-full bg-gradient-to-b py-16">
        <div className="mx-auto max-w-7xl px-4">
          <Heading
            heading="Fasilitas Pantai"
            subheading="Nikmati beragam fasilitas yang kami sediakan, mulai dari area parkir, gazebo santai, toilet umum, hingga spot kuliner lokal yang siap memanjakan kunjunganmu."
            align="center"
          />
          <div className="grid place-items-center">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="flex animate-pulse flex-col items-center justify-center rounded-lg bg-gray-300 p-6 shadow"
                    style={{ height: "200px", width: "150px" }}>
                    <div className="mb-4 h-24 w-24 rounded-full bg-gray-400"></div>
                    <div className="h-6 w-20 rounded bg-gray-400"></div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-gradient-to-b py-16">
      <div className="mx-auto max-w-7xl px-4">
        <Heading
          heading="Fasilitas Pantai"
          subheading="Nikmati beragam fasilitas yang kami sediakan, mulai dari area parkir, gazebo santai, toilet umum, hingga spot kuliner lokal yang siap memanjakan kunjunganmu."
          align="center"
        />
        <div className="grid place-items-center">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {facilities.map((facility) => (
              <motion.div
                key={facility.id}
                whileHover={{ scale: 1.05 }}
                className="overflow-visible">
                <Card className="flex h-full w-full flex-col items-center justify-center text-center">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <div className="relative mb-4 h-24 w-24 md:h-28 md:w-28">
                      {facility.image ? (
                        <Image
                          src={
                            facility.image.startsWith("/")
                              ? facility.image
                              : `/images/facilities/${facility.image}`
                          }
                          alt={facility.name}
                          fill
                          className="object-contain dark:invert"
                          sizes="(max-width: 768px) 96px, 112px"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-200 text-sm text-gray-500">
                          No Image
                        </div>
                      )}
                    </div>
                    <h4 className="text-base font-bold">{facility.name}</h4>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
