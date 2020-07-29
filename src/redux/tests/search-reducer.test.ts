import cloneDeep from 'lodash/cloneDeep';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import searchReducer, { searchArtistAction, SEARCH_ARTISTS_SUCCESS } from '../search/search-reducer';
import mockResponse from './__mocks__/search-results-response.json';
import * as mapper from '../search/search-mapper';

const middlewares = [thunk];
describe('#searchReducer', () => {
  let response;
  let store;
  let artist;
  beforeEach(() => {
    response = cloneDeep(mockResponse);
    const mockStore = configureMockStore(middlewares);
    store = mockStore({});
    artist = 'post malone';
  });
  describe('#searchArtistAction', () => {
    let axiosSpy;
    beforeEach(() => {
      axiosSpy = jest.spyOn(axios, 'get');
    });
    afterEach(jest.clearAllMocks);
    it('should make a success call to api', async () => {
      axiosSpy.mockResolvedValue(response);
      await store.dispatch(searchArtistAction(artist));
      const actualActions = store.getActions().map((action) => action.type);
      const expectedActions = [
        'search/SEARCH_ARTISTS_SUCCESS'
      ];
      expect(actualActions).toStrictEqual(expectedActions);
      expect(axiosSpy).toHaveBeenCalledTimes(1);
      expect(axiosSpy).toHaveBeenCalledWith(
        'https://ws.audioscrobbler.com/2.0',
        expect.objectContaining({
          params: expect.objectContaining({
            artist,
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
        await store.dispatch(searchArtistAction(artist));
      } catch (e) {
        error = e;
      }
      const actualActions = store.getActions().map((action) => action.type);
      const expectedActions = [
        'search/SEARCH_ARTISTS_FAILURE'
      ];
      expect(actualActions).toStrictEqual(expectedActions);
      expect(axiosSpy).toHaveBeenCalledTimes(1);
      expect(axiosSpy).toHaveBeenCalledWith(
        'https://ws.audioscrobbler.com/2.0',
        expect.objectContaining({
          params: expect.objectContaining({
            artist,
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
      mapperMock = jest.spyOn(mapper, 'mapSearchArtistResponse');
      currentState = {};
    });
    it('should update store on success action', () => {
      const artists = [{
        name: 'Lizzo',
        mbid: '1234',
      }];
      const expectedResponse = { artists };
      mapperMock.mockReturnValue(artists);
      const action = {
        type: SEARCH_ARTISTS_SUCCESS,
        payload: { artist: { artist: { name: 'Lizzo' } } },
      };
      const actual = searchReducer(currentState, action);
      expect(actual).toStrictEqual(expectedResponse);
    });
    // TODO: finish error state testing
    it.skip('should update store on failure action', () => {
    });
  });
});
