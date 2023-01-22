import { publicProcedure, router } from "$lib/trpc/server";

export const donutsRouter = router({
    list: publicProcedure.query(({ ctx }) => ctx.prisma.donut.findMany({})),
})