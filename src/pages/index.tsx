import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import CustomButton from "../components/CustomButton";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ORT como la gente</title>
        <meta name="description" content="Gestión ORT (como la gente)" />
      </Head>
      <Layout noHeader>
        <div className="flex flex-col items-center ">
          <div className="py-10">
            <h1 className="text-8xl font-bold text-white">Gestión ORT</h1>
            <h2 className="text-4xl font-bold text-white">(como la gente)</h2>
          </div>
          <CustomButton href="/materias">Materias</CustomButton>
        </div>
      </Layout>
    </>
  );
};

export default Home;
