import { PropsWithChildren } from "react";

const Layout = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => (
  <main
    className={
      "flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#661020] to-[#360000] px-5 pb-10 " +
      className
    }
  >
    {children}
  </main>
);

export default Layout;
