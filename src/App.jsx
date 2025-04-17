
// // import React, { useEffect, useState } from "react";
// // import Form from "./components/Form";
// // import EntryTable from "./components/EntryTable";
// // import Dashboard from "./components/Dashboard";
// // import Login from "./components/Login";
// // import Signup from "./components/SignUp";
// // import { db, ref, push, remove } from "./firebase";
// // import { get } from "firebase/database";
// // import { auth } from "./firebase";
// // import { onAuthStateChanged, signOut } from "firebase/auth";

// // // Demo setup
// // const DEMO_USER = { email: "hello", uid: "demo" };
// // const DEMO_ENTRIES = [
// //   {
// //       id: 3453385008862,
// //       startDate: "2025-04-21",
// //       endDate: "",
// //       amount: 2217.32,
// //       category: "Salary",
// //       taxed: false,
// //       type: "Fixed",
// //       recurrenceCount: 1,
// //       isIncome: true
// //     },
// //     {
// //       id: 4844398147930,
// //       startDate: "2025-04-22",
// //       endDate: "",
// //       amount: 721.0,
// //       category: "Interest",
// //       taxed: true,
// //       type: "Fixed",
// //       recurrenceCount: 1,
// //       isIncome: true
// //     },
// //     {
// //       id: 1115402766155,
// //       startDate: "2025-04-20",
// //       endDate: "",
// //       amount: 2283.66,
// //       category: "Tutoring",
// //       taxed: false,
// //       type: "Fixed",
// //       recurrenceCount: 1,
// //       isIncome: true
// //     },
// //     {
// //       id: 4784533967152,
// //       startDate: "2025-04-06",
// //       endDate: "",
// //       amount: 2872.92,
// //       category: "Insurance",
// //       taxed: false,
// //       type: "Recurring",
// //       recurrenceCount: 1,
// //       isIncome: false
// //     },
// //     {
// //       id: 7661160537249,
// //       startDate: "2025-04-11",
// //       endDate: "",
// //       amount: 264.04,
// //       category: "Freelance Work",
// //       taxed: false,
// //       type: "Fixed",
// //       recurrenceCount: 1,
// //       isIncome: true
// //     },
// //     {
// //       id: 2222796825072,
// //       startDate: "2025-04-10",
// //       endDate: "",
// //       amount: 166.1,
// //       category: "Healthcare",
// //       taxed: false,
// //       type: "Fixed",
// //       recurrenceCount: 1,
// //       isIncome: false
// //     },
// //     {
// //       id: 2777543012274,
// //       startDate: "2025-04-08",
// //       endDate: "2025-05-08",
// //       amount: 1858.00,
// //       category: "Rent",
// //       taxed: false,
// //       type: "Fixed",
// //       recurrenceCount: 1,
// //       isIncome: false
// //     },
// //     {
// //       id: 4686607816019,
// //       startDate: "2025-04-15",
// //       endDate: "",
// //       amount: 2020.42,
// //       category: "Dining Out",
// //       taxed: false,
// //       type: "Recurring",
// //       recurrenceCount: 1,
// //       isIncome: false
// //     },
// //     {
// //       id: 7676364570482,
// //       startDate: "2025-04-23",
// //       endDate: "",
// //       amount: 831.75,
// //       category: "Grants",
// //       taxed: true,
// //       type: "Fixed",
// //       recurrenceCount: 1,
// //       isIncome: true
// //     },
// //     {
// //       id: 1566170331051,
// //       startDate: "2025-04-30",
// //       endDate: "",
// //       amount: 2420.99,
// //       category: "Bonus",
// //       taxed: true,
// //       type: "Fixed",
// //       recurrenceCount: 1,
// //       isIncome: true
// //     },
// //     {
// //       id: 6535001295567,
// //       startDate: "2025-04-13",
// //       endDate: "",
// //       amount: 661.5,
// //       category: "Groceries",
// //       taxed: false,
// //       type: "Fixed",
// //       recurrenceCount: 1,
// //       isIncome: false
// //     },
// //     {
// //       id: 5656358177667,
// //       startDate: "2025-04-16",
// //       endDate: "",
// //       amount: 444.7,
// //       category: "Education",
// //       taxed: false,
// //       type: "Recurring",
// //       recurrenceCount: 1,
// //       isIncome: false
// //     },
// //     {
// //       id: 7366856944791,
// //       startDate: "2025-04-24",
// //       endDate: "",
// //       amount: 681.38,
// //       category: "Utilities",
// //       taxed: false,
// //       type: "Recurring",
// //       recurrenceCount: 1,
// //       isIncome: false
// //     },
// //     {
// //       id: 2932138724758,
// //       startDate: "2025-04-05",
// //       endDate: "",
// //       amount: 483.94,
// //       category: "Groceries",
// //       taxed: false,
// //       type: "Fixed",
// //       recurrenceCount: 1,
// //       isIncome: false
// //     },
// //     {
// //       id: 7714686446661,
// //       startDate: "2025-04-06",
// //       endDate: "",
// //       amount: 1799.79,
// //       category: "Healthcare",
// //       taxed: false,
// //       type: "Fixed",
// //       recurrenceCount: 1,
// //       isIncome: false
// //     },
// //     {
// //       id: 5693329282832,
// //       startDate: "2025-04-15",
// //       endDate: "",
// //       amount: 2312.74,
// //       category: "Transportation",
// //       taxed: false,
// //       type: "Fixed",
// //       recurrenceCount: 1,
// //       isIncome: false
// //     },
// //     {
// //       id: 1057783303331,
// //       startDate: "2025-04-11",
// //       endDate: "",
// //       amount: 2862.83,
// //       category: "Consulting",
// //       taxed: false,
// //       type: "Fixed",
// //       recurrenceCount: 1,
// //       isIncome: true
// //     },
// //     {
// //       id: 6251135679598,
// //       startDate: "2025-04-29",
// //       endDate: "",
// //       amount: 2529.76,
// //       category: "Transportation",
// //       taxed: false,
// //       type: "Fixed",
// //       recurrenceCount: 1,
// //       isIncome: false
// //     },
// //     {
// //       id: 9595621798971,
// //       startDate: "2025-04-17",
// //       endDate: "",
// //       amount: 87.85,
// //       category: "Grants",
// //       taxed: false,
// //       type: "Fixed",
// //       recurrenceCount: 1,
// //       isIncome: true
// //     },
// //     {
// //       id: 2018935689015,
// //       startDate: "2025-04-30",
// //       endDate: "",
// //       amount: 745.39,
// //       category: "Education",
// //       taxed: false,
// //       type: "Recurring",
// //       recurrenceCount: 1,
// //       isIncome: false
// //     }];

// // export default function App() {
// //   const [user, setUser] = useState(null);
// //   const [authChecked, setAuthChecked] = useState(false);
// //   const [showSignup, setShowSignup] = useState(false);
// //   const [demoMode, setDemoMode] = useState(false);
// //   const [entries, setEntries] = useState([]);
// //   const [categories, setCategories] = useState([]);
// //   const [recentlyDeleted, setRecentlyDeleted] = useState(null);
// //   const [showUndo, setShowUndo] = useState(false);
// //   const [fadeUndo, setFadeUndo] = useState(false);
// //   const [demoTyping, setDemoTyping] = useState(false);

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (authUser) => {
// //       const isDemo = window.sessionStorage.getItem("demoMode");
// //       if (isDemo) {
// //         setUser(DEMO_USER);
// //         setDemoMode(true);
// //         setEntries(DEMO_ENTRIES);
// //         setCategories(["Rent", "Salary"]);
// //       } else {
// //         setUser(authUser);
// //       }
// //       setAuthChecked(true);
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   useEffect(() => {
// //     if (!user || demoMode) return;

// //     get(ref(db, `users/${user.uid}/categories`)).then((snapshot) => {
// //       const vals = snapshot.val() ? Object.values(snapshot.val()) : [];
// //       const defaults = ["Food", "Transportation", "Healthcare", "Income"];
// //       setCategories([...new Set([...defaults, ...vals])]);
// //     });

// //     get(ref(db, `users/${user.uid}/entries`)).then((snapshot) => {
// //       const data = snapshot.val();
// //       const loaded = data
// //         ? Object.entries(data).map(([id, value]) => ({ id, ...value }))
// //         : [];
// //       setEntries(loaded.sort((a, b) => b.id - a.id).slice(0, 200));
// //     });
// //   }, [user, demoMode]);

// //   const handleNewEntry = (entry) => {
// //     const newEntry = { ...entry, id: Date.now() };

// //     if (demoMode) {
// //       setEntries((prev) => [newEntry, ...prev]);
// //       if (!categories.includes(entry.category)) {
// //         setCategories((prev) => [...prev, entry.category]);
// //       }
// //     } else {
// //       push(ref(db, `users/${user.uid}/entries`), newEntry);
// //       if (entry.category && !categories.includes(entry.category)) {
// //         push(ref(db, `users/${user.uid}/categories`), entry.category);
// //       }
// //     }
// //   };

// //   const handleDelete = (id) => {
// //     const entry = entries.find((e) => e.id === id);
// //     if (!entry) return;

// //     setRecentlyDeleted(entry);
// //     setShowUndo(true);
// //     setFadeUndo(false);
// //     setTimeout(() => setFadeUndo(true), 4000);
// //     setTimeout(() => {
// //       setShowUndo(false);
// //       setRecentlyDeleted(null);
// //     }, 5000);

// //     if (demoMode) {
// //       setEntries((prev) => prev.filter((e) => e.id !== id));
// //     } else {
// //       get(ref(db, `users/${user.uid}/entries`)).then((snapshot) => {
// //         const data = snapshot.val();
// //         if (data) {
// //           Object.entries(data).forEach(([key, value]) => {
// //             if (value.id === id) {
// //               remove(ref(db, `users/${user.uid}/entries/${key}`));
// //             }
// //           });
// //         }
// //       });
// //     }
// //   };

// //   const handleUndo = () => {
// //     if (!recentlyDeleted) return;

// //     if (demoMode) {
// //       setEntries((prev) => [recentlyDeleted, ...prev]);
// //     } else {
// //       push(ref(db, `users/${user.uid}/entries`), recentlyDeleted);
// //     }

// //     setShowUndo(false);
// //     setRecentlyDeleted(null);
// //   };

// //   const handleDemoLogin = () => {
// //     setDemoTyping(true);
// //     setTimeout(() => {
// //       window.sessionStorage.setItem("demoMode", "true");
// //       setUser(DEMO_USER);
// //       setDemoMode(true);
// //       setEntries(DEMO_ENTRIES);
// //       setCategories(["Rent", "Salary"]);
// //       setAuthChecked(true);
// //       setDemoTyping(false);
// //     }, 1500);
// //   };

// //   const logout = () => {
// //     setUser(null);
// //     setDemoMode(false);
// //     window.sessionStorage.removeItem("demoMode");
// //     signOut(auth);
// //   };

// //   if (!authChecked) return <div style={{ padding: "40px" }}>Loading...</div>;

// //   if (!user) {
// //     return (
// //       <div style={{ textAlign: "center", padding: "40px" }}>
// //         {showSignup ? (
// //           <Signup onSignup={setUser} />
// //         ) : (
// //           <Login onLogin={setUser} onDemoLogin={handleDemoLogin} demoTyping={demoTyping} />
// //         )}
// //         <button onClick={() => setShowSignup(!showSignup)} style={{ marginTop: "20px" }}>
// //           {showSignup ? "← Back to Login" : "Create an Account →"}
// //         </button>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="app-container" style={{ fontFamily: "Helvetica, sans-serif" }}>
// //       <div style={{ display: "flex", justifyContent: "space-between" }}>
// //         <h1>Income & Expense Tracker</h1>
// //         <button onClick={logout}>Sign Out</button>
// //       </div>
// //       <Form onSubmit={handleNewEntry} categoryList={categories} />
// //       <EntryTable entries={entries} onDelete={handleDelete} />
// //       <Dashboard entries={entries} />

// //       {showUndo && (
// //         <div
// //           style={{
// //             position: "fixed",
// //             bottom: "30px",
// //             left: "50%",
// //             transform: "translateX(-50%)",
// //             background: "#333",
// //             color: "#fff",
// //             padding: "12px 20px",
// //             borderRadius: "6px",
// //             boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
// //             zIndex: 1000,
// //             opacity: fadeUndo ? 0 : 1,
// //             transition: "opacity 1s ease"
// //           }}
// //         >
// //           Entry deleted.
// //           <button
// //             onClick={handleUndo}
// //             style={{
// //               marginLeft: "10px",
// //               color: "#4caf50",
// //               background: "transparent",
// //               border: "none",
// //               cursor: "pointer",
// //               fontWeight: "bold"
// //             }}
// //           >
// //             Undo
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// import React, { useEffect, useState } from "react";
// import Form from "./components/Form";
// import EntryTable from "./components/EntryTable";
// import Dashboard from "./components/Dashboard";
// import Login from "./components/Login";
// import Signup from "./components/SignUp";
// import { db, ref, push, remove } from "./firebase";
// import { get } from "firebase/database";
// import { auth } from "./firebase";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { encryptData, decryptData, getUserKey } from "./utils/crypto";

// // Demo setup
// const DEMO_USER = { email: "hello", uid: "demo" };
// const DEMO_ENTRIES = [
//   {
//       id: 3453385008862,
//       startDate: "2025-04-21",
//       endDate: "",
//       amount: 2217.32,
//       category: "Salary",
//       taxed: false,
//       type: "Fixed",
//       recurrenceCount: 1,
//       isIncome: true
//     },
//     {
//       id: 4844398147930,
//       startDate: "2025-04-22",
//       endDate: "",
//       amount: 721.0,
//       category: "Interest",
//       taxed: true,
//       type: "Fixed",
//       recurrenceCount: 1,
//       isIncome: true
//     },
//     {
//       id: 1115402766155,
//       startDate: "2025-04-20",
//       endDate: "",
//       amount: 2283.66,
//       category: "Tutoring",
//       taxed: false,
//       type: "Fixed",
//       recurrenceCount: 1,
//       isIncome: true
//     },
//     {
//       id: 4784533967152,
//       startDate: "2025-04-06",
//       endDate: "",
//       amount: 2872.92,
//       category: "Insurance",
//       taxed: false,
//       type: "Recurring",
//       recurrenceCount: 1,
//       isIncome: false
//     },
//     {
//       id: 7661160537249,
//       startDate: "2025-04-11",
//       endDate: "",
//       amount: 264.04,
//       category: "Freelance Work",
//       taxed: false,
//       type: "Fixed",
//       recurrenceCount: 1,
//       isIncome: true
//     },
//     {
//       id: 2222796825072,
//       startDate: "2025-04-10",
//       endDate: "",
//       amount: 166.1,
//       category: "Healthcare",
//       taxed: false,
//       type: "Fixed",
//       recurrenceCount: 1,
//       isIncome: false
//     },
//     {
//       id: 2777543012274,
//       startDate: "2025-04-08",
//       endDate: "2025-05-08",
//       amount: 1858.00,
//       category: "Rent",
//       taxed: false,
//       type: "Fixed",
//       recurrenceCount: 1,
//       isIncome: false
//     },
//     {
//       id: 4686607816019,
//       startDate: "2025-04-15",
//       endDate: "",
//       amount: 2020.42,
//       category: "Dining Out",
//       taxed: false,
//       type: "Recurring",
//       recurrenceCount: 1,
//       isIncome: false
//     },
//     {
//       id: 7676364570482,
//       startDate: "2025-04-23",
//       endDate: "",
//       amount: 831.75,
//       category: "Grants",
//       taxed: true,
//       type: "Fixed",
//       recurrenceCount: 1,
//       isIncome: true
//     },
//     {
//       id: 1566170331051,
//       startDate: "2025-04-30",
//       endDate: "",
//       amount: 2420.99,
//       category: "Bonus",
//       taxed: true,
//       type: "Fixed",
//       recurrenceCount: 1,
//       isIncome: true
//     },
//     {
//       id: 6535001295567,
//       startDate: "2025-04-13",
//       endDate: "",
//       amount: 661.5,
//       category: "Groceries",
//       taxed: false,
//       type: "Fixed",
//       recurrenceCount: 1,
//       isIncome: false
//     },
//     {
//       id: 5656358177667,
//       startDate: "2025-04-16",
//       endDate: "",
//       amount: 444.7,
//       category: "Education",
//       taxed: false,
//       type: "Recurring",
//       recurrenceCount: 1,
//       isIncome: false
//     },
//     {
//       id: 7366856944791,
//       startDate: "2025-04-24",
//       endDate: "",
//       amount: 681.38,
//       category: "Utilities",
//       taxed: false,
//       type: "Recurring",
//       recurrenceCount: 1,
//       isIncome: false
//     },
//     {
//       id: 2932138724758,
//       startDate: "2025-04-05",
//       endDate: "",
//       amount: 483.94,
//       category: "Groceries",
//       taxed: false,
//       type: "Fixed",
//       recurrenceCount: 1,
//       isIncome: false
//     },
//     {
//       id: 7714686446661,
//       startDate: "2025-04-06",
//       endDate: "",
//       amount: 1799.79,
//       category: "Healthcare",
//       taxed: false,
//       type: "Fixed",
//       recurrenceCount: 1,
//       isIncome: false
//     },
//     {
//       id: 5693329282832,
//       startDate: "2025-04-15",
//       endDate: "",
//       amount: 2312.74,
//       category: "Transportation",
//       taxed: false,
//       type: "Fixed",
//       recurrenceCount: 1,
//       isIncome: false
//     },
//     {
//       id: 1057783303331,
//       startDate: "2025-04-11",
//       endDate: "",
//       amount: 2862.83,
//       category: "Consulting",
//       taxed: false,
//       type: "Fixed",
//       recurrenceCount: 1,
//       isIncome: true
//     },
//     {
//       id: 6251135679598,
//       startDate: "2025-04-29",
//       endDate: "",
//       amount: 2529.76,
//       category: "Transportation",
//       taxed: false,
//       type: "Fixed",
//       recurrenceCount: 1,
//       isIncome: false
//     },
//     {
//       id: 9595621798971,
//       startDate: "2025-04-17",
//       endDate: "",
//       amount: 87.85,
//       category: "Grants",
//       taxed: false,
//       type: "Fixed",
//       recurrenceCount: 1,
//       isIncome: true
//     },
//     {
//       id: 2018935689015,
//       startDate: "2025-04-30",
//       endDate: "",
//       amount: 745.39,
//       category: "Education",
//       taxed: false,
//       type: "Recurring",
//       recurrenceCount: 1,
//       isIncome: false
//     }];

// export default function App() {
//   const [user, setUser] = useState(null);
//   const [authChecked, setAuthChecked] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);
//   const [demoMode, setDemoMode] = useState(false);
//   const [entries, setEntries] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [recentlyDeleted, setRecentlyDeleted] = useState(null);
//   const [showUndo, setShowUndo] = useState(false);
//   const [fadeUndo, setFadeUndo] = useState(false);
//   const [demoTyping, setDemoTyping] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (authUser) => {
//       const isDemo = window.sessionStorage.getItem("demoMode");
//       if (isDemo) {
//         setUser(DEMO_USER);
//         setDemoMode(true);
//         setEntries(DEMO_ENTRIES);
//         setCategories(["Rent", "Salary"]);
//       } else {
//         setUser(authUser);
//       }
//       setAuthChecked(true);
//     });
//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     if (!user || demoMode) return;
  
//     // Load categories
//     get(ref(db, `users/${user.uid}/categories`)).then((snapshot) => {
//       const vals = snapshot.val() ? Object.values(snapshot.val()) : [];
//       const defaults = ["Food", "Transportation", "Healthcare", "Income"];
//       setCategories([...new Set([...defaults, ...vals])]);
//     });
  
//     // Load + decrypt entries (or convert plaintext)
//     get(ref(db, `users/${user.uid}/entries`)).then((snapshot) => {
//       const data = snapshot.val();
//       if (!data) return;
  
//       const processed = Object.entries(data).map(([key, value]) => {
//         try {
//           // Attempt decryption
//           const decrypted = typeof value === "string" ? decryptData(value) : value;
//           return { id: decrypted.id || key, ...decrypted };
//         } catch (err) {
//           // Plain entry fallback (not encrypted yet)
//           console.warn(`Plaintext entry detected. Encrypting key: ${key}`, value);
  
//           // Re-encrypt and overwrite in DB
//           const encrypted = encryptData(value);
//           push(ref(db, `users/${user.uid}/entries`), encrypted);
//           remove(ref(db, `users/${user.uid}/entries/${key}`)); // Clean old entry
  
//           // Still display now
//           return { id: value.id || key, ...value };
//         }
//       }).filter(Boolean);
  
//       setEntries(processed.sort((a, b) => b.id - a.id).slice(0, 200));
//     });
//   }, [user, demoMode]);
  

//   const handleNewEntry = (entry) => {
//     const newEntry = { ...entry, id: Date.now() };
  
//     if (demoMode) {
//       setEntries((prev) => [newEntry, ...prev]);
//       if (!categories.includes(entry.category)) {
//         setCategories((prev) => [...prev, entry.category]);
//       }
//     } else {
//       const encrypted = encryptData(newEntry);
//       push(ref(db, `users/${user.uid}/entries`), encrypted);
//       if (entry.category && !categories.includes(entry.category)) {
//         push(ref(db, `users/${user.uid}/categories`), entry.category);
//       }
//     }
//   };
  

//   const handleDelete = (id) => {
//     const entry = entries.find((e) => e.id === id);
//     if (!entry) return;

//     setRecentlyDeleted(entry);
//     setShowUndo(true);
//     setFadeUndo(false);
//     setTimeout(() => setFadeUndo(true), 4000);
//     setTimeout(() => {
//       setShowUndo(false);
//       setRecentlyDeleted(null);
//     }, 5000);

//     if (demoMode) {
//       setEntries((prev) => prev.filter((e) => e.id !== id));
//     } else {
//       get(ref(db, `users/${user.uid}/entries`)).then((snapshot) => {
//         const data = snapshot.val();
//         if (data) {
//           Object.entries(data).forEach(([key, value]) => {
//             try {
//               const decrypted = typeof value === "string" ? decryptData(value) : value;
//               if (decrypted.id === id) {
//                 remove(ref(db, `users/${user.uid}/entries/${key}`));
//               }
//             } catch (err) {
//               console.warn("Failed to decrypt during delete:", err);
//             }
            
//           });
//         }
//       });
//     }
//   };

//   const handleUndo = () => {
//     if (!recentlyDeleted) return;

//     if (demoMode) {
//       setEntries((prev) => [recentlyDeleted, ...prev]);
//     } else {
//       push(ref(db, `users/${user.uid}/entries`), recentlyDeleted);
//     }

//     setShowUndo(false);
//     setRecentlyDeleted(null);
//   };

//   const handleDemoLogin = () => {
//     setDemoTyping(true);
//     setTimeout(() => {
//       window.sessionStorage.setItem("demoMode", "true");
//       setUser(DEMO_USER);
//       setDemoMode(true);
//       setEntries(DEMO_ENTRIES);
//       setCategories(["Rent", "Salary"]);
//       setAuthChecked(true);
//       setDemoTyping(false);
//     }, 1500);
//   };

//   const logout = () => {
//     setUser(null);
//     setDemoMode(false);
//     window.sessionStorage.removeItem("demoMode");
//     signOut(auth);
//   };

//   if (!authChecked) return <div style={{ padding: "40px" }}>Loading...</div>;

//   if (!user) {
//     return (
//       <div style={{ textAlign: "center", padding: "40px" }}>
//         {showSignup ? (
//           <Signup onSignup={setUser} />
//         ) : (
//           <Login onLogin={setUser} onDemoLogin={handleDemoLogin} demoTyping={demoTyping} />
//         )}
//         <button onClick={() => setShowSignup(!showSignup)} style={{ marginTop: "20px" }}>
//           {showSignup ? "← Back to Login" : "Create an Account →"}
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="app-container" style={{ fontFamily: "Helvetica, sans-serif" }}>
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <h1>Income & Expense Tracker</h1>
//         <button onClick={logout}>Sign Out</button>
//       </div>
//       <Form onSubmit={handleNewEntry} categoryList={categories} />
//       <EntryTable entries={entries} onDelete={handleDelete} />
//       <Dashboard entries={entries} />

//       {showUndo && (
//         <div
//           style={{
//             position: "fixed",
//             bottom: "30px",
//             left: "50%",
//             transform: "translateX(-50%)",
//             background: "#333",
//             color: "#fff",
//             padding: "12px 20px",
//             borderRadius: "6px",
//             boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
//             zIndex: 1000,
//             opacity: fadeUndo ? 0 : 1,
//             transition: "opacity 1s ease"
//           }}
//         >
//           Entry deleted.
//           <button
//             onClick={handleUndo}
//             style={{
//               marginLeft: "10px",
//               color: "#4caf50",
//               background: "transparent",
//               border: "none",
//               cursor: "pointer",
//               fontWeight: "bold"
//             }}
//           >
//             Undo
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import EntryTable from "./components/EntryTable";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import { db, ref, push, remove } from "./firebase";
import { get } from "firebase/database";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { encryptData, decryptData, getUserKey } from "./utils/crypto";

// Demo setup
const DEMO_USER = { email: "hello", uid: "demo" };
const DEMO_ENTRIES = [
  {
      id: 3453385008862,
      startDate: "2025-04-21",
      endDate: "",
      amount: 2217.32,
      category: "Salary",
      taxed: false,
      type: "Fixed",
      recurrenceCount: 1,
      isIncome: true
    },
    {
      id: 4844398147930,
      startDate: "2025-04-22",
      endDate: "",
      amount: 721.0,
      category: "Interest",
      taxed: true,
      type: "Fixed",
      recurrenceCount: 1,
      isIncome: true
    },
    {
      id: 1115402766155,
      startDate: "2025-04-20",
      endDate: "",
      amount: 2283.66,
      category: "Tutoring",
      taxed: false,
      type: "Fixed",
      recurrenceCount: 1,
      isIncome: true
    },
    {
      id: 4784533967152,
      startDate: "2025-04-06",
      endDate: "",
      amount: 2872.92,
      category: "Insurance",
      taxed: false,
      type: "Recurring",
      recurrenceCount: 1,
      isIncome: false
    },
    {
      id: 7661160537249,
      startDate: "2025-04-11",
      endDate: "",
      amount: 264.04,
      category: "Freelance Work",
      taxed: false,
      type: "Fixed",
      recurrenceCount: 1,
      isIncome: true
    },
    {
      id: 2222796825072,
      startDate: "2025-04-10",
      endDate: "",
      amount: 166.1,
      category: "Healthcare",
      taxed: false,
      type: "Fixed",
      recurrenceCount: 1,
      isIncome: false
    },
    {
      id: 2777543012274,
      startDate: "2025-04-08",
      endDate: "2025-05-08",
      amount: 1858.00,
      category: "Rent",
      taxed: false,
      type: "Fixed",
      recurrenceCount: 1,
      isIncome: false
    },
    {
      id: 4686607816019,
      startDate: "2025-04-15",
      endDate: "",
      amount: 2020.42,
      category: "Dining Out",
      taxed: false,
      type: "Recurring",
      recurrenceCount: 1,
      isIncome: false
    },
    {
      id: 7676364570482,
      startDate: "2025-04-23",
      endDate: "",
      amount: 831.75,
      category: "Grants",
      taxed: true,
      type: "Fixed",
      recurrenceCount: 1,
      isIncome: true
    },
    {
      id: 1566170331051,
      startDate: "2025-04-30",
      endDate: "",
      amount: 2420.99,
      category: "Bonus",
      taxed: true,
      type: "Fixed",
      recurrenceCount: 1,
      isIncome: true
    },
    {
      id: 6535001295567,
      startDate: "2025-04-13",
      endDate: "",
      amount: 661.5,
      category: "Groceries",
      taxed: false,
      type: "Fixed",
      recurrenceCount: 1,
      isIncome: false
    },
    {
      id: 5656358177667,
      startDate: "2025-04-16",
      endDate: "",
      amount: 444.7,
      category: "Education",
      taxed: false,
      type: "Recurring",
      recurrenceCount: 1,
      isIncome: false
    },
    {
      id: 7366856944791,
      startDate: "2025-04-24",
      endDate: "",
      amount: 681.38,
      category: "Utilities",
      taxed: false,
      type: "Recurring",
      recurrenceCount: 1,
      isIncome: false
    },
    {
      id: 2932138724758,
      startDate: "2025-04-05",
      endDate: "",
      amount: 483.94,
      category: "Groceries",
      taxed: false,
      type: "Fixed",
      recurrenceCount: 1,
      isIncome: false
    },
    {
      id: 7714686446661,
      startDate: "2025-04-06",
      endDate: "",
      amount: 1799.79,
      category: "Healthcare",
      taxed: false,
      type: "Fixed",
      recurrenceCount: 1,
      isIncome: false
    },
    {
      id: 5693329282832,
      startDate: "2025-04-15",
      endDate: "",
      amount: 2312.74,
      category: "Transportation",
      taxed: false,
      type: "Fixed",
      recurrenceCount: 1,
      isIncome: false
    },
    {
      id: 1057783303331,
      startDate: "2025-04-11",
      endDate: "",
      amount: 2862.83,
      category: "Consulting",
      taxed: false,
      type: "Fixed",
      recurrenceCount: 1,
      isIncome: true
    },
    {
      id: 6251135679598,
      startDate: "2025-04-29",
      endDate: "",
      amount: 2529.76,
      category: "Transportation",
      taxed: false,
      type: "Fixed",
      recurrenceCount: 1,
      isIncome: false
    },
    {
      id: 9595621798971,
      startDate: "2025-04-17",
      endDate: "",
      amount: 87.85,
      category: "Grants",
      taxed: false,
      type: "Fixed",
      recurrenceCount: 1,
      isIncome: true
    },
    {
      id: 2018935689015,
      startDate: "2025-04-30",
      endDate: "",
      amount: 745.39,
      category: "Education",
      taxed: false,
      type: "Recurring",
      recurrenceCount: 1,
      isIncome: false
    }];

export default function App() {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [demoMode, setDemoMode] = useState(false);
  const [entries, setEntries] = useState([]);
  const [categories, setCategories] = useState([]);
  const [recentlyDeleted, setRecentlyDeleted] = useState(null);
  const [showUndo, setShowUndo] = useState(false);
  const [fadeUndo, setFadeUndo] = useState(false);
  const [demoTyping, setDemoTyping] = useState(false);
  const handleDeleteCategory = (categoryToRemove) => {
    const updated = categories.filter(cat => cat !== categoryToRemove);
    setCategories(updated);
  
    const key = getUserKey(user.email); // ensure you're using per-user encryption key
    const encryptedTarget = encryptData(categoryToRemove, key);
  
    get(ref(db, `users/${user.uid}/categories`)).then(snapshot => {
      const data = snapshot.val();
      if (!data) return;
      Object.entries(data).forEach(([id, val]) => {
        if (val === encryptedTarget) {
          remove(ref(db, `users/${user.uid}/categories/${id}`));
        }
      });
    });
  };
  
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      const isDemo = window.sessionStorage.getItem("demoMode");
      if (isDemo) {
        setUser(DEMO_USER);
        setDemoMode(true);
        setEntries(DEMO_ENTRIES);
        setCategories(["Rent", "Salary"]);
      } else {
        setUser(authUser);
      }
      setAuthChecked(true);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user || demoMode) return;
  
    // Load categories
    get(ref(db, `users/${user.uid}/categories`)).then((snapshot) => {
      const data = snapshot.val();
      const key = getUserKey(user.email);
    
      const decryptedCats = data
        ? Object.values(data).map((c) => {
            try {
              return typeof c === "string" ? decryptData(c, key) : c;
            } catch {
              return null;
            }
          }).filter(Boolean)
        : [];
    
      const allCats = [ ...decryptedCats];
const cleaned = allCats
  .map(cat => typeof cat === "string" ? cat.trim() : "") // remove empty / weird ones
  .filter((cat, i, arr) => cat && arr.findIndex(c => c.toLowerCase() === cat.toLowerCase()) === i); // dedupe case-insensitively

setCategories(cleaned);

    });
    
  
    // Load + decrypt entries (or convert plaintext)
    get(ref(db, `users/${user.uid}/entries`)).then((snapshot) => {
      const data = snapshot.val();
      if (!data) return;
  
      const processed = Object.entries(data).map(([key, value]) => {
        try {
          // Attempt decryption
          const decrypted = typeof value === "string" ? decryptData(value) : value;
          return { id: decrypted.id || key, ...decrypted };
        } catch (err) {
          // Plain entry fallback (not encrypted yet)
          console.warn(`Plaintext entry detected. Encrypting key: ${key}`, value);
  
          // Re-encrypt and overwrite in DB
          const encrypted = encryptData(value);
          push(ref(db, `users/${user.uid}/entries`), encrypted);
          remove(ref(db, `users/${user.uid}/entries/${key}`)); // Clean old entry
  
          // Still display now
          return { id: value.id || key, ...value };
        }
      }).filter(Boolean);
  
      setEntries(processed.sort((a, b) => b.id - a.id).slice(0, 200));
    });
  }, [user, demoMode]);
  

  const handleNewEntry = (entry) => {
    const newEntry = { ...entry, id: Date.now() };
  
    if (demoMode) {
      setEntries((prev) => [newEntry, ...prev]);
      if (!categories.includes(entry.category)) {
        setCategories((prev) => [...prev, entry.category]);
      }
    } else {
      const encrypted = encryptData(newEntry);
      push(ref(db, `users/${user.uid}/entries`), encrypted);
      if (entry.category && !categories.includes(entry.category)) {
        const key = getUserKey(user.email);
        const encryptedCat = encryptData(entry.category, key);
        push(ref(db, `users/${user.uid}/categories`), encryptedCat);
      }
      
    }
  };
  

  const handleDelete = (id) => {
    const entry = entries.find((e) => e.id === id);
    if (!entry) return;

    setRecentlyDeleted(entry);
    setShowUndo(true);
    setFadeUndo(false);
    setTimeout(() => setFadeUndo(true), 4000);
    setTimeout(() => {
      setShowUndo(false);
      setRecentlyDeleted(null);
    }, 5000);

    if (demoMode) {
      setEntries((prev) => prev.filter((e) => e.id !== id));
    } else {
      get(ref(db, `users/${user.uid}/entries`)).then((snapshot) => {
        const data = snapshot.val();
        if (data) {
          Object.entries(data).forEach(([key, value]) => {
            try {
              const decrypted = typeof value === "string" ? decryptData(value) : value;
              if (decrypted.id === id) {
                remove(ref(db, `users/${user.uid}/entries/${key}`));
              }
            } catch (err) {
              console.warn("Failed to decrypt during delete:", err);
            }
            
          });
        }
      });
    }
  };

  const handleUndo = () => {
    if (!recentlyDeleted) return;

    if (demoMode) {
      setEntries((prev) => [recentlyDeleted, ...prev]);
    } else {
      push(ref(db, `users/${user.uid}/entries`), recentlyDeleted);
    }

    setShowUndo(false);
    setRecentlyDeleted(null);
  };

  const handleDemoLogin = () => {
    setDemoTyping(true);
    setTimeout(() => {
      window.sessionStorage.setItem("demoMode", "true");
      setUser(DEMO_USER);
      setDemoMode(true);
      setEntries(DEMO_ENTRIES);
      setCategories(["Rent", "Salary"]);
      setAuthChecked(true);
      setDemoTyping(false);
    }, 1500);
  };

  const logout = () => {
    setUser(null);
    setDemoMode(false);
    window.sessionStorage.removeItem("demoMode");
    signOut(auth);
  };

  if (!authChecked) return <div style={{ padding: "40px" }}>Loading...</div>;

  if (!user) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        {showSignup ? (
          <Signup onSignup={setUser} />
        ) : (
          <Login onLogin={setUser} onDemoLogin={handleDemoLogin} demoTyping={demoTyping} />
        )}
        <button onClick={() => setShowSignup(!showSignup)} style={{ marginTop: "20px" }}>
          {showSignup ? "← Back to Login" : "Create an Account →"}
        </button>
      </div>
    );
  }

  return (
    <div className="app-container" style={{ fontFamily: "Helvetica, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Income & Expense Tracker</h1>
        <button onClick={logout}>Sign Out</button>
      </div>
      <Form onSubmit={handleNewEntry} categoryList={categories} onDeleteCategory={handleDeleteCategory} />

      <EntryTable entries={entries} onDelete={handleDelete} />
      <Dashboard entries={entries} />

      {showUndo && (
        <div
          style={{
            position: "fixed",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#333",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "6px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            zIndex: 1000,
            opacity: fadeUndo ? 0 : 1,
            transition: "opacity 1s ease"
          }}
        >
          Entry deleted.
          <button
            onClick={handleUndo}
            style={{
              marginLeft: "10px",
              color: "#4caf50",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Undo
          </button>
        </div>
      )}
    </div>
  );
}

