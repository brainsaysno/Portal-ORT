import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import CustomButton from "../../components/CustomButton";

import { api } from "../../utils/api";

const MateriaDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  let intId = typeof id === "string" ? parseInt(id) : 0;

  if (isNaN(intId)) intId = 0;

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
      <Layout className="gap-20">
        <div className="flex flex-col items-center ">
          {materia.data && (
            <>
              {materia.data.previas.length ? (
                <div>
                  <h2 className="py-2 text-center text-xl font-semibold text-white">
                    Previas
                  </h2>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {materia.data.previas.map(
                      ({ materia_previa: { nombre, id } }) => (
                        <CustomButton
                          href={`/materias/${id}`}
                          leftText={id}
                          key={id}
                          hover
                        >
                          {nombre}
                        </CustomButton>
                      )
                    )}
                  </div>
                </div>
              ) : (
                <h2 className="py-2 text-center text-xl font-semibold text-white">
                  Esta materia no tiene previas
                </h2>
              )}

              <CustomButton
                href={`/materias/${materia.data.id}`}
                leftText={materia.data.id}
                principal
              >
                {materia.data.nombre}
              </CustomButton>

              {materia.data.siguientes.length ? (
                <div className="text-center">
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {materia.data.siguientes.map(
                      ({ materia_siguiente: { nombre, id } }) => (
                        <CustomButton
                          href={`/materias/${id}`}
                          leftText={id}
                          hover
                          key={id}
                        >
                          {nombre}
                        </CustomButton>
                      )
                    )}
                  </div>
                  <h2 className="py-2 text-center text-xl font-semibold text-white">
                    Siguientes
                  </h2>
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
