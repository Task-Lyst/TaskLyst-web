<script>
	import waitListSource from '$lib/js/stores.js';

	export let bg_color = 'bg-slate-900';
	export let check_color = 'fill-emerald-500';
	export let text_color = 'text-slate-200';
	export let desc_color = 'text-slate-500';
	export let month_color = 'text-slate-400';
	export let button_bg_color = 'bg-indigo-500';
	export let button_fg_color = 'text-white';
	// NOTE: not working in the component, fixing value at the moment
	// export let button_bg_hover_color = 'bg-indigo-600';
	export let badge_text = 'Most Popular';
	export let badge_color = 'bg-emerald-500';
	export let feature_color = 'text-slate-400';
	export let pre_feature_text = 'All in Free, plus:';
	export let features = ['Feature 1', 'Feature 2'];
	export let name = 'Perform';
	export let currency = '$';
	export let month = '/mo';
	export let year = '/yr';
	export let value_mo = '';
	export let value_year = '';
	export let description = 'There are many variations available, but the majority have suffered.';
	export let button_text = 'Join the waitlist';
	export let includes = 'Includes';
	export let href = '/#waitlist';
	export let isAnnual = true;
	export let nDecimals = 0;
</script>

<div class="h-full">
	<div
		class="relative flex flex-col h-full p-6 rounded-2xl {bg_color} border border-slate-900 shadow shadow-slate-950/5"
	>
		{#if badge_text != ''}
			<div class="absolute top-0 right-0 mr-6 -mt-4">
				<div
					class="inline-flex items-center text-xs font-semibold py-1.5 px-3 {badge_color} text-white rounded-full shadow-sm shadow-slate-950/5"
				>
					{badge_text}
				</div>
			</div>
		{/if}
		<div class="mb-5">
			<div class="{text_color} font-semibold mb-1">{name}</div>
			<div class="flow-root">
				<div class="float-left inline-flex items-baseline mb-2">
					<span class="{text_color} font-bold text-3xl">{currency}</span>
					<span class="{text_color} font-bold text-4xl"
						>{isAnnual ? parseFloat(value_year / 12).toFixed(nDecimals) : value_mo}</span
					>
					<span class="{month_color} font-medium"> {month}</span>
				</div>
				{#if isAnnual && value_mo > 0}
					<div class="float-right inline-flex items-baseline mb-2">
						<span class="{text_color} font-medium"
							>{currency}{parseFloat(value_year).toFixed(nDecimals)}</span
						>
						<span class="{month_color} font-medium text-xs text-left">{year}</span>
					</div>
				{/if}
			</div>
			<div class="text-sm {desc_color} mb-5">
				{description}
			</div>
			<center>
				<a
					on:click={() => waitListSource.set(name)}
					class="w-48 inline-flex justify-center whitespace-nowrap rounded-lg {button_bg_color} px-3.5 py-2.5 font-medium
                {button_fg_color} shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-600 transition-colors duration-150"
					{href}
				>
					{button_text}
				</a>
			</center>
		</div>
		<div class="{text_color} font-medium mb-3">{includes}</div>
		{#if pre_feature_text != ''}
			<div class="text-sm {feature_color} mb-3">
				{pre_feature_text}
			</div>
		{/if}
		<ul class="{feature_color} text-sm space-y-3 grow">
			{#each features as feature}
				<li class="flex items-center">
					<svg
						class="w-3 h-3 {check_color} mr-3 shrink-0"
						viewBox="0 0 12 12"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
						/>
					</svg>
					<span>{feature}</span>
				</li>
			{/each}
		</ul>
	</div>
</div>
