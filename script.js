// Your code to run since DOM is loaded and ready
document.addEventListener("DOMContentLoaded", () => {
	// Add smooth scrolling to all links
	const navLinks = document.getElementsByClassName("tablink");
	// get body and html elements
	const scrollScreen = document.querySelector(["body", "html"]);
	// get header element
	const siteHeader = document.querySelector(".site-header");
	
	/**
	 * Page Scroll Function
	 * In JavaScript, using the addEventListener() method:  object.addEventListener("scroll", myScript);
	 * scrolling function - (https://codepen.io/ugg0t/pen/mqBBBY)
	 */

	window.onscroll = () => {
		// fixes header to top of page on page scroll.
		if (scrollScreen.scrollTop >= 75) {
			siteHeader.classList.add("fixed-header");
		} else {
			siteHeader.classList.remove("fixed-header");
		}
	
	};

	const scrollTo = (element) => {
		scrollScreen.scrollTo({
			behavior: "smooth",
			left: 0,
			top: element.offsetTop - 75, // deduct height of header.
		});
	};
	
	// turn HTML collection list of objects into an array
	// Iterated over array with forEach.
	Array.from(navLinks).forEach((link) => {
		// add event listener to each link
		link.addEventListener("click", (event) => {
			// Store hash
			const { hash } = event.target;
			// check if has empty
			if (hash !== "") {
				// if not, Prevent default anchor click behavior
				event.preventDefault();

				// select element id converting hash to string using template literal and use as argument in scrolling function.
				scrollTo(document.querySelector(`${hash}`));
			} // End if
			
		});
	});
});