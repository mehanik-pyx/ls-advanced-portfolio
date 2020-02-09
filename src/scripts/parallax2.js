console.log('this is parallax2 module');

const parallax = document.querySelector(".parallax2");
const layers = parallax.children;

function moveLayersDependsOnScroll(wScroll) {

	Array.from(layers).forEach(layer => {

		const divider = layer.dataset.speed;
		const strafe = (wScroll - 3500) * divider / -10 + '%' ;
		layer.style.transform = 'translate3d(0, ' + strafe + ', 0)';

	});
}

window.addEventListener("scroll", e => {
	const wScroll = window.pageYOffset;
	moveLayersDependsOnScroll(wScroll);
	console.log(window.pageYOffset);
});