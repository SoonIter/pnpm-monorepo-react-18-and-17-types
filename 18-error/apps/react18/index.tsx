import { Route } from 'react-router';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Helmet } from 'react-helmet';

import ReactDom from 'react-dom';

const domNode = document.getElementById('root')!;

// @ts-expect-error Type "{}" cannot be assigned to type "ReactNode". (@types/react 18.0.x)
const node: React.ReactNode = {}; 

const x = () => {
  return (
    <Route>
      <Helmet />
      <div></div>
    </Route>
  );
};


const root = createRoot(domNode);
root.render(x());