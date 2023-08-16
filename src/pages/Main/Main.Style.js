import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  min-width: 1080px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 75%;
`;
export const KakaoLoginButton = styled.button`
  background-image: url(${process.env.PUBLIC_URL + '/image/login/kakao_login.svg'});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 200px;
  height: 50px;
`;
