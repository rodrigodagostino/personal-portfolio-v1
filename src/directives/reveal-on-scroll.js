export default {
	bind( el, binding ) {
		el.classList.add( `ros-${ binding.value.animation }` )
		if ( binding.value.delay ) {
			el.style.transitionDelay = `${ binding.value.delay }ms`
		}

		const observerOptions = {
			rootMargin: '-100px 0px -100px 0px',
		}
		const observer = new IntersectionObserver( ( entries, observer ) => {
			entries.forEach( entry => {
				if ( entry.isIntersecting || binding.value.force ) {
					console.log( entry.target )
					entry.target.classList.add( 'ros-animate' )
					observer.unobserve( entry.target )
				}
			} )
		}, observerOptions )
		observer.observe( el )
	},
}