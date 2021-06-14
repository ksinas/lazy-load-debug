import React, { lazy, Suspense } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

const App = lazy(() => import('/imports/ui/App'));

Meteor.startup(async () => {
  render((
    <Suspense fallback="Loading...">
      <App />
    </Suspense>
  ), document.getElementById('react-target'));
});
