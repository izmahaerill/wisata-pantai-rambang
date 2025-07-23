import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Footer } from "@/components/sections/Footer";

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
          <p className="semibold">Pantai Rambang</p>
          <h2 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
            Destinasi Wisata Alam di Lombok Timur
          </h2>
          <p className="text-muted-foreground mb-8 max-w-3xl lg:text-xl">
            Rasakan ketenangan alam dan pesona laut yang masih asli
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
      <section className="about pt-32">
        <div className="container flex flex-col items-start text-left">
          <p className="semibold">Tim Pengelola Wisata Pantai Rambang</p>
          <h2 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
            Wajah di Balik Keindahan Pantai Rambang
          </h2>
          <p className="text-muted-foreground mb-8 max-w-3xl lg:text-xl">
            Mereka yang bertugas mengelola, menjaga, dan melayani pengunjung
            pantai
          </p>
        </div>
        <div className="container mt-16 grid gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
          {teams.map((person) => (
            <div key={person.id} className="flex flex-col items-start">
              <Avatar className="mb-4 size-20 md:mb-5 lg:size-24">
                <AvatarImage loading="lazy" src={person.image} />
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
              {/* <div className="mt-2 flex gap-4">
                <a href="#">
                  <Github className="text-muted-foreground size-5" />
                </a>
                <a href="#">
                  <Linkedin className="text-muted-foreground size-5" />
                </a>
                <a href="#">
                  <Dribbble className="text-muted-foreground size-5" />
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
