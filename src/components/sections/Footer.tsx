import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
}
const Footer = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Wisata Pantai Rambang",
  },
}: Footer7Props) => {
  return (
    <section className="pt-32 pb-20">
      <div className="container">
        <div className="flex w-full flex-col items-center justify-between gap-10 text-center lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col items-center justify-between gap-6 lg:items-start">
            <div className="flex items-center gap-2 lg:justify-start">
              <img
                src="https://fav.farm/%F0%9F%8F%96%EF%B8%8F"
                alt="Wisata Pantai Rambang"
                className="h-8 w-8"
                loading="lazy"
              />
              <h2 className="text-xl font-semibold">{logo.title}</h2>
            </div>
            <p className="text-muted-foreground text-sm">
              Nikmati suasana yang asri dan indah Anda di Wisata Pantai Rambang
              dan Wisata Menange Rambang
            </p>
            <ul className="text-muted-foreground flex items-center space-x-6">
              <li className="hover:text-primary font-medium">
                <Link href="https://www.instagram.com/rambangbeach/">
                  <FaInstagram
                    className="size-6"
                    aria-label="Instagram pantai rambang"
                  />
                </Link>
              </li>
              <li className="hover:text-primary font-medium">
                <Link href="https://web.facebook.com/profile.php?id=100021732559140&locale=id_ID">
                  <FaFacebook
                    className="size-6"
                    aria-label="Facebook pantai rambang"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex w-full justify-center px-4 lg:w-1/2 lg:justify-end lg:pr-36">
            <div className="max-w-sm">
              <h3 className="mb-6 text-center font-bold">Menu</h3>
              <div className="flex flex-col gap-2 text-center md:gap-3 lg:gap-4">
                <Link
                  href="/panduan-virtual-tour"
                  className="text-muted-foreground hover:text-primary text-sm">
                  Panduan Virtual Tour
                </Link>
                <Link
                  href="/virtual-tour"
                  className="text-muted-foreground hover:text-primary text-sm">
                  Virtual Tour 360°
                </Link>
                <Link
                  href={"/blog"}
                  className="text-muted-foreground hover:text-primary text-sm">
                  About
                </Link>
                <Link
                  href={"/about"}
                  className="text-muted-foreground hover:text-primary text-sm">
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-muted-foreground mt-8 border-t pt-8 text-center text-sm font-medium lg:items-center">
          <p>© 2024 Pantai Rambang. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export { Footer };
