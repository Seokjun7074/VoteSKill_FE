import * as S from 'components/jobintroduce/JobIntroduce.Style';
import { modalDescription, modalImg, modalJob } from 'constants/jobIntroduce';
import React, { useState } from 'react';

function JobIntroduce() {
  const [currentModalIndex, setCurrentModalIndex] = useState(0);

  const goToNextModal = () => {
    setCurrentModalIndex((prevIndex) => (prevIndex + 1) % modalJob.length);
  };

  const goToPreviousModal = () => {
    setCurrentModalIndex((prevIndex) => (prevIndex === 0 ? modalJob.length - 1 : prevIndex - 1));
  };

  return (
    <S.JobIntroduceBackground isRed={currentModalIndex === 0 || currentModalIndex === 1}>
      <S.Job>
        {modalJob.map((job, index) => (
          <S.ModalContent key={index} active={index === currentModalIndex}>
            <S.JobImg src={process.env.PUBLIC_URL + modalImg[currentModalIndex]} alt="mafia" />
            <S.JobIntroduceDiv>
              <S.JobName>{modalJob[currentModalIndex]}</S.JobName>
              <S.JobDescription>{modalDescription[currentModalIndex]}</S.JobDescription>
            </S.JobIntroduceDiv>
          </S.ModalContent>
        ))}
      </S.Job>
      <S.ButtonArea>
        <S.ScrollButtonLeft onClick={goToPreviousModal}></S.ScrollButtonLeft>
        <S.ScrollButtonRight onClick={goToNextModal}></S.ScrollButtonRight>
      </S.ButtonArea>
    </S.JobIntroduceBackground>
  );
}

export default JobIntroduce;
