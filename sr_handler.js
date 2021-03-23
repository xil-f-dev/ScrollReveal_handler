sr_config.forEach((anim) => {
	ScrollReveal().reveal(document.querySelectorAll(`${anim.selector}:not([data-srh="none"])`), anim.srconf, anim.delaybtw),
		console.log(`New ScrollReveal rule added -> Name ${anim.name}; Selector: ${anim.selector}; conf: ${anim.srconf};`);
});
