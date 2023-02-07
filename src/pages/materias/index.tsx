import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/Layout";
import CustomButton from "../../components/CustomButton";

import { api } from "../../utils/api";
import Spinner from "../../components/Spinner";

const Materias: NextPage = () => {
  const materia = api.materia.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Materias</title>
        <meta name="description" content="Materias y previas" />
      </Head>
      <Layout>
        <div className="flex flex-col items-center ">
          <h1 className="py-5 text-3xl font-semibold text-white">Materias</h1>
          <div className="flex flex-row flex-wrap justify-center gap-2">
            {materia.isLoading && <Spinner className="h-12 w-12" />}

            {materia.data?.map(({ id, nombre }) => (
              <CustomButton
                href={`/materias/${id}`}
                leftText={id}
                key={id}
                hover
              >
                {nombre}
              </CustomButton>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Materias;
