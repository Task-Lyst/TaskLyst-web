<script>
  import FaqItem from './FaqItem.svelte';
  export let id;
</script>

<section {id} class="ud-faq">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="ud-section-title text-center mx-auto">
          <span>FAQ</span>
          <h2>Any Questions? Answered</h2>
          <p>
            If you have any other questions, please <a
              href="mailto:hello@tasklyst.app"
              target="_blank"
              class="text-blue-500 hover:text-blue-600">get in touch with me</a
            >. I am always happy to hear from you.
          </p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <FaqItem
          id="collapseOne"
          question="Is TaskLyst really free to use?"
          answer="Yes! TaskLyst is 100% free with no hidden charges. You can create and manage unlimited tasks and enjoy all essential features at no cost."
          delay=".1s"
        />
        <FaqItem
          id="collapseTwo"
          question="Which operating systems are supported?"
          answer="TaskLyst currently works on Windows and Linux. A macOS version is coming soon, and we’re also planning mobile apps for iOS and Android."
          delay=".15s"
        />
        <FaqItem
          id="collapseFour"
          question="How will you fund ongoing development?"
          answer="I plan to introduce a PRO version with advanced features. The free version will always remain available, but PRO subscriptions will help me grow and improve TaskLyst."
          delay=".1s"
        />
      </div>
      <div class="col-lg-6">
        <FaqItem
          id="collapseThree"
          question="Is TaskLyst open source?"
          answer="I'm open to the idea. If there's enough interest, I might open source it later for community collaboration."
          delay=".2s"
        />
        <FaqItem
          id="collapseFive"
          question="Will my data sync across devices?"
          answer="Cross-device sync is part of our upcoming PRO features. We're working on an efficient, secure solution for real-time synchronization."
          delay=".15s"
        />
        <FaqItem
          id="collapseSix"
          question="How can I share feedback or report bugs?"
          answer="You can create a new issue on my <a href='https://github.com/Task-Lyst/TaskLyst/issues/new' target='_blank' class='text-blue-500 hover:text-blue-600'>GitHub repository</a>. I will be happy to hear your feedback and will address any bugs as soon as possible."
          delay=".2s"
        />
      </div>
    </div>
  </div>
</section>
