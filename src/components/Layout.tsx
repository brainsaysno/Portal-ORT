import Link from "next/link";
import { type PropsWithChildren } from "react";

const Layout = ({
  children,
  className = "",
  noHeader = false,
}: PropsWithChildren<{ noHeader?: boolean; className?: string }>) => (
  <div className="flex min-h-screen flex-col">
    {noHeader || (
      <nav className="sticky top-0 flex gap-10 bg-[#110000] py-5 px-14">
        <Link href="/">
          <h1 className="text-xl font-bold text-white">Portal ORT</h1>
          <h2 className="text-xs font-bold text-white">(no oficial)</h2>
        </Link>
        <div className="hover:border-1 flex min-h-full items-center border-white">
          <Link href="/materias" className="text-lg text-white">
            Materias
          </Link>
        </div>
      </nav>
    )}
    <main
      className={`flex flex-grow items-center justify-center bg-gradient-to-b from-[#661020] to-[#360000] px-5 pb-10 ${className} `}
    >
      {children}
    </main>
    <footer className="bg-[#110000] py-5 text-center text-white">
      <p className="italic">&quot;Me calenté con gestión y acá estamos&quot;</p>
      <p>&copy; Nicolás Russo</p>
    </footer>
  </div>
);

export default Layout;
