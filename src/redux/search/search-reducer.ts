/* eslint-disable quote-props */
import { Reducer } from 'redux';
import axios from 'axios';
import {
  BaseAction, SearchState, ApiConfig, ArtistResult,
} from '../types';
import { mapSearchArtistResponse } from './search-mapper';

declare const CONFIG: ApiConfig;

const BASE_URL = CONFIG.artistAPI.host;

export const SEARCH_ARTISTS_SUCCESS = 'search/SEARCH_ARTISTS_SUCCESS';
export const SEARCH_ARTISTS_FAILURE = 'search/SEARCH_ARTISTS_FAILURE';

/** ACTIONS */

export const searchArtistsSuccess = (artists): BaseAction => ({
  type: SEARCH_ARTISTS_SUCCESS,
  payload: { artists },
});

export const searchArtistsFailure = (error): BaseAction => ({
  type: SEARCH_ARTISTS_FAILURE,
  payload: { error },
});

export const searchArtistAction = (artist: string) => async (dispatch) => {
  try {
    const axiosConfig = {
      params: {
        method: CONFIG.artistAPI.methods.artistSearch,
        artist,
        'api_key': CONFIG.artistAPI.apiKey,
        format: 'json',
      },
    };
    const response = await axios.get(BASE_URL, axiosConfig);
    dispatch(searchArtistsSuccess(response.data));
  } catch (error) {
    dispatch(searchArtistsFailure(error));
    throw error;
  }
};

export const searchInitialState: SearchState = {
  artists: [] as ArtistResult[],
};

const searchReducer: Reducer<SearchState, BaseAction> = (
  currentState: SearchState = searchInitialState,
  action: BaseAction
) => {
  switch (action.type) {
    case SEARCH_ARTISTS_SUCCESS: {
      const { artists } = action.payload;
      const mappedArtists = mapSearchArtistResponse(artists);
      return {
        ...currentState,
        ...mappedArtists,

      };
    }
    case (SEARCH_ARTISTS_FAILURE): {
      const { error } = action.payload;

      return {
        ...currentState,
        error,
      };
    }
    default: { return currentState; }
  }
};

export default searchReducer;
