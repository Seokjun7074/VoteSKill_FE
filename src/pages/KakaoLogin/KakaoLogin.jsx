import userAPI from 'apis/userAPI';
import Layout from 'components/layout/Layout';
import Loading from 'components/loading/Loading';
import { useEffect } from 'react';
import { setCookie } from 'utils/cookie';

function KakaoLogin() {
  const navigateUser = (data) => {
    setCookie('accessToken ', data.ownJwtAccessToken);
    if (data.user) {
      setCookie('refreshToken ', data.ownJwtRefreshToken);
      sessionStorage.setItem('nickname', data.nickName);
      window.location.replace('/lobby');
    } else {
      window.location.replace('/signin');
    }
  };

  useEffect(() => {
    const getToken = async () => {
      const code = new URL(window.location.href).searchParams.get('code');
      const { data } = await userAPI.kakaoLogin(code);
      if (data) navigateUser(data);
    };

    getToken();
  }, []);

  return (
    <Layout isMain={true}>
      <Loading />
    </Layout>
  );
}

export default KakaoLogin;
