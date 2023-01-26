import { GITHUB_ID, GITHUB_SECRET, GOOGLE_ID, GOOGLE_SECRET, JWT_SECRET } from "$env/static/private";
import type { Adapter } from "@auth/core/adapters";
import type { Provider } from "@auth/core/providers";
import GitHub from '@auth/core/providers/github';
import Google from '@auth/core/providers/google';
import { SvelteKitAuth } from '@auth/sveltekit';
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { sequence } from '@sveltejs/kit/hooks';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter, prisma, trpcBasePath } from '~/trpc';


export const handle = sequence(
    SvelteKitAuth({
        providers: [
            GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }) as Provider,
            Google({ clientId: GOOGLE_ID, clientSecret: GOOGLE_SECRET }) as Provider,
        ],
        secret: JWT_SECRET,
        adapter: PrismaAdapter(prisma) as Adapter,
    }),
    async ({ event, resolve }) => {
        const session = await event.locals.getSession();
        if (event.url.pathname.startsWith(`${trpcBasePath}/`)) {
            const response = await fetchRequestHandler({
                endpoint: trpcBasePath,
                req: event.request,
                router: appRouter,
                createContext() {
                    return {
                        prisma,
                        user: session?.user,
                    }
                },
            });

            return response;
        }

        return await resolve(event);
    }
);