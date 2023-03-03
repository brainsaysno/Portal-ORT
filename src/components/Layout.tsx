import { type PropsWithChildren } from "react";
import Navbar from "./Navbar";

const Layout = ({
  children,
  className = "",
  noHeader = false,
}: PropsWithChildren<{ noHeader?: boolean; className?: string }>) => (
  <div className="flex min-h-screen flex-col">
    {noHeader || <Navbar />}
    <main
      className={`flex flex-grow items-center justify-center bg-gradient-to-b from-primary to-[#360000] px-5 pb-10 ${className} `}
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
