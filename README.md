# vue-routeclass

A directive that slaps a class on an element whose name is the same as the current route. Why? So you can use the cascading part of cascading style sheets that seemingly nobody under the age of 35 even fucking understands.

You may find this useful if you're a grown-up who knows how to use CSS, understands the desire to generate maintainable semantic markup and CSS, and in general doesn't want to suck at things.

But if you're a Millennial, this code isn't right for you. Run along and make another one of your unmaintainable Frankencode messes. Keep on pretending you belong here. That imposter syndrome you're feeling? It's not a syndrome.


# Usage

## First build a router
### router.js
```javascript
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from 'Home';
import Contact from 'Contact';

// register router with main app
Vue.use(VueRouter);

// routes
const routes = [
	{ path: '/', name: 'home', component: Home },
	{ path: '/contact', name: 'contact', component: Contact }
];

// build router object
const router = new VueRouter({ routes });

export default router;
```

## Then use the damned thing.
### SomeComponent.js
```javascript

import router from 'router';
import RouteClass from 'vue-routeclass';

// because you're using webpack, aren't you Billy?
import './styles';

export default {
	router,
	components: {
		'route-class': RouteClass(router)
	}
}
```


## Now stick it in yer template.
### SomeComponent.vue
```html
<script src="./SomeComponent.js"></script>

<template>
	<main v-route-class>
		<nerd-menu></nerd-menu>
		<div class="content">
			<!--
			Place your shitty markup littered with
			non-semantic bootstrap styles here somewhere,
			because that's the way you've always seen it,
			right? So that must be correct,

			Right Billy, Right?
			-->
			<transition name="rotato" appear>
				<router-view></router-view>
			</transition>
		</div>
	</main>
</template>
```


### styles.css/.scss/.less/.blah
```css

/**
Hey look Billy! Now you can write semantic code without littering
your markup with 5000 classes or some other stupid plan like putting
styles directly on the element. Fucking Millennials.
*/

.home .content {
	do: things;
}

.contact .content {
	width: yourmom%;
}

```

## Good Job Snowflake. Pick up your participation trophy on the way out.

Now you can spend the next 15 minutes pretending you're not another incompetent Millennial who can't cascade styles, separate concerns or test units.

But it's not too late! Even if you don't screw this up, you still get a chance to fail Separation of Concerns 101 when you give me a controller with 1000 lines of poorly written untestable garbage, no dependency injection, and a demonstrable misunderstanding of the javascript closure. You probably code in CoffeeScript.

Honestly, I think I'll have better luck waiting for your kids to hit the workforce.