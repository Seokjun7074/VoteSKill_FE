import React, { useEffect } from 'react';
import * as S from 'pages/WaitingRoom/WaitingRoom.style';
import Chatting from './Chatting/Chatting';
import PlayerList from './PlayerList/PlayerList';
import useEventSource from 'hooks/useEventsource';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import Loading from 'components/loading/Loading';
function WaitingRoom({ sessionId, openvidu, password, setInGame, setMyRole }) {
  const nickname = sessionStorage.getItem('nickname');
  const { roleData } = useEventSource(sessionId, nickname);
  const getServerSentEvent = async () => {
    const URL = process.env.REACT_APP_GAME_SERVER_URL + `/sse/enter/${sessionId}/${nickname}`;
    const res = await axios.get(URL);
  };

  useEffect(() => {
    if (openvidu.session) {
      console.log('이미 세션이 존재합니다.');
      return;
    }
    const nickname = sessionStorage.getItem('nickname');
    openvidu.setRoomId(sessionId);
    openvidu.setUserName(nickname);
    openvidu.setPassword(password);
    openvidu.setPublisherSetting({ ...openvidu.publisherSetting, publishAudio: false, publishVideo: false });
    openvidu.joinSession();
  }, [sessionId]);

  useEffect(() => {
    getServerSentEvent();
  }, []);

  return (
    <>
      {openvidu.session && openvidu.subscribers && openvidu.publisher ? (
        <S.Total>
          <PlayerList
            publisher={openvidu.publisher}
            subscribers={openvidu.subscribers}
            roleData={roleData}
            setInGame={setInGame}
            sessionId={sessionId}
            setMyRole={setMyRole}
          />
          <Chatting messageList={openvidu.messageList} sendMessage={openvidu.sendMessage} />
        </S.Total>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default WaitingRoom;
