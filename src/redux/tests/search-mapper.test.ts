/* eslint-disable max-len */
import cloneDeep from 'lodash/cloneDeep';
import mockResponse from './__mocks__/search-results-response.json';
import { searchArtistResponseMapper } from '../search-mapper';

describe('#searchArtistResponseMapper', () => {
  let response;
  beforeEach(() => {
    response = cloneDeep(mockResponse);
  });
  it('should properly map search artist response', () => {
    const actual = searchArtistResponseMapper(response);
    const expected = {
      artists: [
        {
          name: 'Cher',
          mbid: 'bfcc6d75-a6a5-4bc6-8282-47aec8531818',
          image: [
            {
              url: 'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'medium',
            },
            {
              url: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'large',
            }
          ],
        },
        {
          name: 'Cheryl Cole',
          mbid: '2d499150-1c42-4ffb-a90c-1cc635519d33',
          image: [
            {
              url: 'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'medium',
            },
            {
              url: 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'large',
            }],
        }
      ],
    };
    expect(actual).toStrictEqual(expected);
  });
});
