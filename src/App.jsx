// // // // import React, { useEffect, useState } from "react";
// // // // import Form from "./components/Form";
// // // // import EntryTable from "./components/EntryTable";
// // // // import Dashboard from "./components/Dashboard";
// // // // import Login from "./components/Login";
// // // // import { db, ref, push, onValue, remove } from "./firebase";
// // // // import { auth } from "./firebase";
// // // // import { onAuthStateChanged, signOut } from "firebase/auth";

// // // // export default function App() {
// // // //   const [user, setUser] = useState(null);
// // // //   const [authChecked, setAuthChecked] = useState(false);
// // // //   const [entries, setEntries] = useState([]);
// // // //   const [categories, setCategories] = useState([]);
  

// // // //   // ✅ Auth check on load
// // // //   useEffect(() => {
// // // //     const unsubscribe = onAuthStateChanged(auth, (user) => {
// // // //       setUser(user);
// // // //       setAuthChecked(true);
// // // //     });
// // // //     return () => unsubscribe();
// // // //   }, []);

// // // //   // ✅ Fetch data only after login
// // // //   useEffect(() => {
// // // //     if (!user) return;

// // // //     const catRef = ref(db, `users/${user.uid}/categories`);
// // // //     onValue(catRef, (snapshot) => {
// // // //       const vals = snapshot.val() ? Object.values(snapshot.val()) : [];
// // // //       const defaults = ["Food", "Transportation", "Healthcare", "Income"];
// // // //       const combined = [...new Set([...defaults, ...vals])];
// // // //       setCategories(combined);
// // // //     });

// // // //     const entriesRef = ref(db, `users/${user.uid}/entries`);
// // // //     onValue(entriesRef, (snapshot) => {
// // // //       const data = snapshot.val();
// // // //       const loaded = data
// // // //         ? Object.entries(data).map(([id, value]) => ({ id, ...value }))
// // // //         : [];
// // // //       setEntries(loaded.sort((a, b) => b.id - a.id).slice(0, 200));
// // // //     });
// // // //   }, [user]);

// // // //   // ✅ Add new entry
// // // //   const handleNewEntry = (entry) => {
// // // //     if (!user) return;

// // // //     const newEntry = {
// // // //       ...entry,
// // // //       id: Date.now()
// // // //     };

// // // //     push(ref(db, `users/${user.uid}/entries`), newEntry);

// // // //     if (entry.category && !categories.includes(entry.category)) {
// // // //       push(ref(db, `users/${user.uid}/categories`), entry.category);
// // // //     }
// // // //   };

// // // //   // ✅ Delete entry
// // // //   const handleDelete = (id) => {
// // // //     const entryToDelete = entries.find((e) => e.id === id);
// // // //     if (!entryToDelete) return;

// // // //     const entriesRef = ref(db, `users/${user.uid}/entries`);
// // // //     onValue(entriesRef, (snapshot) => {
// // // //       const data = snapshot.val();
// // // //       if (data) {
// // // //         Object.entries(data).forEach(([key, value]) => {
// // // //           if (value.id === id) {
// // // //             remove(ref(db, `entries/${key}`));
// // // //           }
// // // //         });
// // // //       }
// // // //     }, { onlyOnce: true });
// // // //   };

// // // //   // ✅ Logout
// // // //   const logout = () => signOut(auth);

// // // //   // ⏳ Wait for auth to finish before rendering login or dashboard
// // // //   if (!authChecked) {
// // // //     return <div style={{ padding: "40px" }}>Loading...</div>;
// // // //   }

// // // //   // 🔐 Not logged in
// // // //   if (!user) {
// // // //     return <Login onLogin={setUser} />;
// // // //   }

// // // //   // ✅ Main App
// // // //   return (
// // // //     <div className="app-container">
// // // //       <div style={{ display: "flex", justifyContent: "space-between" }}>
// // // //         <h1>Income & Expense Tracker</h1>
// // // //         <button onClick={logout}>Sign Out</button>
// // // //       </div>
// // // //       <Form onSubmit={handleNewEntry} categoryList={categories} />
// // // //       <EntryTable entries={entries} onDelete={handleDelete} />
// // // //       <Dashboard entries={entries} />
// // // //     </div>
// // // //   );
// // // // }
// // // import React, { useEffect, useState } from "react";
// // // import Form from "./components/Form";
// // // import EntryTable from "./components/EntryTable";
// // // import Dashboard from "./components/Dashboard";
// // // import Login from "./components/Login";
// // // import { db, ref, push, onValue, remove } from "./firebase";
// // // import { auth } from "./firebase";
// // // import { onAuthStateChanged, signOut } from "firebase/auth";

// // // export default function App() {
// // //   const [user, setUser] = useState(null);
// // //   const [authChecked, setAuthChecked] = useState(false);
// // //   const [entries, setEntries] = useState([]);
// // //   const [categories, setCategories] = useState([]);
// // //   const [recentlyDeleted, setRecentlyDeleted] = useState(null);
// // //   const [showUndo, setShowUndo] = useState(false);
// // //   const [fadeUndo, setFadeUndo] = useState(false);

// // //   // ✅ Auth check on load
// // //   useEffect(() => {
// // //     const unsubscribe = onAuthStateChanged(auth, (user) => {
// // //       setUser(user);
// // //       setAuthChecked(true);
// // //     });
// // //     return () => unsubscribe();
// // //   }, []);

// // //   // ✅ Fetch data only after login
// // //   useEffect(() => {
// // //     if (!user) return;

// // //     const catRef = ref(db, `users/${user.uid}/categories`);
// // //     onValue(catRef, (snapshot) => {
// // //       const vals = snapshot.val() ? Object.values(snapshot.val()) : [];
// // //       const defaults = ["Food", "Transportation", "Healthcare", "Income"];
// // //       const combined = [...new Set([...defaults, ...vals])];
// // //       setCategories(combined);
// // //     });

// // //     const entriesRef = ref(db, `users/${user.uid}/entries`);
// // //     onValue(entriesRef, (snapshot) => {
// // //       const data = snapshot.val();
// // //       const loaded = data
// // //         ? Object.entries(data).map(([id, value]) => ({ id, ...value }))
// // //         : [];
// // //       setEntries(loaded.sort((a, b) => b.id - a.id).slice(0, 200));
// // //     });
// // //   }, [user]);

// // //   // ✅ Add new entry
// // //   const handleNewEntry = (entry) => {
// // //     if (!user) return;

// // //     const newEntry = {
// // //       ...entry,
// // //       id: Date.now()
// // //     };

// // //     push(ref(db, `users/${user.uid}/entries`), newEntry);

// // //     if (entry.category && !categories.includes(entry.category)) {
// // //       push(ref(db, `users/${user.uid}/categories`), entry.category);
// // //     }
// // //   };

// // //   // ✅ Delete entry with undo and fade-out popup
// // //   const handleDelete = (id) => {
// // //     const entryToDelete = entries.find((e) => e.id === id);
// // //     if (!entryToDelete) return;

// // //     setRecentlyDeleted(entryToDelete);
// // //     setShowUndo(true);
// // //     setFadeUndo(false);

// // //     setTimeout(() => {
// // //       setFadeUndo(true); // start fade
// // //     }, 4000);

// // //     setTimeout(() => {
// // //       setShowUndo(false);
// // //       setRecentlyDeleted(null);
// // //     }, 5000);

// // //     const entriesRef = ref(db, `users/${user.uid}/entries`);
// // //     onValue(
// // //       entriesRef,
// // //       (snapshot) => {
// // //         const data = snapshot.val();
// // //         if (data) {
// // //           Object.entries(data).forEach(([key, value]) => {
// // //             if (value.id === id) {
// // //               remove(ref(db, `entries/${key}`));
// // //             }
// // //           });
// // //         }
// // //       },
// // //       { onlyOnce: true }
// // //     );
// // //   };

// // //   // ✅ Undo
// // //   const handleUndo = () => {
// // //     if (recentlyDeleted) {
// // //       push(ref(db, `users/${user.uid}/entries`), recentlyDeleted);
// // //       setShowUndo(false);
// // //       setRecentlyDeleted(null);
// // //     }
// // //   };

// // //   // ✅ Logout
// // //   const logout = () => signOut(auth);

// // //   // ⏳ Wait for auth to finish before rendering login or dashboard
// // //   if (!authChecked) {
// // //     return <div style={{ padding: "40px" }}>Loading...</div>;
// // //   }

// // //   // 🔐 Not logged in
// // //   if (!user) {
// // //     return <Login onLogin={setUser} />;
// // //   }

// // //   return (
// // //     <div className="app-container" style={{ fontFamily: "Helvetica, sans-serif" }}>
// // //       <div style={{ display: "flex", justifyContent: "space-between" }}>
// // //         <h1>Income & Expense Tracker</h1>
// // //         <button onClick={logout}>Sign Out</button>
// // //       </div>
// // //       <Form onSubmit={handleNewEntry} categoryList={categories} />
// // //       <EntryTable entries={entries} onDelete={handleDelete} />
// // //       <Dashboard entries={entries} />

// // //       {/* ✅ Undo Popup with Fade */}
// // //       {showUndo && (
// // //         <div
// // //           style={{
// // //             position: "fixed",
// // //             bottom: "30px",
// // //             left: "50%",
// // //             transform: "translateX(-50%)",
// // //             background: "#333",
// // //             color: "#fff",
// // //             padding: "12px 20px",
// // //             borderRadius: "6px",
// // //             boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
// // //             zIndex: 1000,
// // //             opacity: fadeUndo ? 0 : 1,
// // //             transition: "opacity 1s ease"
// // //           }}
// // //         >
// // //           Entry deleted.
// // //           <button
// // //             onClick={handleUndo}
// // //             style={{
// // //               marginLeft: "10px",
// // //               color: "#4caf50",
// // //               background: "transparent",
// // //               border: "none",
// // //               cursor: "pointer",
// // //               fontWeight: "bold"
// // //             }}
// // //           >
// // //             Undo
// // //           </button>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }
// // import React, { useEffect, useState } from "react";
// // import Form from "./components/Form";
// // import EntryTable from "./components/EntryTable";
// // import Dashboard from "./components/Dashboard";
// // import Login from "./components/Login";
// // import { db, ref, push, onValue, remove } from "./firebase";
// // import { auth } from "./firebase";
// // import { onAuthStateChanged, signOut } from "firebase/auth";

// // const DEMO_USER = { email: "hello", uid: "demo" };
// // const DEMO_ENTRIES = [
// //   {
// //     id: 3453385008862,
// //     startDate: "2025-04-21",
// //     endDate: "",
// //     amount: 2217.32,
// //     category: "Salary",
// //     taxed: false,
// //     type: "Fixed",
// //     recurrenceCount: 1,
// //     isIncome: true
// //   },
// //   {
// //     id: 4844398147930,
// //     startDate: "2025-04-22",
// //     endDate: "",
// //     amount: 721.0,
// //     category: "Interest",
// //     taxed: true,
// //     type: "Fixed",
// //     recurrenceCount: 1,
// //     isIncome: true
// //   },
// //   {
// //     id: 1115402766155,
// //     startDate: "2025-04-20",
// //     endDate: "",
// //     amount: 2283.66,
// //     category: "Tutoring",
// //     taxed: false,
// //     type: "Fixed",
// //     recurrenceCount: 1,
// //     isIncome: true
// //   },
// //   {
// //     id: 4784533967152,
// //     startDate: "2025-04-06",
// //     endDate: "",
// //     amount: 2872.92,
// //     category: "Insurance",
// //     taxed: false,
// //     type: "Recurring",
// //     recurrenceCount: 1,
// //     isIncome: false
// //   },
// //   {
// //     id: 7661160537249,
// //     startDate: "2025-04-11",
// //     endDate: "",
// //     amount: 264.04,
// //     category: "Freelance Work",
// //     taxed: false,
// //     type: "Fixed",
// //     recurrenceCount: 1,
// //     isIncome: true
// //   },
// //   {
// //     id: 2222796825072,
// //     startDate: "2025-04-10",
// //     endDate: "",
// //     amount: 166.1,
// //     category: "Healthcare",
// //     taxed: false,
// //     type: "Fixed",
// //     recurrenceCount: 1,
// //     isIncome: false
// //   },
// //   {
// //     id: 2777543012274,
// //     startDate: "2025-04-08",
// //     endDate: "",
// //     amount: 1158.97,
// //     category: "Groceries",
// //     taxed: false,
// //     type: "Fixed",
// //     recurrenceCount: 1,
// //     isIncome: false
// //   },
// //   {
// //     id: 4686607816019,
// //     startDate: "2025-04-15",
// //     endDate: "",
// //     amount: 2020.42,
// //     category: "Dining Out",
// //     taxed: false,
// //     type: "Recurring",
// //     recurrenceCount: 1,
// //     isIncome: false
// //   },
// //   {
// //     id: 7676364570482,
// //     startDate: "2025-04-23",
// //     endDate: "",
// //     amount: 831.75,
// //     category: "Grants",
// //     taxed: true,
// //     type: "Fixed",
// //     recurrenceCount: 1,
// //     isIncome: true
// //   },
// //   {
// //     id: 1566170331051,
// //     startDate: "2025-04-30",
// //     endDate: "",
// //     amount: 2420.99,
// //     category: "Bonus",
// //     taxed: true,
// //     type: "Fixed",
// //     recurrenceCount: 1,
// //     isIncome: true
// //   },
// //   {
// //     id: 6535001295567,
// //     startDate: "2025-04-13",
// //     endDate: "",
// //     amount: 661.5,
// //     category: "Groceries",
// //     taxed: false,
// //     type: "Fixed",
// //     recurrenceCount: 1,
// //     isIncome: false
// //   },
// //   {
// //     id: 5656358177667,
// //     startDate: "2025-04-16",
// //     endDate: "",
// //     amount: 444.7,
// //     category: "Education",
// //     taxed: false,
// //     type: "Recurring",
// //     recurrenceCount: 1,
// //     isIncome: false
// //   },
// //   {
// //     id: 7366856944791,
// //     startDate: "2025-04-24",
// //     endDate: "",
// //     amount: 681.38,
// //     category: "Utilities",
// //     taxed: false,
// //     type: "Recurring",
// //     recurrenceCount: 1,
// //     isIncome: false
// //   },
// //   {
// //     id: 2932138724758,
// //     startDate: "2025-04-05",
// //     endDate: "",
// //     amount: 483.94,
// //     category: "Groceries",
// //     taxed: false,
// //     type: "Fixed",
// //     recurrenceCount: 1,
// //     isIncome: false
// //   },
// //   {
// //     id: 7714686446661,
// //     startDate: "2025-04-06",
// //     endDate: "",
// //     amount: 1799.79,
// //     category: "Healthcare",
// //     taxed: false,
// //     type: "Fixed",
// //     recurrenceCount: 1,
// //     isIncome: false
// //   },
// //   {
// //     id: 5693329282832,
// //     startDate: "2025-04-15",
// //     endDate: "",
// //     amount: 2312.74,
// //     category: "Transportation",
// //     taxed: false,
// //     type: "Fixed",
// //     recurrenceCount: 1,
// //     isIncome: false
// //   },
// //   {
// //     id: 1057783303331,
// //     startDate: "2025-04-11",
// //     endDate: "",
// //     amount: 2862.83,
// //     category: "Consulting",
// //     taxed: false,
// //     type: "Fixed",
// //     recurrenceCount: 1,
// //     isIncome: true
// //   },
// //   {
// //     id: 6251135679598,
// //     startDate: "2025-04-29",
// //     endDate: "",
// //     amount: 2529.76,
// //     category: "Transportation",
// //     taxed: false,
// //     type: "Fixed",
// //     recurrenceCount: 1,
// //     isIncome: false
// //   },
// //   {
// //     id: 9595621798971,
// //     startDate: "2025-04-17",
// //     endDate: "",
// //     amount: 87.85,
// //     category: "Grants",
// //     taxed: false,
// //     type: "Fixed",
// //     recurrenceCount: 1,
// //     isIncome: true
// //   },
// //   {
// //     id: 2018935689015,
// //     startDate: "2025-04-30",
// //     endDate: "",
// //     amount: 745.39,
// //     category: "Education",
// //     taxed: false,
// //     type: "Recurring",
// //     recurrenceCount: 1,
// //     isIncome: false
// //   }
// // ];


// // export default function App() {
// //   const [user, setUser] = useState(null);
// //   const [authChecked, setAuthChecked] = useState(false);
// //   const [entries, setEntries] = useState([]);
// //   const [categories, setCategories] = useState([]);
// //   const [recentlyDeleted, setRecentlyDeleted] = useState(null);
// //   const [showUndo, setShowUndo] = useState(false);
// //   const [fadeUndo, setFadeUndo] = useState(false);
// //   const [demoMode, setDemoMode] = useState(false);

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (authUser) => {
// //       // Use localStorage override if 'hello' login was detected
// //       const localDemo = window.sessionStorage.getItem("demoMode");
// //       if (localDemo) {
// //         setUser(DEMO_USER);
// //         setDemoMode(true);
// //         setEntries(DEMO_ENTRIES);
// //         setCategories(["Rent", "Salary"]);
// //         setAuthChecked(true);
// //       } else {
// //         setUser(authUser);
// //         setAuthChecked(true);
// //       }
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   useEffect(() => {
// //     if (!user || demoMode) return;

// //     const catRef = ref(db, `users/${user.uid}/categories`);
// //     onValue(catRef, (snapshot) => {
// //       const vals = snapshot.val() ? Object.values(snapshot.val()) : [];
// //       const defaults = ["Food", "Transportation", "Healthcare", "Income"];
// //       const combined = [...new Set([...defaults, ...vals])];
// //       setCategories(combined);
// //     });

// //     const entriesRef = ref(db, `users/${user.uid}/entries`);
// //     onValue(entriesRef, (snapshot) => {
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
// //     const entryToDelete = entries.find((e) => e.id === id);
// //     if (!entryToDelete) return;

// //     setRecentlyDeleted(entryToDelete);
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
// //       const entriesRef = ref(db, `users/${user.uid}/entries`);
// //       onValue(
// //         entriesRef,
// //         (snapshot) => {
// //           const data = snapshot.val();
// //           if (data) {
// //             Object.entries(data).forEach(([key, value]) => {
// //               if (value.id === id) {
// //                 remove(ref(db, `entries/${key}`));
// //               }
// //             });
// //           }
// //         },
// //         { onlyOnce: true }
// //       );
// //     }
// //   };

// //   const handleUndo = () => {
// //     if (recentlyDeleted) {
// //       if (demoMode) {
// //         setEntries((prev) => [recentlyDeleted, ...prev]);
// //       } else {
// //         push(ref(db, `users/${user.uid}/entries`), recentlyDeleted);
// //       }
// //       setShowUndo(false);
// //       setRecentlyDeleted(null);
// //     }
// //   };

// //   const logout = () => {
// //     setUser(null);
// //     setDemoMode(false);
// //     window.sessionStorage.removeItem("demoMode");
// //     signOut(auth);
// //   };

// //   const handleDemoLogin = () => {
// //     window.sessionStorage.setItem("demoMode", "true");
// //     setUser(DEMO_USER);
// //     setDemoMode(true);
// //     setEntries(DEMO_ENTRIES);
// //     setCategories(["Rent", "Salary"]);
// //     setAuthChecked(true);
// //   };

// //   if (!authChecked) return <div style={{ padding: "40px" }}>Loading...</div>;
// //   if (!user) return <Login onLogin={setUser} onDemoLogin={handleDemoLogin} />;

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
// import { db, ref, push, onValue, remove } from "./firebase";
// import { auth } from "./firebase";
// import { onAuthStateChanged, signOut } from "firebase/auth";

// // Demo setup
// const DEMO_USER = { email: "hello", uid: "demo" };
// const DEMO_ENTRIES = [ /* your prefilled demo data from previous message */ ];

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

//   // Auth check on load
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

//   // Load Firebase data
//   useEffect(() => {
//     if (!user || demoMode) return;

//     const catRef = ref(db, `users/${user.uid}/categories`);
//     onValue(catRef, (snapshot) => {
//       const vals = snapshot.val() ? Object.values(snapshot.val()) : [];
//       const defaults = ["Food", "Transportation", "Healthcare", "Income"];
//       setCategories([...new Set([...defaults, ...vals])]);
//     });

//     const entriesRef = ref(db, `users/${user.uid}/entries`);
//     onValue(entriesRef, (snapshot) => {
//       const data = snapshot.val();
//       const loaded = data
//         ? Object.entries(data).map(([id, value]) => ({ id, ...value }))
//         : [];
//       setEntries(loaded.sort((a, b) => b.id - a.id).slice(0, 200));
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
//       push(ref(db, `users/${user.uid}/entries`), newEntry);
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
//       const entriesRef = ref(db, `users/${user.uid}/entries`);
//       onValue(entriesRef, (snapshot) => {
//         const data = snapshot.val();
//         if (data) {
//           Object.entries(data).forEach(([key, value]) => {
//             if (value.id === id) {
//               remove(ref(db, `users/${user.uid}/entries/${key}`));
//             }
//           });
//         }
//       }, { onlyOnce: true });
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
//     window.sessionStorage.setItem("demoMode", "true");
//     setUser(DEMO_USER);
//     setDemoMode(true);
//     setEntries(DEMO_ENTRIES);
//     setCategories(["Rent", "Salary"]);
//     setAuthChecked(true);
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
//           <Login onLogin={setUser} onDemoLogin={handleDemoLogin} />
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

    get(ref(db, `users/${user.uid}/categories`)).then((snapshot) => {
      const vals = snapshot.val() ? Object.values(snapshot.val()) : [];
      const defaults = ["Food", "Transportation", "Healthcare", "Income"];
      setCategories([...new Set([...defaults, ...vals])]);
    });

    get(ref(db, `users/${user.uid}/entries`)).then((snapshot) => {
      const data = snapshot.val();
      const loaded = data
        ? Object.entries(data).map(([id, value]) => ({ id, ...value }))
        : [];
      setEntries(loaded.sort((a, b) => b.id - a.id).slice(0, 200));
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
      push(ref(db, `users/${user.uid}/entries`), newEntry);
      if (entry.category && !categories.includes(entry.category)) {
        push(ref(db, `users/${user.uid}/categories`), entry.category);
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
            if (value.id === id) {
              remove(ref(db, `users/${user.uid}/entries/${key}`));
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
      <Form onSubmit={handleNewEntry} categoryList={categories} />
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
