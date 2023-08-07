# Vitess 공식 문서 한글화 프로젝트 (vitess-docs-kr)

## 프로젝트 목적

이 프로젝트는 Vitess 공식 문서를 한글로 번역하여 한국 엔지니어들이 Vitess를 쉽게 사용하고 기여할 수 있도록 하는 것에 목적이 있습니다. Vitess 문서는 원래 영문과 중문으로만 제공되어 있어 한국 엔지니어들이 내용을 이해하는 데 어려움이 있었습니다. 이 프로젝트를 통해 그 어려움을 해소하고자 합니다.

## 주요 기능

이 프로젝트는 Nextra라는 정적 문서 생성기를 이용하여 문서를 빌드합니다. i18n 처리를 통해 영문 문서와 한글 문서를 비교하면서 볼 수 있습니다.

## 사용 방법

이 프로젝트는 pnpm을 이용하여 빌드하고 배포합니다. Next.js 프로젝트이므로 Next.js에 대한 기본 지식이 필요합니다. 문서는 Markdown 문법 (mdx 사용)으로 작성합니다.

1. 먼저 프로젝트를 클론합니다.
```
git clone https://github.com/dokdo2013/vitess-docs-kr.git
```
2. 클론한 디렉토리로 이동합니다.
```
cd vitess-docs-kr
```
3. pnpm을 이용하여 필요한 패키지를 설치합니다.
```
pnpm install
```
4. 프로젝트를 로컬에서 실행합니다.
```
pnpm dev
```
이제 브라우저에서 `http://localhost:3000`을 열어서 프로젝트를 확인할 수 있습니다.

## 기여 방법

기여를 원하시는 분들은 먼저 이 프로젝트를 Fork한 후, 변경 사항을 반영한 Pull Request를 올려주시면 됩니다. 프로젝트의 레포지토리 주소는 다음과 같습니다: [vitess-docs-kr](https://github.com/dokdo2013/vitess-docs-kr)

1. 먼저 이 프로젝트를 Fork합니다.
2. Fork한 프로젝트를 클론합니다.
```
git clone https://github.com/<your-github-username>/vitess-docs-kr.git
```
3. 클론한 디렉토리로 이동합니다.
```
cd vitess-docs-kr
```
4. 새로운 브랜치를 생성합니다.
```
git checkout -b <branch-name>
```
5. 변경 사항을 반영하고 커밋합니다.
```
git add .
git commit -m "<commit-message>"
```
6. 변경 사항을 원격 레포지토리에 푸시합니다.
```
git push origin <branch-name>
```
7. GitHub에서 Pull Request를 생성합니다.

## Code of Conduct

이 프로젝트는 모든 참여자가 서로를 존중하고, 생산적인 대화를 유지하며, 다양성과 포용성을 증진하는 환경을 조성하려고 노력합니다. 상세한 내용은 [Code of Conduct](CODE_OF_CONDUCT.md)를 참조해주세요.

## 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조해주세요.
