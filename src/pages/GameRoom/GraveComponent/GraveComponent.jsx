import * as S from 'pages/GameRoom/GraveComponent/GraveComponent.Style';

function GraveComponent({ useNickname, deadPlayers }) {
  return (
    <>
      {deadPlayers.includes(useNickname) && (
        <S.GraveImage src={process.env.PUBLIC_URL + '/image/game/grave_image.svg'} />
      )}
    </>
  );
}

export default GraveComponent;
