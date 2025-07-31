// import tippy from 'tippy.js';

(function () {
	'use strict';

	// ======= Sticky
	window.onscroll = function () {
		const ud_header = document.querySelector('.ud-header');
		const sticky = ud_header.offsetTop;
		const logoText = document.getElementById('logo-text');

		// === hide all tippy popper
		/* 
		const btn = document.querySelector('.toggle-label');
		const tip = tippy(btn);
		console.log(tip);
		tip.hide();
		*/

		if (window.scrollY > sticky) {
			ud_header.classList.add('sticky');
		} else {
			ud_header.classList.remove('sticky');
		}

		// === logo change
		if (ud_header.classList.contains('sticky')) {
			logoText.style.color = 'black';
		} else {
			logoText.style.color = 'white';
		}

		// show or hide the back-top-top button
		const backToTop = document.querySelector('.back-to-top');
		if (backToTop) {
			if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
				backToTop.style.display = 'flex';
			} else {
				backToTop.style.display = 'none';
			}
		}
	};

	let navbarToggler = document.querySelector('.navbar-toggler');

	//===== click outside of the menu
	document.addEventListener('click', (e) => {
		if (
			navbarToggler.classList.contains('active') &&
			!navbarCollapse.contains(e.target) &&
			!e.target.classList.contains('navbar-toggler')
		) {
			// console.log(navbarToggler.classList.contains('active'));
			navbarToggler.classList.remove('active');
			navbarCollapse.classList.remove('show');
		}
	});

	//===== close navbar-collapse when a  clicked
	const navbarCollapse = document.querySelector('.navbar-collapse');

	document.querySelectorAll('.ud-menu-scroll').forEach((e) =>
		e.addEventListener('click', (event) => {
			event.stopPropagation();
			navbarToggler.classList.remove('active');
			navbarCollapse.classList.remove('show');
		})
	);
	navbarToggler.addEventListener('click', function (e) {
		e.stopPropagation();
		navbarToggler.classList.toggle('active');
		navbarCollapse.classList.toggle('show');
	});

	// ===== submenu
	const submenuButton = document.querySelectorAll('.nav-item-has-children');
	submenuButton.forEach((elem) => {
		elem.querySelector('a').addEventListener('click', () => {
			elem.querySelector('.ud-submenu').classList.toggle('show');
		});
	});

	// ===== wow js
	// new WOW().init();

	// ====== scroll top js
	function scrollTo(element, to = 0, duration = 500) {
		const start = element.scrollTop;
		const change = to - start;
		const increment = 20;
		let currentTime = 0;

		const animateScroll = () => {
			currentTime += increment;

			const val = Math.easeInOutQuad(currentTime, start, change, duration);

			element.scrollTop = val;

			if (currentTime < duration) {
				setTimeout(animateScroll, increment);
			}
		};

		animateScroll();
	}

	Math.easeInOutQuad = function (t, b, c, d) {
		t /= d / 2;
		if (t < 1) return (c / 2) * t * t + b;
		t--;
		return (-c / 2) * (t * (t - 2) - 1) + b;
	};

	if (document.querySelector('.back-to-top')) {
		document.querySelector('.back-to-top').onclick = () => {
			scrollTo(document.documentElement);
		};
	}

	// ====== prevent body scroll when cookie popup is open
	const html = document.documentElement;
	let isVisible = false,
		shouldShow = false;

	const observer = new MutationObserver(function () {
		shouldShow = html.className.indexOf('show--settings') > -1;

		if (!isVisible && shouldShow) {
			isVisible = true;
			// console.log('modal is visible');
			document.body.style.overflow = 'hidden';
		} else if (isVisible && !shouldShow) {
			isVisible = false;
			// console.log('modal is hidden');
			document.body.style.overflow = 'auto';
		}
	});

	observer.observe(html, {
		attributes: true,
		attributeFilter: ['class']
	});
})();
