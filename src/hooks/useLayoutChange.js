import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { layoutState } from 'recoil/atoms/layoutState';

const useLayoutChange = () => {
  const [layout, setLayout] = useRecoilState(layoutState);

  const setDay = useCallback(() => setLayout({ ...layout, Day: true }), [setLayout]);
  const setMafia = useCallback(() => setLayout({ Day: false, Mafia: true }), [setLayout]);
  const setCitizen = useCallback(() => setLayout({ Day: false, Mafia: false }), [setLayout]);

  return { layout, setDay, setMafia, setCitizen };
};

export default useLayoutChange;
