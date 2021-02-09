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
- FavoriteScriptList.db : 샘플들 모아둔 시나리오 DB\

## 메뉴 소개

### Open
- config.json에 설정한 시나리오 DB 목록 불러와 에디터 우측 Script Tree View에 보여준다
- DB 수정시 DB상 해당 스크립트의 Date(최종 수정 시점) 변경해야한다. 변경 후 Json Script의 Date와 비교하여 일치하지 않을 경우 빨간 버튼으로 표시
- Json 파일이 존재하지 않는 경우 Dummy Json 생성

### Save
- 선택된 스크립트의 현재 상태 저장
- ./Content/Data/Save 폴더 아래 시나리오 DB 파일과 같은 이름의 폴더에 저장

### Export
- 실제 사용할 액션 스크립트로 불필요한 항목 제거된 스크립트 파일
- ./Content/Data/Export 폴더 아래 시나리오 DB 파일과 같은 이름의 폴더에 저장 됨
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
- Samples 창에서 미리 만들어진 스크립트로부터 모두 복사하기

### Copy/Reset(길이 지정 복사)
- Samples 창에서 미리 만들어진 스크립트의 일부 부분을 선택하여 Main 창에서 선택된 길이로 복사
- Main 창에서 선택된 길이에 맞춰서 대사길이가 자동으로 줄어들거나 늘어난다

### Reset
- 길이 지정 박스(파란박스) Reset

### Play
- 아린바디로 해당 스크립트 전송

### On AnimPreview
- 애니메이션 Tree view에서 해당 애니메이션 Preview 활성화(로딩이 오래걸림)\

## 스크립트 작성 방법
- 다음은 스크립트 작성 및 전송을 위한 설명이다.

### 실행 
- ./Content/Data/config.json 에서 db 경로와 socketio 주소를 설정한다.
- 명령 프롬프트 창에서 ./socketio-server-wrap 경로 이동후 ``node app.js`` 명령어로 SocketIO 서버를 실행한다.
- ``ScriptEditor.uproject`` 실행 

### 불러오기 및 스크립트,Tab 선택
- ``Open`` 클릭하여 시나리오 DB를 연다. 
- Script Tree View에서 스크립트 선택
- ``Gesture/Cmd/UI/Sound`` 중 원하는 탭 선택

### Gesture/Sound Tab
- 사용할 컨트롤러 선택(선택시 회색으로 활성화)
- 애니메이션 Tree View에서 사용할 애니메이션(or 사운드) 목록 선택
- 스케쥴 테이블에서 제스쳐 추가

### Cmd Tab
- 콤보박스에서 사용할 컨트롤러 선택
- 애니메이션 Tree View에서 사용할 커맨드 선택
- 파라미터가 필요한 경우 입력한다 
- 스케쥴 테이블에서 제스쳐 추가(GazeUpper: Stroke,Relax/ 그 외:Stroke 만 입력)
 
### UI Tab
- 첫번째 콤보박스에서 사용할 UI 종류 선택
- 두번째 콤보박스에서 UI 사용할 이름 선택
- 사용할 Type 선택시 스트링 입력이 가능한 경우 텍스트 박스가 활성화된다
- 필요시 스트링 입력 후 스케쥴 테이블에서 제스쳐 추가(Stroke만 입력)

### Gesture Phase 입력/수정/삭제
- Gesture Phase 입력하기 : 컨트롤러 스케쥴 테이블의 첫번째 줄 원하는 박스 위치에서 클릭 후 입력   
(Preperation:'P' key / Stroke1: 'S' key / Stroke2: 'T' key / Relax: 'R' key)
- Gesture Phase 삭제 : 입력된 제스쳐 phase 묶음 양끝에서 Delete key 입력, 묶음 중간에서는 삭제가 되지 않는다
- Gesture Phase 묶음 애니메이션 수정하기 : 애니메이션 이름이 적힌 박스(보라색) 클릭 후 애니메이션 Tree view에서 변경할 애니메이션 선택
- Gesture Phase 묶음 애니메이션 삭제하기 :  애니메이션 이름이 적힌 박스(보라색) 클릭 후 Delete key 입력

### Time Padding
- 해당 스크립트의 대사가 적힌 부분에서 패딩 원하는 Text Box 클릭 후 오른쪽 키( → ) 입력
- 회색으로 새로 생성된 박스에 원하는 시간을 입력한다.
- 삭제 원할시 패딩된 박스 두번 클릭 후 Delete key 누른다(박스를 한번만 클릭하면 text 입력커서가 활성화 된다. 두번 클릭해야 한다) 

### 스크립트 전송 및 저장하기
- 스크립트 작성 후 ``Play``버튼을 누르면 SocketIO로 연결된 서버에 json 형태로 전송되며, 서버에서는 연결된 Unreal 클라이언트로 전송한다.
- ``Save``버튼을 클릭하면 ./Content/Data/Save 폴더 아래 시나리오 DB 파일과 같은 이름의 폴더에 json 형태로 저장된다.
- ``Export``버튼을 클릭하면 ./Content/Data/Export 폴더 아래 시나리오 DB 파일과 같은 이름의 폴더에 json 형태로 저장된다.(불필요한 항목 제거된 스크립트 파일)\


## 복사하기 기능 사용 방법

### 복사하기 기능을 위한 세팅
- ./Content/Data/Scenario 폴더 내 기존 시나리오 파일 복사 및 붙여넣기(이름은 다르게 Ex. ScriptList_copy.db)
- ./Content/Data/Save 폴더 내 기존 시나리오 폴더 복사 및 붙여넣기(Ex. ScriptList_copy)
- ./Content/Data/config.json에서 FavoritePath 항목에 복사한 시나리오 DB path 입력

### 모두 복사하기
- ``Sample`` 버튼 클릭하여 Sample창 확장
- Tree view로부터 타겟 스크립트를 연다.
- CopyAll 버튼을 클릭하여 Main창에 스크립트 복사 

### 길이 지정 복사하기
- Samples 창, Main 창 대사 텍스트 박스에서 우클릭으로 길이 지정(파란박스)
- Sample, Main에서 선택한 텍스트 길이 비율에 맞게 제스쳐들이 복사가 된다
- 칸이 부족한 경우 복사 되지 않음

### 애니메이션 단위 복사하기
- Sample창에서 원하는 애니메이션 선택(빨간박스) 후 ``CTRL+C`` 하여 복사하기
- Main창에서 원하는 위치에서 ``CTRL+V`` 하여 붙여넣기
- 붙여넣기 시 Main 창 각 컨트롤러의 두번째줄에서 수행해야 한다
