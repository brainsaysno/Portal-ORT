import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/Layout";

import { api } from "../../utils/api";
import Spinner from "../../components/Spinner";
import { useState } from "react";
import { type carrera, type materia } from "@prisma/client";
import MateriaButton from "@components/MateriaButton";
import Select from "@components/Select";

const normalizeString = (str: string): string =>
  str
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

// const enum Filtros {
//   Todas = "Todas las materias",
//   Aprobadas = "Materias aprobadas",
//   Cursables = "Materias cursables",
// }

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

  const [searchPattern, setSearchPattern] = useState("");

  const filterCriteria = ({ nombre }: materia): boolean =>
    normalizeString(nombre).includes(normalizeString(searchPattern));

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
          {/* Filter tab */}

          <div className="grid w-full grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-none">
            {carrerasQuery.isSuccess && carrerasQuery.data.length > 0 && (
              <Select
                items={carrerasQuery.data as [carrera, ...carrera[]]}
                renderLabel={(carrera) => carrera.nombre}
                onChange={(carrera) =>
                  setIdCarreraSeleccionada(carrera ? carrera.id : null)
                }
                defaultLabel="Todas las carreras"
              />
            )}
            {/* {materiasQuery.isSuccess && ( */}
            {/*   <Select */}
            {/*     items={[Filtros.Aprobadas, Filtros.Cursables]} */}
            {/*     defaultLabel="Todas las materias" */}
            {/*     renderLabel={(f) => f} */}
            {/*     onChange={console.log} */}
            {/*   /> */}
            {/* )} */}

            {materiasQuery.isSuccess && (
              <input
                className="rounded px-4 drop-shadow-sm md:w-full"
                onChange={(e) => setSearchPattern(e.target.value)}
                value={searchPattern}
                placeholder="Buscar"
              />
            )}
          </div>

          {/* Materias */}

          {materiasQuery.isLoading && <Spinner className="h-12 w-12" />}
          {materiasQuery.isSuccess && (
            <MateriasButtons
              materias={materiasQuery.data.filter(filterCriteria)}
            />
          )}
        </div>
      </Layout>
    </>
  );
};

const MateriasButtons = ({ materias }: { materias: materia[] }) => (
  <div className="flex flex-col justify-center gap-2 md:flex-row md:flex-wrap">
    {materias.map((materia) => (
      <MateriaButton
        materia={materia}
        key={materia.id}
        hoverable
        className="w-full md:w-fit"
      />
    ))}
  </div>
);

export default Materias;
