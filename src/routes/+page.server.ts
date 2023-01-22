import { trpc } from '$lib/trpc/client';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    const donuts = await trpc.donuts.list.query();

    return { donuts };
}) satisfies PageServerLoad;
