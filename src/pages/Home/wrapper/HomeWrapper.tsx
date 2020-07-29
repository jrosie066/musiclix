import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchArtistAction } from '../../../redux/search/search-reducer';
import { SEARCH_RESULTS_PATH } from '../../../constants/route-paths';

interface Props {
};

const HomeWrapper = (WrappedComponent: any) => {
  const HomePageWrapper = (props: Props): JSX.Element => {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSearchClick = async (searchItem: string): Promise<void> => {
      try {
        await dispatch(searchArtistAction(searchItem));
        history.push(SEARCH_RESULTS_PATH);
      } catch (e) {
        // navigate to error page and handle error
      }
    };
    const pageProps = {
      onSearchClick: handleSearchClick,
      ...props,
    };
    return <WrappedComponent {...pageProps} />;
  };
  return HomePageWrapper;
};
export { HomeWrapper };
