<script>
  import { onMount } from 'svelte';
  import Carousel from './carousel.svelte';

  export let id;

  let theme = true;
  let images = [];

  // Function to load theme
  function loadTheme() {
    theme =
      typeof localStorage !== 'undefined'
        ? localStorage.getItem('theme') !== 'dark'
        : false;
  }

  // Reactive statement: whenever 'theme' changes, images are updated
  $: images = !theme
    ? [
        'images/about/light1.png',
        'images/about/light2.png',
        'images/about/light3.png',
        'images/about/light4.png',
        'images/about/light5.png',
        'images/about/light6.png',
      ]
    : [
        'images/about/dark1.png',
        'images/about/dark2.png',
        'images/about/dark3.png',
        'images/about/dark4.png',
        'images/about/dark5.png',
        'images/about/dark6.png',
      ];

  onMount(() => {
    loadTheme();
    // Watch for theme changes within this tab
    window.addEventListener('themeChange', loadTheme);
  });
</script>

<section {id} class="ud-about">
  <div class="container">
    <div class="ud-about-wrapper wow fadeInUp" data-wow-delay=".2s">
      <div class="ud-about-content-wrapper">
        <div class="ud-about-content">
          <span class="tag">Highlights</span>
          <h2>Modern, Fast and Intuitive User Interface.</h2>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div>🖥️&nbsp;&nbsp; Cross-platform: macOS, Linux, Windows</div>
            <div>🎯&nbsp;&nbsp; Minimalist interface with dark/light modes</div>
            <div>
              📴&nbsp;&nbsp; Offline-first – no forced accounts or cloud sync
            </div>
            <div>🧩&nbsp;&nbsp; Custom task types & tags</div>
            <div>
              📊&nbsp;&nbsp; Configurable task table (columns, order, etc.)
            </div>
            <div>
              🕓&nbsp;&nbsp; Start/due times, priority, completion tracking
            </div>
            <div>💾&nbsp;&nbsp; Backup & restore support</div>
            <div>
              ⚙️&nbsp;&nbsp; Launches at boot, tray icon for fast access
            </div>
            <div>🔔&nbsp;&nbsp; Checks for updates automatically</div>
          </div>
        </div>
      </div>
      <div
        style="display: flex; justify-content: center; align-items: center; width: 100%;"
      >
        <Carousel {images} interval={4000} padding={15} effect="fade" />
      </div>
    </div>
  </div>
</section>
