import * as types from './ActionTypes'

export function navigate(url, pattern, params) {
    return {
        type: types.NAVIGATION,
        payload: {
            url: url,
            pattern: pattern, 
            params: params 
        }
    };   
};

