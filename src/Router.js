import React from 'react';
import { connect } from 'react-redux'
import * as utils from './utils'
import * as types from './actions'

const Router = ({
    dispatch,
    router,
    middlewares,
    pattern = '',
    children = null
}) => {
    if (router.initial) {
        utils.add(pattern, dispatch, types.navigate, middlewares);
    }
    return (
        <div>
            {(router.pattern === pattern) ? children : null}
        </div>
    );
}

export default connect(
    (state, props) => {
        return {
            router: state.router,
            middlewares: props.middlewares,
            pattern: props.pattern || ''
        }
    }, 
    (dispatch, props) => {
        return { 
            dispatch: dispatch
        }
    }
)(Router); 
