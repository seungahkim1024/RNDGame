# RNDGame

리액트 네이티브로 만드는 메타버스 주사위 게임

## 환경 세팅

### Windows, Mac 개발 환경

- 환경 세팅 참고 링크
  - [리액트 네이티브 expo 설치 후 실행](https://simple-code.tistory.com/2)
  - [React Niatve 안드로이드 에뮬레이터에서 실행](https://simple-code.tistory.com/3)

- 안드로이드 스튜디오 설치 이후 에뮬레이터 실행

- 각자 로컬에서 expo 서버 실행
```command
npm i
npm run start
```
- [구동된 expo 로컬 서버](http://localhost:19002)
- 안드로이드 스튜디오에서 에뮬레이터 실행 이후 구동된 서버 화면에서 Run on Android device/emulator 버튼 클릭하면 에뮬레이터에서 시뮬레이션 및 디버깅 가능
- 이 환경에서 개발 시작

### AOS, iOS앱 개발 환경

- AOS, iOS 폰에서 테스트가 필요하면 각자 폰에서 구글 플레이스토어에서 expo 설치
- Scan QR Code 한 다음에 RECENTLY IN DEVELOPMENT에 잡히는 목록을 클릭해서 실행시키면 된다.

## 바벨 설정 추가

- 각각 파일을 import 할때 절대경로로 설정, @가 root가 된다.
  - 운영 alias: components, containers, styles, utils

- 예시)
```js
import styles from "@styles";
import ChatList from '@components/chats/ChatList';
import PlayersContainer from "@containers/Players";
```

## 협업 role

- 컴포넌트는 components, containers 두 가지 상위 폴더를 갖는다.
- components는 UI만 담당하는 컴포넌트들 (UI 개발자들이 담당한다.)
- containers는 비동기 통신 및 비즈니스 코드를 담당하는 컴포넌트들 (초기 작성은 UI 개발자들이 하되, 그 이후엔 FE 개발자들이 담당한다.)
- components에 직접적으로 FE 개발자가 커밋하고 머지하는 행위를 금지한다.

## 프로젝트 진행에 필요한 공식 문서들

- [React Native](https://reactnative.dev)
- [React Native Directory](https://reactnative.directory)
- [Expo](https://expo.dev)

## 작성일

- 2022-01-07(금)