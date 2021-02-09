# ScriptEditor_UE4

## 파일 설명
### ./Content/Data 
- MotionDB.db : 애니메이션 정보

- SoundDB.db : 효과음 DB

- WidgetInfoData.json : 사용할 Widget 관련 정보

- CmdInfoData.json : 커맨드 관련 정보

- wav 폴더 : wav 데이터 

- marks 폴더 : marks 데이터

- config.json : 시나리오 DB 경로, SocketIO 서버 주소 설정

### ./Content/Data/Scenario 
- 사용할 시나리오 DB 파일 넣는다 
- FavoriteScriptList.db : 샘플들 모아둔 시나리오 DB


## 메뉴 소개

### Open
- config.json에 설정한 시나리오 DB 목록 불러와 에디터 우측 Script Tree View에 보여준다
- DB 수정시 DB상 해당 스크립트의 Date(최종 수정 시점) 변경해야한다. 변경 후 Json Script의 Date와 비교하여 일치하지 않을 경우 빨간 버튼으로 표시
- Json 파일이 존재하지 않는 경우 Dummy Json 생성

### Save
- 선택된 스크립트의 현재 상태 저장
- Content/Data/Save 폴더 아래 시나리오 DB 파일과 같은 이름의 폴더에 저장

### Export
- 실제 사용할 액션 스크립트로 불필요한 항목 제거된 스크립트 파일
- Content/Data/Export 폴더 아래 시나리오 DB 파일과 같은 이름의 폴더에 저장 됨
- UsedAnimation.json(모든 사용된 애니메이션 목록만 모아둔 json 파일) 자동 생성됨  

### Play
- Single Script Play: 현재 오픈된 스크립트만 아린바디로 전송(스크립트 Tree view에서 체크 선택X)
- Multi Script Play: Script Tree view에서 체크된 스크립트 목록을 순차적으로 아린바디로 전송

### Stop
- 아린바디로 스크립트 전송 멈춤

### Clear
- 스케쥴 테이블, 스크립트 Tree view 초기화

### Samples
- 샘플들 모아둔 시나리오 DB 목록 열기

### CopyAll(모두복사)
- Samples 창에서 모든 제스쳐를 복사
- Main 창에서 칸이 부족한 경우 복사가 되지 않음 

### Copy/Reset(길이 지정 복사)
- Samples 창, Main 창 대사 텍스트 박스에서 우클릭으로 길이 지정(파란박스)
- Sample, Main에서 선택한 텍스트 길이 비율에 맞게 제스쳐들이 복사가 된다
- 칸이 부족한 경우 복사 되지 않음

### Reset
- 길이 지정 박스(파란박스) Reset

### Play
- 아린바디로 해당 스크립트 전송

### On AnimPreview
- 애니메이션 Tree view에서 해당 애니메이션 Preview 활성화(로딩이 오래걸림)

## 실행방법
- ./Content/Data/config.json 에서 db 경로와 socketio 주소를 설정한다.
- 명령 프롬프트 창에서 ./socketio-server-wrap 경로 이동후 ``node app.js`` 명령어로 SocketIO 서버를 실행한다.
- ScriptEditor.uproject 실행 

//
CTRL+C and +V (애니메이션 단위 복사)
Sample창에서 원하는 애니메이션 선택(빨간박스) 후 CTRL+C → 복사
Main창에서 원하는 위치에서 CTRL+V → 붙여넣기
붙여넣기 시 Main 창 각 컨트롤러의 두번째줄에서 수행해야 한다
    
//



## 사용법

- Open : 지정된 db 파일 불러오기

- 



- 카테고리 선택 : 스크립트 로드 후, 왼쪽 테이블에 해당 db의 카테고리 목록이 뜬다. 이 목록의 체크 박스를 클릭하여 선택/해제를 할 수 있다. 또한, Drag & Drop으로 카테고리의 순서를 변경 할수 있다.

- 액션 스크립트 선택 : 카테고리를 클릭하면 해당 액션 스크립트 목록이 뜬다. 액션 스크립트 목록 또한 체크 박스를 클릭하여 선택/해제 할 수 있으며 Drag & Drop으로 순서 변경이 가능하다.

- 제목 입력: 상단 중앙부의 텍스트박스에 제목을 입력할 수 있다.

- 기타 : 일반모드/영상모드, 세로모드/가로모드, 테마1~3 선택이 가능하다. 

- Export : 위에서 선택한 정보를 바탕으로 json 형태로 파일을 생성한다. 구조는 아래와 같다.

