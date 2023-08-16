import styled from 'styled-components';
// 구글 폰트 스타일 시트 URL 생성
const fontUrl =
  'https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Dokdo&family=Gasoek+One&family=REM&family=Roboto:wght@300&display=swap';
// 새로운 <link> 태그 생성
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = fontUrl;

export const RoomSquare = styled.div`
  height: 450px;
  display: grid;
  /* place-items: center; */
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  column-gap: 130px;
  row-gap: 20px;
  padding: 40px;
  border: 10px solid #7e1717;
  border-radius: 5px;
  margin: 50px 80px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const RoomContainer = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Bagel Fat One', cursive;
  background-image: linear-gradient(to top, red, yellow);
  border: 7px solid black;
  border-radius: 30px;
  text-align: center;
  font-family: 'Dokdo';
  font-size: 25px;
`;

export const People = styled.div``;

export const Logo = styled.img`
  height: 15px;
`;

export const InputRoomName = styled.input`
  width: 30rem;
  height: 7vh;
  /* margin: 0 auto; */
  font-size: 1.2em;
  text-align: center;
  background: greenyellow;
  border: none;
  border-radius: 5px;
  opacity: 0.3; /* 80% 불투명도 */
`;
// export const Button = styled.button`
//   width: 15rem;
//   height: 5vh;
//   color: tomato;
//   font-size: 1.1em;
//   justify-content: center;
//   align-items: center;
//   border: 3px solid #bf4f74;
//   border-radius: 5px;
//   &.grow {
//     background-color: ${({ theme }) => theme.color.red};
//   }
// `;

export const LevelCheckDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 40%;
  margin-right: 40%;
`;
//
//
//
//
//

export const SearchBarWrapper = styled.form`
  display: flex;
  justify-content: center;
  input {
    transition: all 0.3s ease-out;
  }
  input:focus,
  input:valid {
    width: 20%;
    background: grey;
    box-shadow: 0 0 0 0.1em yellow inset;
    outline: transparent;
  }
`;

export const SearchInput = styled.input`
  width: 3em;
  height: 3em;
  border-radius: 1.5em;
  box-shadow: 0 0 0 20em #f2ee9d inset;
  transform: scale(1);
  text-align: center;
  font-family: 'Dokdo', sans-serif;
  font-size: 20px;
`;

// 체크박스 커스텀
export const CheckBoxWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const CheckBoxInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;

  &:checked + label {
    background-color: purple;
    color: white;
  }
`;

export const CheckboxLabel = styled.label`
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5rem;
  background-color: white;
  font-size: 2rem;
  color: #383838;
  font-family: 'Dokdo', sans-serif;
`;
