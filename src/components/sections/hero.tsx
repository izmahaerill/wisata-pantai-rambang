import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-20 pb-16 text-center text-white">
      <div className="container mx-auto max-w-screen-lg space-y-6 sm:space-y-8 md:space-y-10">
        <div>
          <Badge
            variant="outline"
            className="animate-pulse rounded-full border-0 bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-2 text-sm font-medium text-white shadow-lg">
            ✨ Better Experience With VR Tour • 360°
          </Badge>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Badge
            variant="outline"
            className="flex items-center gap-2 rounded-full border-emerald-500 bg-emerald-600 px-4 py-1 text-xs text-white">
            <img
              src="https://fav.farm/%F0%9F%8F%96%EF%B8%8F"
              alt="Pantai"
              className="h-4 w-4"
            />
            PANTAI LOKAL
          </Badge>
          <Badge
            variant="outline"
            className="rounded-full border-orange-500 bg-orange-600 px-4 py-1 text-xs text-white">
            🔥 TRENDING
          </Badge>
          <Badge
            variant="outline"
            className="rounded-full border-purple-500 bg-purple-600 px-4 py-1 text-xs text-white">
            ⭐ PREMIUM
          </Badge>
        </div>

        <h1 className="text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
          Rasakan Keindahan Pantai
          <br />
          Rambang Lewat Tour Virtual 360°
        </h1>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
          Kunjungi Pantai Rambang dengan cara baru! Nikmati Tour Virtual 360°,
          temukan fasilitas terbaik, dan rencanakan perjalananmu. Pantai Rambang
          siap menyambutmu dalam segala keindahannya!
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/virtual-tour">
            <Button
              variant="outline"
              size="lg"
              className="border-white bg-transparent px-8 py-3 text-lg text-white transition-all duration-300 hover:bg-white hover:text-black">
              Virtual Tour 360°
            </Button>
          </Link>
          <Link href="/panduan-virtual-tour">
            <Button
              variant="outline"
              size="lg"
              className="border-white bg-transparent px-8 py-3 text-lg text-white transition-all duration-300 hover:bg-white hover:text-black">
              Panduan Virtual Tour
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
