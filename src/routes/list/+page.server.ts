import { getTrpcServerClient } from '~/trpc';
import type { PageServerLoad } from './$types';

export const load = (async (e) => {
    const trpc = await getTrpcServerClient(e);
    const donuts = await trpc.donuts.list({ paging: { page: 1, pageSize: 3 } });

    return { donuts };
}) satisfies PageServerLoad;
