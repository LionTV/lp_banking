<script lang="ts">
	import { createEventDispatcher, onDestroy } from 'svelte';
	import { createNewAcc } from '../utils/functions';
    import { debugMsg } from '../utils/debug';
    import { fullname, cardcategory, showSecondAcc } from '../utils/stores';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	function closebutton() {
		close();
		createNewAcc($fullname, $cardcategory);
		showSecondAcc.set(true);
	}

	let modal;

	const handle_keydown = e => {
		if (e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			e.preventDefault();
		}
	};

	const previously_focused = typeof document !== 'undefined' && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>

<svelte:window on:keydown={handle_keydown}/>

<div class="modal-background" on:click={close}></div>

<div class="modal text-white object-cover bg-slate-700" role="dialog" aria-modal="true" bind:this={modal}>
	<slot name="header"></slot>
	<hr>
	<slot></slot>
	<hr class="mb-1">

	<button on:click={closebutton} class="border-2 border-slate-400 rounded p-1 pr-2 pl-2 hover:bg-slate-400 outline-none mt-2">Eröffnen</button>
</div>

<style>
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.3);
	}

	.modal {
		position: absolute;
		left: 50%;
		top: 50%;
		width: calc(100vw - 4em);
		max-width: 32em;
		max-height: calc(100vh - 4em);
		overflow: auto;
		transform: translate(-50%,-50%);
		padding: 1em;
		border-radius: 0.2em;
	}

	button {
		display: block;
	}
</style>