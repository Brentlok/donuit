<script lang="ts">
	import { Input } from '~/components';
	import type { PageServerData } from './$types';
	import { cart } from '~/stores';

	export let data: PageServerData;
	let count = 1;

	const addToCart = () => {
		cart.add({ product: data.donut, count });
	};
</script>

<svelte:head>
	<title>DONUiT - {data.donut.name}</title>
	<meta name="description" content={data.donut.name} />
</svelte:head>

<main class="grid place-items-center min-h-screen px-6 max-w-4xl m-auto">
	<div class="flex flex-col gap-6 items-center">
		<h1 class="text-5xl text-primary tracking-widest">{data.donut.name}</h1>
		{#if data.donut.sugarFree}
			<h2 class="text-xl text-primary tracking-widest">(sugar free)</h2>
		{/if}
		<img src={`/donuts/${data.donut.img}`} alt={data.donut.name} />
		<span class="tracking-widest text-base-100">
			{data.donut.description}
		</span>
		<div class="flex items-center gap-4">
			<div>
				<div class="btn-group">
					<Input.Counter bind:value={count} />
					<button class="btn btn-accent" on:click={addToCart}>Add to cart</button>
				</div>
			</div>
			<span class="text-base-100 text-xl text-center float-right w-32">
				$ {(data.donut.price * count).toFixed(2)}
			</span>
		</div>
	</div>
</main>
