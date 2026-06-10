/**
 * greet.js — Default Export Module
 *
 * Default export: module တစ်ခုမှာ default export တစ်ခုသာ
 * import လုပ်တဲ့အခါ name ကို ကိုယ်တိုင် ပေးနိုင်တယ်
 *
 * Named export vs Default export:
 *   - Named: export const x → import { x }
 *   - Default: export default fn → import anyName
 */

// default export — function
export default function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}

// named export — default နဲ့ ပေါင်းသုံးလို့ရ (module တစ်ခုမှာ both)
export const APP_NAME = 'Lavascript';

// default export နောက်မှ another default export declare လို့မရ
// export default function bye() {} // SyntaxError
