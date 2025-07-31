<script>
	import { onMount, onDestroy } from 'svelte';
	export let images = [];
	export let interval = 4000;
	export let padding = 100; // default large padding
	export let effect = 'fade';

	let currentIndex = 0;
	let prevIndex = 0;
	let isTransitioning = false;
	let intervalId;

	function prev() {
		prevIndex = currentIndex;
		currentIndex = (currentIndex - 1 + images.length) % images.length;
		triggerTransition();
	}

	function next() {
		prevIndex = currentIndex;
		currentIndex = (currentIndex + 1) % images.length;
		triggerTransition();
	}

	function triggerTransition() {
		isTransitioning = true;
		setTimeout(() => (isTransitioning = false), 500);
	}

	onMount(() => {
		intervalId = setInterval(() => {
			next();
		}, interval);
	});

	onDestroy(() => {
		clearInterval(intervalId);
	});
</script>

<div class="carousel-wrapper">
	<div class="carousel-container" style="--pad: {padding}px;">
		{#if effect === 'fade'}
			<img
				src={images[prevIndex]}
				alt=""
				class="carousel-image"
				style="opacity: {isTransitioning ? 0 : 1}"
			/>
			<img src={images[currentIndex]} alt="" class="carousel-image" style="opacity: 1" />
		{:else if effect === 'slide'}
			<img
				src={images[currentIndex]}
				alt=""
				class="carousel-image"
				style="transform: translateX(0)"
			/>
		{/if}

		<button class="carousel-btn left" on:click={prev}>‹</button>
		<button class="carousel-btn right" on:click={next}>›</button>

		<div class="carousel-dots">
			{#each images as _, i}
				<span
					class={i === currentIndex ? 'active' : ''}
					role="button"
					tabindex="0"
					aria-label={`Go to slide ${i + 1}`}
					on:click={() => (currentIndex = i)}
					on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && ((currentIndex = i), next())}
				></span>
			{/each}
		</div>
	</div>
</div>

<style>
	.carousel-wrapper {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-bottom: 20px;
		margin-left: auto;
		margin-right: auto;
	}

	.carousel-container {
		position: relative;
		width: 90%;
		max-width: 750px;
		aspect-ratio: 16 / 10;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 12px;
		box-sizing: border-box;
		margin: auto;
		background: #f5f5f5;
	}

	.carousel-image {
		position: absolute;
		max-width: calc(100% - clamp(10px, var(--pad), 80px));
		max-height: calc(100% - clamp(10px, var(--pad), 80px));
		width: auto;
		height: auto;
		object-fit: contain;
		border-radius: 12px;
		transition:
			opacity 0.5s ease-in-out,
			transform 0.5s ease-in-out;
	}

	.carousel-btn {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: rgba(0, 0, 0, 0.5);
		color: white;
		border: none;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		cursor: pointer;
		font-size: 20px;
		line-height: 40px;
		text-align: center;
		user-select: none;
	}

	.carousel-btn.left {
		left: clamp(10px, 3vw, 30px);
	}

	.carousel-btn.right {
		right: clamp(10px, 3vw, 30px);
	}

	.carousel-dots {
		text-align: center;
		position: absolute;
		bottom: clamp(5px, 2vw, 12px);
		left: 50%;
		transform: translateX(-50%);
		background: rgba(0, 0, 0, 0.3);
		padding: 6px 12px;
		border-radius: 8px;
	}

	.carousel-dots span {
		display: inline-block;
		width: 10px;
		height: 10px;
		margin: 0 5px;
		border-radius: 50%;
		cursor: pointer;
		background: #777;
	}

	.carousel-dots span.active {
		background: #fff;
	}

	@media (max-width: 600px) {
		.carousel-container {
			aspect-ratio: 4 / 3;
		}
	}
</style>
