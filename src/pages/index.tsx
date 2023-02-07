import { type NextPage } from "next";
import Head from "next/head";
import MateriaButton from "../components/MateriaButton";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const materia = api.materia.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Portal Ingeniería</title>
        <meta
          name="description"
          content="Portal (no oficial) de la carrera Ingeniería en Sistemas de la Universidad ORT Uruguay"
        />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] px-5 pb-10">
        <h1 className="py-5 text-3xl font-semibold text-white">Materias</h1>
        <div className="flex flex-row flex-wrap justify-center gap-2">
          {materia.data?.map(({ id, nombre }) => (
            <MateriaButton id={id} nombre={nombre} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
