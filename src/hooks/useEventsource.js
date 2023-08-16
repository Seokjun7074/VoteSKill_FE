import { useEffect, useState } from 'react';

const useEventSource = (sessionId, nickname) => {
  const URL = process.env.REACT_APP_GAME_SERVER_URL + `/sse/enter/${sessionId}/${nickname}`;

  const [roleData, setRoleData] = useState(null);
  const [roomData, setroomData] = useState(null);
  const [voteData, setVoteData] = useState(null);

  useEffect(() => {
    const source = new EventSource(URL);

    const roleHandler = (e) => {
      console.log(e.data);
      const parsedData = JSON.parse(e.data);
      setRoleData(parsedData);
    };
    const roomHandler = (e) => {
      console.log(e.data);
      const parsedData = JSON.parse(e.data);
      setroomData(parsedData);
    };
    const voteHandler = (e) => {
      console.log(e.data, '투표시간입니다');
      const parsedData = JSON.parse(e.data);
      setVoteData(parsedData);
    };

    source.addEventListener('role', roleHandler);
    source.addEventListener('room', roomHandler);
    source.addEventListener('vote', voteHandler);

    source.onopen = () => {
      console.log('연결 성공');
    };

    source.onerror = () => {
      console.log('연결 중 에러 발생');
      source.close();
    };
    return () => {
      console.log('CLOSE SSE');
      source.close();
    };
  }, [sessionId, nickname]);

  return { roleData, voteData, roomData };
};
export default useEventSource;
