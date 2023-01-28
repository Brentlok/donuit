<script lang="ts">
	export let max = 99;
	export let min = 1;
	export let value: number;

	$: {
		switch (true) {
			case Number(value) > max:
				value = max;
				break;
			case Number(value) < min:
			case value === null:
				value = min;
				break;
		}
	}
</script>

<div class="bg-info rounded-l-xl text-accent w-24 flex justify-between px-2">
	<button class="w-2" on:click={() => value--}> - </button>
	<input type="number" class="bg-info w-8 text-center" bind:value />
	<button class="w-2" on:click={() => value++}> + </button>
</div>
