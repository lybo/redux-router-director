'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

var _actions = require('./actions');

var types = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = function Router(_ref) {
    var dispatch = _ref.dispatch;
    var router = _ref.router;
    var middlewares = _ref.middlewares;
    var _ref$pattern = _ref.pattern;
    var pattern = _ref$pattern === undefined ? '' : _ref$pattern;
    var _ref$children = _ref.children;
    var children = _ref$children === undefined ? null : _ref$children;

    if (router.initial) {
        utils.add(pattern, dispatch, types.navigate, middlewares);
    }
    return _react2.default.createElement(
        'div',
        null,
        router.pattern === pattern ? children : null
    );
};

exports.default = (0, _reactRedux.connect)(function (state, props) {
    return {
        router: state.router,
        middlewares: props.middlewares,
        pattern: props.pattern || ''
    };
}, function (dispatch, props) {
    return {
        dispatch: dispatch
    };
})(Router);