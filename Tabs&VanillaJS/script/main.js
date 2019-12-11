const tabHeaders = document.querySelectorAll('li[data-for-tab]');

tabHeaders.forEach((tabHeader)=>{
	tabHeader.addEventListener('click', ()=>{
		let tabs= document.querySelectorAll('.not-active');
		tabs.forEach((tab)=>{
			tab.classList.remove('active');
		});
		let showTab= tabHeader.dataset.forTab;
		console.log(showTab + "this is tab")
		document.querySelector(showTab).classList.add('active');
	});
});