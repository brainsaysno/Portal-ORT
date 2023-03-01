import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import CustomButton from "../components/CustomButton";

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
        <div className="flex flex-col items-center">
          <div className="py-10">
            <h1 className="text-5xl font-bold text-white md:text-8xl">
              Portal ORT
            </h1>
            <h2 className="text-lg font-bold text-white md:text-xl">
              (no oficial)
            </h2>
          </div>
          <CustomButton href="/materias">Materias</CustomButton>
        </div>
      </Layout>
    </>
  );
};

export default Home;
