import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import CustomButton from "../components/CustomButton";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gestión ORT (Como La Gente)</title>
        <meta name="description" content="Gestión ORT (como la gente)" />
      </Head>
      <Layout noHeader>
        <div className="flex flex-col items-center ">
          <div className="py-10">
            <h1 className="text-5xl font-bold text-white md:text-8xl">
              Gestión ORT
            </h1>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              (como la gente)
            </h2>
          </div>
          <CustomButton href="/materias">Materias</CustomButton>
        </div>
      </Layout>
    </>
  );
};

export default Home;
