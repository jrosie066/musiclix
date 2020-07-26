import React from 'react';

interface Props {
};

const HomeWrapper = (WrappedComponent: any) => {
  const HomePageWrapper = (props: Props) => <WrappedComponent {...props} />;
  return HomePageWrapper;
};
export { HomeWrapper };
