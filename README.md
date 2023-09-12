# Hodoo-Design-System

## 📦 Install
```
npm install hodoo-design
yarn add hodoo-design
```

<br>

## 🔨 Usage
```tsx

import React from 'react';
import { Button, DatePicker } from 'hodoo-design';

const [value,setValue] = useState(0)

const App = () => (
  <>
    <Button size='md' onClick={()=>setValue(value+1)} label='+' color='red'/>
    <div>{value}</div>
  </>
);
```

**Can Use Typescript**

##  dependency
```tsx
//global.css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

```tsx
//Tailwind.config.js
content: ["./node_modules/hodoo-design/**/*.{js,jsx,ts,tsx}"]
```


```

$ npm install tailwindcss
$ npm install class-variance-authority
$ npm install @heroicons/react
$ npm install tailwind-merge
$ npm install react-tailwindcss-datepicker
```
