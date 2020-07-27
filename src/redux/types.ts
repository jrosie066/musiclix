/** Add Types related to redux here */
import { Action } from 'redux';

export interface Sample {
  id: string;
  sample1: string;
  sample2: string;
};

export type BaseAction = Action<string> & {
  payload: Record<string, any>;
};
export interface ArtistImage {
  url: string;
  size: string;
};
export interface Artist {
  name: string;
  mbid: string;
  image: ArtistImage[];
}
