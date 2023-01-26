import { getTrpcServerClient } from '$lib/trpc';
import type { PageServerLoad } from './$types';

export const load = (async (e) => {
    const trpc = await getTrpcServerClient(e);
    const donuts = await trpc.donuts.list();

    return { donuts };
}) satisfies PageServerLoad;
