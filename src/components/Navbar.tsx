import Link from "next/link";
import Logo from "@components/Logo";
import { useRouter } from "next/router";

export default function Navbar() {
  const { asPath: currentPath } = useRouter();

  const links = [
    {
      name: "Materias",
      url: "/materias",
    },
    {
      name: "Carreras",
      url: "/carreras",
    },
  ];

  return (
    <nav className="z-50 flex justify-around gap-10 bg-primary py-5 px-28">
      <div className="flex grow items-center justify-center md:justify-start">
        <Link href="/">
          <Logo className="w-36" />
        </Link>
        <div className="mx-16 flex items-center justify-start gap-8">
          {links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className={`text-lg text-white px-4 py-2 rounded-md ${link.url === currentPath ? "bg-primary-600 drop-shadow-md" : ""
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
