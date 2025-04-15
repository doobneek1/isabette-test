// // // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // // import Form from './components/Form';
// // // // // // // // // // // // // import EntryTable from './components/EntryTable';
// // // // // // // // // // // // // import { loadFromLocalStorage, saveToLocalStorage } from './utils/storage';

// // // // // // // // // // // // // export default function App() {
// // // // // // // // // // // // //   const [entries, setEntries] = useState([]);

// // // // // // // // // // // // //   // Load entries from localStorage when the app loads
// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     const savedEntries = loadFromLocalStorage();
// // // // // // // // // // // // //     setEntries(savedEntries);
// // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // //   // Save entries to localStorage whenever they change
// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     if (entries.length > 0) {
// // // // // // // // // // // // //       saveToLocalStorage(entries);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   }, [entries]);

// // // // // // // // // // // // //   const handleNewEntry = (entry) => {
// // // // // // // // // // // // //     setEntries((prevEntries) => [...prevEntries, entry]);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const handleDeleteEntry = (id) => {
// // // // // // // // // // // // //     setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const handleEditEntry = (id, updatedEntry) => {
// // // // // // // // // // // // //     setEntries((prevEntries) =>
// // // // // // // // // // // // //       prevEntries.map((entry) => (entry.id === id ? updatedEntry : entry))
// // // // // // // // // // // // //     );
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div className="app-container">
// // // // // // // // // // // // //       <h1>Income & Expense Tracker</h1>
// // // // // // // // // // // // //       <Form onSubmit={handleNewEntry} />
// // // // // // // // // // // // //       <EntryTable entries={entries} onDelete={handleDeleteEntry} onEdit={handleEditEntry} />
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // }
// // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // import Form from './components/Form';
// // // // // // // // // // // // import EntryTable from './components/EntryTable';
// // // // // // // // // // // // import { loadFromLocalStorage, saveToLocalStorage } from './utils/storage';

// // // // // // // // // // // // export default function App() {
// // // // // // // // // // // //   const [entries, setEntries] = useState([]);

// // // // // // // // // // // //   // Load entries from localStorage when the app loads
// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     const savedEntries = loadFromLocalStorage();
// // // // // // // // // // // //     setEntries(savedEntries || []);  // Ensure it's always an array
// // // // // // // // // // // //   }, []);

// // // // // // // // // // // //   // Save entries to localStorage whenever they change
// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     saveToLocalStorage(entries);
// // // // // // // // // // // //   }, [entries]);

// // // // // // // // // // // //   const handleNewEntry = (entry) => {
// // // // // // // // // // // //     setEntries((prevEntries) => [...prevEntries, entry]);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const handleDeleteEntry = (id) => {
// // // // // // // // // // // //     setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const handleEditEntry = (id, updatedEntry) => {
// // // // // // // // // // // //     setEntries((prevEntries) =>
// // // // // // // // // // // //       prevEntries.map((entry) => (entry.id === id ? updatedEntry : entry))
// // // // // // // // // // // //     );
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="app-container">
// // // // // // // // // // // //       <h1>Income & Expense Tracker</h1>
// // // // // // // // // // // //       <Form onSubmit={handleNewEntry} />
// // // // // // // // // // // //       <EntryTable entries={entries} onDelete={handleDeleteEntry} onEdit={handleEditEntry} />
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }
// // // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // // import Form from './components/Form';
// // // // // // // // // // // import EntryTable from './components/EntryTable';

// // // // // // // // // // // export default function App() {
// // // // // // // // // // //   const [entries, setEntries] = useState([]);

// // // // // // // // // // //   const handleNewEntry = (entry) => {
// // // // // // // // // // //     setEntries((prevEntries) => [...prevEntries, entry]);
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleDeleteEntry = (id) => {
// // // // // // // // // // //     setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleEditEntry = (id, updatedEntry) => {
// // // // // // // // // // //     setEntries((prevEntries) =>
// // // // // // // // // // //       prevEntries.map((entry) => (entry.id === id ? updatedEntry : entry))
// // // // // // // // // // //     );
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="app-container">
// // // // // // // // // // //       <h1>Income & Expense Tracker</h1>
// // // // // // // // // // //       <Form onSubmit={handleNewEntry} />
// // // // // // // // // // //       <EntryTable
// // // // // // // // // // //         entries={entries}
// // // // // // // // // // //         onDelete={handleDeleteEntry}
// // // // // // // // // // //         onEdit={handleEditEntry}
// // // // // // // // // // //       />
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // }
// // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // import Form from './components/Form';
// // // // // // // // // // import EntryTable from './components/EntryTable';

// // // // // // // // // // export default function App() {
// // // // // // // // // //   const [entries, setEntries] = useState([]);

// // // // // // // // // //   // Load entries from localStorage when the app loads
// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const savedEntries = localStorage.getItem('entries');
// // // // // // // // // //     if (savedEntries) {
// // // // // // // // // //       setEntries(JSON.parse(savedEntries));
// // // // // // // // // //     }
// // // // // // // // // //   }, []);

// // // // // // // // // //   // Save entries to localStorage whenever they change
// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     if (entries.length > 0) {
// // // // // // // // // //       localStorage.setItem('entries', JSON.stringify(entries));
// // // // // // // // // //     }
// // // // // // // // // //   }, [entries]);

// // // // // // // // // //   const handleNewEntry = (entry) => {
// // // // // // // // // //     setEntries((prevEntries) => [...prevEntries, entry]);
// // // // // // // // // //   };

// // // // // // // // // //   const handleDeleteEntry = (id) => {
// // // // // // // // // //     setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
// // // // // // // // // //   };

// // // // // // // // // //   const handleEditEntry = (id, updatedEntry) => {
// // // // // // // // // //     setEntries((prevEntries) =>
// // // // // // // // // //       prevEntries.map((entry) => (entry.id === id ? updatedEntry : entry))
// // // // // // // // // //     );
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="app-container">
// // // // // // // // // //       <h1>Income & Expense Tracker</h1>
// // // // // // // // // //       <Form onSubmit={handleNewEntry} />
// // // // // // // // // //       <EntryTable
// // // // // // // // // //         entries={entries}
// // // // // // // // // //         onDelete={handleDeleteEntry}
// // // // // // // // // //         onEdit={handleEditEntry}
// // // // // // // // // //       />
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }
// // // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // // import Form from './components/Form';
// // // // // // // // // import EntryTable from './components/EntryTable';
// // // // // // // // // import { db } from './firebase';
// // // // // // // // // import { ref, onValue, push, remove, update } from 'firebase/database';

// // // // // // // // // export default function App() {
// // // // // // // // //   const [entries, setEntries] = useState([]);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const entriesRef = ref(db, 'entries');
// // // // // // // // //     const unsubscribe = onValue(entriesRef, (snapshot) => {
// // // // // // // // //       const data = snapshot.val();
// // // // // // // // //       const loadedEntries = data
// // // // // // // // //         ? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
// // // // // // // // //         : [];
// // // // // // // // //       setEntries(loadedEntries);
// // // // // // // // //     });

// // // // // // // // //     return () => unsubscribe(); // cleanup on unmount
// // // // // // // // //   }, []);

// // // // // // // // //   const handleNewEntry = (entry) => {
// // // // // // // // //     push(ref(db, 'entries'), entry);
// // // // // // // // //   };

// // // // // // // // //   const handleDeleteEntry = (id) => {
// // // // // // // // //     remove(ref(db, `entries/${id}`));
// // // // // // // // //   };

// // // // // // // // //   const handleEditEntry = (id, updatedEntry) => {
// // // // // // // // //     update(ref(db, `entries/${id}`), updatedEntry);
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="app-container">
// // // // // // // // //       <h1>Income & Expense Tracker</h1>
// // // // // // // // //       <Form onSubmit={handleNewEntry} />
// // // // // // // // //       <EntryTable
// // // // // // // // //         entries={entries}
// // // // // // // // //         onDelete={handleDeleteEntry}
// // // // // // // // //         onEdit={handleEditEntry}
// // // // // // // // //       />
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // import Form from "./components/Form";
// // // // // // // // import EntryTable from "./components/EntryTable";
// // // // // // // // import { db, ref, push, onValue, remove, set } from "./firebase";

// // // // // // // // export default function App() {
// // // // // // // //   const [entries, setEntries] = useState([]);
// // // // // // // //   const [editingEntry, setEditingEntry] = useState(null); // New!
// // // // // // // //   useEffect(() => {
// // // // // // // //     const entriesRef = ref(db, "entries");
// // // // // // // //     onValue(entriesRef, (snapshot) => {
// // // // // // // //       const data = snapshot.val();
// // // // // // // //       const loaded = data
// // // // // // // //         ? Object.entries(data).map(([id, value]) => ({ id, ...value }))
// // // // // // // //         : [];
// // // // // // // //       setEntries(loaded);
// // // // // // // //     });
// // // // // // // //   }, []);
  

// // // // // // // //   const handleNewEntry = (entry) => {
// // // // // // // //     if (editingEntry) {
// // // // // // // //       const entryRef = ref(db, `entries/${editingEntry.id}`);
// // // // // // // //       set(entryRef, entry);
// // // // // // // //       setEditingEntry(null); // reset editing
// // // // // // // //     } else {
// // // // // // // //       const entriesRef = ref(db, "entries");
// // // // // // // //       push(entriesRef, entry);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleDeleteEntry = (id) => {
// // // // // // // //     const entryRef = ref(db, `entries/${id}`);
// // // // // // // //     remove(entryRef);
// // // // // // // //   };

// // // // // // // //   const handleEditEntry = (id, entry) => {
// // // // // // // //     setEditingEntry({ id, ...entry });
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="app-container">
// // // // // // // //       <h1>Income & Expense Tracker</h1>
// // // // // // // //       <Form onSubmit={handleNewEntry} editingEntry={editingEntry} />
// // // // // // // //       <EntryTable
// // // // // // // //         entries={entries}
// // // // // // // //         onDelete={handleDeleteEntry}
// // // // // // // //         onEdit={handleEditEntry}
// // // // // // // //       />
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // import Form from "./components/Form";
// // // // // // // import EntryTable from "./components/EntryTable";
// // // // // // // import { db, ref, push, onValue, remove, set } from "./firebase";

// // // // // // // export default function App() {
// // // // // // //   const [entries, setEntries] = useState([]);
// // // // // // //   const [editingEntry, setEditingEntry] = useState(null);

// // // // // // //   useEffect(() => {
// // // // // // //     const entriesRef = ref(db, "entries");
// // // // // // //     onValue(entriesRef, (snapshot) => {
// // // // // // //       const data = snapshot.val();
// // // // // // //       const loaded = data
// // // // // // //         ? Object.entries(data).map(([id, value]) => ({ id, ...value }))
// // // // // // //         : [];
// // // // // // //       setEntries(loaded);
// // // // // // //     });
// // // // // // //   }, []);

// // // // // // //   const handleNewEntry = (entry) => {
// // // // // // //     if (editingEntry) {
// // // // // // //       const entryRef = ref(db, `entries/${editingEntry.id}`);
// // // // // // //       set(entryRef, entry);
// // // // // // //       setEditingEntry(null);
// // // // // // //     } else {
// // // // // // //       const entriesRef = ref(db, "entries");
// // // // // // //       push(entriesRef, entry);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleDeleteEntry = (id) => {
// // // // // // //     const entryRef = ref(db, `entries/${id}`);
// // // // // // //     remove(entryRef);
// // // // // // //   };

// // // // // // //   const handleEditEntry = (entry) => {
// // // // // // //     setEditingEntry(entry);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="app-container">
// // // // // // //       <h1>Income & Expense Tracker</h1>
// // // // // // //       <Form onSubmit={handleNewEntry} editingEntry={editingEntry} />
// // // // // // //       <EntryTable
// // // // // // //         entries={entries}
// // // // // // //         onDelete={handleDeleteEntry}
// // // // // // //         onEdit={handleEditEntry}
// // // // // // //       />
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }
// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import Form from "./components/Form";
// // // // // // import EntryTable from "./components/EntryTable";
// // // // // // import { db, ref, push, onValue } from "./firebase";

// // // // // // export default function App() {
// // // // // //   const [entries, setEntries] = useState([]);
// // // // // //   const [categories, setCategories] = useState([]);

// // // // // //   useEffect(() => {
// // // // // //     const entriesRef = ref(db, "entries");
// // // // // //     onValue(entriesRef, (snapshot) => {
// // // // // //       const data = snapshot.val();
// // // // // //       const loaded = data
// // // // // //         ? Object.entries(data)
// // // // // //             .map(([id, value]) => ({ id, ...value }))
// // // // // //             .sort((a, b) => b.id - a.id)
// // // // // //         : [];
// // // // // //       setEntries(loaded.slice(0, 5)); // show only last 5
// // // // // //     });

// // // // // //     const categoryRef = ref(db, "categories");
// // // // // //     onValue(categoryRef, (snapshot) => {
// // // // // //       const data = snapshot.val();
// // // // // //       setCategories(data ? Object.values(data) : []);
// // // // // //     });
// // // // // //   }, []);

// // // // // //   const handleNewEntry = (entry) => {
// // // // // //     push(ref(db, "entries"), {
// // // // // //       ...entry,
// // // // // //       id: Date.now()
// // // // // //     });

// // // // // //     if (entry.category && !categories.includes(entry.category)) {
// // // // // //       push(ref(db, "categories"), entry.category);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="app-container">
// // // // // //       <h1>Income & Expense Tracker</h1>
// // // // // //       <Form onSubmit={handleNewEntry} categoryList={categories} />
// // // // // //       <EntryTable entries={entries} />
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // import React, { useEffect, useState } from "react";
// // // // // import Form from "./components/Form";
// // // // // import EntryTable from "./components/EntryTable";
// // // // // import { db, ref, push, onValue } from "./firebase";

// // // // // export default function App() {
// // // // //   const [entries, setEntries] = useState([]);
// // // // //   const [categories, setCategories] = useState([]);

// // // // //   useEffect(() => {
// // // // //     const categoryRef = ref(db, "categories");
// // // // //     onValue(categoryRef, (snapshot) => {
// // // // //       const firebaseCategories = snapshot.val()
// // // // //         ? Object.values(snapshot.val())
// // // // //         : [];
      
// // // // //       const customDefaults = [
// // // // //         "Food",
// // // // //         "Transportation",
// // // // //         "Healthcare",
// // // // //         "Income",
// // // // //       ];
  
// // // // //       // Combine and dedupe
// // // // //       const combined = [...new Set([...customDefaults, ...firebaseCategories])];
// // // // //       setCategories(combined);
// // // // //     });
// // // // //   }, []);
// // // // //   useEffect(() => {
// // // // //     console.log("Current entries:", entries);
// // // // //   }, [entries]);
  
// // // // //   useEffect(() => {
// // // // //     const entriesRef = ref(db, "entries");
// // // // //     onValue(entriesRef, (snapshot) => {
// // // // //       const data = snapshot.val();
// // // // //       const loaded = data
// // // // //         ? Object.entries(data)
// // // // //             .map(([id, value]) => ({ id, ...value }))
// // // // //             .sort((a, b) => b.id - a.id)
// // // // //         : [];
// // // // //         // setEntries(loaded.slice(0, 5));
// // // // //         setEntries(loaded.slice(0, 5));


// // // // //     });
// // // // //   }, []);
  

// // // // //   const handleNewEntry = (entry) => {
// // // // //     push(ref(db, "entries"), {
// // // // //       ...entry,
// // // // //       id: Date.now()
// // // // //     });

// // // // //     if (entry.category && !categories.includes(entry.category)) {
// // // // //       push(ref(db, "categories"), entry.category);
// // // // //     }
// // // // //   };


// // // // //   return (
// // // // //     <div className="app-container">
// // // // //       <h1>Income & Expense Tracker</h1>
// // // // //       <Form onSubmit={handleNewEntry} categoryList={categories} />
// // // // //       <EntryTable entries={entries} />
  
// // // // //       <div className="dashboard-info">
// // // // //         🏡 Rent Burden: <span id="rentBurden">-</span> |
// // // // //         💰 Taxes Owed: <span id="taxOwed">-</span>
// // // // //       </div>
  
// // // // //       <div id="firebaseChart" style={{ height: "500px", marginTop: "20px" }}></div>
// // // // //     </div> // ✅ closing div
// // // // //   );
  
// // // // // }



// // // // import React, { useEffect, useState } from "react";
// // // // import Form from "./components/Form";
// // // // import EntryTable from "./components/EntryTable";
// // // // import Dashboard from "./components/Dashboard"; // 👈 add this
// // // // import { db, ref, push, onValue } from "./firebase";

// // // // export default function App() {
// // // //   const [entries, setEntries] = useState([]);
// // // //   const [categories, setCategories] = useState([]);

// // // //   useEffect(() => {
// // // //     const categoryRef = ref(db, "categories");
// // // //     onValue(categoryRef, (snapshot) => {
// // // //       const firebaseCategories = snapshot.val()
// // // //         ? Object.values(snapshot.val())
// // // //         : [];

// // // //       const customDefaults = ["Food", "Transportation", "Healthcare", "Income"];
// // // //       const combined = [...new Set([...customDefaults, ...firebaseCategories])];
// // // //       setCategories(combined);
// // // //     });
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     const entriesRef = ref(db, "entries");
// // // //     onValue(entriesRef, (snapshot) => {
// // // //       const data = snapshot.val();
// // // //       const loaded = data
// // // //         ? Object.entries(data)
// // // //             .map(([id, value]) => ({ id, ...value }))
// // // //             .sort((a, b) => b.id - a.id)
// // // //         : [];
// // // //       setEntries(loaded.slice(0, 200)); // up to 200 for dashboard
// // // //     });
// // // //   }, []);

// // // //   const handleNewEntry = (entry) => {
// // // //     push(ref(db, "entries"), {
// // // //       ...entry,
// // // //       id: Date.now(),
// // // //     });

// // // //     if (entry.category && !categories.includes(entry.category)) {
// // // //       push(ref(db, "categories"), entry.category);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="app-container">
// // // //       <h1>Income & Expense Tracker</h1>
// // // //       <Form onSubmit={handleNewEntry} categoryList={categories} />
// // // //       <EntryTable entries={entries} />
// // // //       <Dashboard entries={entries} /> {/* 👈 your full dashboard lives here now */}
// // // //     </div>
// // // //   );
// // // // }
// import React, { useEffect, useState } from "react";
// import Form from "./components/Form";
// import EntryTable from "./components/EntryTable";
// import Dashboard from "./components/Dashboard";
// import { db, ref, push, onValue } from "./firebase";
// import { auth, provider } from "./firebase";
// import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

// export default function App() {
//   const [user, setUser] = useState(null);
//   const [entries, setEntries] = useState([]);
//   const [categories, setCategories] = useState([]);

//   const allowedEmail = "doobneek@gmail.com"; // 🔐 Replace this with your Google email

//   // 🔐 Auth handling
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (u) => {
//       setUser(u);
//     });
//     return () => unsubscribe();
//   }, []);

//   const login = () => {
//     signInWithPopup(auth, provider).then((res) => setUser(res.user));
//   };

//   const logout = () => {
//     signOut(auth).then(() => setUser(null));
//   };

//   // ❌ Block unauthorized users
//   if (!user) {
//     return (
//       <div style={{ padding: "40px", textAlign: "center" }}>
//         <h2>Please log in to access your tracker</h2>
//         <button onClick={login}>Sign in with Google</button>
//       </div>
//     );
//   }

//   if (user.email !== allowedEmail) {
//     return (
//       <div style={{ padding: "40px", textAlign: "center" }}>
//         <h2>⛔ Access Denied</h2>
//         <p>This app is restricted to authorized users only.</p>
//         <button onClick={logout}>Sign out</button>
//       </div>
//     );
//   }
  

//   // 📚 Load Categories
//   useEffect(() => {
//     const categoryRef = ref(db, "categories");
//     onValue(categoryRef, (snapshot) => {
//       const firebaseCategories = snapshot.val()
//         ? Object.values(snapshot.val())
//         : [];

//       const customDefaults = ["Food", "Transportation", "Healthcare", "Income"];
//       const combined = [...new Set([...customDefaults, ...firebaseCategories])];
//       setCategories(combined);
//     });
//   }, []);

//   // 📥 Load Entries
//   useEffect(() => {
//     const entriesRef = ref(db, "entries");
//     onValue(entriesRef, (snapshot) => {
//       const data = snapshot.val();
//       const loaded = data
//         ? Object.entries(data)
//             .map(([id, value]) => ({ id, ...value }))
//             .sort((a, b) => b.id - a.id)
//         : [];
//       setEntries(loaded.slice(0, 200));
//     });
//   }, []);

//   const handleNewEntry = (entry) => {
//     push(ref(db, "entries"), {
//       ...entry,
//       id: Date.now(),
//     });

//     if (entry.category && !categories.includes(entry.category)) {
//       push(ref(db, "categories"), entry.category);
//     }
//   };

//   return (
//     <div className="app-container">
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <h1>Income & Expense Tracker</h1>
//         <button onClick={logout}>Sign Out</button>
//       </div>
//       <Form onSubmit={handleNewEntry} categoryList={categories} />
//       <EntryTable entries={entries} />
//       <Dashboard entries={entries} />
//     </div>
//   );
// }

// // import React, { useEffect, useState } from "react";
// // import Form from "./components/Form";
// // import EntryTable from "./components/EntryTable";
// // import Dashboard from "./components/Dashboard";
// // import { db, ref, push, onValue } from "./firebase";
// // import { auth, provider } from "./firebase";
// // import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

// // const ALLOWED_EMAIL = "doobneek@gmail.com"; // ✅ your authorized user

// // export default function App() {
// //   const [user, setUser] = useState(null);
// //   const [entries, setEntries] = useState([]);
// //   const [categories, setCategories] = useState([]);

// //   const login = () => {
// //     signInWithPopup(auth, provider).then((res) => {
// //       setUser(res.user);
// //     });
// //   };

// //   const logout = () => {
// //     signOut(auth).then(() => setUser(null));
// //   };

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (user) => {
// //       setUser(user);
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   // 🧱 Only load data if logged in AND email matches
// //   useEffect(() => {
// //     if (!user || user.email !== ALLOWED_EMAIL) return;

// //     const categoryRef = ref(db, "categories");
// //     onValue(categoryRef, (snapshot) => {
// //       const firebaseCategories = snapshot.val()
// //         ? Object.values(snapshot.val())
// //         : [];
// //       const customDefaults = ["Food", "Transportation", "Healthcare", "Income"];
// //       const combined = [...new Set([...customDefaults, ...firebaseCategories])];
// //       setCategories(combined);
// //     });

// //     const entriesRef = ref(db, "entries");
// //     onValue(entriesRef, (snapshot) => {
// //       const data = snapshot.val();
// //       const loaded = data
// //         ? Object.entries(data)
// //             .map(([id, value]) => ({ id, ...value }))
// //             .sort((a, b) => b.id - a.id)
// //         : [];
// //       setEntries(loaded.slice(0, 200));
// //     });
// //   }, [user]);

// //   const handleNewEntry = (entry) => {
// //     if (!user || user.email !== ALLOWED_EMAIL) return;
// //     push(ref(db, "entries"), {
// //       ...entry,
// //       id: Date.now(),
// //     });

// //     if (entry.category && !categories.includes(entry.category)) {
// //       push(ref(db, "categories"), entry.category);
// //     }
// //   };

// //   // 🚪 Block access if not signed in or wrong email
// //   if (!user) {
// //     return (
// //       <div style={{ padding: "40px", textAlign: "center" }}>
// //         <h2>🔐 Please log in to access your tracker</h2>
// //         <button onClick={login}>Sign in with Google</button>
// //       </div>
// //     );
// //   }

// //   if (user.email !== ALLOWED_EMAIL) {
// //     return (
// //       <div style={{ padding: "40px", textAlign: "center", color: "red" }}>
// //         <h2>⛔ Access Denied</h2>
// //         <p>This app is restricted to a specific account.</p>
// //         <button onClick={logout}>Switch Account</button>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="app-container">
// //       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
// //         <h1>Income & Expense Tracker</h1>
// //         <button onClick={logout}>Sign Out</button>
// //       </div>
// //       <Form onSubmit={handleNewEntry} categoryList={categories} />
// //       <EntryTable entries={entries} />
// //       <Dashboard entries={entries} />
// //     </div>
// //   );
// // }
// // import React, { useEffect, useState } from "react";
// // import Form from "./components/Form";
// // import EntryTable from "./components/EntryTable";
// // import Dashboard from "./components/Dashboard";
// // import { db, ref, push, onValue } from "./firebase";
// // import { auth, provider } from "./firebase";
// // import {
// //   signInWithRedirect,
// //   getRedirectResult,
// //   signOut,
// //   onAuthStateChanged,
// // } from "firebase/auth";

// // const ALLOWED_EMAIL = "doobneek@gmail.com"; // ✅ your authorized user

// // export default function App() {
// //   const [user, setUser] = useState(null);
  
// //   const [entries, setEntries] = useState([]);
// //   const [categories, setCategories] = useState([]);

// //   // 🔐 More reliable login
// //   const login = () => signInWithRedirect(auth, provider);
// //   const logout = () => signOut(auth).then(() => setUser(null));

// //   // 🔄 Restore auth on redirect login
// //   useEffect(() => {
// //     getRedirectResult(auth).then((result) => {
// //       if (result?.user) setUser(result.user);
// //     });
// //   }, []);

// //   // 🔍 Track auth state changes
// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
// //     return () => unsubscribe();
// //   }, []);

// //   // 📥 Load data only if authorized
// //   useEffect(() => {
// //     if (!user || user.email !== ALLOWED_EMAIL) return;

// //     const categoryRef = ref(db, "categories");
// //     onValue(categoryRef, (snapshot) => {
// //       const firebaseCategories = snapshot.val()
// //         ? Object.values(snapshot.val())
// //         : [];
// //       const customDefaults = ["Food", "Transportation", "Healthcare", "Income"];
// //       const combined = [...new Set([...customDefaults, ...firebaseCategories])];
// //       setCategories(combined);
// //     });

// //     const entriesRef = ref(db, "entries");
// //     onValue(entriesRef, (snapshot) => {
// //       const data = snapshot.val();
// //       const loaded = data
// //         ? Object.entries(data)
// //             .map(([id, value]) => ({ id, ...value }))
// //             .sort((a, b) => b.id - a.id)
// //         : [];
// //       setEntries(loaded.slice(0, 200));
// //     });
// //   }, [user]);

// //   const handleNewEntry = (entry) => {
// //     if (!user || user.email !== ALLOWED_EMAIL) return;

// //     push(ref(db, "entries"), {
// //       ...entry,
// //       id: Date.now(),
// //     });

// //     if (entry.category && !categories.includes(entry.category)) {
// //       push(ref(db, "categories"), entry.category);
// //     }
// //   };

// //   // 🚫 Block unauthorized access
// //   if (!user) {
// //     return (
// //       <div style={{ padding: "40px", textAlign: "center" }}>
// //         <h2>🔐 Please log in to access your tracker</h2>
// //         <button onClick={login}>Sign in with Google</button>
// //       </div>
// //     );
// //   }

// //   if (user.email !== ALLOWED_EMAIL) {
// //     return (
// //       <div style={{ padding: "40px", textAlign: "center", color: "red" }}>
// //         <h2>⛔ Access Denied</h2>
// //         <p>This app is restricted to a specific account.</p>
// //         <button onClick={logout}>Switch Account</button>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="app-container">
// //       <div
// //         style={{
// //           display: "flex",
// //           justifyContent: "space-between",
// //           alignItems: "center",
// //         }}
// //       >
// //         <h1>Income & Expense Tracker</h1>
// //         <button onClick={logout}>Sign Out</button>
// //       </div>
// //       <Form onSubmit={handleNewEntry} categoryList={categories} />
// //       <EntryTable entries={entries} />
// //       <Dashboard entries={entries} />
// //     </div>
// //   );
// // }









// // import React, { useEffect, useState } from "react";
// // import Form from "./components/Form";
// // import EntryTable from "./components/EntryTable";
// // import Dashboard from "./components/Dashboard";
// // import { db, ref, push, onValue } from "./firebase";
// // import { auth, provider } from "./firebase";
// // import {
// //   signInWithRedirect,
// //   getRedirectResult,
// //   signOut,
// //   onAuthStateChanged,
// // } from "firebase/auth";

// // const ALLOWED_EMAIL = "doobneek@gmail.com"; // ✅ your authorized user

// // export default function App() {
// //   const [user, setUser] = useState(null);
// //   const [authChecked, setAuthChecked] = useState(false); // ✅ added

// //   const [entries, setEntries] = useState([]);
// //   const [categories, setCategories] = useState([]);

// //   // 🔐 More reliable login
// //   const login = () => signInWithRedirect(auth, provider);
// //   const logout = () => signOut(auth).then(() => setUser(null));

// //   // 🔄 Restore auth on redirect login
// //   useEffect(() => {
// //     getRedirectResult(auth)
// //       .then((result) => {
// //         if (result?.user) {
// //           setUser(result.user);
// //           setAuthChecked(true);
// //         }
// //       })
// //       .catch((e) => {
// //         console.error("Redirect error:", e.message);
// //       });
// //   }, []);
  
  

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (u) => {
// //       if (!user && u) setUser(u);
// //       setAuthChecked(true);
// //     });
// //     return () => unsubscribe();
// //   }, []);
  
  

// //   // 📥 Load data only if authorized
// //   useEffect(() => {
// //     if (!user || user.email !== ALLOWED_EMAIL) return;

// //     const categoryRef = ref(db, "categories");
// //     onValue(categoryRef, (snapshot) => {
// //       const firebaseCategories = snapshot.val()
// //         ? Object.values(snapshot.val())
// //         : [];
// //       const customDefaults = ["Food", "Transportation", "Healthcare", "Income"];
// //       const combined = [...new Set([...customDefaults, ...firebaseCategories])];
// //       setCategories(combined);
// //     });

// //     const entriesRef = ref(db, "entries");
// //     onValue(entriesRef, (snapshot) => {
// //       const data = snapshot.val();
// //       const loaded = data
// //         ? Object.entries(data)
// //             .map(([id, value]) => ({ id, ...value }))
// //             .sort((a, b) => b.id - a.id)
// //         : [];
// //       setEntries(loaded.slice(0, 200));
// //     });
// //   }, [user]);

// //   const handleNewEntry = (entry) => {
// //     if (!user || user.email !== ALLOWED_EMAIL) return;

// //     push(ref(db, "entries"), {
// //       ...entry,
// //       id: Date.now(),
// //     });

// //     if (entry.category && !categories.includes(entry.category)) {
// //       push(ref(db, "categories"), entry.category);
// //     }
// //   };

// //   if (!authChecked) {
// //     return <div style={{ padding: "40px" }}>Loading...</div>;
// //   }
  
// //   if (!user) {
// //     return (
// //       <div style={{ padding: "40px", textAlign: "center" }}>
// //         <h2>🔐 Please log in to access your tracker</h2>
// //         <button onClick={login}>Sign in with Google</button>
// //       </div>
// //     );
// //   }
  

// //   if (user.email !== ALLOWED_EMAIL) {
// //     return (
// //       <div style={{ padding: "40px", textAlign: "center", color: "red" }}>
// //         <h2>⛔ Access Denied</h2>
// //         <p>This app is restricted to a specific account.</p>
// //         <button onClick={logout}>Switch Account</button>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="app-container">
// //       <div
// //         style={{
// //           display: "flex",
// //           justifyContent: "space-between",
// //           alignItems: "center",
// //         }}
// //       >
// //         <h1>Income & Expense Tracker</h1>
// //         <button onClick={logout}>Sign Out</button>
// //       </div>
// //       <Form onSubmit={handleNewEntry} categoryList={categories} />
// //       <EntryTable entries={entries} />
// //       <Dashboard entries={entries} />
// //     </div>
// //   );
// // }



// import React, { useEffect, useState } from "react";
// import Form from "./components/Form";
// import EntryTable from "./components/EntryTable";
// import Dashboard from "./components/Dashboard";
// import { db, ref, push, onValue } from "./firebase";
// import { auth, provider } from "./firebase";
// import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

// const ALLOWED_EMAIL = "doobneek@gmail.com";

// export default function App() {
//   const [user, setUser] = useState(null);
//   const [authChecked, setAuthChecked] = useState(false);
//   const [entries, setEntries] = useState([]);
//   const [categories, setCategories] = useState([]);

//   const login = () => signInWithPopup(auth, provider);
//   const logout = () => signOut(auth).then(() => setUser(null));

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (u) => {
//       setUser(u);
//       setAuthChecked(true);
//     });
//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     if (!user || user.email !== ALLOWED_EMAIL) return;

//     const categoryRef = ref(db, "categories");
//     onValue(categoryRef, (snapshot) => {
//       const firebaseCategories = snapshot.val() ? Object.values(snapshot.val()) : [];
//       const customDefaults = ["Food", "Transportation", "Healthcare", "Income"];
//       const combined = [...new Set([...customDefaults, ...firebaseCategories])];
//       setCategories(combined);
//     });

//     const entriesRef = ref(db, "entries");
//     onValue(entriesRef, (snapshot) => {
//       const data = snapshot.val();
//       const loaded = data
//         ? Object.entries(data).map(([id, value]) => ({ id, ...value })).sort((a, b) => b.id - a.id)
//         : [];
//       setEntries(loaded.slice(0, 200));
//     });
//   }, [user]);

//   const handleNewEntry = (entry) => {
//     if (!user || user.email !== ALLOWED_EMAIL) return;

//     push(ref(db, "entries"), { ...entry, id: Date.now() });

//     if (entry.category && !categories.includes(entry.category)) {
//       push(ref(db, "categories"), entry.category);
//     }
//   };

//   if (!authChecked) {
//     return <div style={{ padding: "40px" }}>Loading...</div>;
//   }

//   if (!user) {
//     return (
//       <div style={{ padding: "40px", textAlign: "center" }}>
//         <h2>🔐 Please log in to access your tracker</h2>
//         <button onClick={login}>Sign in with Google</button>
//       </div>
//     );
//   }

//   if (user.email !== ALLOWED_EMAIL) {
//     return (
//       <div style={{ padding: "40px", textAlign: "center", color: "red" }}>
//         <h2>⛔ Access Denied</h2>
//         <p>This app is restricted to a specific account.</p>
//         <button onClick={logout}>Switch Account</button>
//       </div>
//     );
//   }

//   return (
//     <div className="app-container">
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <h1>Income & Expense Tracker</h1>
//         <button onClick={logout}>Sign Out</button>
//       </div>
//       <Form onSubmit={handleNewEntry} categoryList={categories} />
//       <EntryTable entries={entries} />
//       <Dashboard entries={entries} />
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import EntryTable from "./components/EntryTable";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { db, ref, push, onValue } from "./firebase";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function App() {
  const [user, setUser] = useState(null);
  const [entries, setEntries] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!user) return;
    const categoryRef = ref(db, "categories");
    onValue(categoryRef, (snapshot) => {
      const firebaseCategories = snapshot.val()
        ? Object.values(snapshot.val())
        : [];
      const defaults = ["Food", "Transportation", "Healthcare", "Income"];
      const combined = [...new Set([...defaults, ...firebaseCategories])];
      setCategories(combined);
    });

    const entriesRef = ref(db, "entries");
    onValue(entriesRef, (snapshot) => {
      const data = snapshot.val();
      const loaded = data
        ? Object.entries(data)
            .map(([id, value]) => ({ id, ...value }))
            .sort((a, b) => b.id - a.id)
        : [];
      setEntries(loaded.slice(0, 200));
    });
  }, [user]);

  const handleNewEntry = (entry) => {
    if (!user) return;
    push(ref(db, "entries"), {
      ...entry,
      id: Date.now(),
    });

    if (entry.category && !categories.includes(entry.category)) {
      push(ref(db, "categories"), entry.category);
    }
  };

  const logout = () => signOut(auth);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <div className="app-container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Income & Expense Tracker</h1>
        <button onClick={logout}>Sign Out</button>
      </div>
      <Form onSubmit={handleNewEntry} categoryList={categories} />
      <EntryTable entries={entries} />
      <Dashboard entries={entries} />
    </div>
  );
}
