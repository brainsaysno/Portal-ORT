import { type inferProcedureInput } from "@trpc/server";
import { describe, expect, test } from "vitest";
import { type AppRouter, appRouter } from "../root";
import { createTRPCContext } from "../trpc";

describe("Carrera router", () => {
  test("byId", async () => {
    const ctx = createTRPCContext();
    const caller = appRouter.createCaller(ctx);

    type Input = inferProcedureInput<AppRouter["carrera"]["getById"]>;
    const input: Input = {
      id: 2485,
    };

    const ingSistemas = await caller.carrera.getById(input);

    expect(ingSistemas).toMatchSnapshot();
  });
});
