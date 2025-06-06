import { Dribbble, Github, Linkedin } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Team {
  id: string;
  name: string;
  role: string;
  image: string;
  description?: string;
}

const articleParagraphs = [
  "Pantai Rambang terletak di Desa Surabaya, Kecamatan Sakra Timur, Kabupaten Lombok Timur. Pantai ini menjadi salah satu destinasi wisata lokal yang mulai dikenal karena keindahan alamnya yang masih terjaga dan jauh dari hiruk pikuk keramaian.",
  "Salah satu daya tarik utama Pantai Rambang adalah pasir putihnya yang bersih dan ombak yang relatif tenang, membuatnya cocok untuk wisata keluarga, piknik santai, maupun aktivitas fotografi. Di sekitar pantai, terdapat juga warung lokal dan area parkir yang memudahkan pengunjung.",
  "Tidak hanya itu, Pantai Rambang juga menjadi bagian dari kehidupan masyarakat sekitar. Penduduk lokal sering memanfaatkan kawasan ini untuk kegiatan tradisional seperti mencari kerang, memancing, atau hanya bersantai menikmati senja.",
  "Meskipun belum banyak dikenal secara luas, Pantai Rambang memiliki potensi besar sebagai destinasi ekowisata yang ramah lingkungan dan bernuansa lokal. Oleh karena itu, penting untuk terus menjaga kebersihan dan kelestariannya agar keindahan alami ini tetap bisa dinikmati oleh generasi mendatang.",
  "Tenetur blanditiis ipsa tempore eligendi quis obcaecati quo natus, quam hic labore asperiores.",
  "Vel mollitia nulla officia aliquam at consectetur reprehenderit! Impedit sint doloribus sunt iure reiciendis incidunt? Autem, ex.",
];

const AboutUs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/team`, {
    cache: "no-store",
  });

  const data = await res.json();
  const teams: Team[] = data.teams;

  return (
    <>
      <section className="pt-[8rem]">
        <div className="container flex flex-col items-start text-left">
          <p className="semibold">The Rambang Beach</p>
          <h2 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
            Natural Tourism Destinations in East Lombok
          </h2>
          <p className="text-muted-foreground mb-8 max-w-3xl lg:text-xl">
            Feel the tranquility of nature and the charm of the pristine sea.
          </p>
        </div>
        <article className="mx-auto w-full space-y-4 px-4 text-left sm:max-w-full md:max-w-[80%] lg:max-w-[90%]">
          {articleParagraphs.map((paragraph, index) => (
            <p key={index} className="text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>
      </section>
      <section className="about py-32">
        <div className="container flex flex-col items-start text-left">
          <p className="semibold">Our team</p>
          <h2 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
            The team you&apos;ll be working with
          </h2>
          <p className="text-muted-foreground mb-8 max-w-3xl lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="container mt-16 grid gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
          {teams.map((person) => (
            <div key={person.id} className="flex flex-col items-start">
              <Avatar className="mb-4 size-20 md:mb-5 lg:size-24">
                <AvatarImage src={person.image} />
                <AvatarFallback>{person.name}</AvatarFallback>
              </Avatar>
              <p className="font-medium">{person.name}</p>
              <p className="text-muted-foreground">{person.role}</p>
              <p className="text-muted-foreground py-3 text-sm">
                {person.description?.trim() && (
                  <p className="text-muted-foreground py-3 text-sm">
                    {person.description}
                  </p>
                )}
              </p>
              <div className="mt-2 flex gap-4">
                <a href="#">
                  <Github className="text-muted-foreground size-5" />
                </a>
                <a href="#">
                  <Linkedin className="text-muted-foreground size-5" />
                </a>
                <a href="#">
                  <Dribbble className="text-muted-foreground size-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
