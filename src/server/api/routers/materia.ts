import { z } from "zod";
import { ID } from "../../../utils/schemas";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const materiaRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ id: ID }))
    .query(({ ctx, input }) => {
      return ctx.prisma.materia.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.materia.findMany();
  }),
  getPreviasById: publicProcedure
    .input(z.object({ id: ID }))
    .query(({ ctx, input }) => {
      return ctx.prisma.materia.findUnique({
        where: { id: input.id },
        include: {
          previas: {
            include: {
              previa: true,
            },
          },
          siguientes: {
            include: {
              siguiente: true,
            },
          },
        },
      });
    }),
});
