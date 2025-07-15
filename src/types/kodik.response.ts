export type KodikResponse = {
  time: string;
  total: number;
  results: KodikResult[];
}

type KodikResult = {
  id: string;
  type: string;
  link: string;
  title: string;
  title_orig: string;
  other_title: string;
  translation: {
    id: number;
    title: string;
    type: string;
  };
  year: number;
  last_season: number;
  last_episode: number;
  episodes_count: number;
  kinopoisk_id: string;
  imdb_id: string;
  worldart_link: string;
  shikimori_id: string;
  quality: string;
  camrip: boolean;
  lgbt: boolean;
  blocked_countries: string[];
  blocked_seasons: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  seasons: {
    [key: string]: {
      link: string;
      episodes: {
        [key: string]: {
          link: string;
          screenshots: string[];
        };
      };
    };
  };
  material_data: {
    title: string;
    anime_title: string;
    title_en: string;
    other_titles_en: string[];
    other_titles_jp: string[];
    anime_license_name: string;
    anime_licensed_by: string[];
    anime_kind: string;
    all_status: string;
    anime_status: string;
    year: number;
    description: string;
    anime_description: string;
    poster_url: string;
    anime_poster_url: string;
    screenshots: string[];
    duration: number;
    countries: string[];
    all_genres: string[];
    genres: string[];
    anime_genres: string[];
    anime_studios: string[];
    kinopoisk_rating: number;
    kinopoisk_votes: number;
    imdb_rating: number;
    imdb_votes: number;
    shikimori_rating: number;
    shikimori_votes: number;
    premiere_world: string;
    aired_at: string;
    next_episode_at: string;
    rating_mpaa: string;
    minimal_age: number;
    episodes_total: number;
    episodes_aired: number;
    actors: string[];
    directors: string[];
    producers: string[];
    writers: string[];
    composers: string[];
    editors: string[];
    designers: string[];
    operators: string[];
  };
  screenshots: string[];
}