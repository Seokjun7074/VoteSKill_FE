import userAPI from 'apis/userAPI';
import { BiEdit, BiCheckCircle } from 'react-icons/bi';
import * as S from 'components/userinfo/UserInfo.Style';
import useInput from 'hooks/useInput';
import React, { useState, useEffect, useRef } from 'react';
import { removeCookie } from 'utils/cookie';

function UserInfo({ nickname }) {
  const [isMyPage, setIsMyPage] = useState(false);

  useEffect(() => {
    if (nickname === sessionStorage.getItem('nickname')) {
      setIsMyPage(true);
    }
  }, []);

  const logout = async () => {
    const { data } = userAPI.logout();
    if (data.status === 200) {
      sessionStorage.removeItem('nickname');
      removeCookie('refreshToken');
      removeCookie('accessToken');
      location.reload('/');
    }
  };

  return (
    <S.UserInfoBackground>
      <S.Profile src={process.env.PUBLIC_URL + '/image/userinfo/Profile.svg'} alt="Profile" />
      <S.InputArea>
        <NickName nickname={nickname} />
        <WinRate nickname={nickname}></WinRate>
      </S.InputArea>
    </S.UserInfoBackground>
  );
}

// Parent
function NickName({ nickname }) {
  const [inputNickname, setInputNickname, handleInputNickname] = useInput(nickname);
  const [update, setUpdate] = useState(false);
  const inputRef = useRef();

  const toggleUpdate = () => {
    setUpdate(!update);
  };

  const editNickname = async () => {
    const { data } = userAPI.editUserInfo(inputNickname);
    if (data && data.status === 200) {
      toggleUpdate();
    } else {
      alert('중복된 닉네임입니다.');
      return;
    }
  };

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, [update]);

  return (
    <S.Wrapper>
      <S.Label>닉네임 : </S.Label>
      {update ? (
        <S.NicknameInput ref={inputRef} onChange={handleInputNickname} value={inputNickname}></S.NicknameInput>
      ) : (
        <S.NicknameSpan>{inputNickname}</S.NicknameSpan>
      )}
      {update ? (
        <BiCheckCircle size={'32px'} onClick={editNickname} />
      ) : (
        <BiEdit size={'32px'} onClick={toggleUpdate} />
      )}
    </S.Wrapper>
  );
}

function WinRate({ nickname }) {
  const [rank, setRank] = useState('unrated');
  const [rate, setRate] = useState({ win: 0, lose: 0, rate: 0.0 });

  const winRateRank = (winRate) => {
    if (0 <= winRate && winRate < 40) {
      setRank('초보');
    } else if (40 <= winRate && winRate < 50) {
      setRank('중수');
    } else if (winRate >= 50) {
      setRank('고수');
    } else {
      setRank('unrated');
    }
  };
  useEffect(() => {
    setRate({ win: 70, lose: 30, rate: Math.round((70 / (70 + 30)) * 100) });
  }, []);

  // useEffect(() => {
  //   const fetchUserInfoData = async () => {
  //     const { data } = await userAPI.getUserInfo(nickname);
  //     setRate({ ...rate, win: data.win, lose: data.lose });
  //   };
  //   fetchUserInfoData();
  // }, []);

  useEffect(() => {
    winRateRank(rate.rate);
  }, [rate]);

  return (
    <S.Wrapper>
      <S.Label>승률 : </S.Label>
      <S.WinRateSpan>
        {rate.win + rate.lose}전 {rate.win}승 {rate.lose}패
      </S.WinRateSpan>

      {rank === '초보' && <S.BeginnerIcon>{rank}</S.BeginnerIcon>}
      {rank === '중수' && <S.ImmediateIcon>{rank}</S.ImmediateIcon>}
      {rank === '고수' && <S.ExpertIcon>{rank}</S.ExpertIcon>}
    </S.Wrapper>
  );
}

export default UserInfo;
