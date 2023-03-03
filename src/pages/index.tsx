import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import CustomButton from "../components/CustomButton";
import Logo from "components/Logo";

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
          <Logo className="w-[80vw] py-10 md:w-[50vw]" />
          <CustomButton href="/materias">Materias</CustomButton>
        </div>
      </Layout>
    </>
  );
};

export default Home;
