import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import CustomButton from "../../components/MateriaButton";

import { api } from "../../utils/api";

const MateriaDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const intId = parseInt(id! as string);
  const materia = api.materia.getPreviasById.useQuery({ id: intId });

  return (
    <>
      <Head>
        <title>Materia {id}</title>
        <meta
          name="description"
          content={`Previas y siguientes de la materia ${id}`}
        />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-20 bg-gradient-to-b from-[#2e026d] to-[#15162c]">
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
                      <CustomButton href={"/materias/" + id} leftText={id}>
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
              href={"/materias/" + materia.data.id}
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
                      <CustomButton href={"/materias/" + id} leftText={id}>
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
      </main>
    </>
  );
};

export default MateriaDetail;
