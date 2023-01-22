<script lang="ts">
	const user = null;
</script>

<nav class="navbar justify-between w-full fixed z-50 top-0 left-0 bg-neutral px-6">
	<h1 class="text-secondary">
		<a href="/">DONUiT</a>
	</h1>
	<div class="relative">
		<input type="text" class="input input-bordered input-primary bg-neutral text-base-100 pr-10" />
		<button>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5 absolute top-1/2 right-3 -translate-y-1/2"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					class="stroke-primary"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			</svg>
		</button>
	</div>
	<ul class="menu menu-horizontal px-1">
		<li>
			<div class="btn mr-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
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
			</div>
			{#if user}
				<a class="btn btn-primary" href="/cart">Cart</a>
			{:else}
				<a class="btn btn-primary" href="/login">Login</a>
			{/if}
		</li>
	</ul>
</nav>
