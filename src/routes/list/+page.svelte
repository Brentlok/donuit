<script lang="ts">
	import { createInfiniteQuery } from '@tanstack/svelte-query';
	import { trpc } from '~/trpc/client';
	import { infiniteScroll } from '~/utils';
	import type { PageServerData } from './$types';
	export let data: PageServerData;

	const query = createInfiniteQuery({
		queryKey: ['list'],
		queryFn: ({ pageParam = 1 }) =>
			trpc.donuts.list.query({ paging: { page: pageParam, pageSize: 3 } }),
		getNextPageParam: (lastPage) => {
			const { paging } = lastPage;
			const nextPage = paging.page + 1;
			return nextPage > paging.max ? undefined : nextPage;
		},
		keepPreviousData: true,
		enabled: false,
		initialData: {
			pageParams: [1],
			pages: [data.donuts]
		}
	});

	let nextRef: HTMLLIElement | null = null;
	let dispose: (() => void) | undefined = undefined;
	$: {
		dispose?.();
		dispose = infiniteScroll(() => $query.fetchNextPage(), nextRef);
	}
</script>

<main class="py-24 w-screen px-4">
	<h1 class="text-accent tracking-widest text-5xl text-center">Browse</h1>
	<div class="flex flex-col gap-12 mx-auto mt-12 max-w-3xl">
		{#if $query.data?.pages}
			{#each $query.data.pages as page, pageI}
				{#each page.data as item, itemI (item.id)}
					<a
						data-sveltekit-preload-data="tap"
						href={`/donut/${item.id}`}
						class="relative flex justify-around items-center gap-4 tracking-widest bg-accent-transparent p-4 rounded-3xl"
					>
						<img class="w-1/2 h-auto" src={`/donuts/${item.img}`} alt="" />
						<div class="w-1/2 flex flex-col text-center text-xl md:text-2xl">
							<p class="text-base-100">
								{item.name}
							</p>
							<p class="text-info mt-2">
								$ {item.price.toFixed(2)}
							</p>
						</div>
						{#if pageI + 1 === $query.data.pages.length && itemI + 1 === page.data.length}
							<li class="absolute top-1/3" bind:this={nextRef} />
						{/if}
					</a>
				{/each}
			{/each}
		{/if}
	</div>
</main>
