// export const loadFromLocalStorage = () => {
//     try {
//       const data = localStorage.getItem('entries');
//       return data ? JSON.parse(data) : [];
//     } catch (e) {
//       console.error("Error loading data", e);
//       return [];
//     }
//   };
  
//   export const saveToLocalStorage = (entries) => {
//     try {
//       localStorage.setItem('entries', JSON.stringify(entries));
//     } catch (e) {
//       console.error("Error saving data", e);
//     }
//   };
// Load entries from localStorage (if they exist)
export const loadFromLocalStorage = () => {
    try {
      const savedEntries = localStorage.getItem('entries');
      return savedEntries ? JSON.parse(savedEntries) : [];
    } catch (error) {
      console.error('Failed to load entries from localStorage', error);
      return [];
    }
  };
  
  // Save entries to localStorage
  export const saveToLocalStorage = (entries) => {
    try {
      localStorage.setItem('entries', JSON.stringify(entries));
    } catch (error) {
      console.error('Failed to save entries to localStorage', error);
    }
  };
  