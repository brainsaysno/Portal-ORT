import { z } from "zod";
import { ID } from "@utils/schemas";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const carreraRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.carrera.findMany();
  }),
  getById: publicProcedure
    .input(
      z.object({
        id: ID,
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.carrera.findUnique({
        where: {
          id: input.id,
        },
        include: {
          materias: {
            select: {
              id: true,
            },
          },
        },
      });
    }),
});
