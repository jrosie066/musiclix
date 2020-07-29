/* eslint-disable quote-props */
import { Reducer } from 'redux';
import axios from 'axios';
import {
  Artist, BaseAction, ApiConfig, ArtistInfoState,
} from '../types';
import { mapGetInfoResponse } from './artist-mapper';

declare const CONFIG: ApiConfig;

const BASE_URL = CONFIG.artistAPI.host;

/** ACTIONS */
export const GET_ARTIST_INFO_SUCCESS = 'artist/GET_ARTIST_INFO_SUCCESS';
export const GET_ARTIST_INFO_FAILURE = 'artist/GET_ARTIST_INFO_FAILURE';

export const getArtistInfoSuccess = (info): BaseAction => ({
  type: GET_ARTIST_INFO_SUCCESS,
  payload: { info },
});

export const getArtistInfoFailure = (error): BaseAction => ({
  type: GET_ARTIST_INFO_FAILURE,
  payload: { error },
});
export const getArtistInfoAction = (mbid: string) => async (dispatch) => {
  try {
    const axiosConfig = {
      params: {
        method: CONFIG.artistAPI.methods.getArtistInfo,
        mbid,
        'api_key': CONFIG.artistAPI.apiKey,
        format: 'json',
      },
    };
    const response = await axios.get(BASE_URL, axiosConfig);
    dispatch(getArtistInfoSuccess(response.data));
  } catch (error) {
    dispatch(getArtistInfoFailure(error));
    throw error;
  }
};

export const artistInitialState: ArtistInfoState = {
  artistInfo: [] as Artist[],
};

const artistReducer: Reducer<ArtistInfoState, BaseAction> = (
  currentState: ArtistInfoState = artistInitialState,
  action: BaseAction
) => {
  switch (action.type) {
    case GET_ARTIST_INFO_SUCCESS: {
      const { info } = action.payload;
      const mappedArtistInfo = mapGetInfoResponse(info);
      return {
        ...currentState,
        ...mappedArtistInfo,

      };
    }
    case (GET_ARTIST_INFO_FAILURE): {
      const { error } = action.payload;

      return {
        ...currentState,
        error,
      };
    }
    default: { return currentState; }
  }
};

export default artistReducer;
