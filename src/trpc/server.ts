import { TRPCError, initTRPC } from "@trpc/server";
import type { Context } from "./context";
import * as T from "superstruct";

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
    get: t.procedure
        .input(T.object({
            id: T.number(),
        }))
        .query(({ input, ctx }) => ctx.prisma.donut.findFirst({
            where: {
                id: {
                    equals: input.id
                }
            }
        })),
})

export const appRouter = t.router({
    donuts: donutsRouter,
});

export type AppRouter = typeof appRouter;