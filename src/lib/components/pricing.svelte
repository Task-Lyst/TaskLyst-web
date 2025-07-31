<script>
	import PrincingCard from './princingCard.svelte';
	import PrincingToggle from './princingToggle.svelte';
	import { Plans } from '../data/plans.js';

	export let id;
	let isAnnual = true;
	let percentage = 25;
</script>

<section {id} class="ud-pricing">
	<div class="container wow fadeInUp">
		<div class="row">
			<div class="col-lg-12">
				<div class="ud-section-title mx-auto text-center">
					<span>Pricing</span>
					<h2>Our Pricing Plans</h2>
					<p>
						Whether you are a beginner, a domainer, or a business, we have a plan that is right for
						you.
					</p>
				</div>
			</div>
		</div>

		<PrincingToggle
			{percentage}
			{isAnnual}
			on:toggle={(e) => {
				isAnnual = e.detail;
			}}
		/>

		<br /><br />

		<div class="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
			{#each Plans as plan}
				<PrincingCard {...plan} {isAnnual} />
			{/each}
		</div>

		<!-- <div class="row g-0 align-items-center justify-content-center">
			<div class="col-lg-4 col-md-6 col-sm-10">
				<div class="ud-single-pricing first-item wow fadeInUp" data-wow-delay=".15s">
					<div class="ud-pricing-header">
						<h3>STARTING FROM</h3>
						<h4>$ 19.99/mo</h4>
					</div>
					<div class="ud-pricing-body">
						<ul>
							<li>5 User</li>
							<li>All UI components</li>
							<li>Lifetime access</li>
							<li>Free updates</li>
							<li>Use on 1 (one) project</li>
							<li>4 Months support</li>
						</ul>
					</div>
					<div class="ud-pricing-footer">
						<a href={'#'} class="ud-main-btn ud-border-btn"> Purchase Now </a>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 col-sm-10">
				<div class="ud-single-pricing active wow fadeInUp" data-wow-delay=".1s">
					<span class="ud-popular-tag">POPULAR</span>
					<div class="ud-pricing-header">
						<h3>STARTING FROM</h3>
						<h4>$ 30.99/mo</h4>
					</div>
					<div class="ud-pricing-body">
						<ul>
							<li>5 User</li>
							<li>All UI components</li>
							<li>Lifetime access</li>
							<li>Free updates</li>
							<li>Use on 1 (one) project</li>
							<li>4 Months support</li>
						</ul>
					</div>
					<div class="ud-pricing-footer">
						<a href={'#'} class="ud-main-btn ud-white-btn"> Purchase Now </a>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 col-sm-10">
				<div class="ud-single-pricing last-item wow fadeInUp" data-wow-delay=".15s">
					<div class="ud-pricing-header">
						<h3>STARTING FROM</h3>
						<h4>$ 70.99/mo</h4>
					</div>
					<div class="ud-pricing-body">
						<ul>
							<li>5 User</li>
							<li>All UI components</li>
							<li>Lifetime access</li>
							<li>Free updates</li>
							<li>Use on 1 (one) project</li>
							<li>4 Months support</li>
						</ul>
					</div>
					<div class="ud-pricing-footer">
						<a href={'#'} class="ud-main-btn ud-border-btn"> Purchase Now </a>
					</div>
				</div>
			</div>
		</div>
	</div> -->
	</div>
</section>
