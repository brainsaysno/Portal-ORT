import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/Layout";
import CustomButton from "../../components/CustomButton";

import { api } from "../../utils/api";
import Spinner from "../../components/Spinner";
import { useState } from "react";

const normalizeString = (str: string): string =>
  str
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const Materias: NextPage = () => {
  const materia = api.materia.getAll.useQuery();

  const [filterPattern, setFilterPattern] = useState("");

  return (
    <>
      <Head>
        <title>Materias</title>
        <meta name="description" content="Materias y previas" />
      </Head>
      <Layout>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-5 py-5">
            <h1 className="text-3xl font-semibold text-white">Materias</h1>
            {materia.isSuccess && (
              <input
                className="px-4 py-2"
                onChange={(e) => setFilterPattern(e.target.value)}
                value={filterPattern}
                placeholder="Buscar"
              />
            )}
          </div>
          <div className="flex flex-col justify-center gap-2 md:flex-row md:flex-wrap">
            {materia.isLoading && <Spinner className="h-12 w-12" />}

            {materia.data
              ?.filter(({ nombre }) =>
                normalizeString(nombre).includes(normalizeString(filterPattern))
              )
              .map(({ id, nombre }) => (
                <CustomButton
                  href={`/materias/${id}`}
                  leftText={id}
                  key={id}
                  hover
                  className="w-full md:w-fit"
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
