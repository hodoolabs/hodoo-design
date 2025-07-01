# 🎨 Hodoo Design System

hodoolabs의 디자인 시스템입니다.

## 🤚 Introduction

<p align="center">
  <span >
    <img width="200" src="https://github.com/hodoolabs/Design-System/assets/129719850/ec7530f4-fa40-41db-ac9d-d95dd9b1d568">
  </span>
</p>

<h1 align="center">Hodoo Design</h1>

<div align="center">
It is a design system library for Hodoolabs products.
</div>

## Description

- This library is widely used as a design asset for Hodoolabs products and expansion is prohibited.

- Copying, using, or transforming is also prohibited.

- All the rights and knowledge of the Hodoolabs design library belong to the Hodoolabs develop team.

<br >

## 📦 설치

```bash
npm install hodoo-design
# 또는
yarn add hodoo-design
```

## 🚀 로컬 개발 환경

모노레포 없이도 디자인 시스템을 로컬에서 개발하고 테스트할 수 있는 여러 방법을 제공합니다.

### 1. Playground 앱 (추천)

실시간으로 컴포넌트를 테스트할 수 있는 playground 앱을 제공합니다.

```bash
# playground 앱 실행
npm run dev:playground

# 또는 기본 vite dev 서버
npm run dev
```

playground 앱에서는:

- ✅ 모든 컴포넌트 실시간 테스트
- ✅ Hot reload 지원
- ✅ TypeScript 타입 체크
- ✅ 컴포넌트 상태 실시간 확인

### 2. Storybook

컴포넌트별 상세 문서와 테스트를 위해 Storybook을 사용할 수 있습니다.

```bash
# Storybook 실행
npm run dev:storybook

# Storybook 빌드
npm run build:storybook
```

### 3. 외부 프로젝트에서 로컬 링크

외부 프로젝트에서 로컬 버전을 테스트하려면:

```bash
# 1. 디자인 시스템 빌드
npm run build

# 2. npm link 생성
npm link

# 3. 외부 프로젝트에서 링크
cd your-project
npm link hodoo-design
```

## 🛠️ 개발 스크립트

| 스크립트                  | 설명                           |
| ------------------------- | ------------------------------ |
| `npm run dev`             | Vite 개발 서버 실행            |
| `npm run dev:playground`  | Playground 앱 실행 (포트 3000) |
| `npm run dev:storybook`   | Storybook 실행 (포트 6006)     |
| `npm run build`           | 라이브러리 빌드                |
| `npm run build:storybook` | Storybook 빌드                 |
| `npm run test`            | 테스트 실행                    |

## 📖 사용법

### 기본 컴포넌트

```tsx
import { Button, Input, Toast } from "hodoo-design";

function App() {
  return (
    <div>
      <Button color="blue" size="lg" label="클릭하세요" />
      <Input
        label="이름"
        placeholder="이름을 입력하세요"
        value={value}
        onChange={setValue}
      />
    </div>
  );
}
```

### DatePicker (Client 컴포넌트)

```tsx
import { DatePicker } from "hodoo-design/client";

function App() {
  const [date, setDate] = useState(null);

  return <DatePicker label="날짜 선택" value={date} onChange={setDate} />;
}
```

### Tailwind CSS 설정

```js
// tailwind.config.js
import { HodooContent, HodooTheme } from "hodoo-design";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", ...HodooContent],
  theme: {
    extend: {
      ...HodooTheme,
    },
  },
};
```

## 🎯 토스 프론트엔드 펀더멘털 원칙

이 디자인 시스템은 토스 프론트엔드 펀더멘털 원칙을 따라 개발되었습니다:

- ✅ 복잡한 조건에 의미 있는 이름 부여
- ✅ 매직 넘버 상수화
- ✅ 삼항 연산자 중첩 방지
- ✅ 시점 이동 최소화
- ✅ 컴포넌트 책임 분리
- ✅ 적절한 추상화
- ✅ 일관된 API 설계

## 🏗️ 프로젝트 구조

```
hodoo-design/
├── src/
│   ├── lib/           # 컴포넌트들
│   ├── types/         # 타입 정의
│   ├── utils/         # 유틸리티 함수
│   └── index.tsx      # 메인 export
├── playground/        # 개발용 playground 앱
│   ├── src/
│   └── index.html
├── dist/             # 빌드 결과물
└── package.json
```

## 🤝 기여하기

1. 이 저장소를 fork합니다
2. feature 브랜치를 만듭니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 push합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 만듭니다

## 📄 라이센스

ISC License
