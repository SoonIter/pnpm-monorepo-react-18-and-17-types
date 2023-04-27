import { Route } from 'react-router';
import React, {useDeferredValue} from 'react';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);

const x = () => {
  return (
    <Route>
      <div></div>
    </Route>
  );
};
root.render(x());