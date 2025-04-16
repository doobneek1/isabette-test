// // // // // components/Login.jsx
// // // // import React, { useState } from "react";
// // // // import { signInWithEmailAndPassword } from "firebase/auth";
// // // // import { auth } from "../firebase";

// // // // export default function Login({ onLogin }) {
// // // //   const [email, setEmail] = useState("");
// // // //   const [password, setPassword] = useState("");

// // // //   const submit = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       const userCred = await signInWithEmailAndPassword(auth, email, password);
// // // //       onLogin(userCred.user); // pass back the user to App
// // // //     } catch (err) {
// // // //       alert("Login failed: " + err.message);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <form onSubmit={submit} style={{ padding: "40px", textAlign: "center" }}>
// // // //       <h2>🔐 Email Login</h2>
// // // //       <input
// // // //         type="email"
// // // //         placeholder="Email"
// // // //         value={email}
// // // //         onChange={e => setEmail(e.target.value)}
// // // //         required
// // // //       /><br /><br />
// // // //       <input
// // // //         type="password"
// // // //         placeholder="Password"
// // // //         value={password}
// // // //         onChange={e => setPassword(e.target.value)}
// // // //         required
// // // //       /><br /><br />
// // // //       <button type="submit">Login</button>
// // // //     </form>
// // // //   );
// // // // }
// // // import React, { useState } from "react";
// // // import { signInWithEmailAndPassword } from "firebase/auth";
// // // import { auth } from "../firebase";

// // // export default function Login({ onLogin, onDemoLogin }) {
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");

// // //   const submit = async (e) => {
// // //     e.preventDefault();

// // //     if (email === "hello" && password === "hello") {
// // //       onDemoLogin();
// // //       return;
// // //     }

// // //     try {
// // //       const userCred = await signInWithEmailAndPassword(auth, email, password);
// // //       onLogin(userCred.user);
// // //     } catch (err) {
// // //       alert("Login failed: " + err.message);
// // //     }
// // //   };

// // //   return (
// // //     <form onSubmit={submit} style={{ padding: "40px", textAlign: "center" }}>
// // //       <h2>🔐 Email Login</h2>
// // //       <input
// // //         type="email"
// // //         placeholder="Email"
// // //         value={email}
// // //         onChange={e => setEmail(e.target.value)}
// // //         required
// // //       /><br /><br />
// // //       <input
// // //         type="password"
// // //         placeholder="Password"
// // //         value={password}
// // //         onChange={e => setPassword(e.target.value)}
// // //         required
// // //       /><br /><br />
// // //       <button type="submit">Login</button>
// // //       <p style={{ fontSize: "14px", marginTop: "10px", color: "#666" }}>
// // //         Try demo mode: <code>hello / hello</code>
// // //       </p>
// // //     </form>
// // //   );
// // // }
// // import React, { useState } from "react";
// // import { signInWithEmailAndPassword } from "firebase/auth";
// // import { auth } from "../firebase";

// // export default function Login({ onLogin }) {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const submit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const userCred = await signInWithEmailAndPassword(auth, email, password);
// //       onLogin(userCred.user);
// //     } catch (err) {
// //       alert("Login failed: Firebase: " + err.message);
// //     }
// //   };

// //   const useDemoMode = async () => {
// //     const demoEmail = "doobneek@doobneek.com";
// //     const demoPassword = "doobneek";

// //     // Simulate typing animation (optional)
// //     let typed = "";
// //     for (let char of demoEmail) {
// //       typed += char;
// //       setEmail(typed);
// //       await new Promise((r) => setTimeout(r, 50));
// //     }
// //     setPassword(demoPassword);

// //     setTimeout(() => {
// //       submit({ preventDefault: () => {} });
// //     }, 400);
// //   };

// //   return (
// //     <form onSubmit={submit} style={{ padding: "40px", textAlign: "center" }}>
// //       <h2>🔐 Email Login</h2>
// //       <input
// //         type="email"
// //         placeholder="Email"
// //         value={email}
// //         onChange={(e) => setEmail(e.target.value)}
// //         required
// //       /><br /><br />
// //       <input
// //         type="password"
// //         placeholder="Password"
// //         value={password}
// //         onChange={(e) => setPassword(e.target.value)}
// //         required
// //       /><br /><br />
// //       <button type="submit">Login</button>
// //       <button type="button" style={{ marginLeft: "10px" }} onClick={useDemoMode}>
// //         Demo Mode
// //       </button>
// //       <p style={{ marginTop: "20px", fontSize: "0.9em", color: "#666" }}>
// //         Demo will auto-login using doobneek@doobneek.com / doobneek
// //       </p>
// //     </form>
// //   );
// // }
// import React, { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";

// export default function Login({ onLogin }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const submit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const userCred = await signInWithEmailAndPassword(auth, email, password);
//       onLogin(userCred.user);
//     } catch (err) {
//       alert("Login failed: " + err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const useDemoMode = async () => {
//     const demoEmail = "doobneek@doobneek.com";
//     const demoPassword = "doobneek";

//     setEmail("");
//     setPassword("");
//     setLoading(true);

//     for (let char of demoEmail) {
//       setEmail((prev) => prev + char);
//       await new Promise((res) => setTimeout(res, 50));
//     }

//     setPassword(demoPassword);

//     setTimeout(() => {
//       submit({ preventDefault: () => {} });
//     }, 300);
//   };

//   return (
//     <form onSubmit={submit} style={{ padding: "40px", textAlign: "center" }}>
//       <h2>🔐 Email Login</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//         disabled={loading}
//       /><br /><br />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//         disabled={loading}
//       /><br /><br />
//       <button type="submit" disabled={loading}>
//         {loading ? "Logging in..." : "Login"}
//       </button>
//       <button
//         type="button"
//         style={{ marginLeft: "10px" }}
//         onClick={useDemoMode}
//         disabled={loading}
//       >
//         Demo Mode
//       </button>
//       <p style={{ marginTop: "20px", fontSize: "0.9em", color: "#666" }}>
//         Demo uses: doobneek@doobneek.com / doobneek
//       </p>
//     </form>
//   );
// }
import React, { useState } from "react";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

export default function Login({ onLogin, onDemoLogin, demoTyping }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const isValid = email.length > 4 && password.length > 4;

  const submit = async (e) => {
    e.preventDefault();
    setStatus("Signing in...");
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      onLogin(userCred.user);
    } catch (err) {
      setStatus("Login failed: " + err.message);
    }
  };

  const resetPassword = async () => {
    if (!email) {
      setStatus("Enter your email first.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setStatus("Password reset email sent.");
    } catch (err) {
      setStatus("Reset failed: " + err.message);
    }
  };

  const simulateDemo = async () => {
    const demoEmail = "doobneek@doobneek.com";
    const demoPassword = "doobneek";
    setEmail("");
    setPassword("");

    for (let char of demoEmail) {
      setEmail(prev => prev + char);
      await new Promise(r => setTimeout(r, 40));
    }
    for (let char of demoPassword) {
      setPassword(prev => prev + char);
      await new Promise(r => setTimeout(r, 40));
    }

    setTimeout(onDemoLogin, 300); // Delay before triggering login
  };

  return (
    <form onSubmit={submit} style={{ padding: "40px", textAlign: "center" }}>
      <h2>🔐 Email Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      /><br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      /><br /><br />

      <button
        type="submit"
        disabled={!isValid}
        style={{
          background: isValid ? "#4caf50" : "#ccc",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          cursor: isValid ? "pointer" : "not-allowed"
        }}
      >
        Login
      </button>

      <button
        type="button"
        onClick={simulateDemo}
        style={{ marginLeft: "10px" }}
      >
        Demo Mode
      </button>

      <p style={{ marginTop: "10px", color: "#888", fontSize: "0.9em" }}>
        Forgot password? <span style={{ color: "#007bff", cursor: "pointer" }} onClick={resetPassword}>Reset it</span>
      </p>

      {status && <p style={{ marginTop: "10px", color: "red" }}>{status}</p>}
    </form>
  );
}
