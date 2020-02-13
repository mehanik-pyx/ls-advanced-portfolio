console.log('this is parallax module');

const parallaxList = document.querySelectorAll(".parallax");
const parallaxArray = Array.from(parallaxList);
function moveLayersDependsOnScroll(wScroll) {
	parallaxArray.forEach(parallax => {

		const indx = parallaxArray.indexOf(parallax);
		const coord = parallax.getBoundingClientRect();
		if (coord.top < document.documentElement.clientHeight && coord.bottom > 0) {

			const layers = parallax.children;
			if (indx) {wScroll = wScroll - 2100};
			Array.from(layers).forEach(layer => {

				const divider = layer.dataset.speed;
				const strafe = wScroll * divider / -20 + '%';
				layer.style.transform = 'translate3d(0, ' + strafe + ', 0)';
			});
		}
	});
}

window.addEventListener("scroll", e => {

	const wScroll = window.pageYOffset;
	moveLayersDependsOnScroll(wScroll);
});