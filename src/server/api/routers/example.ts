import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

const ID = z.number().positive().int();

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

export const carreraRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.carrera.findMany();
  }),
  getMateriasById: publicProcedure
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
          materias: true,
        },
      });
    }),
});
