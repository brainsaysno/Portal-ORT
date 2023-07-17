import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import Logo from "components/Logo";
import Link from "next/link";

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
            <Link
              className="min-w-100 rounded-md bg-white px-4 py-4 text-charcoal drop-shadow-xl"
              href="/materias"
            >
              Materias
            </Link>
            <Link
              className="min-w-100 rounded-md bg-white px-4 py-4 text-charcoal drop-shadow-xl"
              href="/carreras"
            >
              Carreras
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
