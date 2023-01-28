import { PrismaClient } from "@prisma/client";
import type { ServerLoadEvent } from "@sveltejs/kit";
import { appRouter } from "./server";
import type { Session } from "@auth/core/types";
import type { RouteParams } from "../routes/$types";

export const prisma = new PrismaClient();
export * from './context';
export * from './server';
export { trpcBasePath } from './client';
export const getTrpcServerClient = async (e: ServerLoadEvent<RouteParams, {
    session: Session | null;
}, string>) => {
    const { session } = await e.parent();
    return appRouter.createCaller({ prisma, user: session?.user });
}