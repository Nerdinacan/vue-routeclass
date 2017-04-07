'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (router) {

	return _vue2.default.directive('route-class', function (el) {

		el.classList.add(router.currentRoute.name);

		router.afterEach(function (toRoute, fromRoute) {
			if (fromRoute) {
				el.classList.remove(fromRoute.name);
			}
			if (toRoute) {
				el.classList.add(toRoute.name);
			}
		});
	});
};

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }