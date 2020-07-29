import cloneDeep from 'lodash/cloneDeep';
import { mapChartsResponse } from '../charts/charts-mapper';
import mockResponse from './__mocks__/charts-response.json';

describe('#mapChartsResponse', () => {
  let response;
  beforeEach(() => {
    response = cloneDeep(mockResponse);
  });

  it('should map the artist info from a successful api repsonse', () => {
    const expected = [{
      name: 'The Weeknd',
      playcount: '123025819',
      listeners: '1595607',
      mbid: 'c8b03190-306c-4120-bb0b-6f2ebfc06ea9',
      url: 'https://www.last.fm/music/The+Weeknd',
    },
    {
      name: 'Kanye West',
      playcount: '299511163',
      listeners: '4634052',
      mbid: '164f0d73-1234-4e2c-8743-d77bf2191051',
      url: 'https://www.last.fm/music/Kanye+West',
    },
    {
      name: 'Lady Gaga',
      playcount: '338207862',
      listeners: '4070218',
      mbid: '650e7db6-b795-4eb5-a702-5ea2fc46c848',
      url: 'https://www.last.fm/music/Lady+Gaga',
    },
    {
      name: 'Taylor Swift',
      playcount: '253365927',
      listeners: '2467128',
      mbid: '20244d07-534f-4eff-b4d4-930878889970',
      url: 'https://www.last.fm/music/Taylor+Swift',
    }, {
      name: 'Dua Lipa',
      playcount: '57630700',
      listeners: '794448',
      mbid: '',
      url: 'https://www.last.fm/music/Dua+Lipa',
    }
    ];
    const actual = mapChartsResponse(response);
    expect(actual).toStrictEqual(expected);
  });
  // TODO
  it.skip('should handle return partial information if some is missing', () => {

  });
});
