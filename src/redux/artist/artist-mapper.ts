import get from 'lodash/get';
import pick from 'lodash/pick';
import set from 'lodash/set';
import { Artist } from '../types';

const pickItems = [
  'name',
  'mbid',
  // 'similar', TODO: potentially add
  'tags',
  'bio'
];
export const mapGetInfoResponse = (response: any): Artist => {
  const artist = get(response, 'artist');
  const filteredArtist = pick(artist, pickItems);
  const tags = get(filteredArtist, 'tags.tag');
  set(filteredArtist, 'tags', tags);
  const summ = get(filteredArtist, 'bio.summary');
  set(filteredArtist, 'bio', { summary: summ });
  return filteredArtist;
};
