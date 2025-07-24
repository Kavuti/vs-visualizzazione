<script lang="ts">
    let symbols = [
        "2",
        "2b",
        "2#",
        "3",
        "3b",
        "4",
        "4#",
        "5",
        "5b",
        "5#",
        "6",
        "6b",
        "7",
        "7b",
        "9",
        "9b",
        "9#",
        "11",
        "11#",
        "13",
        "13b"
    ]

	function getRandomNumbers() {
        let randomSymbols: string[] = [];
        while (randomSymbols.length < 10) {
            const symbol = symbols[Math.floor(Math.random() * symbols.length)];
            if (randomSymbols[randomSymbols.length - 1] !== symbol) {
                randomSymbols.push(symbol);
            }
        }
        let randomSymbolsString = randomSymbols.join(' ');

        return randomSymbolsString;
	}

</script>


<main class="p-4 w-full">
    <h1 class="mt-8 mb-2 text-center sm:text-3xl md:text-5xl lg:text-7xl">
        Tavola Di Tutti Gli Intervalli
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