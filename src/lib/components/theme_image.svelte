<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	export let lightSrc: string;
	export let darkSrc: string;
	export let alt: string = '';
	export let className: string = '';

	let mounted = false;
	let currentTheme = writable<'light' | 'dark'>('light');

	// Detect theme on mount
	onMount(() => {
		mounted = true;

		// Check current theme
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		currentTheme.set(prefersDark ? 'dark' : 'light');

		// Listen for theme changes
		const mqListener = (e: MediaQueryListEvent) => {
			currentTheme.set(e.matches ? 'dark' : 'light');
		};
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', mqListener);

		return () => {
			window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', mqListener);
		};
	});
</script>

{#if !mounted}
	<div class="w-full h-full bg-gray-200 animate-pulse rounded"></div>
{:else if $currentTheme === 'dark'}
	<img src={darkSrc} {alt} class={className} {...$$restProps} />
{:else}
	<img src={lightSrc} {alt} class={className} {...$$restProps} />
{/if}
