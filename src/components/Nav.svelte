<script lang="ts">
	import { signIn } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import User from './User.svelte';
	import NavCart from './NavCart.svelte';
	const user = $page.data.session?.user;
</script>

<nav class="navbar justify-between w-full fixed z-50 top-0 left-0 bg-neutral px-6">
	<h1 class="text-secondary">
		<a href="/">DONUiT</a>
	</h1>
	<div class="relative hidden md:block">
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
		<NavCart />
		<li>
			{#if user}
				<User {user} />
			{:else}
				<button class="btn btn-primary" on:click={() => signIn()}>Login</button>
			{/if}
		</li>
	</ul>
</nav>
