import { atom, atomFamily, selector } from 'recoil';

export const skillState = atomFamily({
  key: 'skillState',
  default: 1,
});

export const currentTimeState = atom({
  key: 'currentTimeState',
  default: 0,
});

export const isVoteTimeState = atom({
  key: 'isVoteTimeState',
  default: false,
});

export const isSkillTimeState = atom({
  key: 'isSkillTimeState',
  default: false,
});

export const deadPlayerState = atom({
  key: 'deadPlayerState',
  default: [],
});

export const checkDeathSelector = selector({
  key: 'checkDeathSelector',
  get: ({ get }) => {
    const myNickname = sessionStorage.getItem('nickname');
    return get(deadPlayerState).includes(myNickname);
  },
});
