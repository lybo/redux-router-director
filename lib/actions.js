'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.navigate = navigate;

var _ActionTypes = require('./ActionTypes');

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function navigate(url, pattern, params) {
    return {
        type: types.NAVIGATION,
        payload: {
            url: url,
            pattern: pattern,
            params: params
        }
    };
};