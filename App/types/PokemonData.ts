type PokedexEntries = {
  fr: string;
  de: string;
  en: string;
};

type Names = {
  fr: string;
  de: string;
  en: string;
};

type Categories = {
  fr: string;
  de: string;
  en: string;
};

export type PokemonData = {
  weight_us: string;
  pokedex_entries: {
    'red-blue': PokedexEntries;
    yellow: PokedexEntries;
  };
  height_eu: string;
  national_id: number;
  height_us: string;
  weight_eu: string;
  names: Names;
  categories: Categories;
};
