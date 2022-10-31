<script>
    import Chart from "../components/Chart.svelte";
    import { bitcoinwallet, bitcoinprice } from "../utils/stores";
</script>

<div class="ml-8 mt-8">
    <h1 class="text-3xl">Bitcoin</h1>

    <div class="flex mt-8 max-w-lg justify-between">
        <p class="text-base text-slate-400">Overview</p><p class="text-base text-slate-400 mr-3">🔴Live chart</p>
    </div>
    <div class="flex">
        <div class="bg-slate-800 mt-2 rounded-xl w-96">
            <h1 class="text-xl mt-2 ml-4 text-slate-400">Your current wallet (btc) </h1>
            <p class="text-white text-3xl ml-4">{$bitcoinwallet}₿</p>
            <h1 class="text-xl mt-2 ml-4 text-slate-400">Your current wallet (€) </h1>
            <p class="text-white text-3xl ml-4">{$bitcoinprice}€</p>
            <h1 class="text-xl mt-1 ml-4 text-slate-400">One bitcoin in € </h1>
            <p class="text-white text-3xl ml-4">{$bitcoinwallet * $bitcoinprice}€</p>
        </div>
        <div class="bg-slate-800 chartdiv mt-2 ml-8 rounded-xl justify-center h-56">
            <Chart/>
        </div>
    </div>
</div>

<style>
    .chartdiv {
        width: 34.5rem;
    }
</style>