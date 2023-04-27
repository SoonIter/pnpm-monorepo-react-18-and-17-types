import { Route } from 'react-router';
import React from 'react';
// I can`t use "useDeferredValue"

import ReactDom from 'react-dom';

const domNode = document.getElementById('root')!;

const x = () => {
  return <Route>
    <div></div>
  </Route>;
};

ReactDom.render(x(), domNode);