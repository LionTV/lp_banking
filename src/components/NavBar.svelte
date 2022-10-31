<script lang="ts">
    import { navigationnumber } from "../utils/stores";
</script>

<div id="leftside" class="bg-slate-800 w-36 h-full items-center justify-center select-none">
    <div class="pt-16">
        <svg on:click={() => navigationnumber.set(0)} xmlns="http://www.w3.org/2000/svg" class="hover:cursor-pointer icon icon-tabler m-auto icon-tabler-home" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <polyline points="5 12 3 12 12 3 21 12 19 12" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg>
          <p on:click={() => navigationnumber.set(0)} class="text-base ml-8 hover:cursor-pointer">Dashboard</p>    
    </div>
    <div class="pt-8">
        <svg on:click={() => navigationnumber.set(1)} xmlns="http://www.w3.org/2000/svg" class="hover:cursor-pointer icon icon-tabler m-auto icon-tabler-home" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="21" y1="17" x2="3" y2="17" />
                <path d="M6 10l-3 -3l3 -3" />
                <line x1="3" y1="7" x2="21" y2="7" />
                <path d="M18 20l3 -3l-3 -3" />
              </svg>
          <p on:click={() => navigationnumber.set(1)} class="text-base ml-11 hover:cursor-pointer">Transfer</p>    
    </div>
    <div class="pt-8">
        <svg on:click={() => navigationnumber.set(2)} xmlns="http://www.w3.org/2000/svg" class="hover:cursor-pointer icon icon-tabler m-auto icon-tabler-home" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="12" r="9" />
                <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
                <path d="M12 6v2m0 8v2" />
              </svg>
          <p on:click={() => navigationnumber.set(2)} class="text-base ml-7 hover:cursor-pointer">Transactions</p>    
    </div>
    <div class="pt-8">
        <svg on:click={() => navigationnumber.set(3)} xmlns="http://www.w3.org/2000/svg" class="hover:cursor-pointer icon icon-tabler m-auto icon-tabler-home" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
              </svg>
          <p on:click={() => navigationnumber.set(3)} class="text-base ml-11 hover:cursor-pointer">Deposit</p>    
    </div>
    <div class="pt-8">
        <svg on:click={() => navigationnumber.set(4)} xmlns="http://www.w3.org/2000/svg" class="hover:cursor-pointer icon icon-tabler m-auto icon-tabler-home" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <rect x="7" y="9" width="14" height="10" rx="2" />
                <circle cx="14" cy="14" r="2" />
                <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" />
              </svg>
          <p on:click={() => navigationnumber.set(4)} class="text-base ml-9 hover:cursor-pointer">Withdraw</p>    
    </div>
    <div class="pt-8">
        <svg on:click={() => navigationnumber.set(5)} xmlns="http://www.w3.org/2000/svg" class="hover:cursor-pointer icon icon-tabler m-auto icon-tabler-home" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8" />
                <line x1="8" y1="6" x2="8" y2="18" />
                <line x1="8" y1="12" x2="14" y2="12" />
                <line x1="9" y1="3" x2="9" y2="6" />
                <line x1="13" y1="3" x2="13" y2="6" />
                <line x1="9" y1="18" x2="9" y2="21" />
                <line x1="13" y1="18" x2="13" y2="21" />
              </svg>
          <p on:click={() => navigationnumber.set(5)} class="text-base ml-11 hover:cursor-pointer">Bitcoin</p>    
    </div>
</div>

<style>
    svg {
        stroke: white;
        width: 40px;
    }

    #leftside {
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
    }
</style>