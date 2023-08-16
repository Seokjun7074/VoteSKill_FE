import styled from 'styled-components';

export const Background = styled.div`
  width: 100vw;
  min-width: 1080px;
  height: 100vh;
  min-height: 600px;
  background: url(${process.env.PUBLIC_URL}/image/city_background.svg),
    linear-gradient(
      to top,
      ${(props) =>
        props.$layout.Day
          ? props.theme.day.start
          : props.$layout.Mafia
          ? props.theme.night.start
          : props.theme.color.blue},
      ${(props) => (props.$layout.Day ? props.theme.day.end : props.theme.night.end)} 80%
    );
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center bottom;
`;

//      ${(props) => (props.$layout.Day ? props.theme.day.start : props.theme.night.start)},
//       ${(props) => (!props.$layout.Day && props.$layout.Mafia ? props.theme.night.end : props.theme.day.end)} 80%,

export const BackgroundImage = styled.img`
  width: 100vw;
  bottom: 0;
`;

export const MainLogoWrapper = styled.div`
  min-width: 1080px;
  position: absolute;
  top: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const MainLogo = styled.img`
  width: 400px;
  filter: drop-shadow(1px 2px 10px #000);
`;
