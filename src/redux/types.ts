/** Add Types related to redux here */
import { Action } from 'redux';

export interface ArtistImage {
  url: string;
  size: string;
};
export interface Artist {
  name: string;
  mbid: string;
  tags: Tag[];
  bio: Bio;
}
export interface ArtistInfoState {
  artistInfo: Artist[];
}
export interface ArtistResult {
  name: string;
  mbid: string;
  image: ArtistImage[];
}

export type BaseAction = Action<string> & {
  payload: Record<string, any>;
};

export interface Bio {
  summary: string;
}
interface Config {
  host: string;
  apiKey: string;
  methods: {
    artistSearch: string;
    getArtistInfo: string;
  };
}
export interface ApiConfig {
  artistAPI: Config;
}
export interface SearchState {
  artists: ArtistResult[];
}

export interface Tag {
  name: string;
  url: string;
}
