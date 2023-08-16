import { useState } from 'react';
import { useLocation } from 'react-router';
import Layout from 'components/layout/Layout';
import * as S from 'pages/SignIn/SignIn.Style';
import { getCookie } from 'utils/cookie';
import userAPI from 'apis/userAPI';

function SignIn() {
  const [placeholder, setPlaceholder] = useState('닉네임을 입력하세요.');
  const [isHovering, setIsHovering] = useState(false);
  const [nickName, setNickName] = useState('');

  const handleFocus = () => {
    setPlaceholder('');
  };

  const handleBlur = () => {
    setPlaceholder('닉네임을 입력하세요.');
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  // 닉네임 저장
  const handleNickNameChange = (event) => {
    setNickName(event.target.value);
  };
  // 닉네임 검증
  const validateNickName = (nickName) => {
    const nickNameLength = nickName.trim().length;
    if (nickNameLength === 0) {
      alert('닉네임을 입력하세요');
      return false;
    } else if (nickNameLength < 3 || nickNameLength > 6) {
      alert('닉네임은 3자 이상 6자 이하압니다.');
      return false;
    }
    return true;
  };

  const handleClick = async () => {
    if (validateNickName(nickName)) {
      const { data, status } = await userAPI.signup(nickName);

      if (status === 200) {
        sessionStorage.setItem('nickname', data);
        window.location.replace('/lobby');
      } else if (status === 400) {
        alert('중복된 닉네임입니다.');
      }
    }
  };

  return (
    <Layout isMain={true}>
      <S.SignInDiv>
        <S.NickName
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleNickNameChange}
        ></S.NickName>
        <S.Button $grow={isHovering} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleClick}>
          Go To KILL
        </S.Button>
      </S.SignInDiv>
      <audio src={process.env.PUBLIC_URL + '/music/signin.mp3'} autoPlay loop></audio>
    </Layout>
  );
}

export default SignIn;
