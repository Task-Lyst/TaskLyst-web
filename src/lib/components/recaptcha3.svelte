<script>
	import { onMount } from 'svelte';

	export const key = '6LeVA7MoAAAAAFpLg74lXQieADA3HvMuWi4BjsfW';

	onMount(async () => {
		window.apiLoaded = apiLoaded;
		const script = document.createElement('script');
		script.id = 'googleRecaptchaScript';
		script.src = `https://www.google.com/recaptcha/api.js?render=explicit&onload=apiLoaded&hl=en`;
		script.async = true;
		script.defer = true;
		document.head.appendChild(script);
	});

	function apiLoaded() {
		grecaptcha.ready(() => {
			grecaptcha.render('recaptchabox', {
				sitekey: key,
				size: 'invisible',
				badge: 'inline'
			});
		});
	}
</script>

<!-- <svelte:head>
  <script>
    let onloadCallback = () => {
    grecaptcha.ready(() => {
      grecaptcha.render('recaptchabox', {
        'sitekey' : key,
        'size' : 'invisible',
        'badge': 'inline',
      });
    })
  }
  </script>
  <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render={key}" async defer></script>
</svelte:head> -->

<div id="recaptchabox"></div>
