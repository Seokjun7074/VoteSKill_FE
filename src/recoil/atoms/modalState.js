import { atomFamily } from 'recoil';

export const modalState = atomFamily({
  key: 'modalState',
  default: false,
});
