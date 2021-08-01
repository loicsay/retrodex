export enum Languages {
  En = 'en',
  Fr = 'fr',
  De = 'de',
}

export enum Version {
  RedBlue = 'red-blue',
  Yellow = 'yellow',
}

type LanguageEntry = {
  [Languages.En]: string;
  [Languages.Fr]: string;
  [Languages.De]: string;
};

export type PokemonData = {
  weight_us: string;
  pokedex_entries: {
    [Version.RedBlue]: LanguageEntry;
    [Version.Yellow]: LanguageEntry;
  };
  height_eu: string;
  national_id: number;
  height_us: string;
  weight_eu: string;
  names: LanguageEntry;
  categories: LanguageEntry;
};
