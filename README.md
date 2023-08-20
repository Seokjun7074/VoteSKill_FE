<div align="center">
<img src="https://github.com/VoteSKill/VoteSKill_FE/assets/70370578/bc58a0e2-ab86-4670-abd5-2ff11bb8a90a">
</div>

<div align="center">
 <h3> 화상으로 하는 마피아 게임 웹 사이트</h3>
</div>

<br/>

---

<br/>

# :raising_hand: 팀원

### Front-end

**멤버 : `이석준` `임병국` `이정인`**

<br/><br/>

### Back-end

**멤버 : `이채영` `최종명` `박종호`**

<br/>

---

<br/>

## 게임 규칙

- 인원 수에 따른 직업 분배

  - <strong>6인</strong>이 갖춰져야 게임 시작 가능
  - 마피아1, 의사1, 경찰1, 특수직업 (군인, 성직자, 정치인, 기자) 랜덤 배정

- 직업 소개

  - 마피아 : 밤에 한 명을 죽일 수 있습니다.
  - 의사 : 마피아에게 살해 당할 것 같은 한명을 골라, 일치 할 시 대상을 살릴수있다.
  - 경찰 : 밤이 될 경우 한 명을 조사하여 마피아 여부를 알수있다.
  - 군인 : 마피아의 타겟이 된경우 한차례 버틸수있다. 단, 이후 직업이 모두 공개된다.
  - 성직자 : 밤에 죽은 플레이어 한명을 부활 시킨다. (1회)
  - 정치인 : 투표권이 2개. 투표로 처형되지않는다.
  - 기자 : 모든사람한테 찍은사람 직업을 아침에 공지로 알려줌 (1회)

- 승리조건

  - 마피아의 경우 : 시민을 제거하면 게임 승리
  - 시민의 경우 : 마피아를 제거하면 게임 승리

- 게임 규칙
  - 낮 투표 : 마피아로 의심가는 사람에게 투표, 최다투표자는 사망 (\*정치인은 투표 2개의 효력을 지님)
  - 밤 스킬사용
    - 마피아 : 죽일 사람을 선택할 수 있다.
    - 경찰 : 선택한 사람의 마피아 여부를 파악할 수 있다.
    - 의사 : 살릴 사람을 선택할 수 있다.
    - 성직자 : 이미 죽은 플레이어 중 살릴 사람을 선택할 수 있다.
    - 기자 : 아침에 직업을 공개할 사람을 선택할 수 있다.
  - 투표 규칙
    - 한 번 정한 투표는 바꿀 수 없다.
    - 투표하지 않으면 0표로 결정된다.
    - 투표에서 동률이 나올 시 해당 낮은 넘어가게 된다.

### 게임 FLOW

1. `시작` : 각 플레이어는 직업을 배정 받는다.
2. `낮 토론` : 토론을 통해 마피아를 찾는다.
3. `낮 투표` : 투표를 통해 마피아로 의심가는 사람을 제거한다.
4. `낮 투표 결과확인` : 낮 투표 결과를 확인한다.
5. `밤 스킬사용` : 배정받은 직업의 스킬을 사용한다.
6. `밤 스킬사용 결과확인` : 밤 스킬사용 결과를 확인한다.
7. `종료` : 마피아 또는 시민의 승리가 확정되면 창을 띄우며 대기방으로 돌아가게 된다.

\*\* `사망 시` : 사망할 시 오디오와 비디오가 강제로 꺼지게 된다.

\*\* `부활 시` : 부활할 시 오디오와 비디오가 켜지며 투표 및 스킬을 사용할 수 있게 된다.

<br/>

---

<br/>

## 게임 진행

### 게입 접속 화면

---

<div>
<img src="https://github.com/VoteSKill/VoteSKill_FE/assets/70370578/d69027a6-1298-4dd4-a097-0cae859dfcd6" width="60%" height="60%">
</div><br>

- SNS 로그인을 통해 게임에 접속 할 수 있습니다.

### 로비로 진입

---

<div>
<img src="https://github.com/VoteSKill/VoteSKill_FE/assets/70370578/b26c2c0c-556f-4883-8f44-e673bbe1561d" width="60%" height="60%">
</div><br>

- 로비에서는 방목록들이 표시되며,
- 하단의 방 만들기를 통해 직접 방을 만들 수 있습니다.

### 방을 클릭하여 대기방에 입장

---

<div>
<img src="https://github.com/VoteSKill/VoteSKill_FE/assets/70370578/e5435c9f-45e0-4a04-a1b3-4c50d301718d" width="60%" height="60%">
</div><br>

- start버튼을 눌러 방장은 게임을 시작합니다.

### 게임방 입장하면 직업 배정

---

<div>
<img src="https://github.com/VoteSKill/VoteSKill_FE/assets/70370578/c51a1f6d-a3f5-4eb1-9e98-435a2aac8e45" width="60%" height="60%">
<img src="https://github.com/VoteSKill/VoteSKill_FE/assets/70370578/720461c1-b948-4eee-9d19-f3929cb9518e" width="60%" height="60%">
</div><br>

- 마피아를 배정받았을때 화면과 다른 직업을 배정받았을때 화면을 모아보았습니다.

### 2분간의 회의 후 투표

---

<div>
<img src="https://github.com/VoteSKill/VoteSKill_FE/assets/70370578/ab7c8412-cc45-4278-9cd9-9cdf283d17ef" width="60%" height="60%">
</div><br>

- 2분이 지난후, 마피아로 의심되는 사람을 투표합니다.
- 투표시 확정 알림창이 뜨며, 확정된 사람은 투표 이미지가 표시됩니다.

### 가장 많이 투표 받은 사람을 처형

---

<div>
<img src="https://github.com/VoteSKill/VoteSKill_FE/assets/70370578/1ffeaac8-6a57-49e3-aaf3-d311dbf3c3da" width="60%" height="60%">
</div><br>

- 투표가 종료된 후, 과반수 이상 투표를 얻은 사람은 처형됩니다.
- 처형된 사람은 화면이 꺼지는 것으로, 사망 판단을 했습니다.

### 투표 종료 후 직업 능력 사용

---

<div>
<img src="https://github.com/VoteSKill/VoteSKill_FE/assets/70370578/b3bd936e-0307-4f78-bb84-952572543e61" width="60%" height="60%">
</div><br>

- 이후, 직업 능력 사용 화면으로 진입하며, 각자 고유능력이 있는 캐릭터는 능력을 사용할 수 있습니다.

### 직업 능력 사용 후 결과 표시

---

<div>
<img src="https://github.com/VoteSKill/VoteSKill_FE/assets/70370578/1c5b0eea-adfe-4c69-8df5-ba4df92eb9d3" width="60%" height="60%">
</div><br>

- 직업 능력 사용 후에는, 능력 사용결과가 모두 표시됩니다.
- 마피아의 능력으로 사망한 사람도 화면이 꺼지면서 사망처리됩니다.

### 최종 결과 화면

---

<div>
<img src="https://github.com/VoteSKill/VoteSKill_FE/assets/70370578/64d62457-4002-40fa-90ff-92091ae713dd" width="60%" height="60%">
<img src="https://github.com/VoteSKill/VoteSKill_FE/assets/70370578/eb891aa3-3d69-4fa9-b08c-cc518cc7d0e3" width="60%" height="60%">
</div>
<br>

- 이 화면은 최종적으로 마피아가 남은 사람을 죽이면서, 마피아가 승리하게 되는 장면입니다.
- 최종 결과 화면은 마피아가 모두 사람을 죽이게 되면 마피아 승리,
- 마피아를 시민이 먼저 잡으면 시민이 승리하게됩니다.
- 승리하면 방을 나가게 됩니다.

<br/>

---

<br/>

<img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4cf.svg" width="50" height="50">

### 기획 / 설계

---

- Notion : [전체 흐름 구조](https://www.notion.so/82fce2db1fd84703b4e87198a9f397d4?pvs=21)

### API 명세서

---

<div align="center">
<img src="https://github.com/VoteSKill/VoteSKill_FE/assets/70370578/5fd01814-a8c7-4f2b-9f59-51fdb905ddb4" width="100%" height="100%">
</div>

### 화면 명세서

---

- Figma : [VoteSkill-Figma](https://www.figma.com/file/uDzycFSbAMIc8EmeKnxj7F/%EC%97%AC%EB%AA%85808?type=design&node-id=0-1&mode=design&t=XJfG8M2r9N0MR3lP-0)

### Commit Convention

---

- type

  - :sparkles: feat: 새로운 기능 추가
  - :bug: fix: 버그 수정
  - :memo: docs: 문서 관련
  - :white_check_mark: test: 테스트 추가, 수정
  - :lipstick: style: 디자인 추가, 수정
  - :recycle: refactor: 코드 리팩토링
  - :wrench: chore: 설정 파일 수정

- summary

  - 제목 50글자 이하, 명사형으로 끝마침.
  - 마침표, 특수기호 X
  - 영문 : 첫글자 대문자 사용.
    ```
        * Fixed --> Fix
        * Added --> Add
        * Modified --> Modify
    ```

### SSE 명세서

---

<div align="center">
<img src="https://github.com/VoteSKill/VoteSKill_FE/assets/70370578/921de669-6e01-4b74-a615-f161f93e8f9a" width="70%" height="70%">
</div>

### Tools

---

- FrontEnd<br>
  - eslint : 8.45.0
  - axios: 1.4.0
  - openvidu-browser: 2.28.0
  - react: 18.2.0
  - recoil: 0.7.7
  - styled-components: 6.0.4
  - node 18.16.1

<br>

- BackEnd
  - IntelliJ :
  - Java : 17
  - SpringBoot : 3.1.1
  - DB : redis 7.2

<br/>

---

<br/>

### 아키텍처

---

![아키텍처 이미지](https://github.com/VoteSKill/VoteSKill_FE/assets/70370578/56af8060-ed7e-44e7-bae8-204cd62d2cfe)

<br/>

---

<br/>
