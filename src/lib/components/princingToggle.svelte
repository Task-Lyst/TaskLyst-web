<script>
	export let isAnnual = true;
	export let percentage = 25;

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<div class="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
	<div class="relative flex w-full p-1 rounded-full">
		<span class="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
			<span
				class="absolute inset-0 w-1/2 bg-maincolor rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out {isAnnual
					? 'translate-x-0'
					: 'translate-x-full'}"
			/>
		</span>
		<button
			class="relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out {isAnnual
				? 'text-white'
				: 'text-slate-500'}"
			on:click={() => {
				isAnnual = true;
				dispatch('toggle', isAnnual);
			}}
			>Yearly <span class="isAnnual ? 'text-indigo-200' : 'text-slate-400'">-{percentage}%</span
			></button
		>
		<button
			class="relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out {isAnnual
				? 'text-slate-500'
				: 'text-white'}"
			on:click={() => {
				isAnnual = false;
				dispatch('toggle', isAnnual);
			}}>Monthly</button
		>
	</div>
</div>
