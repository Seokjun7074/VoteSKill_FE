import useLayoutChange from 'hooks/useLayoutChange';
import * as S from 'pages/GameRoom/GameRoom.Style';
import CamScreen from './CamScreen/CamScreen';
import { useEffect, useState } from 'react';
import Modal from 'components/modal/Modal';
import useModal from 'hooks/useModal';
import useEventSource from 'hooks/useEventsource';
import Timer from 'components/timer/Timer';
import JobAssign from 'components/jobassign/JobAssign';
import { currentTimeState, deadPlayerState, isSkillTimeState, isVoteTimeState } from 'recoil/atoms/gameState';
import { useRecoilState, useSetRecoilState } from 'recoil';
import showSwal from 'utils/showSwal';
import convertMessageToText from 'utils/convertMessageToText';
import { checkDeath } from 'utils/checkDeath';

function GameRoom({ sessionId, openvidu, myRole, setInGame }) {
  const { setDay, setMafia, setCitizen } = useLayoutChange();
  const nickname = sessionStorage.getItem('nickname');
  const { openModal: openjobAssign } = useModal('JobAssign');
  const { voteData, roomData } = useEventSource(sessionId, nickname);
  const [imageOn, setImageOn] = useState('');

  const setCurrentTime = useSetRecoilState(currentTimeState);
  const [isVoteTime, setIsVoteTime] = useRecoilState(isVoteTimeState);
  const [isSkillTime, setIsSkillTime] = useRecoilState(isSkillTimeState);
  const [deadPlayers, setDeadPlayers] = useRecoilState(deadPlayerState);

  const setDeath = () => {
    openvidu.publisher.publishAudio(false);
    openvidu.publisher.publishVideo(false);
  };
  const setResurrection = () => {
    openvidu.publisher.publishAudio(true);
    openvidu.publisher.publishVideo(true);
  };

  useEffect(() => {
    // 최초 입장 시 직업 배정 알리미
    setResurrection();
    setCitizen();
    setCurrentTime(myRole.timer);
    openjobAssign(myRole.role);
  }, [myRole]);

  useEffect(() => {
    // 투표 시간 알리미
    if (voteData) {
      showSwal('마피아라고 생각되는 사람을 클릭하세요', '닫기');
      setIsVoteTime(true);
      setCurrentTime(voteData.timer);
    }
  }, [voteData]);

  useEffect(() => {
    // 능력/투표 결과 알리미
    if (roomData) {
      if (roomData.type === 'vote') {
        setMafia();
        showSwal(convertMessageToText(roomData.messages), '확인');
        setIsVoteTime(false);
        setIsSkillTime(true);
        setImageOn('');
      }
      if (roomData.type === 'skill') {
        setCitizen();
        showSwal(convertMessageToText(roomData.messages), '확인');
        setIsSkillTime(false);
        setImageOn('');
        if (deadPlayers.length > roomData.death.length && !checkDeath(roomData.death, nickname)) {
          setResurrection();
          setDeadPlayers(roomData.death);
        }
      }
      if (roomData.type === 'gameover') {
        showSwal(convertMessageToText(roomData.messages), '확인');
        setIsSkillTime(false);
        setImageOn('');
        location.replace('/lobby');
      }

      if (checkDeath(roomData.death, nickname)) {
        setDeath();
        setDeadPlayers(roomData.death);
      }

      setCurrentTime(roomData.timer);
    }
  }, [roomData]);

  return (
    <S.ScreenWrapper>
      <Timer />
      {openvidu.session && (
        <CamScreen
          publisher={openvidu.publisher}
          subscribers={openvidu.subscribers}
          myRole={myRole['role']}
          roomId={sessionId}
          imageOn={imageOn}
          setImageOn={setImageOn}
        />
      )}
      <Modal id="JobAssign">
        <JobAssign data={myRole.role} />
      </Modal>
    </S.ScreenWrapper>
  );
}

export default GameRoom;
