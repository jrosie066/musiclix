import get from 'lodash/get';
import pick from 'lodash/pick';
import { ArtistImage } from './types';

const pickItems = [
  'name',
  'mbid',
  'image'
];

const mapImages = (artist): ArtistImage => artist.image
  .filter((img) => img.size === 'medium' || img.size === 'large')
  .map((img) => {
    const url = get(img, '#text');
    return {
      url,
      size: img.size,
    };
  });

export const searchArtistResponseMapper = (response: any) => {
  const artists = get(response, 'results.artistmatches.artist');
  const mappedArtists = artists.map((artist) => {
    const filtered = pick(artist, pickItems);
    const images = mapImages(filtered);
    filtered.image = images;
    return filtered;
  });
  // picking middle of the road sizes just to reduce the images array for now
  return { artists: mappedArtists };
};
