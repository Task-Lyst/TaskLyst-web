<script>
	import 'vanilla-cookieconsent';
	import 'vanilla-cookieconsent/dist/cookieconsent.css';
	import { onMount } from 'svelte';
	export let onAccept;
	export let onChange;

	// https://github.com/orestbida/cookieconsent
	const config = {
		current_lang: 'en',
		autoclear_cookies: true, // default: false
		page_scripts: true, // default: false

		// mode: 'opt-in',                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
		// delay: 0,                               // default: 0
		// auto_language: null                     // default: null; could also be 'browser' or 'document'
		// autorun: true,                          // default: true
		// force_consent: false,                   // default: false
		// hide_from_bots: true,                   // default: true
		// remove_cookie_tables: false             // default: false
		cookie_name: 'tasklyst_cookie', // default: 'cc_cookie'
		// cookie_expiration: 182,                 // default: 182 (days)
		// cookie_necessary_only_expiration: 182   // default: disabled
		cookie_domain: 'tasklyst.app', // default: current domain
		// cookie_path: '/',                       // default: root
		// cookie_same_site: 'Lax',                // default: 'Lax'
		// use_rfc_cookie: false,                  // default: false
		// revision: 0,                            // default: 0

		onFirstAction: function (user_preferences, cookie) {
			// callback triggered only once
		},

		onAccept: onAccept,

		onChange: onChange,

		gui_options: {
			consent_modal: {
				layout: 'cloud', // box/cloud/bar
				position: 'bottom center', // bottom/middle/top + left/right/center
				transition: 'slide', // zoom/slide
				swap_buttons: false // enable to invert buttons
			},
			settings_modal: {
				layout: 'box', // box/bar
				position: 'left', // left/right
				transition: 'slide' // zoom/slide
			}
		},

		languages: {
			en: {
				consent_modal: {
					title: 'We use cookies!',
					description:
						'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
					primary_btn: {
						text: 'Accept all',
						role: 'accept_all' // 'accept_selected' or 'accept_all'
					},
					secondary_btn: {
						text: 'Reject all',
						role: 'accept_necessary' // 'settings' or 'accept_necessary'
					}
				},
				settings_modal: {
					title: 'Cookie preferences',
					save_settings_btn: 'Save settings',
					accept_all_btn: 'Accept all',
					reject_all_btn: 'Reject all',
					close_btn_label: 'Close',
					cookie_table_headers: [
						{ col1: 'Name' },
						{ col2: 'Domain' },
						{ col3: 'Expiration' },
						{ col4: 'Description' }
					],
					blocks: [
						{
							title: 'Cookie usage 📢',
							description:
								'We use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="/privacy-policy" class="cc-link" target="_blank">privacy policy</a>.'
						},
						{
							title: 'Strictly necessary cookies',
							description:
								'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
							toggle: {
								value: 'necessary',
								enabled: true,
								readonly: true // cookie categories with readonly=true are all treated as "necessary cookies"
							}
						},
						{
							title: 'Performance and Analytics cookies',
							description:
								'These cookies allow the website to remember the choices you have made in the past',
							toggle: {
								value: 'analytics', // your cookie category
								enabled: false,
								readonly: false
							},
							cookie_table: [
								// list of all expected cookies
								{
									col1: '_ga',
									col2: 'google.com',
									col3: '2 years',
									col4: 'Google Analytics',
									is_regex: false
								},
								{
									col1: '_ga_&lt;wpid&gt;',
									col2: 'google.com',
									col3: '2 years',
									col4: 'Google Analytics 360',
									is_regex: false
								}
							]
						}
						/*{
                            title: 'Advertisement and Targeting cookies',
                            description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                            toggle: {
                                value: 'targeting',
                                enabled: false,
                                readonly: false
                            }
                        }, {
                            title: 'More information',
                            description: 'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="#yourcontactpage">contact us</a>.',
                        }*/
					]
				}
			}
		}
	};

	onMount(async () => {
		if (!document.getElementById('cc--main')) {
			window.CC = window.initCookieConsent();
			window.CC.run(config);
		}
	});
</script>
