import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

import { api } from "../../utils/api";
import Spinner from "../../components/Spinner";
import Arrow from "../../components/Arrow";
import { useLocalStorage } from "hooks/useLocalStorage";
import { arrayFromSet, parseSet } from "@utils/common";
import MateriaButton from "@components/MateriaButton";
import { useQueryClient } from "@tanstack/react-query";

const MateriaDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const queryClient = useQueryClient();

  const [aprobadas, setAprobadas] = useLocalStorage(
    "idsAprobadas",
    [] as number[]
  );

  let intId = typeof id === "string" ? parseInt(id) : 1;

  if (isNaN(intId)) intId = 1;

  const materia = api.materia.getPreviasById.useQuery(
    { id: intId },
    {
      onSuccess(materia) {
        if (materia) {
          // queryClient.prefetchQuery()
          materia.previas.map((previa) => {
            console.log(previa);
            queryClient.setQueryData(
              [
                ["materia", "getPreviasById"],
                { input: { id: previa.previa.id }, type: "query" },
              ],
              previa.previa
            );
          });

          materia.siguientes.map((siguiente) => {
            console.log(siguiente);
            queryClient.setQueryData(
              [
                ["materia", "getPreviasById"],
                { input: { id: siguiente.siguiente.id }, type: "query" },
              ],
              siguiente.siguiente
            );
          });
        }
      },
      cacheTime: Infinity,
      refetchOnMount: "always",
    }
  );

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
        <div className="flex flex-col items-center justify-center gap-5 py-8 px-10 py-5 md:px-36">
          {materia.isLoading && <Spinner className="h-12 w-12" />}
          {materia.data && (
            <>
              {materia.data.previas.length ? (
                <div className="w-full">
                  <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:flex-wrap">
                    {materia.data.previas.map(({ previa }) => (
                      <MateriaButton
                        materia={previa}
                        key={previa.id}
                        hoverable
                        className="w-full md:w-fit"
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <h2 className="py-2 text-center text-xl text-charcoal">
                  Esta materia no tiene previas
                </h2>
              )}

              <Arrow className="h-24" />
              <div className="grid grid-rows-2 md:grid-cols-3 md:grid-rows-none">
                <MateriaButton
                  materia={materia.data}
                  forceDone={parseSet(aprobadas).has(materia.data.id)}
                  className="w-full md:col-start-2 md:w-fit"
                />
                <div className="flex items-center justify-center ">
                  <input
                    type="checkbox"
                    className="align-middle  accent-green-400"
                    checked={parseSet(aprobadas).has(materia.data.id)}
                    onChange={(e) => {
                      if (!materia.data) return;

                      const set = parseSet(aprobadas);
                      if (e.target.checked) {
                        set.add(materia.data.id);
                      } else {
                        set.delete(materia.data.id);
                      }
                      setAprobadas(arrayFromSet(set));
                    }}
                  />
                  <label className="px-2 text-lg">¿Aprobada?</label>
                </div>
              </div>

              <Arrow className="h-24" />

              {materia.data.siguientes.length ? (
                <div className="text-center">
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {materia.data.siguientes.map(({ siguiente }) => (
                      <MateriaButton
                        materia={siguiente}
                        key={siguiente.id}
                        hoverable
                        className="w-full md:w-fit"
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <h2 className="py-2 text-center text-xl text-charcoal">
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
