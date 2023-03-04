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
      {/* sticky top-0 */}
      <div className="flex grow items-center justify-center md:justify-start">
        <Link href="/">
          <Logo className="w-36" />
        </Link>
        <div className="collapse mx-16 flex min-h-full items-center gap-8 md:visible">
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
      {/* <CustomButton */}
      {/*   href="https://www.github.com/brainsaysno/Portal-ORT" */}
      {/*   className="border-white bg-primary py-2 text-white" */}
      {/* > */}
      {/*   Página del proyecto */}
      {/* </CustomButton> */}
    </nav>
  );
}
