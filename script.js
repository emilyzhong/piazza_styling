const page_center = document.getElementById('page_center');
const bottom_bar = document.getElementById('page_bottom_bar');
const hide_feed = document.getElementsByClassName('hide_show_feed hide_feed')[0];
const show_feed = document.getElementsByClassName('hide_show_feed show_feed')[0];
const feed = document.getElementById('feed');
const classes = document.getElementsByClassName('classDropdownItem');
let fixedCenterPosition = false;

const showFeed = () => {
	let left = '380px';
	let transform = 'none'
	let width = 'auto';

	page_center.style.left = left;
	page_center.style.width = width;
	page_center.style.transform = transform;

	bottom_bar.style.left = left;
	bottom_bar.style.width = width;
	bottom_bar.style.transform = transform;
}

const hideFeed = () => {
	let left = '50%';
	let transform = 'translateX(-50%)'
	let width = '70%';

	page_center.style.left = left;
	page_center.style.width = width;
	page_center.style.transform = transform;

	bottom_bar.style.left = left;
	bottom_bar.style.width = width;
	bottom_bar.style.transform = transform;
}

const loadInitialFeedPosition = () => {
	if (!fixedCenterPosition) {
		console.log("CHANGE");
		(feed.style.display == 'none') ? hideFeed() : showFeed();
	}
	fixedCenterPosition = true;
}

	
loadInitialFeedPosition();

feed.addEventListener('click', loadInitialFeedPosition);
hide_feed.addEventListener('click', hideFeed, false);
show_feed.addEventListener('click', showFeed, false);

Array.from(classes).forEach(function(element) {
	element.addEventListener('click', () => {
		fixedCenterPosition = false;
	});
});



