import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/Layout";
import CustomButton from "../../components/CustomButton";

import { api } from "../../utils/api";

const Materias: NextPage = () => {
  const materia = api.materia.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Materias</title>
        <meta name="description" content="Materias y previas" />
      </Head>
      <Layout>
        <h1 className="py-5 text-3xl font-semibold text-white">Materias</h1>
        <div className="flex flex-row flex-wrap justify-center gap-2">
          {materia.data?.map(({ id, nombre }) => (
            <CustomButton href={`/materias/${id}`} leftText={id} key={id}>
              {nombre}
            </CustomButton>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Materias;
