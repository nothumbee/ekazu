import React from 'react';

const withInjected = (
  conditionalRenderingFn,
  InjectedComponent
) => Component => props => (
  <Component {...props}>
    {conditionalRenderingFn(props) ? <InjectedComponent /> : null}
  </Component>
);

export default withInjected;
