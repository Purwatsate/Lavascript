# React + TypeScript + Vite

React၊ TypeScript၊ Vite နဲ့ Tailwind CSS သုံးပြီး frontend application တစ်ခု စတင်ရေးသားဖို့ အခြေခံ project setup ဖြစ်ပါတယ်။

## အသုံးပြုထားသော နည်းပညာများ

- **React 19** — UI library
- **TypeScript** — type safety
- **Vite** — dev server နဲ့ build tool
- **Tailwind CSS** — utility-first CSS framework
- **React Compiler** — React component optimization
- **ESLint** — code quality စစ်ဆေးခြင်း

## လိုအပ်ချက်များ

- [Node.js](https://nodejs.org/) (LTS version အကြံပြုပါတယ်)
- npm (Node.js နဲ့အတူ ပါလာပါတယ်)

## စတင်အသုံးပြုနည်း

### 1. Dependencies တပ်ဆင်ခြင်း

```bash
npm install
```

### 2. Development server ဖွင့်ခြင်း

```bash
npm run dev
```

Browser မှာ Vite ပေးထားတဲ့ local URL (ဥပမာ `http://localhost:5173`) ကို ဖွင့်ပါ။

### 3. Production build လုပ်ခြင်း

```bash
npm run build
```

Build output က `dist/` folder ထဲမှာ ရှိပါမယ်။

### 4. Production build ကို preview လုပ်ခြင်း

```bash
npm run preview
```

### 5. Lint စစ်ဆေးခြင်း

```bash
npm run lint
```

## Project ဖွဲ့စည်းပုံ

```
react/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images, icons စသည်
│   ├── components/  # React components (ဥပမာ Header)
│   ├── App.tsx      # Main app component
│   ├── main.tsx     # Application entry point
│   └── index.css    # Tailwind CSS directives
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── package.json
```

## Tailwind CSS

Tailwind CSS ကို project ထဲ configure လုပ်ထားပါတယ်။ Component တွေမှာ utility class တွေ တိုက်ရိုက်သုံးနိုင်ပါတယ်။

```tsx
<h1 className="text-3xl font-bold underline">Hello</h1>
```

`src/index.css` ထဲမှာ Tailwind directives တွေ ပါဝင်ပါတယ်။

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Editor ထဲမှာ `@tailwind` warning ပေါ်နေရင် workspace root ရဲ့ `.vscode/settings.json` က warning ကို ignore လုပ်ပေးထားပါတယ်။ Tailwind CSS IntelliSense extension ကိုလည်း install လုပ်နိုင်ပါတယ်။

## React Compiler

ဒီ template မှာ React Compiler ကို enable လုပ်ထားပါတယ်။ Component re-render optimization အတွက် အသုံးပြုပါတယ်။ ပိုမိုသိရှိလိုပါက [React Compiler documentation](https://react.dev/learn/react-compiler) ကို ကြည့်ပါ။

**မှတ်ချက်:** React Compiler က dev server နဲ့ build performance ကို အနည်းငယ် သက်ရောက်နိုင်ပါတယ်။

## ESLint

Production application တစ်ခု ရေးသားမယ်ဆိုရင် type-aware lint rules တွေကို enable လုပ်ဖို့ ESLint config ကို update လုပ်ဖို့ အကြံပြုပါတယ်။

`eslint.config.js` ထဲမှာ `tseslint.configs.recommended` အစား အောက်ပါ config တွေထဲက တစ်ခုကို သုံးနိုင်ပါတယ်။

- `tseslint.configs.recommendedTypeChecked`
- `tseslint.configs.strictTypeChecked` (ပိုတင်းကျပ်သော rules)
- `tseslint.configs.stylisticTypeChecked` (style rules)

React-specific lint rules လိုချင်ရင် [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) နဲ့ [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) ကို install လုပ်နိုင်ပါတယ်။

## Scripts အကျဉ်းချုပ်

| Script | လုပ်ဆောင်ချက် |
|--------|-------------|
| `npm run dev` | Development server ဖွင့်ခြင်း |
| `npm run build` | Production build လုပ်ခြင်း |
| `npm run preview` | Build ကို local preview လုပ်ခြင်း |
| `npm run lint` | ESLint နဲ့ code စစ်ဆေးခြင်း |
