import { Router } from 'director'
let router = null;
let getCtx = () => {};

export function getUrl() {
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
	router.on(pattern, function() {
        var params = (pattern.match(/:[^\s/]+/g) || []).map(function(param) {
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
        
        var middlewareHandler = function(i) {
            if (index < middlewares.length - 1) {
                middlewares[i].call(this, ctx, next);
            } else {
                args.unshift(ctx);
                middlewares[middlewares.length - 1].apply(this, args);
            }
        };
        var next = function() {
            index++;
            middlewareHandler(index);
        };

        middlewareHandler(0);
	});
};

export function add(pattern, dispatch, navigate, middlewares = []) {
    on.apply(null, [pattern, ...middlewares, (ctx) => {
        dispatch(navigate(ctx.url, pattern, ctx.params))
    }]);
};

export function redirect(url) {
	document.body.scrollTop = 0;
    router.setRoute(url);
};

export function dispatch(path) {
    return router.dispatch(path);    
}

export function setStore(store, defaultUrl) {
    getCtx = () => {
        return store.getState();
    };
    router = new Router();
};

export function init(defaultUrl) {
    router.init().configure({
        html5history: false,
        run_handler_in_init: false,
        convert_hash_in_init: true
    });
};
