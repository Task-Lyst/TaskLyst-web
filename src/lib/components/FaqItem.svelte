<script>
  import { ga } from '@beyonk/svelte-google-analytics';
  export let question;
  export let answer;
  export let id;
  export let delay = '.1s';
</script>

<div class="ud-single-faq wow fadeInUp" data-wow-delay={delay}>
  <div class="accordion">
    <button
      class="ud-faq-btn collapsed"
      data-bs-toggle="collapse"
      data-bs-target={`#${id}`}
      on:click={() =>
        ga.addEvent('event', 'Faq_click', {
          event_category: 'FAQ',
          event_label: question,
        })}
    >
      <span class="icon flex-shrink-0">
        <i class="lni lni-chevron-down" />
      </span>
      <span>{question}</span>
    </button>
    <div {id} class="accordion-collapse collapse">
      <div class="ud-faq-body">
        {@html answer}
      </div>
    </div>
  </div>
</div>
