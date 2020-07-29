import cloneDeep from 'lodash/cloneDeep';
import { mapGetInfoResponse } from '../artist/artist-mapper';
import mockResponse from './__mocks__/artist-get-info-response.json';

describe('#mapGetInfoResponse', () => {
  let response;
  beforeEach(() => {
    response = cloneDeep(mockResponse);
  });

  it('should map the artist info from a successful api repsonse', () => {
    const expected = {
      name: 'Cher',
      mbid: 'bfcc6d75-a6a5-4bc6-8282-47aec8531818',
      tags: [
        { name: 'pop', url: 'https://www.last.fm/tag/pop' },
        {
          name: 'female vocalists',
          url: 'https://www.last.fm/tag/female+vocalists',
        },
        { name: '80s', url: 'https://www.last.fm/tag/80s' },
        { name: 'dance', url: 'https://www.last.fm/tag/dance' },
        { name: 'rock', url: 'https://www.last.fm/tag/rock' }
      ],
      bio: {
        // eslint-disable-next-line max-len
        summary: 'Cher (born Cherilyn Sarkisian; May 20, 1946) is an Oscar- and Grammy-winning American singer and actress. A major figure for over five decades in the world of popular culture, she is often referred to as the Goddess of Pop for having first brought the sense of female autonomy and self-actualization into the entertainment industry. \n'
          + '\n'
          // eslint-disable-next-line max-len
          + 'She is known for her distinctive contralto and for having worked extensively across media, as well as for continuously reinventing both her music and image, the latter of which has been known to induce controversy. <a href="https://www.last.fm/music/Cher">Read more on Last.fm</a>',
      },
    };
    const actual = mapGetInfoResponse(response);
    expect(actual).toStrictEqual(expected);
  });
});
