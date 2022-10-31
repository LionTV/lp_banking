<script>
    import NavBar from "../components/NavBar.svelte";
    import { navigationnumber } from "../utils/stores";
    import Dashboard from "./Dashboard.svelte";
    import Bitcoin from './Bitcoin.svelte';

    let navnumber = $navigationnumber;
    $: navnumber = $navigationnumber;
</script>

<div class="bg-slate-700 flex rounded-xl text-white text-lg">
    <NavBar/>
    {#if navnumber == 0}
        <Dashboard/>
    {/if}
    {#if navnumber == 5}
        <Bitcoin/>
    {/if}
</div>

<style>
    div {
        width: 80%;
        height: 700px;
    }
</style>