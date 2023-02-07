import { type NextPage } from "next";
import Head from "next/head";
import CustomButton from "../components/MateriaButton";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ORT como la gente</title>
        <meta name="description" content="Gestión ORT (como la gente)" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] px-5 pb-10">
        <div className="py-10">
          <h1 className="text-8xl font-bold text-white">Gestión ORT</h1>
          <h2 className="text-4xl font-bold text-white">(como la gente)</h2>
        </div>
        <CustomButton href="/materias">Materias</CustomButton>
      </main>
    </>
  );
};

export default Home;
