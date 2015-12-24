# React Redux Router 

React Redux Router is a router based on [director] router lib. Consindering that the official [redux-router] is not stable and I feel that lacks of some functionality such as middlewares I created a substitude based on [director] exploiting only the basics. 

### Version
1.0.0

### Requirements
It's only for react-redux implementation.

### Installation

```sh
$ npm install redux-router-director --save
```

### Usage

./index.js
```sh
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import router from 'redux-router-director'

const store = configureStore()
router.setStore(store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
  function() {
    router.init();
  }
)
```

./reducers/index.js
```sh
import { combineReducers } from 'redux'
import todos from './todos'
import router from 'redux-router-director'

export default combineReducers({
    router: router.reducer,
    todos
})
```

./middlewares/index.js
```sh
import { redirect } from 'redux-router-director'
export const auth = (ctx, next) => {
    const { user } = ctx.state;
    if (!user.auth) {
        redirect('/');
    }
    next();
}
```

./containers/App.js
```sh
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Router } from 'redux-router-director'
import PageHome from './PageHome'
import PageContact from './PagePost'
import Link from '../components/Link'
import { auth } from '../middlewares/index'

const Pages = ({
    router
}) => {
    return (
        <div>
            <Router pattern="" >
                <PageHome />
            </Router>
            <Router pattern="/home" middlewares={[auth]}>
                <PageHome />
            </Router>
            <Router pattern="/post/:id" >
                <PagePost id={router.params.id} />
            </Router>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            router: state.router    
        };
    },
    (dispatch) => {
        return {};
    }
)(Pages);
```

./components/Link.js
```sh
import React, { Component, PropTypes } from 'react'
import { redirect } from 'redux-router-director'

class Link extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        redirect(this.props.url);
    }
    render() {
        const {url, className, children} = this.props;
        return (
            <a href={url} className={className} onClick={this.onClick}>{children}</a>       
        );
    }
}
export default Link;
```


License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [director]: <https://github.com/flatiron/director>
   [redux-router]: <https://github.com/acdlite/redux-router>


