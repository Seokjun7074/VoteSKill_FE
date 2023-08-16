import { atom } from 'recoil';

export const layoutState = atom({
  key: 'layoutState',
  default: {
    Day: false,
    Mafia: true,
  },
});
