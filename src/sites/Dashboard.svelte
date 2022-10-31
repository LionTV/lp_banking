<script lang="ts">
    import Chart from '../components/Chart.svelte';
    import Modal from '../components/Modal.svelte';
    import { debugMsg } from '../utils/debug';
    import { fetchNui } from '../utils/fetchNui';
    import { genNumberCode, numberWithCommas } from '../utils/functions';
    import { cardcategory, fullname, showSecondAcc, bitcoinwallet, totalwallet, bitcoinprice } from '../utils/stores';

    let showModal = false;
    let changeCard = "Personal";


    // TODO: get infos from db
    let balancefirstAcc = 10100;
    let balancesecAcc = 1000;
    let name = "Max Mustermann";


    let totalbalancefirst = numberWithCommas(balancefirstAcc)
    let totalbalancesec = numberWithCommas(balancesecAcc);
    let total = balancefirstAcc;
    let totalbal = total;
    $: if ($showSecondAcc) {
        total = balancefirstAcc + balancesecAcc;
        totalbal = numberWithCommas(total);
    } else {
        total = balancefirstAcc;
        totalbal = numberWithCommas(total);
    }

    let secAccIsCreated = $showSecondAcc;
    $: secAccIsCreated = $showSecondAcc;

    let code: string;
    $: if (!showModal) {
        code = genNumberCode(4);
        console.log(code)
    }

    let btcwallet = $bitcoinwallet;
    let btcprice = $bitcoinprice;
    let eurowallet = btcwallet * btcprice; 
</script>

{#if showModal}
	<Modal on:close="{() => showModal = false}">
		<h2 slot="header" class="text-2xl mb-2">
			Neues Konto
		</h2>

        <div class="m-auto mt-4 w-80 bg-gradient-to-r rounded-xl h-32 from-indigo-700 to-indigo-500">
            <div class="flex justify-between">
                <h1 class="text-2xl ml-6 mt-4">${totalbalancesec}</h1>
                <p class="text-slate-400 text-base mt-6 mr-4">{changeCard}</p>
            </div>
            <p class="text-slate-400 mt-4 ml-6 text-base">Owner</p>
            <div class="flex">
                <p class="ml-6 text-slate-100">{name}</p>
            </div>        
        </div>
        <div class="">
            <p class="text-slate-400 text-base mt-4 ml-10">Name / Firma</p>
            {#if changeCard == "Personal"}
            <!-- FIXME: value stays also if you switch between these two options in the dropdown menu -->
                <input disabled type="text" placeholder="Name" class="mt-1 outline-none bg-transparent border-2 border-slate-400 pl-2 pr-2 rounded ml-10 text-white" bind:value={name} on:change={() => fullname.set(name)}> <br>
            {:else}
                <!-- svelte-ignore a11y-autofocus -->
                <input autofocus type="text" placeholder="Firma" class="mt-1 outline-none bg-slate-400 border-2 border-slate-400 pl-2 pr-2 rounded ml-10 text-white" bind:value={name} on:change={() => fullname.set(name)}> <br>
            {/if}

            <p class="text-slate-400 text-base mt-2 ml-10">Kategorie</p>
            <!-- svelte-ignore a11y-no-onchange -->
            <select class="rounded outline-none bg-transparent border-2 border-slate-400 pr-2 pl-2 text-white ml-10 mt-1" bind:value="{changeCard}" on:change={() => cardcategory.set(changeCard)} >
                <option value="Personal" class="text-black hover:text-black">Personal</option>
                <option value="Business" class="text-black hover:text-black">Business</option>
            </select>

            <br>

            <p class="text-slate-400 text-base mt-2 ml-10">PIN</p>
            <div class="flex">
                <input type="text" disabled value="{code}" class="rounded bg-transparent border-2 border-slate-400 mt-1 mb-2 pl-2 pr-2 ml-10">
                <p class="text-red-500 text-sm ml-2 mt-3">*Der Pin kann später geändert werden.</p>
            </div>

            <p class="text-slate-400 text-base mt-2 ml-10 mb-4">Sie erhalten bei der ersten Eröffnung ein Startgeld von $1,000</p>

        </div>

	</Modal>
{/if}

<div id="db" class="rounded-r-xl h-full">
    <p class="text-slate-400 mt-8 ml-8 text-base">Total balance</p>
    <h1 class="text-3xl ml-8">${totalbal}</h1>
    
    <div class="flex" id="cards">
        <div class="m-8 w-80 bg-gradient-to-r rounded-xl h-32 from-indigo-700 to-indigo-500">
            <div class="flex justify-between">
                <h1 class="text-2xl ml-6 mt-4">${totalbalancefirst}</h1>
                <p class="text-slate-400 text-base mt-6 mr-4">Personal</p>
            </div>
            <p class="text-slate-400 mt-4 ml-6 text-base">Owner</p>
            <div class="flex">
                <p class="ml-6 text-slate-100">Max Mustermann</p>
            </div>        
        </div>
        {#if secAccIsCreated}
        <div class="m-8 w-80 bg-gradient-to-r rounded-xl h-32 from-indigo-700 to-indigo-500">
            <div class="flex justify-between">
                <h1 class="text-2xl ml-6 mt-4">${totalbalancesec}</h1>
                <p class="text-slate-400 text-base mt-6 mr-4">{changeCard}</p>
            </div>
            <p class="text-slate-400 mt-4 ml-6 text-base">Owner</p>
            <div class="flex">
                <p class="ml-6 text-slate-100">{name}</p>
            </div>        
        </div>
        {/if}
        {#if secAccIsCreated == false}
        <div on:click="{() => showModal = true}" id="addcard" class="m-8 w-80 h-32 border-2 justify-center items-center rounded-xl border-slate-400 hover:cursor-pointer">
            <div class="w-20 rounded-full h-1 bg-slate-400 m-auto mt-16"></div>
            <div class="h-20 w-1 rounded-full bg-slate-400 m-auto -mt-10"></div>
        </div>
        {/if}
    </div>

    <div class="flex">
        <p class="ml-8 text-slate-400 text-base">Transactions</p>
        <div class="mt-6" id="transactions">
            <div class="flex mt-4 text-center justify-between trans items-center w-96 h-16 bg-slate-800 rounded-xl">
                <p class="ml-4">Withdraw at Maze Bank</p>
                <p class="text-red-500 text-xl mr-4">- $1,300</p>
            </div>
            <div class="flex mt-4 text-center justify-between trans items-center w-96 h-16 bg-slate-800 rounded-xl">
                <p class="ml-4">Deposit at Meeting Point</p>
                <p class="text-green-500 text-xl mr-4">+ $1,300</p>
            </div>
            <div class="flex mt-4 text-center justify-between trans items-center w-96 h-16 bg-slate-800 rounded-xl">
                <p class="ml-4">Deposit at Grove Street</p>
                <p class="text-green-500 text-xl mr-4">+ $2,750</p>
            </div>
            <div class="flex mt-4 text-center justify-between trans items-center w-96 h-16 bg-slate-800 rounded-xl">
                <p class="ml-4">Withdraw at Sandy Shores</p>
                <p class="text-red-500 text-xl mr-4">- $4,780</p>
            </div>
        </div>
        <p class="ml-14 text-slate-400 text-base">Bitcoin</p>

        <div class="bg-slate-800 mt-10 rounded-xl -ml-12 w-96">
            <h1 class="text-xl m-4 text-slate-400">Your current wallet (btc) </h1>
            <p class="text-white text-3xl ml-4">{btcwallet}₿</p>
            <h1 class="text-xl m-4 text-slate-400">Your current wallet (€) </h1>
            <p class="text-white text-3xl ml-4">{eurowallet}€</p>
            <h1 class="text-xl m-4 text-slate-400">One bitcoin in € </h1>
            <p class="text-white text-3xl ml-4">{btcprice}€</p>
        </div>
    
    </div>
</div>

<style>
    #db {
        width: 88.5%;
        max-width: 88.5%;
    }

    #cards {
        max-width: 88.5%;
    }

    #transactions {
        max-width: 24rem;
        max-height: 20rem;
        height: 20rem;
        margin-left: -5.5rem;
    }

    .trans:hover {
        transform: scale(1.01);
        cursor: pointer;
    }
</style>

