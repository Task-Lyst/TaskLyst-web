<script>
	import { handleFormSubmit } from '$lib/js/form-submission-handler.js';
	import waitListSource from '$lib/js/stores.js';
	import { get } from 'svelte/store';
	import Recaptcha3 from '$lib/components/recaptcha3.svelte';

	let State = {
		idle: 'idle',
		requesting: 'requesting',
		success: 'success',
		error: 'error'
	};

	export let id;
	let sending = false;
	let key;
	let state = State.idle;

	async function doRecaptcha() {
		try {
			await grecaptcha.ready(() => async () => {
				const token = await grecaptcha.execute(key, { action: 'submit' });
			});
			// console.log(token);
			return true;
		} catch (error) {
			//console.log(error);
			return false;
		}
	}
</script>

<section {id} class="ud-contact">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-xl-8 col-lg-7">
				<div class="ud-contact-content-wrapper">
					<div class="ud-contact-title">
						<span>CONTACT US</span>
						<h2>
							Any question? Let’s talk about <br />
							Love to hear from you!
						</h2>
					</div>
					<div class="ud-contact-info-wrapper">
						<!-- <div class="ud-single-info">
							<div class="ud-info-icon">
								<i class="lni lni-map-marker" />
							</div>
							<div class="ud-info-meta">
								<h5>Our Location</h5>
								<p>Madrid, Spain</p>
							</div>
						</div> -->
						<!--
						<div class="ud-single-info">
							<div class="ud-info-icon">
								<i class="lni lni-twitter" />
							</div>
							<div class="ud-info-meta">
								<h5>Twitter / X</h5>
								<a href="https://x.com/TaskLyst" target="_blank">@TaskLyst</a>
							</div>
						</div>
					-->
						<div class="ud-single-info">
							<div class="ud-info-icon">
								<i class="lni lni-envelope" />
							</div>
							<div class="ud-info-meta">
								<h5>Email</h5>
								<a href="mailto:hello@tasklyst.app">hello@tasklyst.app</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-4 col-lg-5">
				<div class="ud-contact-form-wrapper wow fadeInUp" data-wow-delay=".2s">
					<h3 class="ud-contact-form-title">JOIN THE WAITLIST</h3>
					<form
						class="gform"
						method="POST"
						id="waitlist-form"
						action="https://script.google.com/macros/s/AKfycbzVM6tL9Qj4oRsbX7MmcGT-USMVBdwdWaaaBye6ZdVZ2sx5nAqQIbQTEctsaTA3Kb0/exec"
						on:submit|preventDefault={async (e) => {
							try {
								var form = document.getElementById('waitlist-form');
								var thankYouMessage = form.querySelector('.thankyou_message');
								thankYouMessage.style.display = 'none';
								sending = true;
								state = State.requesting;
								const res = await doRecaptcha();
								if (res) {
									state = State.success;
									const status = await handleFormSubmit(e, get(waitListSource));
									if (status == State.error) {
										thankYouMessage.style.display = 'block';
										sending = false;
									}
								} else {
									state = State.error;
									thankYouMessage.style.display = 'block';
									sending = false;
								}
								sending = false;
							} catch (error) {
								console.log(error);
								state = State.error;
								thankYouMessage.style.display = 'block';
								sending = false;
							}
						}}
					>
						<div class="ud-form-group">
							<label for="fullName">Name*</label>
							<input
								type="text"
								id="fullName"
								name="name"
								placeholder="Your name"
								required
								autocomplete="name"
							/>
						</div>
						<div class="ud-form-group">
							<label for="email">Email*</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="example@yourmail.com"
								autocomplete="email"
								required
							/>
						</div>
						<textarea hidden id="message" name="message" value="Join the waitlist" />
						<div class="ud-form-group mb-0">
							<button type="submit" class="ud-main-btn">
								{#if !sending}
									I'm in!
								{:else}
									<div style="text-align: center; vertical-align: middle;">
										<div
											class="spinner-border text-light"
											role="status"
											style="width:17px; height: 17px"
										/>
										&nbsp; Sending...
									</div>
								{/if}
							</button>
						</div>
						<br />
						<Recaptcha3 bind:key />
						<br />

						<div style="display:none" class="thankyou_message">
							<!-- You can customize the thankyou message by editing the code below -->
							<br />
							<h5>
								{#if state === State.error}
									<em>Oops!</em> Something went wrong. Please try again.
								{:else}
									<em>Thanks</em> for joining the waitlist! We will keep you informed about any news.
								{/if}
							</h5>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	a:hover {
		color: #3030f1;
	}
</style>
