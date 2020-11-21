"use strict";

/* ======= Pie Chart ========= */
/* Ref: https://github.com/rendro/easy-pie-chart */


var chartElements = document.querySelectorAll('.chart');

chartElements.forEach((chartElement) => {
	
    new EasyPieChart(chartElement, {
        barColor:'#5778cc',//Pie chart colour
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


