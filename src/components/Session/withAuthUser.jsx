import React from 'react';

import AuthUserContext from './context';

const withAuthUser = Component => props => {
  return (
    <AuthUserContext.Consumer>
      {authUser => <Component {...props} authUser={authUser} />}
    </AuthUserContext.Consumer>
  );
};

export default withAuthUser;
