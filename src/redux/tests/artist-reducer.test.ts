import cloneDeep from 'lodash/cloneDeep';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import mockResponse from './__mocks__/search-results-response.json';
import artistReducer,
{ getArtistInfoAction, GET_ARTIST_INFO_SUCCESS } from '../artist/artist-reducer';
import * as mapper from '../artist/artist-mapper';

const middlewares = [thunk];
describe('#artistReducer', () => {
  let response;
  let store;
  let mbid;
  beforeEach(() => {
    response = cloneDeep(mockResponse);
    const mockStore = configureMockStore(middlewares);
    store = mockStore({});
    mbid = '12345';
  });
  describe('#searchArtistAction', () => {
    let axiosSpy;
    beforeEach(() => {
      axiosSpy = jest.spyOn(axios, 'get');
    });
    afterEach(jest.clearAllMocks);
    it('should make a success call to api', async () => {
      axiosSpy.mockResolvedValue(response);
      await store.dispatch(getArtistInfoAction(mbid));
      const actualActions = store.getActions().map((action) => action.type);
      const expectedActions = [
        'artist/GET_ARTIST_INFO_SUCCESS'
      ];
      expect(actualActions).toStrictEqual(expectedActions);
      expect(axiosSpy).toHaveBeenCalledTimes(1);
      expect(axiosSpy).toHaveBeenCalledWith(
        'https://ws.audioscrobbler.com/2.0',
        expect.objectContaining({
          params: expect.objectContaining({
            mbid,
          }),
        })
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
        await store.dispatch(getArtistInfoAction(mbid));
      } catch (e) {
        error = e;
      }
      const actualActions = store.getActions().map((action) => action.type);
      const expectedActions = [
        'artist/GET_ARTIST_INFO_FAILURE'
      ];
      expect(actualActions).toStrictEqual(expectedActions);
      expect(axiosSpy).toHaveBeenCalledTimes(1);
      expect(axiosSpy).toHaveBeenCalledWith(
        'https://ws.audioscrobbler.com/2.0',
        expect.objectContaining({
          params: expect.objectContaining({
            mbid,
          }),
        })
      );
      expect(error).toBeDefined();
    });
  });
  describe('#reducer', () => {
    let mapperMock;
    let currentState;
    beforeEach(() => {
      mapperMock = jest.spyOn(mapper, 'mapGetInfoResponse');
      currentState = {};
    });
    it('should update store on success action', () => {
      const expectedResponse = {
        name: 'Lizzo',
        mbid: '1234',
      };
      mapperMock.mockReturnValue(expectedResponse);
      const action = {
        type: GET_ARTIST_INFO_SUCCESS,
        payload: { info: { artist: { name: 'Lizzo' } } },
      };
      const actual = artistReducer(currentState, action);
      expect(actual).toStrictEqual(expectedResponse);
    });
    // TODO: finish error state testing
    it.skip('should update store on failure action', () => {
    });
  });
});
