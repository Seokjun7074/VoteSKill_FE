import React, { useEffect, useRef, useState } from 'react';
import * as S from './CamScreen.Style';
import { useRecoilState, useRecoilValue } from 'recoil';
import { checkDeathSelector, isSkillTimeState, isVoteTimeState, skillState } from 'recoil/atoms/gameState';
import gameAPI from 'apis/gameAPI';
import showSwal from 'utils/showSwal';
import VoteAndSkill from 'pages/GameRoom/VoteAndSkill/VoteAndSkill';
import { deadPlayerState } from 'recoil/atoms/gameState';
import GraveComponent from 'pages/GameRoom/GraveComponent/GraveComponent';
import { checkDeath } from 'utils/checkDeath';
import Swal from 'sweetalert2';

function CamScreen({ publisher, subscribers, myRole, roomId, imageOn, setImageOn }) {
  return (
    <S.VideoWrapper>
      {publisher !== undefined ? (
        <UserVideoComponent
          streamManager={publisher}
          setImageOn={setImageOn}
          imageOn={imageOn}
          myRole={myRole}
          roomId={roomId}
        />
      ) : null}
      {subscribers.length > 0 &&
        subscribers.map((sub) => (
          <UserVideoComponent
            key={sub.stream.streamId}
            streamManager={sub}
            setImageOn={setImageOn}
            imageOn={imageOn}
            myRole={myRole}
            roomId={roomId}
          />
        ))}
    </S.VideoWrapper>
  );
}

function UserVideoComponent({ streamManager, setImageOn, imageOn, myRole, roomId }) {
  const [isVoteTime, setIsVoteTime] = useRecoilState(isVoteTimeState);
  const [isSkillTime, setIsSkillTime] = useRecoilState(isSkillTimeState);
  const videoRef = useRef();
  const NORMAL_SKILL_ROLE = ['DOCTOR', 'MAFIA'];
  const NONE_SKILL_ROLE = ['SOLDIER', 'POLITICIAN'];
  const ONECE_SKILL_ROLE = ['PRIEST', 'REPORTER'];
  const deadPlayers = useRecoilValue(deadPlayerState);
  const [skill, setSkill] = useRecoilState(skillState(myRole));
  const [useNickname, setUserNickname] = useState('');
  const myDeath = useRecoilValue(checkDeathSelector);

  useEffect(() => {
    const getNicknameTag = (sub) => JSON.parse(sub.stream.connection.data).clientData;
    setUserNickname(getNicknameTag(streamManager));
  }, [streamManager]);

  const handleSkillAndPost = async (myRole, nickname) => {
    if (myRole === 'POLICE') {
      const { data } = await gameAPI.useSkill(roomId, nickname);
      showSwal(data.message, '닫기');
      return;
    }
    if (NONE_SKILL_ROLE.includes(myRole)) {
      showSwal(`현재 직업은 사용할 스킬이 없습니다.`, '닫기');
      return;
    }
    if (NORMAL_SKILL_ROLE.includes(myRole)) {
      showSwal(`${nickname}을 선택하셨습니다.`, '닫기');
      await gameAPI.useSkill(roomId, nickname);
      return;
    }
    if (ONECE_SKILL_ROLE.includes(myRole)) {
      if (skill < 1) {
        showSwal(`스킬 사용 횟수가 소진되었습니다.`, '닫기');
        return;
      }
      showSwal(`${nickname}을 선택하셨습니다.`, '닫기');
      await gameAPI.useSkill(roomId, nickname);
      setSkill((skill) => skill - 1);
    }
  };

  const handleVoteAndPost = async (nickname) => {
    showSwal(`${nickname}을 투표하셨습니다.`, '닫기');
    const { data } = await gameAPI.voteGame(roomId, nickname);
  };

  const handleClickKillVote = () => {
    if ((!isVoteTime && !isSkillTime) || imageOn !== '') return;
    if (myDeath) {
      showSwal('사망자는 게임에 참여할 수 없습니다.', '확인');
      return;
    }

    Swal.fire({
      title: `${useNickname}님을 선택하겠습니까?`,
      text: '다시 되돌릴 수 없습니다. 신중히 선택세요.',
      showCancelButton: true,
      confirmButtonColor: '#6367CE',
      cancelButtonColor: '#970000',
      confirmButtonText: '확인',
      cancelButtonText: '취소',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setImageOn(useNickname);
        if (isVoteTime) handleVoteAndPost(useNickname);
        if (isSkillTime) handleSkillAndPost(myRole, useNickname);
      }
    });
  };

  useEffect(() => {
    if (streamManager && !!videoRef.current) {
      streamManager.addVideoElement(videoRef.current);
    }
  }, [streamManager]);

  return (
    <>
      {streamManager !== undefined ? (
        <S.UserInfoWrapper>
          <GraveComponent useNickname={useNickname} />
          <VoteAndSkill useNickname={useNickname} imageOn={imageOn} myRole={myRole} />
          {checkDeath(deadPlayers, useNickname) ? null : (
            <S.VideoContainer onClick={handleClickKillVote}>
              <S.CustomScreen autoPlay={true} ref={videoRef} />
            </S.VideoContainer>
          )}
          <span>{useNickname}</span>
        </S.UserInfoWrapper>
      ) : null}
    </>
  );
}

export default React.memo(CamScreen);
