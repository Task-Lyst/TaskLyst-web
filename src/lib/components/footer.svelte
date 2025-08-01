<script>
  import { version } from '$app/environment';
  import { ga } from '@beyonk/svelte-google-analytics';
</script>

<footer class="ud-footer wow fadeInUp" data-wow-delay=".15s">
  <div class="shape shape-1">
    <img src="images/footer/shape-1.svg" alt="shape" />
  </div>
  <div class="shape shape-2">
    <img src="images/footer/shape-2.svg" alt="shape" />
  </div>
  <div class="shape shape-3">
    <img src="images/footer/shape-3.svg" alt="shape" />
  </div>
  <div class="ud-footer-widgets">
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-lg-3 col-md-6">
          <div class="ud-widget">
            <a
              href="/"
              class="ud-footer-logo"
              on:click={() => ga.addEvent('Footer_logo_click', {})}
            >
              <div style="display: flex; align-items: center;">
                <img
                  class="h-[40px]"
                  src="images/logo/logo.png"
                  alt="Logo"
                  height="40px"
                />
                <h3
                  style="padding-top: 0.1cm; padding-left: 0.2cm; color: white; font-family: conthrax-sb;  font-size: 1.5rem;"
                >
                  TASKLYST
                </h3>
              </div>
            </a>
            <p
              class="ud-widget-desc"
              style="padding-top: 0.2cm; padding-bottom: 0.2cm;"
            >
              A Task Manager That Just Works.
              <span
                style="display: flex; align-items: center; padding-top: 0.4cm;"
              >
                <tiny style="color:lightgray; font-size:12px"
                  >©{new Date().getFullYear()} TaskLyst - v{version}</tiny
                >
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a
                  href="mailto:hello@tasklyst.app"
                  target="_blank"
                  on:click={() => ga.addEvent('Footer_email_click', {})}
                >
                  <i
                    class="lni lni-envelope"
                    style="font-size: 1rem; color: white;"
                  />
                </a>
              </span>
            </p>

            <!--
						<ul class="ud-widget-socials">
							<li>
								<a href="mailto:hello@tasklyst.app" target="_blank">
									<i class="lni lni-envelope" />
								</a>
							</li>
						</ul>
						-->
          </div>
        </div>

        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div class="ud-widget">
            <h5 class="ud-widget-title">Sections</h5>
            <ul class="ud-widget-links">
              <li>
                <a
                  href={'/#features'}
                  on:click={() => ga.addEvent('Footer_features_click', {})}
                  >Features</a
                >
              </li>
              <li>
                <a
                  href={'/#highlights'}
                  on:click={() => ga.addEvent('Footer_highlights_click', {})}
                  >Highlights</a
                >
              </li>
              <!--
							<li>
								<a href={'/#pricing'}>Pricing</a>
							</li>
							-->
            </ul>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div class="ud-widget">
            <h5 class="ud-widget-title">Legal</h5>
            <ul class="ud-widget-links">
              <li>
                <a
                  href={'/privacy-policy'}
                  on:click={() =>
                    ga.addEvent('Footer_privacy_policy_click', {})}
                  >Privacy policy</a
                >
              </li>
              <li>
                <a
                  href={'/terms-service'}
                  on:click={() => ga.addEvent('Footer_terms_service_click', {})}
                  >Terms of service</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div class="ud-widget">
            <h5 class="ud-widget-title">Information</h5>
            <ul class="ud-widget-links">
              <li>
                <a
                  href={'/#faq'}
                  on:click={() => ga.addEvent('Footer_faq_click', {})}>FAQ</a
                >
              </li>
              <li>
                <a
                  role="button"
                  href={'/#'}
                  data-cc="c-settings"
                  on:click={() =>
                    ga.addEvent('Footer_cookie_preferences_click', {})}
                  >Cookie preferences</a
                >
              </li>
              <!--
							<li>
								<a on:click={() => waitListSource.set('Footer')} href={'/#waitlist'}
									>Join the waitlist</a
								>
							</li>
							-->
            </ul>
          </div>
        </div>
        <!-- <div class="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                    <div class="ud-widget">
                        <h5 class="ud-widget-title">Our Products</h5>
                        <ul class="ud-widget-links">
                            <li>
                                <a href="https://lineicons.com/" rel="nofollow noopner" target="_blank"
                                    >Lineicons
                                </a>
                            </li>
                            <li>
                                <a href="https://ecommercehtml.com/" rel="nofollow noopner" target="_blank"
                                    >Ecommerce HTML</a
                                >
                            </li>
                            <li>
                                <a href="https://ayroui.com/" rel="nofollow noopner" target="_blank">Ayro UI</a>
                            </li>
                            <li>
                                <a href="https://graygrids.com/" rel="nofollow noopner" target="_blank"
                                    >Plain Admin</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-8 col-sm-10">
                    <div class="ud-widget">
                        <h5 class="ud-widget-title">Partners</h5>
                        <ul class="ud-widget-brands">
                            <li>
                                <a href="https://ayroui.com/" rel="nofollow noopner" target="_blank">
                                    <img src="images/footer/brands/ayroui.svg" alt="ayroui" />
                                </a>
                            </li>
                            <li>
                                <a href="https://ecommercehtml.com/" rel="nofollow noopner" target="_blank">
                                    <img src="images/footer/brands/ecommerce-html.svg" alt="ecommerce-html" />
                                </a>
                            </li>
                            <li>
                                <a href="https://graygrids.com/" rel="nofollow noopner" target="_blank">
                                    <img src="images/footer/brands/graygrids.svg" alt="graygrids" />
                                </a>
                            </li>
                            <li>
                                <a href="https://lineicons.com/" rel="nofollow noopner" target="_blank">
                                    <img src="images/footer/brands/lineicons.svg" alt="lineicons" />
                                </a>
                            </li>
                            <li>
                                <a href="https://uideck.com/" rel="nofollow noopner" target="_blank">
                                    <img src="images/footer/brands/uideck.svg" alt="uideck" />
                                </a>
                            </li>
                            <li>
                                <a href="https://tailwindtemplates.co/" rel="nofollow noopner" target="_blank">
                                    <img src="images/footer/brands/tailwindtemplates.svg" alt="tailwindtemplates" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div> -->
      </div>
    </div>
  </div>
  <!-- <div class="ud-footer-bottom">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <ul class="ud-footer-bottom-left">
                        <li>
                            <a href={'#'}>Privacy policy</a>
                        </li>
                        <li>
                            <a href={'#'}>Support policy</a>
                        </li>
                        <li>
                            <a href={'#'}>Terms of service</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <p class="ud-footer-bottom-right">
                        Designed and Developed by
                        <a href="https://uideck.com" rel="nofollow">UIdeck</a>
                    </p>
                </div>
            </div>
        </div>
    </div> -->
</footer>
