import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import CustomButton from "../../components/CustomButton";

import { api } from "../../utils/api";
import Spinner from "../../components/Spinner";
import Arrow from "../../components/Arrow";

const MateriaDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  let intId = typeof id === "string" ? parseInt(id) : 1;

  if (isNaN(intId)) intId = 1;

  const materia = api.materia.getPreviasById.useQuery({ id: intId });

  return (
    <>
      <Head>
        <title>Materia {intId}</title>
        <meta
          name="description"
          content={`Previas y siguientes de la materia ${intId}`}
        />
      </Head>
      <Layout>
        <div className="flex flex-col items-center gap-5 py-8">
          {materia.isLoading && <Spinner className="h-12 w-12" />}
          {materia.data && (
            <>
              {materia.data.previas.length ? (
                <div className="w-full">
                  {/* <h2 className="invisible py-2 text-center text-xl font-semibold text-white md:visible"> */}
                  {/*   Previas */}
                  {/* </h2> */}
                  <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:flex-wrap">
                    {materia.data.previas.map(({ previa: { nombre, id } }) => (
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
              ) : (
                <h2 className="py-2 text-center text-xl text-charcoal">
                  Esta materia no tiene previas
                </h2>
              )}

              <Arrow className="mx-auto h-24" />
              <CustomButton
                href={`/materias/${materia.data.id}`}
                leftText={materia.data.id}
                principal
                className="w-full md:w-fit"
              >
                {materia.data.nombre}
              </CustomButton>

              <Arrow className="mx-auto h-24" />

              {materia.data.siguientes.length ? (
                <div className="text-center">
                  {/* <h2 className="invisible py-2 text-center text-xl font-semibold text-white md:visible"> */}
                  {/*   Siguientes */}
                  {/* </h2> */}
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {materia.data.siguientes.map(
                      ({ siguiente: { nombre, id } }) => (
                        <CustomButton
                          href={`/materias/${id}`}
                          leftText={id}
                          hover
                          key={id}
                          className="w-full md:w-fit"
                        >
                          {nombre}
                        </CustomButton>
                      )
                    )}
                  </div>
                </div>
              ) : (
                <h2 className="py-2 text-center text-xl font-semibold text-white">
                  Esta materia no tiene siguientes
                </h2>
              )}
            </>
          )}
        </div>
      </Layout>
    </>
  );
};

export default MateriaDetail;
