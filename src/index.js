import * as utils from './utils' 
import reducer from './reducer' 
import Router from './Router' 

export { Router };
export const init = utils.init;
export const redirect = utils.redirect;
export const getUrl = utils.getUrl;
export const setStore = utils.setStore;

export default {
    reducer,
    init: utils.init,
    redirect: utils.redirect,
    getUrl: utils.getUrl,
    setStore: utils.setStore
};

