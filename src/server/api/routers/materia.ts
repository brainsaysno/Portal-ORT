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
  getCursables: publicProcedure
    .input(ID.array().nullable())
    .query(({ ctx, input }) => {
      if (input === null) return ctx.prisma.materia.findMany();
      return ctx.prisma.materia.findMany({
        where: {
          id: {
            notIn: input,
          },
          previas: {
            every: {
              previaId: {
                in: input,
              },
            },
          },
        },
      });
    }),
  getPreviasById: publicProcedure
    .input(z.object({ id: ID }))
    .query(({ ctx, input }) => {
      const data = ctx.prisma.materia.findUnique({
        where: { id: input.id },
        include: {
          previas: {
            include: {
              previa: {
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
              },
            },
          },
          siguientes: {
            include: {
              siguiente: {
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
              },
            },
          },
        },
      });

      return data;
    }),
  // getPreviasCacheByIds: publicProcedure
  //   .input(ID.array())
  //   .query(({ ctx, input }) => { }),
});
