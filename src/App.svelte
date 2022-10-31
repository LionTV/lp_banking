<script>
    import Home from './sites/Home.svelte';
	
	let showDisplay = true;

	window.addEventListener('message', function(event) {
		let data = event.data;

		if (data.type == 'showInterface') {
			showDisplay = true;
		} else if (data.type == 'hideInterface') {
			showDisplay = false;
		}
	});
</script>

<main>
	{#if showDisplay}
	<div class="flex flex-row min-h-screen justify-center items-center">
		<Home/>
	</div>
	{/if}
</main>