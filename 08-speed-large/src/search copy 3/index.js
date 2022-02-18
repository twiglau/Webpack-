'use strict';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import '../../common';
import './search_less.less';
import logo from './images/friend_img.png'
import { a,b } from './tree-shaking'

if (false) {
    b();
}
class Search extends React.Component {
    constructor(){
        super(...arguments);
        this.state = {
            Text: null
        };
    }

    loadComponent() {
        import('./text.js').then((Text) => {
            this.setState({
                Text: Text.default
            })

        });
    }

    render () {
        const funcA = a();
        const { Text } = this.state;
        return <div className="search-text">
            {
                Text ? <Text /> : null
            }
            <span>{ funcA }</span>
            <span>Search Text 111</span>
            <img src={ logo } onClick={ this.loadComponent.bind(this) }  />
        </div>;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)