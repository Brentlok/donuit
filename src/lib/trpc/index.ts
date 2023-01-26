import { PrismaClient } from "@prisma/client";
import type { ServerLoadEvent } from "@sveltejs/kit";
import type { RouteParams } from "../../routes/$types";
import { appRouter } from "./server";
import type { Session } from "@auth/core/types";
export const prisma = new PrismaClient();
export * from './client';
export * from './context';
export * from './server';

export const getTrpcServerClient = async (e: ServerLoadEvent<RouteParams, {
    session: Session | null;
}, "/">) => {
    const { session } = await e.parent();
    return appRouter.createCaller({ prisma, user: session?.user });
}