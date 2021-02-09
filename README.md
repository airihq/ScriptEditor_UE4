# ScriptEditor_UE4

## 데이터 설명(./Content/Data)
### ㅇㅇㅇ
- MotionDB.db : 애니메이션 정보

- SoundDB.db : 효과음 DB

- WidgetInfoData.json : 사용할 Widget 관련 정보

- CmdInfoData.json : 커맨드 관련 정보

- wav 폴더 : wav 데이터 

- marks 폴더 : marks 데이터

- config.json : 시나리오 DB 경로, SocketIO 서버 주소 설정

# Content/Data/Scenario 폴더
사용할 시나리오 DB 파일 넣는다 
FavoriteScriptList.db → 샘플들 모아둔 시나리오 DB


## 실행방법
- ./Content/Data/config.json 에서 db 경로와 socketio 주소를 설정한다.
- 명령 프롬프트 창에서 ./socketio-server-wrap 경로 이동후 ``node app.js`` 명령어로 SocketIO 서버를 실행한다.
- ScriptEditor.uproject 실행 
  
## 사용법

- Open : 지정된 db 파일 불러오기

- 



- 카테고리 선택 : 스크립트 로드 후, 왼쪽 테이블에 해당 db의 카테고리 목록이 뜬다. 이 목록의 체크 박스를 클릭하여 선택/해제를 할 수 있다. 또한, Drag & Drop으로 카테고리의 순서를 변경 할수 있다.

- 액션 스크립트 선택 : 카테고리를 클릭하면 해당 액션 스크립트 목록이 뜬다. 액션 스크립트 목록 또한 체크 박스를 클릭하여 선택/해제 할 수 있으며 Drag & Drop으로 순서 변경이 가능하다.

- 제목 입력: 상단 중앙부의 텍스트박스에 제목을 입력할 수 있다.

- 기타 : 일반모드/영상모드, 세로모드/가로모드, 테마1~3 선택이 가능하다. 

- Export : 위에서 선택한 정보를 바탕으로 json 형태로 파일을 생성한다. 구조는 아래와 같다.

