import cloneDeep from 'lodash/cloneDeep';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { searchArtistAction } from '../search-reducer';
import mockResponse from './__mocks__/search-results-response.json';

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
    it('should make a success call to api', async () => {
      axiosSpy.mockResolvedValue(response);
      await store.dispatch(searchArtistAction(artist));
      const actualActions = store.getActions().map((action) => action.type);
      const expectedActions = [
        'search/SEARCH_ARTISTS_INITIATED',
        'search/SEARCH_ARTISTS_SUCCESS'
      ];
      expect(actualActions).toStrictEqual(expectedActions);
      expect(axiosSpy).toHaveBeenCalledTimes(1);
      expect(axiosSpy).toHaveBeenCalledWith(
        'http://ws.audioscrobbler.com/2.0',
        expect.objectContaining({
          params: expect.objectContaining({
            artist,
          }),
        })
      );
    });
  });
});
