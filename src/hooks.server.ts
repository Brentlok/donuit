import type { Handle } from '@sveltejs/kit';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { PrismaClient } from '@prisma/client';
import { appRouter } from '$lib/trpc/server';
import { trpcBasePath } from '$lib/trpc/client';


export const handle: Handle = async ({ event, resolve }) => {
    if (event.url.pathname.startsWith(`${trpcBasePath}/`)) {
        const response = await fetchRequestHandler({
            endpoint: trpcBasePath,
            req: event.request,
            router: appRouter,
            createContext() {
                return {
                    prisma: new PrismaClient(),
                }
            },
        });

        return response;
    }

    return await resolve(event);
};