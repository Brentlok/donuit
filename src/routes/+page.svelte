<svelte:head>
	<title>DONUiT - Home</title>
	<meta name="description" content="DONUiT" />
</svelte:head>

<main class="h-screen overflow-hidden flex flex-col md:flex-row items-center pt-24 md:pt-0">
	<img
		class="w-full md-w-1/2 z-10 pointer-events-none self-center 2xl:self-end"
		src="/hero.png"
		alt=""
	/>
	<div class="w-full md:w-1/2 flex flex-col items-center gap-10">
		<h1 class="text-primary tracking-widest text-6xl lg:text-7xl xl:text-8xl pr-8">
			GET
			<p class="text-secondary">DONUT</p>
		</h1>
		<span class="text-base-100 tracking-widest p-4 text-center md:text-left">
			DONUiT best online donuts and pantries store
		</span>
		<a class="btn btn-warning text-xl" href="/list">buy one</a>
	</div>
</main>
