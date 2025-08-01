<script>
  import '../app.scss';
  import '../app.css';
  import { onMount } from 'svelte';
  import Header from '$lib/components/header.svelte';
  import Footer from '$lib/components/footer.svelte';
  import Cookieconsent from '$lib/components/cookieconsent.svelte';
  import { GoogleAnalytics } from '@beyonk/svelte-google-analytics';
  import { version } from '$app/environment';

  const gaOptions = {
    appVersion: version,
  };

  onMount(async () => {
    import('wow.js').then((WOW) => {
      new WOW.default().init();
    });
  });

  function gtag() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(arguments);
  }

  function deleteGaCookies() {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf('=');
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;

      if (
        name.includes('_ga') ||
        name.includes('_gid') ||
        name.includes('_gat')
      ) {
        document.cookie =
          name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;domain=';
      }
    }
  }

  function gaConsent(value) {
    gtag('consent', 'update', {
      ad_storage: value ? 'granted' : 'denied',
      analytics_storage: value ? 'granted' : 'denied',
      functionality_storage: value ? 'granted' : 'denied',
      personalization_storage: value ? 'granted' : 'denied',
      security_storage: value ? 'granted' : 'denied',
    });
    if (!value) {
      deleteGaCookies();
    }
  }

  function acceptedCookie(cookie) {
    gaEnabled = cookie.categories.includes('analytics');
    if (gaEnabled) {
      ga.init(gaOptions);
    }
  }

  function changedCookie(cookie) {
    gaEnabled = cookie.categories.includes('analytics');
    if (gaEnabled) {
      ga.init();
    }
    gaConsent(gaEnabled);
  }

  let gaEnabled = false;
  let ga;
</script>

<body>
  <link rel="stylesheet" href="css/animate.css" />
  <link rel="stylesheet" href="css/ud-styles.css" />
  <link rel="stylesheet" href="css/lineicons.css" />
  <Header />
  <script src="js/main.js"></script>
  <slot />
  <Footer />

  <Cookieconsent onAccept={acceptedCookie} onChange={changedCookie} />
  <GoogleAnalytics
    bind:this={ga}
    properties={['G-33JY7X4N1F']}
    enabled={gaEnabled}
  />

  <!-- ====== Back To Top Start ====== -->
  <a href={'#'} class="back-to-top">
    <i class="lni lni-chevron-up" />
  </a>
</body>
