import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/Layout";
import CustomButton from "../../components/CustomButton";

import { api } from "../../utils/api";
import Spinner from "../../components/Spinner";
import { useState } from "react";
import { type materia } from "@prisma/client";

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
        <h1 className="text-md h-fit bg-white py-2 text-center text-charcoal drop-shadow-lg">
          Materias
        </h1>
        <div className="flex flex-col items-center gap-5 px-10 py-5 md:px-36">
          <div className="flex w-full flex-col items-center justify-around gap-4 md:flex-row">
            {carrerasQuery.isSuccess && (
              <select
                className="h-10 w-3/4 rounded bg-white px-4 py-2 drop-shadow-sm md:w-56"
                onChange={(e) => {
                  const parsed = parseInt(e.target.value);
                  setIdCarreraSeleccionada(isNaN(parsed) ? null : parsed);
                }}
              >
                <option selected>Todas las carreras</option>
                {carrerasQuery.data.map((carrera) => (
                  <option value={carrera.id} key={carrera.id}>
                    {carrera.nombre}
                  </option>
                ))}
              </select>
            )}
            {materiasQuery.isSuccess && (
              <input
                className="h-10 w-3/4 rounded px-4 py-2 drop-shadow-sm md:w-96"
                onChange={(e) => setFilterPattern(e.target.value)}
                value={filterPattern}
                placeholder="Buscar"
              />
            )}
          </div>
          {materiasQuery.isLoading && <Spinner className="h-12 w-12" />}
          {materiasQuery.isSuccess && (
            <MateriasButtons
              materias={materiasQuery.data.filter(({ nombre }) =>
                normalizeString(nombre).includes(normalizeString(filterPattern))
              )}
            />
          )}
        </div>
      </Layout>
    </>
  );
};

const MateriasButtons = ({ materias }: { materias: materia[] }) => (
  <div className="flex flex-col justify-center gap-2 md:flex-row md:flex-wrap">
    {materias.map(({ id, nombre }) => (
      <CustomButton
        href={`/materias/${id}`}
        leftText={id}
        key={id}
        hover
        className="w-full grow md:w-fit"
      >
        {nombre}
      </CustomButton>
    ))}
  </div>
);

export default Materias;
