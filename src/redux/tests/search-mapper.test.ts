/* eslint-disable max-len */
import cloneDeep from 'lodash/cloneDeep';
import mockResponse from './__mocks__/search-results-response.json';
import { mapSearchArtistResponse } from '../search/search-mapper';

describe('#mapSearchArtistResponse', () => {
  let response;
  beforeEach(() => {
    response = cloneDeep(mockResponse);
  });
  it('should properly map search artist response', () => {
    const actual = mapSearchArtistResponse(response);
    const expected = [
      {
        name: 'Cher',
        mbid: 'bfcc6d75-a6a5-4bc6-8282-47aec8531818',
      },
      {
        name: 'Cheryl Cole',
        mbid: '2d499150-1c42-4ffb-a90c-1cc635519d33',
      }
    ];
    expect(actual).toStrictEqual(expected);
  });
});
