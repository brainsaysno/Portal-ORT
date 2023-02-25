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
  const [idCarreraSeleccionada, setIdCarreraSeleccionada] = useState<
    number | null
  >(null);

  const carreraSeleccionadaQuery = api.carrera.getById.useQuery(
    {
      id: idCarreraSeleccionada as number,
    },
    {
      enabled: idCarreraSeleccionada != null,
    }
  );
  const carrerasQuery = api.carrera.getAll.useQuery();
  const materiasQuery = api.materia.getAll.useQuery(undefined, {
    select(materias) {
      if (carreraSeleccionadaQuery.isSuccess && carreraSeleccionadaQuery.data) {
        const idsSeleccionados = carreraSeleccionadaQuery.data.materias.map(
          (m) => m.id
        );
        return materias.filter((materia) =>
          idsSeleccionados.includes(materia.id)
        );
      }
      return materias;
    },
  });

  const [filterPattern, setFilterPattern] = useState("");

  return (
    <>
      <Head>
        <title>Materias</title>
        <meta name="description" content="Materias y previas" />
      </Head>
      <Layout>
        <div className="flex flex-col items-center py-5">
          <h1 className="text-3xl font-semibold text-white">Materias</h1>
          <div className="flex w-full flex-col items-center justify-around gap-4 py-5 md:flex-row">
            {carrerasQuery.isSuccess && (
              <select
                className="h-10 w-56 px-4 py-2"
                onChange={(e) => {
                  const parsed = parseInt(e.target.value);
                  setIdCarreraSeleccionada(isNaN(parsed) ? null : parsed);
                }}
              >
                <option selected>Todas las carreras</option>
                {carrerasQuery.data.map((carrera) => (
                  <option value={carrera.id}>{carrera.nombre}</option>
                ))}
              </select>
            )}
            {materiasQuery.isSuccess && (
              <input
                className="h-10 px-4 py-2 md:w-96"
                onChange={(e) => setFilterPattern(e.target.value)}
                value={filterPattern}
                placeholder="Buscar"
              />
            )}
          </div>
          <div className="flex flex-col justify-center gap-2 md:flex-row md:flex-wrap">
            {materiasQuery.isLoading && <Spinner className="h-12 w-12" />}
            {materiasQuery.isSuccess &&
              materiasQuery.data
                .filter(({ nombre }) =>
                  normalizeString(nombre).includes(
                    normalizeString(filterPattern)
                  )
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
