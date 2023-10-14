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

  const { data: carrera, isLoading } = api.carrera.getById.useQuery({
    id: intId,
  });

  return (
    <>
      <Head>
        <title>Carrera {intId}</title>
        <meta name="description" content={`Acerca de la carrera ${intId}`} />
      </Head>
      <Layout>
        <div className="flex flex-col items-center justify-center gap-5 py-8 px-10 md:px-36">
          {isLoading && <Spinner className="h-12 w-12" />}
          {carrera && (
            <>
              {
                <div className="w-full">
                  <div className="flex flex-col items-center gap-2 md:flex-row md:flex-wrap">
                    <section className="flex items-center justify-center">
                      <div className="m-12 flex w-96 flex-col items-center rounded-lg bg-gray-200 p-8">
                        <h2 className="mb-4 text-center text-2xl font-medium text-black">
                          {carrera.nombre}
                        </h2>
                        <p className="text-center text-gray-600">
                          {carrera.descripcion}
                        </p>
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
