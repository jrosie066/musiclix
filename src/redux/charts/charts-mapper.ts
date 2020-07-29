import get from 'lodash/get';
import pick from 'lodash/pick';

const pickItems = [
  'name',
  'mbid',
  'playcount',
  'listeners',
  'url'
];
/**
 * Filters out important information from lastfm and
 * returns top 5 artists
 * @param response api response from lastfm gettopartists
 */

export const mapChartsResponse = (response: any) => {
  const chartArtists = get(response, 'artists.artist');
  const mappedArtists = chartArtists.slice(0, 5).map((artist) => {
    const filtered = pick(artist, pickItems);
    return filtered;
  });
  return mappedArtists;
};
