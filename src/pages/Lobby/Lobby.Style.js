import styled from 'styled-components';
// 구글 폰트 스타일 시트 URL 생성
const fontUrl = 'https://fonts.googleapis.com/css2?family=Dokdo&family=Gasoek+One&display=swap';

// 새로운 <link> 태그 생성
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = fontUrl;
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Center = styled.div`
  /* position: relative; */
  width: 100%;
  height: 100%;
  /* margin: 100px; */
  text-align: center;
`;
