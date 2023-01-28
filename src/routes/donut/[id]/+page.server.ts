import { getTrpcServerClient } from '~/trpc';
import type { PageServerLoad } from './$types';

export const load = (async (e) => {
    const trpc = await getTrpcServerClient(e);
    const donut = await trpc.donuts.get({ id: Number(e.params.id) });

    if (!donut) {
        throw new Error(`Donut with id ${e.params.id} not found`);
    }

    return { donut };
}) satisfies PageServerLoad;
