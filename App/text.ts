import { Languages, Unit, Version } from './types';

type Text = {
  [key: string]: {
    [Languages.En]: string;
    [Languages.Fr]: string;
    [Languages.De]: string;
  };
};

const text: Text = {
  contents: {
    [Languages.En]: 'contents',
    [Languages.Fr]: 'sommaire',
    [Languages.De]: '',
  },
  seen: {
    [Languages.En]: 'seen',
    [Languages.Fr]: 'vus',
    [Languages.De]: '',
  },
  own: {
    [Languages.En]: 'own',
    [Languages.Fr]: 'pris',
    [Languages.De]: '',
  },
  data: {
    [Languages.En]: 'data',
    [Languages.Fr]: 'info',
    [Languages.De]: '',
  },
  cry: {
    [Languages.En]: 'cry',
    [Languages.Fr]: 'cri',
    [Languages.De]: '',
  },
  area: {
    [Languages.En]: 'area',
    [Languages.Fr]: 'zone',
    [Languages.De]: '',
  },
  lang: {
    [Languages.En]: 'lang',
    [Languages.Fr]: 'lang',
    [Languages.De]: '',
  },
  language: {
    [Languages.En]: 'language',
    [Languages.Fr]: 'langage',
    [Languages.De]: '',
  },
  languages: {
    [Languages.En]: 'english',
    [Languages.Fr]: 'français',
    [Languages.De]: '',
  },
  version: {
    [Languages.En]: 'version',
    [Languages.Fr]: 'version',
    [Languages.De]: '',
  },
  ver: {
    [Languages.En]: 'ver',
    [Languages.Fr]: 'ver',
    [Languages.De]: '',
  },
  [Version.RedBlue]: {
    [Languages.En]: 'red/blue',
    [Languages.Fr]: 'rouge/bleu',
    [Languages.De]: '',
  },
  [Version.Yellow]: {
    [Languages.En]: 'yellow',
    [Languages.Fr]: 'jaune',
    [Languages.De]: '',
  },
  height: {
    [Languages.En]: 'HT',
    [Languages.Fr]: 'TAI',
    [Languages.De]: '',
  },
  weight: {
    [Languages.En]: 'WT',
    [Languages.Fr]: 'PDS',
    [Languages.De]: '',
  },
  back: {
    [Languages.En]: 'back',
    [Languages.Fr]: 'retour',
    [Languages.De]: '',
  },
  catch: {
    [Languages.En]: 'catch!',
    [Languages.Fr]: 'capturer!',
    [Languages.De]: '',
  },
  release: {
    [Languages.En]: 'release',
    [Languages.Fr]: 'relâcher',
    [Languages.De]: '',
  },
  unitShort: {
    [Languages.En]: 'unit',
    [Languages.Fr]: 'unit',
    [Languages.De]: '',
  },
  unit: {
    [Languages.En]: 'unit',
    [Languages.Fr]: 'unité',
    [Languages.De]: '',
  },
  [Unit.Metric]: {
    [Languages.En]: 'metric',
    [Languages.Fr]: 'métrique',
    [Languages.De]: '',
  },
  [Unit.Imperial]: {
    [Languages.En]: 'imperial',
    [Languages.Fr]: 'impérial',
    [Languages.De]: '',
  },
};

export default text;
