# Lavascript

JavaScript / TypeScript / React training project repository ဖြစ်ပါတယ်။

## React Project

`react/` folder ထဲမှာ React + TypeScript + Vite + Tailwind CSS project ရှိပါတယ်။

### အသုံးပြုထားသော နည်းပညာများ

- **React 19** — UI library
- **TypeScript** — type safety
- **Vite** — dev server နဲ့ build tool
- **Tailwind CSS** — utility-first CSS framework
- **React Compiler** — React component optimization
- **ESLint** — code quality စစ်ဆေးခြင်း

### လိုအပ်ချက်များ

- [Node.js](https://nodejs.org/) (LTS version အကြံပြုပါတယ်)
- npm (Node.js နဲ့အတူ ပါလာပါတယ်)

### စတင်အသုံးပြုနည်း

```bash
cd react
npm install
npm run dev
```

Browser မှာ Vite ပေးထားတဲ့ local URL (ဥပမာ `http://localhost:5173`) ကို ဖွင့်ပါ။

### Scripts

| Script | လုပ်ဆောင်ချက် |
|--------|-------------|
| `npm run dev` | Development server ဖွင့်ခြင်း |
| `npm run build` | Production build လုပ်ခြင်း |
| `npm run preview` | Build ကို local preview လုပ်ခြင်း |
| `npm run lint` | ESLint နဲ့ code စစ်ဆေးခြင်း |

### Project ဖွဲ့စည်းပုံ

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

### Tailwind CSS

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

Editor ထဲမှာ `@tailwind` warning ပေါ်နေရင် `css.lint.unknownAtRules` ကို `"ignore"` လုပ်ထားပါ (သို့မဟုတ် Tailwind CSS IntelliSense extension install လုပ်ပါ)။

### React Compiler

ဒီ template မှာ React Compiler ကို enable လုပ်ထားပါတယ်။ ပိုမိုသိရှိလိုပါက [React Compiler documentation](https://react.dev/learn/react-compiler) ကို ကြည့်ပါ။

**မှတ်ချက်:** React Compiler က dev server နဲ့ build performance ကို အနည်းငယ် သက်ရောက်နိုင်ပါတယ်။

---

Project အသေးစိတ်ကို [`react/README.md`](./react/README.md) မှာ ကြည့်နိုင်ပါတယ်။
