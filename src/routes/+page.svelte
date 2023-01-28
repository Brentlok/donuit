<script lang="ts">
	import { Donuts } from '~/components';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<svelte:head>
	<title>DONUiT - Home</title>
	<meta name="description" content="DONUiT" />
</svelte:head>

<main class="min-h-screen">
	<div class="flex flex-col md:flex-row justify-between items-center pt-16">
		<img
			class="w-full md-w-1/2 z-10 md:translate-y-28 pointer-events-none"
			src="/hero.png"
			alt=""
		/>
		<div class="w-full md:w-1/2 flex flex-col items-center gap-10">
			<h1 class="text-primary tracking-widest text-6xl lg:text-8xl pr-8">
				GET
				<p class="text-secondary">DONUT</p>
			</h1>
			<span class="text-base-100 tracking-widest p-4">
				DONUiT best online donuts and pantries store
			</span>
		</div>
	</div>
	<section class="bg-secondary">
		<article class="flex justify-end p-12">
			<button class="btn btn-warning mx-auto md:mx-0">more about us</button>
		</article>
		<article
			class="artboard bg-info grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4"
		>
			<Donuts donuts={data.donuts} />
		</article>
	</section>
</main>
