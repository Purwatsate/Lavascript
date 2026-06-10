/**
 * Topic 9: Octal and Binary Literals — ဂဏန်း system အမျိုးမျိုးနဲ့ ရေးသားခြင်း
 *
 * ES6 မှာ binary (0b) နဲ့ octal (0o) literal syntax အသစ် ထပ်ပေါ်လာတယ်
 * Hexadecimal (0x) က ES5 ကတည်းက ရှိပြီးသား
 *
 * Reference: https://www.javascripttutorial.net/es6/octal-and-binary-literals/
 * Run: node es6/section-01-new-es6-syntax/09-octal-binary-literals.js
 */

// ============================================================
// 1. Binary Literals — 0b prefix (base 2)
// ============================================================
console.log('=== 1. Binary literals (0b prefix) ===');

// binary (base 2) — 0 နဲ့ 1 သာ သုံးတယ်
// 0b1010 = 1×8 + 0×4 + 1×2 + 0×1 = 10
const binary = 0b1010;
console.log('0b1010 =', binary); // 10

// binary flags example — bit pattern သိမ်းချင်တဲ့အခါ
const flags = 0b11110000;
console.log('0b11110000 =', flags); // 240

// ============================================================
// 2. Octal Literals — 0o prefix (base 8)
// ============================================================
console.log('\n=== 2. Octal literals (0o prefix) ===');

// octal (base 8) — 0 ကနေ 7 သာ သုံးတယ်
// 0o755 = 7×64 + 5×8 + 5×1 = 493
const octal = 0o755;
console.log('0o755 =', octal); // 493

// file permission example — Linux/Unix permission က octal နဲ့ ရေးကြတယ်
const permission = 0o644;
console.log('0o644 =', permission); // 420

// ============================================================
// 3. Hexadecimal — 0x prefix (base 16) — ES5 ကတည်းက ရှိ
// ============================================================
console.log('\n=== 3. Hexadecimal (0x — existed before ES6) ===');

// hexadecimal (base 16) — 0-9, a-f သုံးတယ်
// 0xff = 15×16 + 15×1 = 255
const hex = 0xff;
console.log('0xff =', hex); // 255

// color code (#ff0000), memory address တွေမှာ hex သုံးကြတယ်

// ============================================================
// 4. Number ကို binary/octal/hex string အဖြစ် convert
// ============================================================
console.log('\n=== 4. Convert number to binary/octal string ===');

const num = 42;
console.log('42 in binary:', num.toString(2));  // '101010'
console.log('42 in octal:', num.toString(8));   // '52'
console.log('42 in hex:', num.toString(16));    // '2a'

// toString(radix) — radix 2=binary, 8=octal, 16=hex

// ============================================================
// 5. Practical Example — file permission (Linux)
// ============================================================
console.log('\n=== 5. Practical: file permissions example ===');

// Linux file permission: read=4, write=2, execute=1 (octal)
const read = 0o4;    // 100 binary — read permission
const write = 0o2;   // 010 binary — write permission
const execute = 0o1; // 001 binary — execute permission

// bitwise OR (|) — permission combine
const rw = read | write; // read + write = 6 (0o6)
console.log('read + write permission:', '0o' + rw.toString(8)); // 0o6

// chmod 755 = owner: rwx(7), group: rx(5), others: rx(5)

// ============================================================
// 6. Purana Octal Syntax — မသုံးသင့်တော့
// ============================================================
console.log('\n=== 6. Old octal syntax (avoid) ===');

// ES5 မှာ leading 0 ထားရင် octal လို့ treat — confusing
// const old = 0755; // ES5 octal — strict mode မှာ error
// ES6: 0o755 သုံး — explicit, safe, clear

// ============================================================
// အနှစ်ချုပ်
// ============================================================
// | Prefix | Base | Digits    | Example  | Decimal |
// |--------|------|-----------|----------|---------|
// | 0b     | 2    | 0, 1      | 0b1010   | 10      |
// | 0o     | 8    | 0-7       | 0o755    | 493     |
// | 0x     | 16   | 0-9, a-f  | 0xff     | 255     |
//
// သုံးသင့်တဲ့ အခြေအနေ:
//   - binary flags, bit manipulation
//   - file permissions (octal)
//   - color codes (hex)
//
// daily coding မှာ decimal (10, 42) သုံးရုံများတယ်

console.log('\nES6 makes binary (0b) and octal (0o) literals explicit and safe');
