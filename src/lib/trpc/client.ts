import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { env } from '$env/dynamic/public';
import type { AppRouter } from './server';

export const trpcBasePath = '/api/trpc';

export const trpc = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: `${env.PUBLIC_BASE_URL}${trpcBasePath}`,
        }),
    ],
});