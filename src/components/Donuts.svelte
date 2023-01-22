<script lang="ts">
	import type { Donut } from '@prisma/client';

	export let donuts: Donut[];

	let show = undefined as Donut | undefined;
	let position = { x: 0, y: 0 };

	const handleMouse = (donut: Donut, e?: MouseEvent) => {
		show = donut;
		if (e) {
			updatePosition(e);
		}
	};

	const updatePosition = (e: MouseEvent) => {
		position = { x: e.clientX, y: e.clientY };
	};

	$: transform = `transform: translate(${position.x}px, ${position.y}px);`;
</script>

{#each donuts as donut (donut.id)}
	<div class="grid place-items-center">
		<div
			class="cursor-pointer"
			on:mouseover={(e) => handleMouse(donut, e)}
			on:mousemove={(e) => updatePosition(e)}
			on:focus={null}
			on:mouseleave={() => (show = undefined)}
		>
			<img class="pointer-events-none" src={`/donuts/${donut.img}`} alt="" />
		</div>
	</div>
{/each}

{#if show}
	<div style={transform} class="fixed top-0 left-0 text-base-100 bg-accent p-3 rounded-md">
		{show.name}
	</div>
{/if}
