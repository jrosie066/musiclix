import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../../redux';

interface Props {
};

const SearchResultsWrapper = (WrappedComponent: any) => {
  const SearchResultsPageWrapper = (props: Props): JSX.Element => {
    const search = useSelector((state: State) => state.search);
    const pageProps = {
      search,
      ...props,
    };
    return <WrappedComponent {...pageProps} />;
  };
  return SearchResultsPageWrapper;
};
export { SearchResultsWrapper };
