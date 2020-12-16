"use strict";

/* ======= Pie Chart ========= */
/* Ref: https://github.com/rendro/easy-pie-chart */


var chartElements = document.querySelectorAll('.chart');

chartElements.forEach((chartElement) => {
	
    new EasyPieChart(chartElement, {
        barColor:'#020616',//Pie chart colour
		trackColor: '#e3e3e3',
		scaleColor: false,
		lineWidth : 7,
		animate: 1000,
    });
    
});


/* ======= Isotope plugin ======= */
/* Ref: http://isotope.metafizzy.co/ */
// init Isotope 

const isotopeContainer = document.querySelector('.isotope');
const filterItems = document.querySelectorAll('#filters .type');

imagesLoaded(isotopeContainer, function () {
	
	var iso = new Isotope( isotopeContainer, {
	  // options
	  itemSelector: '.item',
	  layoutMode: 'fitRows'
	  
	});
	
	// filter items on click
	filterItems.forEach((filterItem) => {
	
		filterItem.addEventListener('click', (e) => {
			
			console.log('clicked');
			
			let filterValue = filterItem.getAttribute('data-filter');
			
			// arrange - https://isotope.metafizzy.co/methods.html
			iso.arrange({ filter: filterValue });
			
			
			//toggle active class
			for (let siblingFilterItem of filterItem.parentNode.children) {
		        siblingFilterItem.classList.remove('active');
		    }
			filterItem.classList.add('active');

		});

	});
});

// Initiallization AOS

AOS.init();



const options = {
	bottom: '32px', // default: '32px'
	right: '32px', // default: 'unset'
	time: '0.8s', // default: '0.3s'
	mixColor: '#fff', // default: '#fff'
	backgroundColor: '#fff',  // default: '#fff'
	backgroundColorDark: '#303030',  // default: '#fff'
	buttonColorDark: '#303030',  // default: '#100f2c'
	buttonColorLight: '#fff', // default: '#fff'
	saveInCookies: false, // default: true,
	label: '🌓', // default: ''
	autoMatchOsTheme: true // default: true
  }

function addDarkmodeWidget() {
    new Darkmode(options).showWidget();
  }
  window.addEventListener('load', addDarkmodeWidget);

