<script lang="ts">

	function getRandomNumbers() {
		let randomNumbers: number[] = [];
		while (randomNumbers.length < 10) {
			const num = Math.floor(Math.random() * 7) + 1;
			if (randomNumbers[randomNumbers.length - 1] !== num) {
				randomNumbers.push(num);
			}
		}
		let randomNumbersString = randomNumbers.join(' ');

		return randomNumbersString;
	}

</script>


<main class="p-4 w-full">
    <h1 class="mt-8 mb-2 text-center sm:text-3xl md:text-5xl lg:text-7xl">
        Tavola degli Intervalli Naturali
    </h1>
    <div class="w-full text-black mt-2 mb-6 bg-white text-center text-md">Ricaricare la pagina per ottenere una nuova tavola</div>
    {#each Array(10).fill(0) as _}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-2xl">
            <div class="text-black m-2 bg-white text-center">{getRandomNumbers()}</div>
            <div class="hidden sm:block text-black m-2 bg-white text-center">{getRandomNumbers()}</div>
            <div class="hidden lg:block text-black m-2 bg-white text-center">{getRandomNumbers()}</div>
        </div>
    {/each}
</main>

