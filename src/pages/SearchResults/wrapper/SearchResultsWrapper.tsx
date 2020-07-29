import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../../redux';
import { getArtistInfoAction } from '../../../redux/artist/artist-reducer';

interface Props {
};

const SearchResultsWrapper = (WrappedComponent: any) => {
  const SearchResultsPageWrapper = (props: Props): JSX.Element => {
    const search = useSelector((state: State) => state.search);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOnClick = async (mbid: string): Promise<void> => {
      try {
        dispatch(getArtistInfoAction(mbid));
        setIsModalOpen(true);
      } catch (e) {
        // navigate to error page and handle error
      }
    };
    const pageProps = {
      search,
      isModalOpen,
      onClick: handleOnClick,
      ...props,
    };
    return <WrappedComponent {...pageProps} />;
  };
  return SearchResultsPageWrapper;
};
export { SearchResultsWrapper };
