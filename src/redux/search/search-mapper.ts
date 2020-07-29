import get from 'lodash/get';
import pick from 'lodash/pick';
import { ArtistResult } from '../types';

const pickItems = [
  'name',
  'mbid'
];

/**
 * Filters out important information from lastfm artist search and
 * returns first page of data
 * @param response api response from lastfm artistsearch
 */
export const mapSearchArtistResponse = (response: any): ArtistResult[] => {
  const artists = get(response, 'results.artistmatches.artist');
  const mappedArtists = artists.map((artist) => {
    const filtered = pick(artist, pickItems);
    return filtered;
  });
  return mappedArtists;
};
