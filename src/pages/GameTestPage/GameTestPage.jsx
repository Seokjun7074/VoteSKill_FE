// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';

// // onmessage
// // 기본 메시지가 왔을 때 호출
// // onopen
// // 접속이 맺어졌을 때 호출
// // onerror
// // 오류 발생 시 호출
// function GameTestPage() {
//   // 이벤트 수신을 위해 인스턴스 생성

//   const user_info = useSelector((state) => state.user.user);
//   const [listening, setListening] = useState(false);
//   const [data, setData] = useState([]);
//   let eventSource = undefined;
//   if (user_info) {
//     console.log(user_info.email);
//   }

//   useEffect(() => {
//     if (!listening) {
//       console.log('a');
//       // { withCredentials: true }
//       eventSource = new EventSource(`/sse/enter/mafia/bba`);

//       // eventSource.onmessage = (event) => {
//       //   console.log("result", event.data);
//       //   setData(old => [...old, event.data])
//       // }

//       // EventSource로 SSE를 호출하겠음
//       eventSource.addEventListener('sse', (event) => {
//         const result = JSON.parse(event.data);
//         console.log('received:', result);
//         setData(result);
//       });

//       eventSource.onerror = (event) => {
//         console.log(event.target.readyState);
//         if (event.target.readyState === EventSource.CLOSED) {
//           console.log('SSE closed (' + event.target.readyState + ')');
//         }
//         eventSource.close();
//       };

//       eventSource.onopen = (event) => {
//         console.log('connection opened');
//       };
//       setListening(true);
//     }
//     return () => {
//       eventSource.close();
//       console.log('event closed');
//     };
//   }, []);

//   return (
//     <>
//       <div className="App">
//         <header className="App-header">
//           Received Data
//           {data}
//           {/*{data.map(d =>*/}
//           {/*    <span key={d}>{d}</span>*/}
//           {/*)}*/}
//         </header>
//       </div>
//     </>
//   );
// }

// export default GameTestPage;
