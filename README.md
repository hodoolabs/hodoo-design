# Hodoo Design System

Hodoolabs design system

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

## 📦 Install

```bash
npm install hodoo-design
```

<br>

## 🔨 Usage

```tsx
import { Button } from "hodoo-design";
import "hodoo-design/style";

const App = () => (
  <Button
    color="white"
    size="md"
    label="Button"
    isFull={true}
    onClick={() => alert("button!")}
  />
);
```

<br >

## Dependency

```tsx
//global.css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

```tsx
//Tailwind.config.js
content: ["./node_modules/hodoo-design/**/*.{js,jsx,ts,tsx}"];
```

```
$ npm install tailwindcss
$ npm install class-variance-authority
$ npm install @heroicons/react
$ npm install tailwind-merge
$ npm install react-tailwindcss-datepicker
$ npm install dayjs
```

## Next.js에서 사용하기

Next.js 프로젝트에서 사용할 경우 `next.config.js` 파일에 다음 설정을 추가하세요:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["hodoo-design"],
  // 기타 설정...
};

module.exports = nextConfig;
```

## 라이센스

ISC
