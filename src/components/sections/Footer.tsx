import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const sections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/src/app/(marketing)/about/page.tsx" },
      { name: "Team", href: "/src/app/(marketing)/about/page.tsx" },
      { name: "Blog", href: "/src/app/(marketing)/blog/page.tsx" },
      { name: "Virtual Reality", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

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
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <a href="https://shadcnblocks.com">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-8"
                />
              </a>
              <h2 className="text-xl font-semibold">{logo.title}</h2>
            </div>
            <p className="text-muted-foreground text-sm">
              Nikmati suasana yang asri dan indah Anda di Wisata Pantai Rambang
              dan Wisata Menange Rambang
            </p>
            <ul className="text-muted-foreground flex items-center space-x-6">
              <li className="hover:text-primary font-medium">
                <a href="https://www.instagram.com/mkhairilazmii/">
                  <FaInstagram className="size-6" />
                </a>
              </li>
              <li className="hover:text-primary font-medium">
                <a href="https://www.facebook.com/share/1C3RrUbVHD/">
                  <FaFacebook className="size-6" />
                </a>
              </li>
              <li className="hover:text-primary font-medium">
                <a href="https://x.com/Azmiiyaa22">
                  <FaTwitter className="size-6" />
                </a>
              </li>
              <li className="hover:text-primary font-medium">
                <a href="www.linkedin.com/in/muh-haeril-azmi-a966622a7">
                  <FaLinkedin className="size-6" />
                </a>
              </li>
            </ul>
          </div>
          <div className="grid w-full grid-cols-3 gap-6 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-6 font-bold">{section.title}</h3>
                <ul className="text-muted-foreground space-y-4 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium">
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="text-muted-foreground mt-8 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium lg:flex-row lg:items-center lg:text-left">
          <p>© 2024 Pantai Rambang. All rights reserved.</p>
          <ul className="flex justify-center gap-4 lg:justify-start">
            <li className="hover:text-primary">
              <a href="#"> Terms and Conditions</a>
            </li>
            <li className="hover:text-primary">
              <a href="#"> Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Footer };
