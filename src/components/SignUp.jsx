// // import React, { useState } from "react";
// // import { createUserWithEmailAndPassword } from "firebase/auth";
// // import { auth } from "../firebase";

// // export default function Signup({ onSignup }) {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirm, setConfirm] = useState("");
// //   const [error, setError] = useState("");

// //   const handleSignup = async (e) => {
// //     e.preventDefault();
// //     setError("");

// //     if (password !== confirm) {
// //       setError("Passwords do not match.");
// //       return;
// //     }

// //     try {
// //       const userCred = await createUserWithEmailAndPassword(auth, email, password);
// //       onSignup(userCred.user); // Pass the user back to App
// //     } catch (err) {
// //       setError("Signup failed: " + err.message);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSignup} style={{ padding: "40px", textAlign: "center" }}>
// //       <h2>🆕 Create Account</h2>
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

// //       <input
// //         type="password"
// //         placeholder="Confirm Password"
// //         value={confirm}
// //         onChange={(e) => setConfirm(e.target.value)}
// //         required
// //       /><br /><br />

// //       <button type="submit">Sign Up</button>

// //       {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
// //     </form>
// //   );
// // }
// // import React, { useState } from "react";
// // import { createUserWithEmailAndPassword } from "firebase/auth";
// // import { auth } from "../firebase";

// // export default function Signup({ onSignup }) {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirm, setConfirm] = useState("");
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   const handleSignup = async (e) => {
// //     e.preventDefault();
// //     setError("");

// //     if (password !== confirm) {
// //       setError("❗ Passwords do not match.");
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       const userCred = await createUserWithEmailAndPassword(auth, email, password);
// //       onSignup(userCred.user);
// //     } catch (err) {
// //       setError("Signup failed: " + err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSignup} style={{ padding: "40px", textAlign: "center" }}>
// //       <h2>🆕 Create Account</h2>
// //       <input
// //         type="email"
// //         placeholder="Email"
// //         value={email}
// //         onChange={(e) => setEmail(e.target.value)}
// //         required
// //         disabled={loading}
// //       /><br /><br />

// //       <input
// //         type="password"
// //         placeholder="Password"
// //         value={password}
// //         onChange={(e) => setPassword(e.target.value)}
// //         required
// //         disabled={loading}
// //       /><br /><br />

// //       <input
// //         type="password"
// //         placeholder="Confirm Password"
// //         value={confirm}
// //         onChange={(e) => setConfirm(e.target.value)}
// //         required
// //         disabled={loading}
// //       /><br /><br />

// //       <button type="submit" disabled={loading}>
// //         {loading ? "Creating account..." : "Sign Up"}
// //       </button>

// //       {error && (
// //         <p style={{ color: "red", marginTop: "10px", fontSize: "0.9em" }}>{error}</p>
// //       )}
// //     </form>
// //   );
// // }
// import React, { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";

// export default function Signup({ onSignup }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirm, setConfirm] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (password !== confirm) {
//       setError("❗ Passwords do not match.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const userCred = await createUserWithEmailAndPassword(auth, email, password);
//       onSignup(userCred.user);
//     } catch (err) {
//       setError("Signup failed: " + err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSignup} style={{ padding: "40px", textAlign: "center" }}>
//       <h2>🆕 Create Account</h2>
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

//       <input
//         type="password"
//         placeholder="Confirm Password"
//         value={confirm}
//         onChange={(e) => setConfirm(e.target.value)}
//         required
//         disabled={loading}
//       /><br /><br />

//       <button type="submit" disabled={loading}>
//         {loading ? "Creating account..." : "Sign Up"}
//       </button>

//       {error && (
//         <p style={{ color: "red", marginTop: "10px", fontSize: "0.9em" }}>{error}</p>
//       )}
//     </form>
//   );
// }
import React, { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase";

export default function Signup({ onSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const isValid = password.length >= 6 && password === confirm && email.includes("@");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    if (!isValid) {
      setError("Ensure email is valid and passwords match.");
      return;
    }

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCred.user);
      onSignup(userCred.user);
    } catch (err) {
      setError("Signup failed: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSignup} style={{ padding: "40px", textAlign: "center" }}>
      <h2>🆕 Create Account</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      /><br /><br />

      <input
        type="password"
        placeholder="Password (6+ chars)"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      /><br /><br />

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirm}
        onChange={e => setConfirm(e.target.value)}
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
        Sign Up
      </button>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </form>
  );
}
