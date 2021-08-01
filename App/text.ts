import { Languages } from './types';

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
  language: {
    [Languages.En]: 'lang',
    [Languages.Fr]: 'lang',
    [Languages.De]: '',
  },
  version: {
    [Languages.En]: 'ver',
    [Languages.Fr]: 'ver',
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
    [Languages.Fr]: 'attraper!',
    [Languages.De]: '',
  },
  release: {
    [Languages.En]: 'release',
    [Languages.Fr]: 'relâcher',
    [Languages.De]: '',
  },
};

export default text;
