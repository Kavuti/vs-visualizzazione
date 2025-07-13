<script lang="ts">
	let numbers: string[] = [];

	function getRandomNumbers() {
		return Array(10)
			.fill(0)
			.map(() => Math.floor(Math.random() * 7) + 1)
			.join(' ');
	}

	$: numbers = Array(12).fill(0).map(getRandomNumbers);
</script>

<div class="p-8">
	<h1 class="my-8 text-center sm:text-3xl md:text-5xl lg:text-7xl">
		Tavola degli Intervalli Naturali
	</h1>
	{#each numbers as number}
		<p class="text-base flex flex-nowrap text-center w-full sm:text-xl md:text-2xl lg:text-3xl">
			<span class="w-2/5 sm:w-2/5 lg:w-2/8">{number}</span>
      <span class="w-1/5 sm:w-1/5 lg:w-1/8"> | </span>
			<span class="w-2/5 sm:w-2/5 lg:w-2/8">{getRandomNumbers()}</span>
      <span class="hidden sm:hidden md:hidden lg:block lg:w-1/8"> | </span>
			<span class="hidden sm:hidden md:hidden lg:block lg:w-2/8">{getRandomNumbers()}</span>
		</p>
	{/each}
</div>

