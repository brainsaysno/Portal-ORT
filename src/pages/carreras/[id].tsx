import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

import { api } from "../../utils/api";
import Spinner from "../../components/Spinner";
import Link from "next/link";

const CarreraDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  let intId = typeof id === "string" ? parseInt(id) : 1;

  if (isNaN(intId)) intId = 1;

  const carrera = api.carrera.getById.useQuery(
    { id: intId },
  );

  return (
    <>
      <Head>
        <title>Carrera {intId}</title>
        <meta
          name="description"
          content={`Acerca de la carrera ${intId}`}
        />
      </Head>
      <Layout>
        <div className="flex flex-col items-center justify-center gap-5 py-8 px-10 py-5 md:px-36">
          {carrera.isLoading && <Spinner className="h-12 w-12" />}
          {carrera.data && (
            <>
              {
                <div className="w-full">
                  <div className="flex flex-col items-center gap-2 md:flex-row md:flex-wrap">
                    <section className="flex justify-center items-center">
                      <div className="bg-gray-200 rounded-lg p-8 m-12 w-96 h-80 flex flex-col items-center">
                        <h2 className="text-black text-2xl font-bold mb-4 text-center">{carrera.data.nombre}</h2>
                        <p className="text-gray-600 text-center">{carrera.data.descripcion}</p>
                      </div>
                      <div>
                        <ul className="list-disc text-lg">
                          <li>
                            <Link href="/materias">Materias</Link>
                          </li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </div>
              }
            </>
          )}
        </div>
      </Layout>
    </>
  );
};

export default CarreraDetail;
