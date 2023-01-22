import { donutsRouter } from "./routes/donuts";
import { router } from "./trpc";

export const appRouter = router({
    donuts: donutsRouter,
});

export type AppRouter = typeof appRouter;

export * from './client';