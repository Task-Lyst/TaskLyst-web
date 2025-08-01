<script>
  import { ga } from '@beyonk/svelte-google-analytics';

  export let label = 'Download';
  export let icon = '';
  export let link = null;
  export let version = null;
  export let disabledText = 'Coming soon';
  export let width = '135px';

  function trackDownloadEvent(source) {
    ga.addEvent('event', 'download', {
      event_category: 'Download',
      event_label: source,
      value: version || 'unknown',
    });
  }
</script>

{#if link && link !== '#' && link !== '' && link !== null && link !== undefined && version !== null}
  <a
    href={link}
    download
    on:click={() => trackDownloadEvent(label)}
    class="ud-main-btn ud-white-btn download-btn"
    rel="noopener"
    style="width: {width};"
  >
    <span class="btn-content">
      {@html icon}&nbsp;&nbsp;{label}
    </span>
    {#if version}
      <small class="btn-version">
        Version {version}
      </small>
    {/if}
  </a>
{:else}
  <button
    class="ud-main-btn ud-white-btn download-btn disabled"
    disabled
    style="width: {width};"
  >
    <span class="btn-content">
      {@html icon}&nbsp;&nbsp;{label}
    </span>
    <small class="btn-version">
      {disabledText}
    </small>
  </button>
{/if}

<style>
  .download-btn {
    height: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    font-size: 1rem;
  }

  .download-btn .btn-content {
    display: flex;
    align-items: center;
    font-size: 1rem;
  }

  .download-btn .btn-version {
    font-size: 0.7rem;
    color: black;
    padding-top: 4px;
  }

  /* 🔹 Responsive scaling for smaller screens */
  @media screen and (max-width: 768px) {
    .download-btn {
      font-size: 0.9rem;
      transform: scale(0.9);
    }
    .download-btn .btn-content {
      font-size: 0.9rem;
    }
    .download-btn .btn-version {
      font-size: 0.65rem;
    }
  }

  @media screen and (max-width: 480px) {
    .download-btn {
      font-size: 0.8rem;
      transform: scale(0.85);
    }
    .download-btn .btn-content {
      font-size: 0.8rem;
    }
    .download-btn .btn-version {
      font-size: 0.6rem;
    }
  }
</style>
