// import React, { useEffect, useState } from "react";
// import Form from "./components/Form";
// import EntryTable from "./components/EntryTable";
// import Dashboard from "./components/Dashboard";
// import Login from "./components/Login";
// import { db, ref, push, onValue, remove } from "./firebase";
// import { auth } from "./firebase";
// import { onAuthStateChanged, signOut } from "firebase/auth";

// export default function App() {
//   const [user, setUser] = useState(null);
//   const [authChecked, setAuthChecked] = useState(false);
//   const [entries, setEntries] = useState([]);
//   const [categories, setCategories] = useState([]);
  

//   // ✅ Auth check on load
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setUser(user);
//       setAuthChecked(true);
//     });
//     return () => unsubscribe();
//   }, []);

//   // ✅ Fetch data only after login
//   useEffect(() => {
//     if (!user) return;

//     const catRef = ref(db, "categories");
//     onValue(catRef, (snapshot) => {
//       const vals = snapshot.val() ? Object.values(snapshot.val()) : [];
//       const defaults = ["Food", "Transportation", "Healthcare", "Income"];
//       const combined = [...new Set([...defaults, ...vals])];
//       setCategories(combined);
//     });

//     const entriesRef = ref(db, "entries");
//     onValue(entriesRef, (snapshot) => {
//       const data = snapshot.val();
//       const loaded = data
//         ? Object.entries(data).map(([id, value]) => ({ id, ...value }))
//         : [];
//       setEntries(loaded.sort((a, b) => b.id - a.id).slice(0, 200));
//     });
//   }, [user]);

//   // ✅ Add new entry
//   const handleNewEntry = (entry) => {
//     if (!user) return;

//     const newEntry = {
//       ...entry,
//       id: Date.now()
//     };

//     push(ref(db, "entries"), newEntry);

//     if (entry.category && !categories.includes(entry.category)) {
//       push(ref(db, "categories"), entry.category);
//     }
//   };

//   // ✅ Delete entry
//   const handleDelete = (id) => {
//     const entryToDelete = entries.find((e) => e.id === id);
//     if (!entryToDelete) return;

//     const entriesRef = ref(db, "entries");
//     onValue(entriesRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         Object.entries(data).forEach(([key, value]) => {
//           if (value.id === id) {
//             remove(ref(db, `entries/${key}`));
//           }
//         });
//       }
//     }, { onlyOnce: true });
//   };

//   // ✅ Logout
//   const logout = () => signOut(auth);

//   // ⏳ Wait for auth to finish before rendering login or dashboard
//   if (!authChecked) {
//     return <div style={{ padding: "40px" }}>Loading...</div>;
//   }

//   // 🔐 Not logged in
//   if (!user) {
//     return <Login onLogin={setUser} />;
//   }

//   // ✅ Main App
//   return (
//     <div className="app-container">
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <h1>Income & Expense Tracker</h1>
//         <button onClick={logout}>Sign Out</button>
//       </div>
//       <Form onSubmit={handleNewEntry} categoryList={categories} />
//       <EntryTable entries={entries} onDelete={handleDelete} />
//       <Dashboard entries={entries} />
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import EntryTable from "./components/EntryTable";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { db, ref, push, onValue, remove } from "./firebase";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function App() {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [entries, setEntries] = useState([]);
  const [categories, setCategories] = useState([]);
  const [recentlyDeleted, setRecentlyDeleted] = useState(null);
  const [showUndo, setShowUndo] = useState(false);
  const [fadeUndo, setFadeUndo] = useState(false);

  // ✅ Auth check on load
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setAuthChecked(true);
    });
    return () => unsubscribe();
  }, []);

  // ✅ Fetch data only after login
  useEffect(() => {
    if (!user) return;

    const catRef = ref(db, "categories");
    onValue(catRef, (snapshot) => {
      const vals = snapshot.val() ? Object.values(snapshot.val()) : [];
      const defaults = ["Food", "Transportation", "Healthcare", "Income"];
      const combined = [...new Set([...defaults, ...vals])];
      setCategories(combined);
    });

    const entriesRef = ref(db, "entries");
    onValue(entriesRef, (snapshot) => {
      const data = snapshot.val();
      const loaded = data
        ? Object.entries(data).map(([id, value]) => ({ id, ...value }))
        : [];
      setEntries(loaded.sort((a, b) => b.id - a.id).slice(0, 200));
    });
  }, [user]);

  // ✅ Add new entry
  const handleNewEntry = (entry) => {
    if (!user) return;

    const newEntry = {
      ...entry,
      id: Date.now()
    };

    push(ref(db, "entries"), newEntry);

    if (entry.category && !categories.includes(entry.category)) {
      push(ref(db, "categories"), entry.category);
    }
  };

  // ✅ Delete entry with undo and fade-out popup
  const handleDelete = (id) => {
    const entryToDelete = entries.find((e) => e.id === id);
    if (!entryToDelete) return;

    setRecentlyDeleted(entryToDelete);
    setShowUndo(true);
    setFadeUndo(false);

    setTimeout(() => {
      setFadeUndo(true); // start fade
    }, 4000);

    setTimeout(() => {
      setShowUndo(false);
      setRecentlyDeleted(null);
    }, 5000);

    const entriesRef = ref(db, "entries");
    onValue(
      entriesRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          Object.entries(data).forEach(([key, value]) => {
            if (value.id === id) {
              remove(ref(db, `entries/${key}`));
            }
          });
        }
      },
      { onlyOnce: true }
    );
  };

  // ✅ Undo
  const handleUndo = () => {
    if (recentlyDeleted) {
      push(ref(db, "entries"), recentlyDeleted);
      setShowUndo(false);
      setRecentlyDeleted(null);
    }
  };

  // ✅ Logout
  const logout = () => signOut(auth);

  // ⏳ Wait for auth to finish before rendering login or dashboard
  if (!authChecked) {
    return <div style={{ padding: "40px" }}>Loading...</div>;
  }

  // 🔐 Not logged in
  if (!user) {
    return <Login onLogin={setUser} />;
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

      {/* ✅ Undo Popup with Fade */}
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
