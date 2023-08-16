import KakaoLogin from 'pages/KakaoLogin/KakaoLogin';
import Lobby from 'pages/Lobby/Lobby';
import Main from 'pages/Main/Main';
import SignIn from 'pages/SignIn/SignIn';
import GameTestPage from 'pages/GameTestPage/GameTestPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Game from 'pages/Game/Game';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/kakao/callback" element={<KakaoLogin />} />
        <Route path="/play/:sessionId" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
