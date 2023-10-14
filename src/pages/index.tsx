import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import Logo from "components/Logo";
import Link from "next/link";

const links: { label: string; href: string }[] = [
  {
    label: "Materias",
    href: "/materias",
  },
  {
    label: "Carreras",
    href: "/carreras",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portal ORT</title>
        <meta
          name="description"
          content="Portal (no oficial) de la Universidad ORT"
        />
      </Head>
      <Layout noHeader>
        <div className="flex flex-col items-center justify-center">
          <Logo primary className="w-[80vw] py-10 md:w-[50vw]" />
          <div className="flex gap-10">
            {links.map(({ label, href }) => (
              <Link
                className="min-w-100 rounded-md bg-white px-4 py-4 text-charcoal drop-shadow-xl"
                href={href}
                key={href}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
