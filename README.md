# Scroll Reveal Handler

A simple handler to use more easily the ScrollReveal library with a lot of elements.

## Installation

First, add the CDN of the ScrollReveal js file : `<script src="https://unpkg.com/scrollreveal"></script>` and to this project : `<script src="path/to/sr_handler.js"></script>`.

Then, you can configure ScrollReveal by initializing a `sr_config` array into a JavaScript file or inside a `<script></script>` tags.

## Configuration

To add an ScrollReveal effect to an element of yout webapp, you need to create an object in the config array.
The object looks like this :

```js
{
	name: "links",
	selector: "a", /* The selector which will be used to select the element to animate */
	srconf: {      /* See the ScrollReveal documentation at https://scrollrevealjs.org/api/reveal.html for more details */
		distance: "10px",
		origin: "left",
		opacity: 0,
		reset: true,
		delay: 200,
		duration: 500,
		interval: 0
	}
},
```

## Exemple

You can find a simple example un the `Exemple` folder.

A basic configuration example (used in the `Exemple` folder)

```js
const sr_config = [
	{
		name: "title",
		selector: "h2",
		srconf: {
			distance: "10px",
			origin: "left",
			opacity: 0,
			reset: true,
			delay: 0,
			duration: 1000,
			interval: 0,
		},
	},
	{
		name: "subtitle",
		selector: "h3",
		srconf: {
			distance: "10px",
			origin: "left",
			opacity: 0,
			reset: true,
			delay: 50,
			duration: 1000,
			interval: 0,
		},
	},
	{
		name: "text",
		selector: "p",
		srconf: {
			distance: "10px",
			origin: "left",
			opacity: 0,
			reset: true,
			delay: 200,
			duration: 1000,
			interval: 0,
		},
	},
	{
		name: "links",
		selector: "a",
		srconf: {
			distance: "0px",
			opacity: 0,
			reset: true,
			delay: 200,
			duration: 500,
			interval: 20,
		},
	},
	{
		name: "hr",
		selector: ".spacer",
		srconf: {
			distance: "20px",
			origin: "bottom",
			opacity: 0,
			reset: true,
			delay: 500,
			duration: 1000,
			interval: 20,
		},
	},
];
```

## Links

[ScrollReveal](https://github.com/jlmakes/scrollreveal)

---

- [Scroll Reveal Handler](#scroll-reveal-handler)
	- [Installation](#installation)
	- [Configuration](#configuration)
	- [Exemple](#exemple)
	- [Links](#links)
