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
    <nav className="sticky top-0 flex justify-around gap-10 bg-[#110000] py-5 px-28">
      <div className="flex grow items-center justify-center md:justify-start">
        <Link href="/">
          <Logo className="w-36" />
        </Link>
        <div className="collapse mx-16 flex min-h-full items-center gap-8 md:visible">
          {links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className={`text-lg ${link.url === currentPath ? "text-white" : "text-gray-300"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      {/* <CustomButton */}
      {/*   href="https://www.github.com/brainsaysno/Portal-ORT" */}
      {/*   className="border-white bg-primary py-2 text-white" */}
      {/* > */}
      {/*   Página del proyecto */}
      {/* </CustomButton> */}
    </nav>
  );
}
