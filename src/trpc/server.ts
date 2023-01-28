import { TRPCError, initTRPC } from "@trpc/server";
import type { Context } from "./context";
import * as T from "superstruct";
import { Page } from "./utils";

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
    list: t.procedure
        .input(T.object({
            paging: Page,
        }))
        .query(async ({ input, ctx }) => {
            const { paging } = input;

            const data = await ctx.prisma.donut.findMany({
                take: paging.pageSize,
                skip: paging.pageSize * (paging.page - 1),
            });

            const totalCount = await ctx.prisma.donut.count({});

            return {
                data,
                paging: {
                    ...paging,
                    max: Math.ceil(totalCount / paging.pageSize),
                }
            }
        }),
    get: t.procedure
        .input(T.object({
            id: T.number(),
        }))
        .query(({ input, ctx }) => ctx.prisma.donut.findFirst({
            where: {
                id: {
                    equals: input.id
                }
            },
        })),
})

export const appRouter = t.router({
    donuts: donutsRouter,
});

export type AppRouter = typeof appRouter;