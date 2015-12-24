'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ActionTypes = require('./ActionTypes');

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
    url: '',
    pattern: '',
    params: {},
    initial: true
};
var router = function router() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case types.NAVIGATION:
            return action.payload;
        default:
            return state;
    }
};

exports.default = router;