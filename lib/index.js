'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setStore = exports.getUrl = exports.redirect = exports.init = exports.Router = undefined;

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _Router = require('./Router');

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.Router = _Router2.default;
var init = exports.init = utils.init;
var redirect = exports.redirect = utils.redirect;
var getUrl = exports.getUrl = utils.getUrl;
var setStore = exports.setStore = utils.setStore;

exports.default = {
    reducer: _reducer2.default,
    init: utils.init,
    redirect: utils.redirect,
    getUrl: utils.getUrl,
    setStore: utils.setStore
};