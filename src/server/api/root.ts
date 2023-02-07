import { createTRPCRouter } from "./trpc";
import { materiaRouter } from "./routers/example";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  materia: materiaRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
