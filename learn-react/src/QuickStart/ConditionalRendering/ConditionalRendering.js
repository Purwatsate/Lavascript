import { useState } from 'react';

// ၁။ AdminPanel Component အသေးလေးတစ်ခု ဆောက်ထားခြင်း
function AdminPanel() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#e6f7ff' }}>
      <h2>Welcome back, Admin!</h2>
      <p>This is your private dashboard.</p>
    </div>
  );
}

// ၂။ LoginForm Component အသေးလေးတစ်ခု ဆောက်ထားခြင်း
function LoginForm() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#fff1f0' }}>
      <h2>Please Log In</h2>
      <input type="text" placeholder="Username" /><br /><br />
      <input type="password" placeholder="Password" />
    </div>
  );
}

// ၃။ အဓိက Component (LoginControl)
export default function LoginControl() {
  // State သုံးပြီး Logged In ဖြစ်မဖြစ်ကို စောင့်ကြည့်ခြင်း (Default ကို false ထားထားသည်)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // သင်ရေးခဲ့တဲ့ If-Else Conditional Logic ကို Component အတွင်းထဲမှာ ထည့်ရေးရပါမယ်
  let content;
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Conditional Rendering</h1>
      
      {/* နေရာအလိုက် ပြောင်းလဲမယ့် Content ကို တွန့်ကွင်းနဲ့ ထုတ်ပြခြင်း */}
      <div style={{ margin: '20px 0' }}>
        {content}
      </div>

      {/* ဝင်ထားရင် ထွက်ဖို့၊ ထွက်ထားရင် ဝင်ဖို့ Toggle လုပ်မယ့် Button */}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
}