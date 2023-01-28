<script lang="ts">
	import { get } from 'svelte/store';
	import { cart } from '~/stores';
	const { count, total, items } = cart;
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-label-has-associated-control -->
<li class="dropdown dropdown-bottom dropdown-left">
	<label tabindex="0" class="btn mr-2 indicator p-2">
		<span class="indicator-item indicator-bottom indicator-start badge badge-sm badge-secondary">
			{$count}
		</span>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-8 w-8"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				class="stroke-primary"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
			/>
		</svg>
	</label>
	<div
		tabindex="0"
		class="mt-3 card card-compact bg-accent dropdown-content w-52 cursor-default shadow-xl"
	>
		<div class="card-body text-center">
			{#if $count > 0}
				<span class="font-bold text-lg text-base-100">{$count} Items</span>
				{#each $items as item}
					<div class="flex justify-center gap-2 items-center">
						<span>
							{get(item).count}x
						</span>
						<img class="w-8 h-8" src={`/donuts/${get(item).product.img}`} alt="" />
						<span class="text-lg">
							{get(item).product.name}
						</span>
					</div>
				{/each}
				<span class="text-base-100">Subtotal: ${$total}</span>
			{/if}
			<div class="card-actions">
				<button class="btn btn-primary btn-block">View cart</button>
			</div>
		</div>
	</div>
</li>
