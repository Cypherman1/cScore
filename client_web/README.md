# UI Dev Proejct Template (with Vue CLI 3)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 폴더구조
* local_modules : 직접 설치용 패키지 (uidev-component)
* uidev_application : UI Dev IDE Design Editor 공통 Application 폴더
* uidev_tools : UI Dev 제공 개발도구 메타데이터 관리 폴더
  * ide : UI Dev IDE 메타데이터 폴더
  * mocks : Mock-up API 메타데이터 폴더
* public : Html Template (index.html, favicon.ico)
* src
  * assets : 이미지, 폰트 등 Static Web Resource
  * components : 프로젝트 공통 컴포넌트
  * styles : 프로젝트 스타일 파일 (CSS, SCSS)
    * theme : UI Dev IDE Theme Editor로 변경되는 프로젝트 테마
  * system : 프로젝트 시스템 공통모듈 라이브러리/설정 (Vuex, router 등)
  * layouts : 프로젝트 화면 컴포넌트


## For UI Dev IDE Design Editor
아래 명령어로 Design Editor용 Application 번들링을 수행하며,
번들링 결과물은 uidev_application 폴더에 저장됨
```
npm run ide
```
번들링 결과물은 소스코드 형상에 함께 배포됨
* index.html : Design Editor 용 엔트리 파일
* theme.html : Theme Editor 용 엔트리 파일


## UI Dev Theme 파일 (/src/styles/theme)
* theme.scss : SASS 테마 변수 설정파일. UI Dev Component의 Foundation Token을 활용하여 변수값을 할당한다.
* Theme.vue : 테마 변경에 따른 미리보기 화면 컴포넌트
* theme.js : 테마 미리보기 화면을 보기 위한 Entry Point (Webpack 빌드 후 /theme.html로 접근할 수 있다)


## Mockup API (/uidev_tools/mocks)
* Webpack 개발서버 활용 시 내부 HTTP Proxy를 활용하여 가상의 API 데이터를 받을 수 있음 (BASE_URL/api/{api-name} 형태로 호출)
* /uidev_tools/mocks/api 폴더 하위에 .json 파일을 아래 Key : Value 규칙에 따라 작성
  * Key: 호출할 API 경로. '/'로 시작해야 함
  * Value: 응답 받고자 하는 데이터 (JSON Format)
* HTTP 응답은 200, 304로 회신되며 정의되어 있지 않는 API를 호출하면 404 회신
