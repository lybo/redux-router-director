import * as types from './ActionTypes'
const initialState = { 
    url: '',
    pattern: '',
    params: {},
    initial: true
};
const router = (state = initialState, action) => {
  switch (action.type) {
    case types.NAVIGATION:
        return action.payload;
    default: 
        return state;
  }  
};

export default router;
