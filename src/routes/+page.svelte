<script>
  import About from '$lib/components/about.svelte';
  import Faq from '$lib/components/faq.svelte';
  import Features from '$lib/components/features.svelte';
  import Hero from '$lib/components/hero.svelte';
</script>

<body>
  <Hero id="home" />
  <Features id="features" />
  <About id="highlights" />
  <!-- <Pricing id="pricing" /> -->
  <Faq id="faq" />
  <!-- <Waitlist id="waitlist" /> -->

  <!-- <Testimonials id="testimonials" /> -->
  <!-- <Team id="team" /> -->
  <!-- <Contact id="contact" /> -->
  <!-- <Contact id="contact" /> -->
  <!-- <Contact id="contact" /> -->
  <script>
    // ==== for menu scroll
    var pageLink = document.querySelectorAll('.ud-menu-scroll');

    pageLink.forEach((elem) => {
      elem.addEventListener('click', (e) => {
        const value = elem.getAttribute('href').replace('/', '');
        const element = document.querySelector(value);
        if (element) {
          e.preventDefault();
          window.history.pushState(null, null, value);
          element.scrollIntoView({
            behavior: 'smooth',
            offsetTop: 1 - 60,
          });
        }
      });
    });

    // section menu active
    function onScroll(event) {
      const sections = document.querySelectorAll('.ud-menu-scroll');
      const scrollPos =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      for (let i = 0; i < sections.length; i++) {
        const currLink = sections[i];
        const val = currLink.getAttribute('href').replace('/', '');
        const refElement = document.querySelector(val);
        const scrollTopMinus = scrollPos + 73;
        if (
          refElement &&
          refElement.offsetTop <= scrollTopMinus &&
          refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
        ) {
          document.querySelector('.ud-menu-scroll').classList.remove('active');
          currLink.classList.add('active');
        } else {
          currLink.classList.remove('active');
        }
      }
    }

    window.document.addEventListener('scroll', onScroll);
  </script>
</body>
