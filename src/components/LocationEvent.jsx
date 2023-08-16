import { useState, useEffect } from 'react';

function LocationEvent() {
  const [locationKeys, setLocationKeys] = useState([]);

  useEffect(() => {
    return history.listen((location) => {
      if (history.action === 'PUSH') {
        setLocationKeys([location.key]);
      }

      if (history.action === 'POP') {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([_, ...keys]) => keys);
        } else {
          setLocationKeys((keys) => [location.key, ...keys]);

          history.push('/lobby');
        }
      }
    });
  }, [locationKeys, history]);
}
