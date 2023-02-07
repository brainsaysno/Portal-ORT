import { type NextPage } from "next";
import Head from "next/head";
import CustomButton from "../../components/MateriaButton";

import { api } from "../../utils/api";

const Materias: NextPage = () => {
  const materia = api.materia.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Materias</title>
        <meta name="description" content="Materias y previas" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] px-5 pb-10">
        <h1 className="py-5 text-3xl font-semibold text-white">Materias</h1>
        <div className="flex flex-row flex-wrap justify-center gap-2">
          {materia.data?.map(({ id, nombre }) => (
            <CustomButton href={"/materias/" + id} leftText={id}>
              {nombre}
            </CustomButton>
          ))}
        </div>
      </main>
    </>
  );
};

export default Materias;
