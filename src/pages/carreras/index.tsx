import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/Layout";

import { api } from "../../utils/api";
import Spinner from "../../components/Spinner";
import { type carrera } from "@prisma/client";
import CarreraButton from "@components/CarreraButton";


const Carreras: NextPage = () => {

  const carrerasQuery = api.carrera.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Carreras</title>
        <meta name="description" content="Carreras" />
      </Head>
      <Layout>
        <div>
          <h1 className="text-md h-fit bg-white py-2 text-center text-charcoal drop-shadow-lg">
            Carreras
          </h1>
          <div className="flex h-full flex-col items-center gap-5 px-10 py-5 md:px-36">
            
            {/* Carreras */}
            {carrerasQuery.isLoading && <Spinner className="h-12 w-12" />}
            {carrerasQuery.isSuccess && (
              <CarrerasButtons
                carreras={carrerasQuery.data}
              />
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

const CarrerasButtons = ({ carreras }: { carreras: carrera[] }) => (
  <div className="flex flex-col justify-center gap-2 md:flex-row md:flex-wrap">
    {carreras.map((carrera) => (


      <CarreraButton
        carrera={carrera}
        key={carrera.id}
        hoverable
        className="w-full md:w-fit"
      />
    ))}
  </div>
);

export default Carreras;
