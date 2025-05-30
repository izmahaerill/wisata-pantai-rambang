import { Dribbble, Github, Linkedin } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// const people = [
//   {
//     id: "person-1",
//     name: "Name",
//     role: "Role",
//     description:
//       "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
//     avatar: "https://shadcnblocks.com/images/block/avatar-1.webp",
//   },
//   {
//     id: "person-2",
//     name: "Name",
//     role: "Role",
//     description: "Elig doloremque mollitia fugiat omnis!",
//     avatar: "https://shadcnblocks.com/images/block/avatar-2.webp",
//   },
//   {
//     id: "person-3",
//     name: "Name",
//     role: "Role",
//     description:
//       "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
//     avatar: "https://shadcnblocks.com/images/block/avatar-3.webp",
//   },
//   {
//     id: "person-4",
//     name: "Name",
//     role: "Role",
//     description: "Elig doloremque mollitia fugiat omnis!",
//     avatar: "https://shadcnblocks.com/images/block/avatar-4.webp",
//   },
//   {
//     id: "person-5",
//     name: "Name",
//     role: "Role",
//     description:
//       "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
//     avatar: "https://shadcnblocks.com/images/block/avatar-5.webp",
//   },
//   {
//     id: "person-6",
//     name: "Name",
//     role: "Role",
//     description:
//       "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
//     avatar: "https://shadcnblocks.com/images/block/avatar-6.webp",
//   },
//   {
//     id: "person-7",
//     name: "Name",
//     role: "Role",
//     description:
//       "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
//     avatar: "https://shadcnblocks.com/images/block/avatar-7.webp",
//   },
//   {
//     id: "person-8",
//     name: "Name",
//     role: "Role",
//     description:
//       "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
//     avatar: "https://shadcnblocks.com/images/block/avatar-8.webp",
//   },
// ];

interface Team {
  id: string;
  name: string;
  role: string;
  image: string;
  description?: string;
}

const AboutUs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/team`, {
    cache: "no-store",
  });

  const data = await res.json();
  const teams: Team[] = data.teams;

  return (
    <section className="py-32">
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
              {/* {person.description} */}
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
  );
};

export default AboutUs;
