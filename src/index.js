/**
 * Applies a class with same name as the route
 * onto the parent element.
 */

import Vue from 'vue';

export default function (router) {

	return Vue.directive('route-class', (el) => {

		// initialize to current route
		el.classList.add(router.currentRoute.name);

		// Update each time we change routes
		router.afterEach((toRoute, fromRoute) => {
			if (fromRoute) {
				el.classList.remove(fromRoute.name);
			}
			if (toRoute) {
				el.classList.add(toRoute.name);
			}
		});
	});

}
