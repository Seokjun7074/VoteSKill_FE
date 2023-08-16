import { createBrowserHistory } from 'history';

const PreventGoBack = () => {
  const history = createBrowserHistory();

  const GoBack = () => {
    history.push(null, '', history.location.href);

    const outRoom = confirm('뒤로 가시면 방을 나가게 됩니다. 나가시겠습니까?');

    if (outRoom) {
      window.location.href('/lobby');
    }
  };
};

export default PreventGoBack();
