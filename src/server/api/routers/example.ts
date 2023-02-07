import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const materiaRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ id: z.number().positive().int() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.materia.findFirst({
        where: {
          id: input.id,
        },
      });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.materia.findMany();
  }),
  getPreviasById: publicProcedure
    .input(z.object({ id: z.number().positive().int() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.materia.findFirst({
        where: { id: input.id },
        include: {
          previas: {
            include: {
              materia_previa: true,
            },
          },
          siguientes: {
            include: {
              materia_previa_de: true,
            },
          },
        },
      });
    }),
});
