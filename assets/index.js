// Vanilla Js.
// import _ from 'lodash';

// function component() {
//     const element = document.createElement('div');

//     element.innerHTML = _.join(['Hello', 'lodash'], '');

//     return element;
// }

// document.body.appendChild(component());

// React JS.
import React from 'react';
import ReactDOM from 'react-dom';
// Vue.
import Vue from 'vue';
import Index from './index.vue';

new Vue({
    el: '#vue-root',
    render: h => h(Index),
});

ReactDOM.render(
    <h1>Hello from React</h1>,
    document.getElementById('root')
);