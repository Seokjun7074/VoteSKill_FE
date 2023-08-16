import { useEffect, useState } from 'react';
import useOpenVidu from 'hooks/useOpenVidu';
import Header from 'components/header/Header';
import Layout from 'components/layout/Layout';
import GameRoom from 'pages/GameRoom/GameRoom';
import WaitingRoom from 'pages/WaitingRoom/WaitingRoom';
import { useLocation, useParams } from 'react-router-dom';
import useLayoutChange from 'hooks/useLayoutChange';
import gameAPI from 'apis/gameAPI';
import { skillState } from 'recoil/atoms/gameState';
import { useSetRecoilState } from 'recoil';

function Game() {
  const location = useLocation();
  const password = location.state.password;
  const { sessionId } = useParams();
  const { layout } = useLayoutChange();
  const openvidu = useOpenVidu();
  const [inGame, setInGame] = useState(false);
  const [myRole, setMyRole] = useState(undefined);
  const setSkill = useSetRecoilState(skillState(myRole));

  useEffect(() => {
    return () => {
      setSkill(1); // 스킬 사용 횟수 초기화;
      try {
        gameAPI.exitRoom(sessionId);
      } catch (e) {
        console.log(e);
      }
    };
  }, []);

  return (
    <Layout isMain={false} $layout={layout}>
      <Header />
      {inGame ? (
        <GameRoom sessionId={sessionId} openvidu={openvidu} password={password} myRole={myRole} setInGame={setInGame} />
      ) : (
        <WaitingRoom
          sessionId={sessionId}
          openvidu={openvidu}
          password={password}
          setInGame={setInGame}
          setMyRole={setMyRole}
        />
      )}
    </Layout>
  );
}

export default Game;
