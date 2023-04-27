import { Route } from 'react-router';
import React from 'react';
import { Helmet } from 'react-helmet';

import ReactDom from 'react-dom';
import { ReactNode } from 'react';

// I can`t use "useDeferredValue"
const domNode = document.getElementById('root')!;

const node: React.ReactNode = {};
const ele: ReactNode = {} as JSX.Element;

const x = () => {
  return (
    <Route>
      {/* react18-type assign to react17-type  ✅ */}
      <Helmet />
      <div></div>
    </Route>
  );
};

ReactDom.render(x(), domNode);
