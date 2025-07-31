<script>
  import { onMount } from 'svelte';
  import DownloadButton from './downloadButton.svelte';
  import 'tippy.js/dist/tippy.css';
  import Themeswitch from './themeswitch.svelte';

  export let id;

  let loaded = false;
  const buttonWidth = '120px';

  let theme =
    typeof localStorage !== 'undefined'
      ? localStorage.getItem('theme') !== 'dark'
      : false;
  $: src = theme
    ? 'images/hero/tasklyst_dark.png'
    : 'images/hero/tasklyst_light.png';

  // Latest version data
  let latestVersion = {
    windows_64: null,
    macos_64: null,
    linux_64: null,
  };
  let downloadLinks = {
    windows_64: '#',
    macos_64: '#',
    linux_64: '#',
  };

  // Fetch latest release info from GitHub
  onMount(async () => {
    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/Task-Lyst/TaskLyst/main/releases/changelog.json'
      );
      const data = await response.json();
      latestVersion.linux_64 = data.linux_64.latest;
      latestVersion.macos_64 = data.macos_64.latest;
      latestVersion.windows_64 = data.windows_64.latest;
      downloadLinks.linux_64 = data.linux_64.releases[data.linux_64.latest].url;
      downloadLinks.macos_64 = data.macos_64.releases[data.macos_64.latest].url;
      downloadLinks.windows_64 =
        data.windows_64.releases[data.windows_64.latest].url;
    } catch (error) {
      console.error('Failed to fetch version info:', error);
    } finally {
      loaded = true;
    }
  });
</script>

<section class="ud-hero" {id}>
  <div class="container">
    <div class="row">
      {#if loaded}
        <div class="col-lg-12">
          <div class="ud-hero-content wow fadeInUp" data-wow-delay=".2s">
            <h1 class="ud-hero-title">
              A Lightweight Task Manager<br /> That Just Works
            </h1>
            <p class="ud-hero-desc">
              A fast, distraction-free task manager built for simplicity and
              control. Runs natively on Windows, macOS, and Linux — no accounts,
              no clutter, just you and your tasks.
            </p>
            <ul class="ud-hero-buttons flex flex-col sm:flex-row gap-3">
              <li>
                <DownloadButton
                  label="Windows"
                  icon="<i class='lni lni-windows' style='font-size: 18px;'></i>"
                  link={downloadLinks.windows_64}
                  version={latestVersion.windows_64}
                  width={buttonWidth}
                />
              </li>
              <li>
                <DownloadButton
                  label="macOS"
                  icon="<i class='lni lni-apple-brand' style='font-size: 18px;'></i>"
                  link={downloadLinks.macos_64}
                  version={latestVersion.macos_64}
                  width={buttonWidth}
                />
              </li>
              <li>
                <DownloadButton
                  label="Linux"
                  icon="<svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 440 504' class='h-5 w-5' xmlns='http://www.w3.org/2000/svg'>
									  <path d='M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9.6 7.9 1.2 11.8 1.2 8.1 2.5 15.7.8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1.6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3.4-8.2-4.4-17.3-15.5-29.7z'></path>
									  </svg>"
                  link={downloadLinks.linux_64}
                  version={latestVersion.linux_64}
                  width={buttonWidth}
                />
              </li>
            </ul>
            <br />
          </div>
          <div
            class="ud-hero-image wow fadeInUp"
            data-wow-delay=".25s"
            style="margin-top: 1cm;"
          >
            <div align="left">
              <Themeswitch
                on:toggle={(e) => {
                  theme = e.detail;
                }}
              />
            </div>
            <span
              style="color: var(--white); font-size: 0.9rem; font-weight: 500; margin-top: 0.2cm;"
            >
              Toggle theme
            </span>
            <img
              {src}
              alt="TaskLyst main screen"
              style="border-top-left-radius: 1%; border-top-right-radius: 1%; margin-top: 0.5cm;"
            />
            <img
              src="images/hero/dotted-shape.svg"
              alt="shape"
              class="shape shape-1"
              height="25%"
            />
          </div>
        </div>
      {:else}
        <div style="height: 2000px;"></div>
      {/if}
    </div>
  </div>
</section>
