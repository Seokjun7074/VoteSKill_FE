import React, { useState } from 'react';
import * as S from 'pages/Lobby/SearchRoom/SearchRoom.Style';
import RoomList, { roomLists } from 'pages/Lobby/RoomList/RoomList';
import { constSelector } from 'recoil';
import useModal from 'hooks/useModal';
import Modal from 'components/modal/Modal';
import axios from 'axios';
import gameAPI from 'apis/gameAPI';
import { useQuery } from '@tanstack/react-query';

function SearchRoom() {
  // 검색기능
  const { data } = useQuery(['roomList'], () => gameAPI.getRoomList(nameSearch, checkedLevels, gameCheck));
  const handleClick = () => {
    gameAPI
      .getRoomList(nameSearch, checkedLevels, gameCheck)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const checkLists = ['초보', '중수', '고수'];
  const gaming = '게임중';
  const [nameSearch, setNameSearch] = useState('');
  const [checkedLevels, setCheckedLevels] = useState([]);
  const [gameCheck, setGameCheck] = useState('');

  // grade 체크박스
  const checkHandled = (e) => {
    const level = e.target.id;
    if (e.target.checked) {
      setCheckedLevels((prev) => [...prev, level]);
    } else {
      setCheckedLevels((prev) => prev.filter((item) => item !== level));
    }
  };
  // 게임중 체크박스
  const gamecheckHandled = (e) => {
    const checked = e.target;
    if (checked) {
      setGameCheck(gaming);
    } else {
      setGameCheck('');
    }
  };

  return (
    <>
      <div>
        <S.SearchBarWrapper>
          <S.SearchInput
            type="search" // 치고 지우고 싶을 때 x표시
            autoComplete="off" //자동완성
            required
            onChange={(e) => setNameSearch(e.target.value)}
          />
        </S.SearchBarWrapper>
        <button style={{ backgroundColor: 'yellow' }} onClick={handleClick}>
          검색
        </button>

        <div style={{ lineHeight: '30%' }}>
          <br />
        </div>
      </div>
      {data && <RoomList data={data} />}

      {/* 게임중 체크박스 */}
      <S.CheckBoxWrapper>
        <S.CheckBoxInput type="checkbox" id={gaming} onChange={(e, item) => gamecheckHandled(e, item)} />
        <S.CheckboxLabel htmlFor={gaming} onClick={(gaming) => gamecheckHandled(gaming)}>
          {gaming}
        </S.CheckboxLabel>
        &nbsp;{/* 띄어쓰기 */}
      </S.CheckBoxWrapper>

      {/* 레벨 체크박스 */}
      {checkLists.map((item, index) => (
        <S.CheckBoxWrapper key={item}>
          <S.CheckBoxInput type="checkbox" id={item} name="level" onChange={(e, item) => checkHandled(e, item)} />
          <S.CheckboxLabel htmlFor={item} onClick={(item) => checkHandled(item)}>
            {item}
          </S.CheckboxLabel>
          &nbsp;{/* 띄어쓰기 */}
        </S.CheckBoxWrapper>
      ))}
      <div style={{ lineHeight: '100%' }}>
        <br />
      </div>
    </>
  );
}

export default SearchRoom;
