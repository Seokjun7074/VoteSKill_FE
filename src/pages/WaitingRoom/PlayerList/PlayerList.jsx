import { useEffect, useState } from 'react';
import * as S from 'pages/WaitingRoom/PlayerList/PlayList.style';
import useModal from 'hooks/useModal';
import { useRecoilState } from 'recoil';
import { hostState } from 'recoil/atoms/hostState';
import gameAPI from 'apis/gameAPI';
import { useNavigate } from 'react-router-dom';

function PlayerList({ subscribers, publisher, roleData, setInGame, sessionId, setMyRole }) {
  const [userList, setUserList] = useState([]);
  const [host, setHost] = useRecoilState(hostState);
  const { openModal: openUserInfo } = useModal('UserInfo');
  const navigate = useNavigate();

  useEffect(() => {
    setUserList(subscribers);
  }, [subscribers]);

  useEffect(() => {
    if (roleData) {
      console.log('내 직업', roleData);
      setInGame(true);
      setMyRole(roleData);
    }
  }, [roleData]);

  const gameStart = async () => {
    try {
      const { status } = await gameAPI.startGame(sessionId);
    } catch (error) {
      console.log('게임시작 실패', error);
    }
  };

  const checkHost = () => sessionStorage.getItem('nickname') === host;

  const navigateTolobby = () => navigate('/lobby');

  return (
    <S.PlayerListWrapper>
      <S.Square>
        <S.Container key={publisher}>
          <span onClick={openUserInfo}>{JSON.parse(publisher.stream.connection.data).clientData}</span>
        </S.Container>
        {userList.map((sub, idx) => (
          <S.Container key={idx}>
            <span onClick={openUserInfo}>{JSON.parse(sub.stream.connection.data).clientData}</span>
          </S.Container>
        ))}
      </S.Square>
      <S.ButtonSquare>
        <S.OutButton onClick={navigateTolobby}>EXIT</S.OutButton>
        {checkHost() && <S.StartButton onClick={gameStart}>START</S.StartButton>}
      </S.ButtonSquare>
    </S.PlayerListWrapper>
  );
}

export default PlayerList;
