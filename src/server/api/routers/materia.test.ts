import { type inferProcedureInput } from "@trpc/server";
import { describe, expect, test } from "vitest";
import { type AppRouter, appRouter } from "../root";
import { createTRPCContext } from "../trpc";

describe("Materia router", () => {
  test("byId", async () => {
    const ctx = createTRPCContext();
    const caller = appRouter.createCaller(ctx);

    type Input = inferProcedureInput<AppRouter["materia"]["getById"]>;
    const input: Input = {
      id: 3851,
    };

    const arqSistemas = await caller.carrera.getById(input);

    expect(arqSistemas).toMatchSnapshot();
  });

  test("getPreviasById", async () => {
    const ctx = createTRPCContext();
    const caller = appRouter.createCaller(ctx);

    type Input = inferProcedureInput<AppRouter["materia"]["getPreviasById"]>;
    const input: Input = {
      id: 3851,
    };

    const arqSistemas = await caller.carrera.getById(input);

    expect(arqSistemas).toMatchSnapshot();
  });
});
