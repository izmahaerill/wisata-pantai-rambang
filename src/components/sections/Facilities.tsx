"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  ParkingSquare,
  ShowerHead,
  Utensils,
  TentTree,
  Landmark,
  Church,
  Sun,
} from "lucide-react";
import Heading from "../micro/Heading";
const facilities = [
  { icon: ParkingSquare, name: "Parkir Luas" },
  { icon: ShowerHead, name: "Kamar Bilas" },
  { icon: Utensils, name: "Warung Makan" },
  { icon: TentTree, name: "Area Camping" },
  { icon: Landmark, name: "Gazebo" },
  { icon: Church, name: "Musholla" },
  { icon: Sun, name: "Spot Sunrise" },
];

export default function Facilities() {
  return (
    <section className="w-full bg-gradient-to-b py-16">
      <div className="mx-auto max-w-7xl px-0">
        <Heading
          heading="Fasilitas Pantai"
          subheading="Nikmati beragam fasilitas yang kami sediakan, mulai dari area parkir, gazebo santai, toilet umum, hingga spot kuliner lokal yang siap memanjakan kunjunganmu."
          align="center"
        />
        <div className="flex gap-4 overflow-x-auto px-4 md:flex-wrap md:justify-center md:gap-8 md:px-0">
          {facilities.map((facility, index) => (
            <Card
              key={index}
              className="group text-card-foreground bg-card flex w-48 flex-shrink-0 flex-col items-center rounded-2xl p-6 transition-all duration-300 hover:shadow-lg sm:w-60">
              <facility.icon className="text-muted-foreground group-hover:text-primary mb-4 h-12 w-12 transition-colors duration-300" />
              <CardContent className="p-0 text-center">
                <p className="text-card-foreground group-hover:text-primary text-base font-semibold">
                  {facility.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
