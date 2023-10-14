import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/Layout";

import { api } from "../../utils/api";
import Spinner from "../../components/Spinner";
import { CarreraType, type carrera } from "@prisma/client";
import Header from "@components/Header";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Carreras: NextPage = () => {
  const {
    data: carreras,
    isLoading,
    isSuccess,
  } = api.carrera.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Carreras</title>
        <meta name="description" content="Carreras" />
      </Head>
      <Layout>
        <div>
          <Header title="Carreras" />
          <div className="flex h-full flex-col items-center gap-5 px-10 py-5 md:px-36">
            {/* Carreras */}
            {isLoading && <Spinner className="h-12 w-12" />}
            {isSuccess && (
              <FacultadContainer
                title="Facultad de Ingeniería"
                carreras={carreras}
              />
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

const FacultadContainer = ({
  title,
  carreras,
}: {
  title: string;
  carreras: carrera[];
}) => {
  const carreraTypeLabels: Record<CarreraType, string> = {
    [CarreraType.UNIVERSITY_DEGREE]: "Carreras Universitarias",
    [CarreraType.SHORT_DEGREE]: "Carreras Cortas",
    [CarreraType.POSTGRADUATE]: "Postgrados",
    [CarreraType.PROFESSIONAL_RENOVATION]: "Actualización Profesional",
    [CarreraType.OTHER]: "Otras",
  };

  const byFilter = useMemo(() => carreras.reduce((acc, c) => {
    acc[c.type] ??= [];
    // non null by design
    acc[c.type]?.push(c)
    return acc;
  }, {} as Record<CarreraType, carrera[] | undefined>), [carreras])

  const [selectedFilter, setSelectedFilter] = useState<CarreraType | null>(null);

  const filtered = selectedFilter ? byFilter[selectedFilter] : carreras;

  return (
    <section className="my-8 w-full rounded-lg border-primary-600 bg-white drop-shadow-lg">
      <h2 className="-my-8 mx-auto w-fit rounded-md bg-primary-500 px-16 py-4 text-center text-2xl font-medium text-timber">
        {title}
      </h2>
      <div className="mt-16 flex justify-center gap-4 flex-wrap">
        <button
          className={`text-md cursor-pointer rounded-md px-4 py-1 drop-shadow-sm w-fit ${null === selectedFilter
            ? "bg-primary text-white"
            : "bg-gray-200"
            }`}
          onClick={() => setSelectedFilter(null)}
          type="button"
        >
          Todas
        </button>
        {Object.entries(carreraTypeLabels).map(([t, l]) => (
          <button
            key={t}
            className={`text-md cursor-pointer rounded-md px-4 py-1 drop-shadow-sm w-fit ${t === selectedFilter
              ? "bg-primary text-white"
              : "bg-gray-200"
              }`}
            onClick={() => setSelectedFilter(t as CarreraType)}
            type="button"
          >
            {l}
          </button>
        ))}
      </div>
      <div className="my-8 flex flex-col flex-wrap items-center justify-center gap-y-4 gap-x-8 px-8 sm:flex-row sm:items-start sm:px-24">
        {filtered ? filtered.map((carrera) => (
          <Link href={`/materias?carrera=${carrera.id}`} className="min-h-xl max-w-xs rounded-md bg-gray-100 drop-shadow-md" key={carrera.id}>
            <div className="relative h-24 w-full">
              <Image
                src={carrera.imageUrl}
                alt={`Carrera ${carrera.nombre}`}
                className="h-full w-full rounded-t-md"
                fill
              />
            </div>
            <div className="my-3 px-4">
              <h3 className="text-center text-lg font-medium">
                {carrera.nombre}
              </h3>
              <p className="mt-1 text-center text-sm">
                {(carrera.descripcion?.slice(0, 100) || "") + (carrera.descripcion && carrera.descripcion.length > 100 ? "..." : "")}
              </p>
            </div>
          </Link>
        ))
          :
          <p className="-mb-8">No hay carreras de este tipo todavía</p>
        }
      </div>
      <p className="text-center mb-8">Si queres agregar tu carrera podés <Link href="https://github.com/brainsaysno/Portal-ORT#presentarse-como-colaborador" className="text-primary-300" target="_blank">presentarte como colaborador</Link></p>
    </section>
  );
};

export default Carreras;
