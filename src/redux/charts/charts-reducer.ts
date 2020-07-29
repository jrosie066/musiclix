/* eslint-disable quote-props */
import { Reducer } from 'redux';
import axios from 'axios';
import {
  BaseAction, ApiConfig, Charts, ChartState,
} from '../types';
import { mapChartsResponse } from './charts-mapper';

declare const CONFIG: ApiConfig;

const BASE_URL = CONFIG.artistAPI.host;

export const CHARTS_SUCCESS = 'charts/CHARTS_SUCCESS';
export const CHARTS_FAILURE = 'charts/CHARTS_FAILURE';

/** ACTIONS */

export const chartsSuccess = (artists): BaseAction => ({
  type: CHARTS_SUCCESS,
  payload: { artists },
});

export const chartsFailure = (error): BaseAction => ({
  type: CHARTS_FAILURE,
  payload: { error },
});

export const chartsAction = () => async (dispatch) => {
  try {
    const axiosConfig = {
      params: {
        method: CONFIG.artistAPI.methods.charts,
        'api_key': CONFIG.artistAPI.apiKey,
        format: 'json',
      },
    };
    const response = await axios.get(BASE_URL, axiosConfig);
    dispatch(chartsSuccess(response.data));
  } catch (error) {
    dispatch(chartsFailure(error));
    throw error;
  }
};

export const chartInitialState: ChartState = {
  artists: [] as Charts[],
};

/** REDUCER */
const chartsReducer: Reducer<ChartState, BaseAction> = (
  currentState: ChartState = chartInitialState,
  action: BaseAction
) => {
  switch (action.type) {
    case CHARTS_SUCCESS: {
      const { artists } = action.payload;
      const mappedCharts = mapChartsResponse(artists);
      return {
        ...currentState,
        topArtists: mappedCharts,

      };
    }
    case (CHARTS_FAILURE): {
      const { error } = action.payload;

      return {
        ...currentState,
        error,
      };
    }
    default: { return currentState; }
  }
};

export default chartsReducer;
