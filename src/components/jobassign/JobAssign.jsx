import * as S from 'components/jobassign/JobAssign.Style';
import useLayoutChange from 'hooks/useLayoutChange';
import useModal from 'hooks/useModal';
import React, { useState, useEffect } from 'react';

function JobAssign({ data }) {
  const jobData = {
    MAFIA: {
      img: '/image/jobintroduce/mafia.png',
      job: '마피아',
      description: '밤에 한 명을 죽일 수 있습니다.',
    },
    SPY: {
      img: '/image/jobintroduce/spy.png',
      job: '스파이',
      description:
        '시민팀에 잠입하여 밤마다 플레이어 한명을 골라 그 직업을 알수있다. 그 대상이 마피아인경우 스파이는 마피아팀으로 복귀한다.',
    },
    POLICE: {
      img: '/image/jobintroduce/policer.png',
      job: '경찰',
      description: '밤이 될 경우 한 명을 조사하여 마피아 여부를 알수있다.',
    },
    DOCTOR: {
      img: '/image/jobintroduce/doctor.png',
      job: '의사',
      description: '마피아에게 살해 당할 것 같은 한명을 골라, 일치 할 시 대상을 살릴수있다.',
    },
    SOLDIER: {
      img: '/image/jobintroduce/soldier.png',
      job: '군인',
      description: '마피아의 타겟이 된경우 한차례 버틸수있다. 단, 이후 직업이 모두 공개된다.',
    },
    POLITICIAN: {
      img: '/image/jobintroduce/politician.png',
      job: '정치인',
      description: '투표권이 2개. 투표로 처형되지않는다.',
    },
    DEVELOPER: {
      img: '/image/jobintroduce/developer.png',
      job: '개발자',
      description: '시스템에 오류를 일으킨다. 밤에 화상과 음성기능을 사용할 수 있다.',
    },
    REPORTER: {
      img: '/image/jobintroduce/reporter.png',
      job: '기자',
      description:
        '모든사람한테 찍은사람 직업을 공지처럼 알려줌. 게임 중 1번만 발동할 수 있으며, 두번째 밤부터 사용가능하다.',
    },
    PRIEST: {
      img: '/image/jobintroduce/priest.png',
      job: '성직자',
      description: '밤에 죽은 플레이어 한명을 부활 시킨다. (1회)',
    },
    GANGSTER: {
      img: '/image/jobintroduce/gangster.png',
      job: '갱스터',
      description: '밤에 지목된 플레이어는 투표에 참여할수없으며, 마피아일 경우 사람을 죽일수없다.',
    },
  };
  const [showJobModal, setShowJobModal] = useState();

  const handleJobModal = () => {
    setShowJobModal(!showJobModal);
  };
  // 2
  useEffect(() => {
    //console.log(modalToggleState);
    handleJobModal();
    setTimeout(() => {
      handleJobModal();
    }, 5000);
  }, []);

  return (
    <S.JobAssignModalBody>
      <S.ModalContent>
        <S.JobImage src={process.env.PUBLIC_URL + jobData[data]['img']} />
        <S.JobIntroduceDiv>
          <S.JobAssignText>
            당신의 직업은
            <br /> {jobData[data]['job']}입니다.
          </S.JobAssignText>
          <S.JobDescription>{jobData[data]['description']}</S.JobDescription>
        </S.JobIntroduceDiv>
      </S.ModalContent>
    </S.JobAssignModalBody>
  );
}

export default JobAssign;
