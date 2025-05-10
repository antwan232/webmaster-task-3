// let landingPage = document.querySelector(".home");

// let imageArray = ["home1.jpg" , "home2.jpg" , "home3.jpg"];

// landingPage.style.backgroundImage = 'url("img/home1.jpg)';

// let randomNumber = Math.floor(Math.random() * imageArray.length );

// let randomOption = true;

// function randomizeImgs(){
//   if( randomOption === true){
//     setInterval(() => {

//       let randomNumber = Math.floor(Math.random() * imageArray.length );

//       landingPage.style.backgroundImage = 'url("img/'+  imageArray[randomNumber] +'")';

//     }, 4000);

//   }
// }
// randomizeImgs();

// tailwindcss config
tailwind.config = {
	theme: {
		extend: {
			colors: {
				'main-color': '#ff2c1f',
				'text-color': '#020307',
				'bg-color': '#fff',
				'hover-main': '#fa1216',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			screens: {
				lg: '1080px',
				md: '991px',
				sm: '774px',
				xs: '472px',
				xxs: '370px',
				xxxs: '300px',
			},
			maxWidth: {
				1000: '1000px',
			},
			spacing: {
				'80px': '80px',
			},
			fontSize: {
				'4rem': '4rem',
				'1.1rem': '1.1rem',
				'1.2rem': '1.2rem',
				'0.9rem': '0.9rem',
				'13px': '13px',
				'1.8rem': '1.8rem',
				'0.8rem': '0.8rem',
				'2rem': '2rem',
				'3rem': '3rem',
				'2.4rem': '2.4rem',
				'1.7rem': '1.7rem',
			},
			height: {
				'270px': '270px',
				'240px': '240px',
				'55px': '55px',
			},
			width: {
				'55px': '55px',
				'300px': '300px',
			},
			lineHeight: {
				'55px': '55px',
			},
			boxShadow: {
				custom: '0 0 4px rgb(14 55 54 / 15%)',
				'nav-active': '4px 4px 0 4px rgb(14 55 54 / 15%)',
			},
			borderColor: {
				social: 'rgba(2, 3, 7, 0.4)',
				'main-color': '#ff2c1f',
			},
		},
	},
	plugins: [],
};

let header = document.querySelector('header');
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
	// Toggle visibility
	navbar.classList.toggle('hidden');

	// Add mobile-specific layout classes if navbar is now visible (not hidden)
	if (!navbar.classList.contains('hidden')) {
		navbar.classList.add(
			'absolute',
			'top-[56px]',
			'left-0',
			'right-0',
			'flex-col',
			'bg-bg-color',
			'p-5',
			'shadow-nav-active',
			'text-center',
			'text-text-color'
		);
		// Ensure links inside have correct text color for mobile menu
		navbar.querySelectorAll('a').forEach((link) => {
			link.classList.remove('text-main-color');
			link.classList.add(
				'text-text-color',
				'hover:text-main-color',
				'hover:border-b-2',
				'border-main-color',
				'after:hidden'
			);
		});
	} else {
		// Remove mobile-specific layout classes if navbar is hidden
		navbar.classList.remove(
			'absolute',
			'top-[70px]',
			'left-0',
			'right-0',
			'flex-col',
			'bg-bg-color',
			'gap-20',
			'p-5',
			'shadow-nav-active',
			'text-center',
			'text-text-color'
		);
		// Restore original link colors if needed (though md: styles handle this)
		navbar.querySelectorAll('a').forEach((link) => {
			link.classList.add('text-main-color'); // Restore default link color
			link.classList.remove(
				'text-text-color',
				'hover:text-main-color',
				'hover:border-b-2',
				'border-main-color',
				'after:hidden'
			);
		});
	}
};

window.onscroll = () => {
	// Hide navbar on scroll and remove mobile styles
	navbar.classList.add('hidden');
	navbar.classList.remove(
		'absolute',
		'top-[70px]',
		'left-0',
		'right-0',
		'flex-col',
		'bg-bg-color',
		'p-5',
		'shadow-nav-active',
		'text-center',
		'text-text-color'
	);
	// Restore original link colors if needed
	navbar.querySelectorAll('a').forEach((link) => {
		link.classList.add('text-main-color');
		link.classList.remove(
			'text-text-color',
			'hover:text-main-color',
			'hover:border-b-2',
			'border-main-color',
			'after:hidden'
		);
	});
};
window.addEventListener('scroll', () => {
	header.classList.toggle('shadow', window.scrollY > 0);
});
