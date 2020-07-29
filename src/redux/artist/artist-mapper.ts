import get from 'lodash/get';
import pick from 'lodash/pick';
import set from 'lodash/set';
// import { Artist } from '../types';

const pickItems = [
  'name',
  'mbid',
  // 'similar', potentially add
  'tags',
  'bio'
];
export const mapGetInfoResponse = (response: any): any => {
  const artist = get(response, 'artist');
  const filteredArtist = pick(artist, pickItems);
  const tags = get(filteredArtist, 'tags.tag');
  set(filteredArtist, 'tags', tags);
  const summ = get(filteredArtist, 'bio.summary');
  set(filteredArtist, 'bio', { summary: summ });
  return filteredArtist;
};
