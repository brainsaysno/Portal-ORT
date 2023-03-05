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
  ];

  return (
    <nav className="z-50 flex justify-around gap-10 bg-primary py-5 px-28">
      <div className="flex grow items-center justify-center md:justify-start">
        <Link href="/">
          <Logo className="w-36" />
        </Link>
        <div className="mx-16 flex hidden  items-center justify-center gap-8 md:block">
          {links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className={`text-lg ${link.url === currentPath ? "text-white" : "text-timber"
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
