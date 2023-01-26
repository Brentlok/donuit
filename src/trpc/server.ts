import { TRPCError, initTRPC } from "@trpc/server";
import type { Context } from "./context";

const t = initTRPC.context<Context>().create();

const isAuthed = t.middleware(({ next, ctx }) => {
    if (!ctx.user?.email) {
        throw new TRPCError({
            code: 'UNAUTHORIZED',
        });
    }

    return next({
        ctx: {
            ...ctx,
            user: ctx.user,
        },
    });
});

const protectedProcedure = t.procedure.use(isAuthed);

const donutsRouter = t.router({
    list: t.procedure.query(({ ctx }) => ctx.prisma.donut.findMany()),
})

export const appRouter = t.router({
    donuts: donutsRouter,
});

export type AppRouter = typeof appRouter;