<script>
  export let label = 'Download';
  export let icon = '';
  export let link = null;
  export let version = null;
  export let disabledText = 'Coming soon';
</script>

{#if link && link !== '#' && link !== '' && link !== null && link !== undefined && version !== null}
  <a
    href={link}
    download
    class="ud-main-btn ud-white-btn"
    rel="noopener"
    style="height:55px; width: 135px; display: flex; flex-direction: column; align-items: center; justify-content: center;"
  >
    <span style="display: flex; align-items: center;">
      {@html icon}&nbsp;&nbsp;{label}
    </span>
    {#if version}
      <small style="font-size: 0.7rem; color: black; padding-top: 4px;">
        Version {version}
      </small>
    {/if}
  </a>
{:else}
  <button
    class="ud-main-btn ud-white-btn"
    disabled
    style="height:55px; width: 135px; opacity:0.6; display: flex; flex-direction: column; align-items: center; justify-content: center;"
  >
    <span style="display: flex; align-items: center;">
      {@html icon}&nbsp;&nbsp;{label}
    </span>
    <small style="font-size: 0.8rem; color: black; padding-top: 4px;">
      {disabledText}
    </small>
  </button>
{/if}
