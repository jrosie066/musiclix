import React from 'react';

interface Props {
};

const SearchResultsWrapper = (WrappedComponent: any) => {
  const SearchResultsPageWrapper = (props: Props) => <WrappedComponent {...props} />;
  return SearchResultsPageWrapper;
};
export { SearchResultsWrapper };
