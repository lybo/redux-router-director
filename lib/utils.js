'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUrl = getUrl;
exports.add = add;
exports.redirect = redirect;
exports.dispatch = dispatch;
exports.setStore = setStore;
exports.init = init;

var _director = require('director');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var router = null;
var getCtx = function getCtx() {};

function getUrl() {
    return router.getRoute().join('/');
};

function on(pattern, handler) {
    var middlewares = [];
    var i = 1;
    var ctx = {};
    ctx.params = {};
    ctx.url = '';
    for (i = 1; i < arguments.length; i++) {
        middlewares.push(arguments[i]);
    }
    router.on(pattern, function () {
        var params = (pattern.match(/:[^\s/]+/g) || []).map(function (param) {
            return param.substr(1);
        });
        var index = 0;
        var args = [];
        ctx.state = getCtx();
        ctx.url = getUrl();
        for (i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
            ctx.params[params[i]] = arguments[i];
        }

        var middlewareHandler = function middlewareHandler(i) {
            if (index < middlewares.length - 1) {
                middlewares[i].call(this, ctx, next);
            } else {
                args.unshift(ctx);
                middlewares[middlewares.length - 1].apply(this, args);
            }
        };
        var next = function next() {
            index++;
            middlewareHandler(index);
        };

        middlewareHandler(0);
    });
};

function add(pattern, dispatch, navigate) {
    var middlewares = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];

    on.apply(null, [pattern].concat(_toConsumableArray(middlewares), [function (ctx) {
        dispatch(navigate(ctx.url, pattern, ctx.params));
    }]));
};

function redirect(url) {
    document.body.scrollTop = 0;
    router.setRoute(url);
};

function dispatch(path) {
    return router.dispatch(path);
}

function setStore(store, defaultUrl) {
    getCtx = function () {
        return store.getState();
    };
    router = new _director.Router();
};

function init(defaultUrl) {
    router.init().configure({
        html5history: false,
        run_handler_in_init: false,
        convert_hash_in_init: true
    });
};