import Link from "next/link";
import { type PropsWithChildren } from "react";
import Navbar from "./Navbar";

const Layout = ({
  children,
  className = "",
  noHeader = false,
}: PropsWithChildren<{ noHeader?: boolean; className?: string }>) => (
  <div className="flex min-h-screen flex-col">
    {noHeader || <Navbar />}
    <main className={`grid grow bg-timber ${className}`}>{children}</main>
    <footer className="bg-primary py-5 text-center text-timber">
      <Link href="https://www.github.com/brainsaysno/Portal-ORT">
        ⧉ Página del proyecto
      </Link>{" "}
      · <span>&copy; Nicolás Russo</span>
    </footer>
  </div>
);

export default Layout;
