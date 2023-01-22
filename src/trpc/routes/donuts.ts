import { publicProcedure, router } from "../trpc";

export const donutsRouter = router({
    list: publicProcedure
        .query(({ ctx }) => ctx.prisma.donut.findMany({})),
})