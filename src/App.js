import React from 'react';

import ScreensRoot from './screens/Root';
import { withAuthentication } from './components/Session';

const App = () => {
  return <ScreensRoot />;
};

export default withAuthentication(App);
