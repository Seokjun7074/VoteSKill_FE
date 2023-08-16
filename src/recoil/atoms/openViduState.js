import { atom } from 'recoil';

export const roomIdState = atom({
  key: 'roomIdState',
  default: '',
});

export const userNameState = atom({
  key: 'userNameState',
  default: '',
});

export const publisherState = atom({
  key: 'publisherState',
  default: {
    audioSource: undefined,
    videoSource: undefined,
    publishAudio: true,
    publishVideo: true,
    resolution: '200x200',
    frameRate: 60,
    insertMode: 'APPEND',
    mirror: true,
  },
});
