/* eslint-disable quote-props */
import { Reducer } from 'redux';
import axios from 'axios';
import { Artist, BaseAction } from './types';
import { searchArtistResponseMapper } from './search-mapper';

declare const CONFIG: any;

const BASE_URL = CONFIG.artistAPI.host;

/** ACTIONS */
export const SearchActions = {
  SEARCH_ARTISTS_INITIATED: 'search/SEARCH_ARTISTS_INITIATED',
  SEARCH_ARTISTS_SUCCESS: 'search/SEARCH_ARTISTS_SUCCESS',
  SEARCH_ARTISTS_FAILURE: 'search/SEARCH_ARTISTS_FAILURE',
};

export const searchArtistsInitiated = (): BaseAction => ({
  type: SearchActions.SEARCH_ARTISTS_INITIATED,
  payload: {},
});

export const searchArtistsSuccess = (artists): BaseAction => ({
  type: SearchActions.SEARCH_ARTISTS_SUCCESS,
  payload: { artists },
});

export const searchArtistsFailure = (error): BaseAction => ({
  type: SearchActions.SEARCH_ARTISTS_FAILURE,
  payload: { error },
});
export const searchArtistAction = (artist: string) => async (dispatch) => {
  dispatch(searchArtistsInitiated());
  try {
    const axiosConfig = {
      params: {
        method: CONFIG.artistAPI.methods.artistSearch,
        artist,
        'api_key': CONFIG.artistAPI.apiKey,
      },
    };
    const response = await axios.get(BASE_URL, axiosConfig);
    dispatch(searchArtistsFailure(response.data.books));
  } catch (error) {
    dispatch(searchArtistsFailure(error));
    throw error;
  }
};
export interface SearchState {
  results: Artist[];
}

export const searchInitialState: SearchState = {
  results: [] as Artist[],
};

const searchReducer: Reducer<SearchState, BaseAction> = (
  currentState: SearchState = searchInitialState,
  action: BaseAction
) => {
  switch (action.type) {
    case SearchActions.SEARCH_ARTISTS_SUCCESS: {
      const { artist } = action.payload;
      const mappedArtists = searchArtistResponseMapper(artist);
      return {
        ...currentState,
        ...mappedArtists,

      };
    }
    case (SearchActions.SEARCH_ARTISTS_FAILURE): {
      // TODO: handle errors
      return currentState;
    }
    default: { return currentState; }
  }
};

export default searchReducer;
