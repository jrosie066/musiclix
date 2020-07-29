import cloneDeep from 'lodash/cloneDeep';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import mockResponse from './__mocks__/search-results-response.json';
import chartsReducer,
{ chartsAction, CHARTS_SUCCESS } from '../charts/charts-reducer';
import * as mapper from '../charts/charts-mapper';

const middlewares = [thunk];
describe('#chartsReducer', () => {
  let response;
  let store;
  // let method;
  beforeEach(() => {
    response = cloneDeep(mockResponse);
    const mockStore = configureMockStore(middlewares);
    store = mockStore({});
    // method = 'charts.gettopparties';
  });
  describe('#chartsAction', () => {
    let axiosSpy;
    beforeEach(() => {
      axiosSpy = jest.spyOn(axios, 'get');
    });
    afterEach(jest.clearAllMocks);
    it('should make a success call to api', async () => {
      axiosSpy.mockResolvedValue(response);
      await store.dispatch(chartsAction());
      const actualActions = store.getActions().map((action) => action.type);
      const expectedActions = [
        'charts/CHARTS_SUCCESS'
      ];
      expect(actualActions).toStrictEqual(expectedActions);
      expect(axiosSpy).toHaveBeenCalledTimes(1);
      expect(axiosSpy).toHaveBeenCalledWith(
        'https://ws.audioscrobbler.com/2.0',
        // TODO: set up api config for tests
        expect.anything()
      );
    });
    it('should handle error scenarios', async () => {
      const errorResponse = {
        statusCode: 500,
        message: 'oops somethings wrong',
      };
      axiosSpy.mockRejectedValue(errorResponse);
      let error;
      try {
        await store.dispatch(chartsAction());
      } catch (e) {
        error = e;
      }
      const actualActions = store.getActions().map((action) => action.type);
      const expectedActions = [
        'charts/CHARTS_FAILURE'
      ];
      expect(actualActions).toStrictEqual(expectedActions);
      expect(axiosSpy).toHaveBeenCalledTimes(1);
      expect(axiosSpy).toHaveBeenCalledWith(
        'https://ws.audioscrobbler.com/2.0',
        // TODO: set up api config for tests
        expect.anything()
      );
      expect(error).toBeDefined();
    });
  });
  describe('#reducer', () => {
    let mapperMock;
    let currentState;
    beforeEach(() => {
      mapperMock = jest.spyOn(mapper, 'mapChartsResponse');
      currentState = {};
    });
    it('should update store on success action', () => {
      const expectedResponse = {
        topArtists: [
          { name: 'Lizzo', mbid: '3432' },
          {
            name: 'BTS',
            mbid: '1234',
          }],
      };
      mapperMock.mockReturnValue(expectedResponse.topArtists);
      const action = {
        type: CHARTS_SUCCESS,
        payload: { artist: { artist: [{ name: 'Lizzo' }, { name: 'BTS' }] } },
      };
      const actual = chartsReducer(currentState, action);
      expect(actual).toStrictEqual(expectedResponse);
    });
    // TODO: finish error state testing
    it.skip('should update store on failure action', () => {
    });
  });
});
