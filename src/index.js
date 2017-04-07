/**
 * Applies a class with same name as the route
 * onto the parent element.
 */

import Vue from 'vue';

export default function (router) {

	return Vue.directive('route-class', (el) => {

		el.classList.add(router.currentRoute.name);

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
