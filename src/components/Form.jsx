// // // // // // // // // // // // // // // // // import React, { useState } from 'react';

// // // // // // // // // // // // // // // // // export default function Form({ onSubmit }) {
// // // // // // // // // // // // // // // // //   const [amount, setAmount] = useState('');
// // // // // // // // // // // // // // // // //   const [category, setCategory] = useState('');
// // // // // // // // // // // // // // // // //   const [type, setType] = useState('Income');

// // // // // // // // // // // // // // // // //   const handleSubmit = (e) => {
// // // // // // // // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // // // // // // // //     if (amount && category) {
// // // // // // // // // // // // // // // // //       const newEntry = {
// // // // // // // // // // // // // // // // //         id: Date.now(), // unique ID based on current time
// // // // // // // // // // // // // // // // //         amount: parseFloat(amount),
// // // // // // // // // // // // // // // // //         category,
// // // // // // // // // // // // // // // // //         type,
// // // // // // // // // // // // // // // // //         date: new Date().toISOString(),
// // // // // // // // // // // // // // // // //       };
// // // // // // // // // // // // // // // // //       onSubmit(newEntry);
// // // // // // // // // // // // // // // // //       setAmount('');
// // // // // // // // // // // // // // // // //       setCategory('');
// // // // // // // // // // // // // // // // //       setType('Income');
// // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // //     <form onSubmit={handleSubmit} className="form-container">
// // // // // // // // // // // // // // // // //       <div className="form-group">
// // // // // // // // // // // // // // // // //         <label>Amount:</label>
// // // // // // // // // // // // // // // // //         <input
// // // // // // // // // // // // // // // // //           type="number"
// // // // // // // // // // // // // // // // //           value={amount}
// // // // // // // // // // // // // // // // //           onChange={(e) => setAmount(e.target.value)}
// // // // // // // // // // // // // // // // //           placeholder="Enter amount"
// // // // // // // // // // // // // // // // //         />
// // // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // // //       <div className="form-group">
// // // // // // // // // // // // // // // // //         <label>Category:</label>
// // // // // // // // // // // // // // // // //         <input
// // // // // // // // // // // // // // // // //           type="text"
// // // // // // // // // // // // // // // // //           value={category}
// // // // // // // // // // // // // // // // //           onChange={(e) => setCategory(e.target.value)}
// // // // // // // // // // // // // // // // //           placeholder="Enter category"
// // // // // // // // // // // // // // // // //         />
// // // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // // //       <div className="form-group">
// // // // // // // // // // // // // // // // //         <label>Type:</label>
// // // // // // // // // // // // // // // // //         <select value={type} onChange={(e) => setType(e.target.value)}>
// // // // // // // // // // // // // // // // //           <option value="Income">Income</option>
// // // // // // // // // // // // // // // // //           <option value="Expense">Expense</option>
// // // // // // // // // // // // // // // // //         </select>
// // // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // // //       <button type="submit" className="submit-button">Add Entry</button>
// // // // // // // // // // // // // // // // //     </form>
// // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // import React, { useState } from 'react';

// // // // // // // // // // // // // // // // export default function Form({ onSubmit }) {
// // // // // // // // // // // // // // // //   const [amount, setAmount] = useState('');
// // // // // // // // // // // // // // // //   const [category, setCategory] = useState('');
// // // // // // // // // // // // // // // //   const [type, setType] = useState('Income');

// // // // // // // // // // // // // // // //   const handleSubmit = (e) => {
// // // // // // // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // // // // // // //     if (amount && category) {
// // // // // // // // // // // // // // // //       const newEntry = {
// // // // // // // // // // // // // // // //         id: Date.now(), // Unique ID based on current time
// // // // // // // // // // // // // // // //         amount: parseFloat(amount),
// // // // // // // // // // // // // // // //         category,
// // // // // // // // // // // // // // // //         type,
// // // // // // // // // // // // // // // //         date: new Date().toISOString(),
// // // // // // // // // // // // // // // //       };
// // // // // // // // // // // // // // // //       onSubmit(newEntry);
// // // // // // // // // // // // // // // //       setAmount('');
// // // // // // // // // // // // // // // //       setCategory('');
// // // // // // // // // // // // // // // //       setType('Income');
// // // // // // // // // // // // // // // //     } else {
// // // // // // // // // // // // // // // //       alert('Please fill out both amount and category!');
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // //     <form onSubmit={handleSubmit} className="form-container">
// // // // // // // // // // // // // // // //       <div className="form-group">
// // // // // // // // // // // // // // // //         <label>Amount:</label>
// // // // // // // // // // // // // // // //         <input
// // // // // // // // // // // // // // // //           type="number"
// // // // // // // // // // // // // // // //           value={amount}
// // // // // // // // // // // // // // // //           onChange={(e) => setAmount(e.target.value)}
// // // // // // // // // // // // // // // //           placeholder="Enter amount"
// // // // // // // // // // // // // // // //           required
// // // // // // // // // // // // // // // //         />
// // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // //       <div className="form-group">
// // // // // // // // // // // // // // // //         <label>Category:</label>
// // // // // // // // // // // // // // // //         <input
// // // // // // // // // // // // // // // //           type="text"
// // // // // // // // // // // // // // // //           value={category}
// // // // // // // // // // // // // // // //           onChange={(e) => setCategory(e.target.value)}
// // // // // // // // // // // // // // // //           placeholder="Enter category"
// // // // // // // // // // // // // // // //           required
// // // // // // // // // // // // // // // //         />
// // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // //       <div className="form-group">
// // // // // // // // // // // // // // // //         <label>Type:</label>
// // // // // // // // // // // // // // // //         <select value={type} onChange={(e) => setType(e.target.value)}>
// // // // // // // // // // // // // // // //           <option value="Income">Income</option>
// // // // // // // // // // // // // // // //           <option value="Expense">Expense</option>
// // // // // // // // // // // // // // // //         </select>
// // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // //       <button type="submit" className="submit-button">Add Entry</button>
// // // // // // // // // // // // // // // //     </form>
// // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // import React, { useState, useEffect } from 'react';

// // // // // // // // // // // // // // // const Form = ({ onSubmit }) => {
// // // // // // // // // // // // // // //   const [amount, setAmount] = useState('');
// // // // // // // // // // // // // // //   const [category, setCategory] = useState('');
// // // // // // // // // // // // // // //   const [categories, setCategories] = useState([]);
// // // // // // // // // // // // // // //   const [type, setType] = useState('Income');
// // // // // // // // // // // // // // //   const [isRecurring, setIsRecurring] = useState(false);
// // // // // // // // // // // // // // //   const [startDate, setStartDate] = useState(new Date());
// // // // // // // // // // // // // // //   const [endDate, setEndDate] = useState(new Date());
// // // // // // // // // // // // // // //   const [taxed, setTaxed] = useState(false);
// // // // // // // // // // // // // // //   const [warning, setWarning] = useState('');

// // // // // // // // // // // // // // //   // Fetch categories from the API or local storage
// // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // //     const fetchCategories = async () => {
// // // // // // // // // // // // // // //       // Replace with your categories fetch call
// // // // // // // // // // // // // // //       const fetchedCategories = ['Food', 'Rent', 'Utilities']; // Example categories
// // // // // // // // // // // // // // //       setCategories(fetchedCategories);
// // // // // // // // // // // // // // //     };
// // // // // // // // // // // // // // //     fetchCategories();
// // // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // // //   const handleAmountChange = (e) => {
// // // // // // // // // // // // // // //     const value = e.target.value;
// // // // // // // // // // // // // // //     if (isNaN(value)) {
// // // // // // // // // // // // // // //       setWarning('Please enter a valid number');
// // // // // // // // // // // // // // //     } else {
// // // // // // // // // // // // // // //       setWarning('');
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //     setAmount(value);
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const handleCategoryChange = (e) => {
// // // // // // // // // // // // // // //     setCategory(e.target.value);
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const handleAddCategory = () => {
// // // // // // // // // // // // // // //     if (!categories.includes(category)) {
// // // // // // // // // // // // // // //       setCategories([...categories, category]);
// // // // // // // // // // // // // // //     } else {
// // // // // // // // // // // // // // //       alert('Category already exists!');
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const handleRecurringChange = (e) => {
// // // // // // // // // // // // // // //     setIsRecurring(e.target.checked);
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const handleTaxedChange = (e) => {
// // // // // // // // // // // // // // //     setTaxed(e.target.checked);
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const handleSubmit = (e) => {
// // // // // // // // // // // // // // //     e.preventDefault();

// // // // // // // // // // // // // // //     if (!amount || !category) {
// // // // // // // // // // // // // // //       alert('Please enter both amount and category');
// // // // // // // // // // // // // // //       return;
// // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // //     const newEntry = {
// // // // // // // // // // // // // // //       id: Date.now(),
// // // // // // // // // // // // // // //       amount: parseFloat(amount),
// // // // // // // // // // // // // // //       category,
// // // // // // // // // // // // // // //       type,
// // // // // // // // // // // // // // //       taxed,
// // // // // // // // // // // // // // //       startDate,
// // // // // // // // // // // // // // //       endDate,
// // // // // // // // // // // // // // //       isRecurring,
// // // // // // // // // // // // // // //     };

// // // // // // // // // // // // // // //     onSubmit(newEntry);
// // // // // // // // // // // // // // //     resetForm();
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   const resetForm = () => {
// // // // // // // // // // // // // // //     setAmount('');
// // // // // // // // // // // // // // //     setCategory('');
// // // // // // // // // // // // // // //     setType('Income');
// // // // // // // // // // // // // // //     setIsRecurring(false);
// // // // // // // // // // // // // // //     setStartDate(new Date());
// // // // // // // // // // // // // // //     setEndDate(new Date());
// // // // // // // // // // // // // // //     setTaxed(false);
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   // Handle Recurring Entry Logic
// // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // //     if (isRecurring) {
// // // // // // // // // // // // // // //       const nextDate = new Date(startDate);
// // // // // // // // // // // // // // //       nextDate.setDate(nextDate.getDate() + 7); // Adding 7 days for next occurrence
// // // // // // // // // // // // // // //       setEndDate(nextDate);
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //   }, [isRecurring, startDate]);

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <form onSubmit={handleSubmit} className="form-container">
// // // // // // // // // // // // // // //       <h2>Income & Expense Tracker</h2>

// // // // // // // // // // // // // // //       <div className="form-group">
// // // // // // // // // // // // // // //         <label>Amount:</label>
// // // // // // // // // // // // // // //         <input
// // // // // // // // // // // // // // //           type="number"
// // // // // // // // // // // // // // //           value={amount}
// // // // // // // // // // // // // // //           onChange={handleAmountChange}
// // // // // // // // // // // // // // //           placeholder="Enter amount"
// // // // // // // // // // // // // // //           required
// // // // // // // // // // // // // // //         />
// // // // // // // // // // // // // // //         {warning && <div className="warning">{warning}</div>}
// // // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // // //       <div className="form-group">
// // // // // // // // // // // // // // //         <label>Category:</label>
// // // // // // // // // // // // // // //         <input
// // // // // // // // // // // // // // //           type="text"
// // // // // // // // // // // // // // //           value={category}
// // // // // // // // // // // // // // //           onChange={handleCategoryChange}
// // // // // // // // // // // // // // //           placeholder="Enter category"
// // // // // // // // // // // // // // //           required
// // // // // // // // // // // // // // //         />
// // // // // // // // // // // // // // //         <button type="button" onClick={handleAddCategory}>Add Category</button>
// // // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // // //       <div className="form-group">
// // // // // // // // // // // // // // //         <label>Category List:</label>
// // // // // // // // // // // // // // //         <select value={category} onChange={handleCategoryChange} required>
// // // // // // // // // // // // // // //           <option value="" disabled>Select a category</option>
// // // // // // // // // // // // // // //           {categories.map((cat, index) => (
// // // // // // // // // // // // // // //             <option key={index} value={cat}>{cat}</option>
// // // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // // //         </select>
// // // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // // //       <div className="form-group">
// // // // // // // // // // // // // // //         <label>Type:</label>
// // // // // // // // // // // // // // //         <select value={type} onChange={(e) => setType(e.target.value)}>
// // // // // // // // // // // // // // //           <option value="Income">Income</option>
// // // // // // // // // // // // // // //           <option value="Expense">Expense</option>
// // // // // // // // // // // // // // //         </select>
// // // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // // //       <div className="form-group">
// // // // // // // // // // // // // // //         <label>Recurring:</label>
// // // // // // // // // // // // // // //         <input
// // // // // // // // // // // // // // //           type="checkbox"
// // // // // // // // // // // // // // //           checked={isRecurring}
// // // // // // // // // // // // // // //           onChange={handleRecurringChange}
// // // // // // // // // // // // // // //         />
// // // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // // //       {isRecurring && (
// // // // // // // // // // // // // // //         <div>
// // // // // // // // // // // // // // //           <label>Start Date: </label>
// // // // // // // // // // // // // // //           <input
// // // // // // // // // // // // // // //             type="date"
// // // // // // // // // // // // // // //             value={startDate.toISOString().split('T')[0]}
// // // // // // // // // // // // // // //             onChange={(e) => setStartDate(new Date(e.target.value))}
// // // // // // // // // // // // // // //           />
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       )}

// // // // // // // // // // // // // // //       <div>
// // // // // // // // // // // // // // //         <label>Taxed: </label>
// // // // // // // // // // // // // // //         <input
// // // // // // // // // // // // // // //           type="checkbox"
// // // // // // // // // // // // // // //           checked={taxed}
// // // // // // // // // // // // // // //           onChange={handleTaxedChange}
// // // // // // // // // // // // // // //         />
// // // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // // //       <button type="submit">Submit</button>
// // // // // // // // // // // // // // //     </form>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // export default Form;
// // // // // // // // // // // // // // import React, { useState, useEffect } from 'react';

// // // // // // // // // // // // // // const Form = ({ onSubmit, entryToEdit, categories, onCategoryDelete, onCategoryUpdate }) => {
// // // // // // // // // // // // // //   const [amount, setAmount] = useState('');
// // // // // // // // // // // // // //   const [category, setCategory] = useState('');
// // // // // // // // // // // // // //   const [categoryList, setCategoryList] = useState(categories || []);
// // // // // // // // // // // // // //   const [type, setType] = useState('Income');
// // // // // // // // // // // // // //   const [isRecurring, setIsRecurring] = useState(false);
// // // // // // // // // // // // // //   const [startDate, setStartDate] = useState(new Date());
// // // // // // // // // // // // // //   const [endDate, setEndDate] = useState(new Date());
// // // // // // // // // // // // // //   const [recurrenceCount, setRecurrenceCount] = useState(1);
// // // // // // // // // // // // // //   const [taxed, setTaxed] = useState(false);
// // // // // // // // // // // // // //   const [searchCategory, setSearchCategory] = useState('');

// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     if (entryToEdit) {
// // // // // // // // // // // // // //       setAmount(entryToEdit.amount);
// // // // // // // // // // // // // //       setCategory(entryToEdit.category);
// // // // // // // // // // // // // //       setType(entryToEdit.type);
// // // // // // // // // // // // // //       setStartDate(new Date(entryToEdit.startDate));
// // // // // // // // // // // // // //       setEndDate(new Date(entryToEdit.endDate));
// // // // // // // // // // // // // //       setRecurrenceCount(entryToEdit.recurrenceCount);
// // // // // // // // // // // // // //       setTaxed(entryToEdit.taxed);
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   }, [entryToEdit]);

// // // // // // // // // // // // // //   const handleAmountChange = (e) => {
// // // // // // // // // // // // // //     setAmount(e.target.value);
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const handleCategoryChange = (e) => {
// // // // // // // // // // // // // //     setCategory(e.target.value);
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const handleCategorySearch = (e) => {
// // // // // // // // // // // // // //     setSearchCategory(e.target.value);
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const handleCategorySelect = (selectedCategory) => {
// // // // // // // // // // // // // //     setCategory(selectedCategory);
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const handleAddCategory = () => {
// // // // // // // // // // // // // //     if (!categoryList.includes(category) && category) {
// // // // // // // // // // // // // //       setCategoryList([...categoryList, category]);
// // // // // // // // // // // // // //       setCategory('');
// // // // // // // // // // // // // //     } else {
// // // // // // // // // // // // // //       alert('Category already exists or is invalid');
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const handleDeleteCategory = (categoryToDelete) => {
// // // // // // // // // // // // // //     if (categoryList.includes(categoryToDelete)) {
// // // // // // // // // // // // // //       if (category === categoryToDelete) {
// // // // // // // // // // // // // //         setCategory('');
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //       setCategoryList(categoryList.filter((cat) => cat !== categoryToDelete));
// // // // // // // // // // // // // //       onCategoryDelete(categoryToDelete);
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const handleSubmit = (e) => {
// // // // // // // // // // // // // //     e.preventDefault();

// // // // // // // // // // // // // //     const newEntry = {
// // // // // // // // // // // // // //       id: entryToEdit ? entryToEdit.id : Date.now(),
// // // // // // // // // // // // // //       amount: parseFloat(amount),
// // // // // // // // // // // // // //       category,
// // // // // // // // // // // // // //       type,
// // // // // // // // // // // // // //       taxed,
// // // // // // // // // // // // // //       startDate: isRecurring ? startDate : new Date(),
// // // // // // // // // // // // // //       endDate: isRecurring ? endDate : null,
// // // // // // // // // // // // // //       recurrenceCount,
// // // // // // // // // // // // // //     };

// // // // // // // // // // // // // //     onSubmit(newEntry);
// // // // // // // // // // // // // //     resetForm();
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const resetForm = () => {
// // // // // // // // // // // // // //     setAmount('');
// // // // // // // // // // // // // //     setCategory('');
// // // // // // // // // // // // // //     setType('Income');
// // // // // // // // // // // // // //     setIsRecurring(false);
// // // // // // // // // // // // // //     setStartDate(new Date());
// // // // // // // // // // // // // //     setEndDate(new Date());
// // // // // // // // // // // // // //     setRecurrenceCount(1);
// // // // // // // // // // // // // //     setTaxed(false);
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const calculateEndDate = (start, recurrenceCount) => {
// // // // // // // // // // // // // //     const date = new Date(start);
// // // // // // // // // // // // // //     date.setDate(date.getDate() + 7 * recurrenceCount); // Assuming weekly recurrence
// // // // // // // // // // // // // //     return date;
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const handleRecurrenceChange = (e) => {
// // // // // // // // // // // // // //     setRecurrenceCount(e.target.value);
// // // // // // // // // // // // // //     const end = calculateEndDate(startDate, e.target.value);
// // // // // // // // // // // // // //     setEndDate(end);
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const handleDateChange = (e) => {
// // // // // // // // // // // // // //     const selectedDate = new Date(e.target.value);
// // // // // // // // // // // // // //     setStartDate(selectedDate);
// // // // // // // // // // // // // //     if (isRecurring) {
// // // // // // // // // // // // // //       const end = calculateEndDate(selectedDate, recurrenceCount);
// // // // // // // // // // // // // //       setEndDate(end);
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const filteredCategories = categoryList.filter((cat) => cat.toLowerCase().includes(searchCategory.toLowerCase()));

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <form onSubmit={handleSubmit} className="form-container">
// // // // // // // // // // // // // //       <h2>Income & Expense Tracker</h2>

// // // // // // // // // // // // // //       <div className="form-group">
// // // // // // // // // // // // // //         <label>Amount:</label>
// // // // // // // // // // // // // //         <input
// // // // // // // // // // // // // //           type="number"
// // // // // // // // // // // // // //           value={amount}
// // // // // // // // // // // // // //           onChange={handleAmountChange}
// // // // // // // // // // // // // //           placeholder="Enter amount"
// // // // // // // // // // // // // //           required
// // // // // // // // // // // // // //         />
// // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // //       <div className="form-group">
// // // // // // // // // // // // // //         <label>Category:</label>
// // // // // // // // // // // // // //         <input
// // // // // // // // // // // // // //           type="text"
// // // // // // // // // // // // // //           value={category}
// // // // // // // // // // // // // //           onChange={handleCategoryChange}
// // // // // // // // // // // // // //           placeholder="Enter category"
// // // // // // // // // // // // // //         />
// // // // // // // // // // // // // //         <button type="button" onClick={handleAddCategory}>Add Category</button>
// // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // //       <div className="form-group">
// // // // // // // // // // // // // //         <label>Category List:</label>
// // // // // // // // // // // // // //         <input
// // // // // // // // // // // // // //           type="text"
// // // // // // // // // // // // // //           placeholder="Search Category"
// // // // // // // // // // // // // //           value={searchCategory}
// // // // // // // // // // // // // //           onChange={handleCategorySearch}
// // // // // // // // // // // // // //         />
// // // // // // // // // // // // // //         <ul>
// // // // // // // // // // // // // //           {filteredCategories.map((cat, index) => (
// // // // // // // // // // // // // //             <li key={index} onClick={() => handleCategorySelect(cat)}>
// // // // // // // // // // // // // //               {cat}
// // // // // // // // // // // // // //               <button type="button" onClick={() => handleDeleteCategory(cat)}>Delete</button>
// // // // // // // // // // // // // //             </li>
// // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // //         </ul>
// // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // //       <div className="form-group">
// // // // // // // // // // // // // //         <label>Type:</label>
// // // // // // // // // // // // // //         <select value={type} onChange={(e) => setType(e.target.value)}>
// // // // // // // // // // // // // //           <option value="Income">Income</option>
// // // // // // // // // // // // // //           <option value="Expense">Expense</option>
// // // // // // // // // // // // // //         </select>
// // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // //       <div className="form-group">
// // // // // // // // // // // // // //         <label>Recurring:</label>
// // // // // // // // // // // // // //         <input
// // // // // // // // // // // // // //           type="checkbox"
// // // // // // // // // // // // // //           checked={isRecurring}
// // // // // // // // // // // // // //           onChange={(e) => setIsRecurring(e.target.checked)}
// // // // // // // // // // // // // //         />
// // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // //       {isRecurring && (
// // // // // // // // // // // // // //         <div>
// // // // // // // // // // // // // //           <label>Number of Recurrences:</label>
// // // // // // // // // // // // // //           <input
// // // // // // // // // // // // // //             type="number"
// // // // // // // // // // // // // //             value={recurrenceCount}
// // // // // // // // // // // // // //             onChange={handleRecurrenceChange}
// // // // // // // // // // // // // //             min="1"
// // // // // // // // // // // // // //           />
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       )}

// // // // // // // // // // // // // //       {isRecurring && (
// // // // // // // // // // // // // //         <div>
// // // // // // // // // // // // // //           <label>Start Date:</label>
// // // // // // // // // // // // // //           <input
// // // // // // // // // // // // // //             type="date"
// // // // // // // // // // // // // //             value={startDate.toISOString().split('T')[0]}
// // // // // // // // // // // // // //             onChange={handleDateChange}
// // // // // // // // // // // // // //           />
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       )}

// // // // // // // // // // // // // //       <div>
// // // // // // // // // // // // // //         <label>Taxed: </label>
// // // // // // // // // // // // // //         <input
// // // // // // // // // // // // // //           type="checkbox"
// // // // // // // // // // // // // //           checked={taxed}
// // // // // // // // // // // // // //           onChange={() => setTaxed(!taxed)}
// // // // // // // // // // // // // //         />
// // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // //       <button type="submit">Submit</button>
// // // // // // // // // // // // // //     </form>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default Form;
// // // // // // // // // // // // // import React, { useState, useEffect } from 'react';

// // // // // // // // // // // // // export default function Form({ onSubmit }) {
// // // // // // // // // // // // //   const [amount, setAmount] = useState('');
// // // // // // // // // // // // //   const [category, setCategory] = useState('');
// // // // // // // // // // // // //   const [newCategory, setNewCategory] = useState('');
// // // // // // // // // // // // //   const [categoryList, setCategoryList] = useState([]);
// // // // // // // // // // // // //   const [isEditing, setIsEditing] = useState(false);
// // // // // // // // // // // // //   const [editCategoryId, setEditCategoryId] = useState(null);
// // // // // // // // // // // // //   const [search, setSearch] = useState('');
// // // // // // // // // // // // //   const [startDate, setStartDate] = useState(new Date());
// // // // // // // // // // // // //   const [endDate, setEndDate] = useState(null);
// // // // // // // // // // // // //   const [recurring, setRecurring] = useState(false);
// // // // // // // // // // // // //   const [intervalCount, setIntervalCount] = useState(1);

// // // // // // // // // // // // //   // Load categories from localStorage or use a default set
// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     const savedCategories = localStorage.getItem('categories');
// // // // // // // // // // // // //     if (savedCategories) {
// // // // // // // // // // // // //       setCategoryList(JSON.parse(savedCategories));
// // // // // // // // // // // // //     } else {
// // // // // // // // // // // // //       setCategoryList(['Food', 'Transportation', 'Streetlives']);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // //   // Save categories to localStorage whenever they change
// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     if (categoryList.length > 0) {
// // // // // // // // // // // // //       localStorage.setItem('categories', JSON.stringify(categoryList));
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   }, [categoryList]);

// // // // // // // // // // // // //   // Handle amount change
// // // // // // // // // // // // //   const handleAmountChange = (e) => {
// // // // // // // // // // // // //     setAmount(e.target.value);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Handle category change
// // // // // // // // // // // // //   const handleCategoryChange = (e) => {
// // // // // // // // // // // // //     setCategory(e.target.value);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Handle search change (autocomplete)
// // // // // // // // // // // // //   const handleSearchChange = (e) => {
// // // // // // // // // // // // //     setSearch(e.target.value);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Add new category to the list
// // // // // // // // // // // // //   const handleAddCategory = () => {
// // // // // // // // // // // // //     if (newCategory && !categoryList.includes(newCategory)) {
// // // // // // // // // // // // //       setCategoryList((prevList) => [...prevList, newCategory]);
// // // // // // // // // // // // //       setNewCategory('');
// // // // // // // // // // // // //     } else {
// // // // // // // // // // // // //       alert('Category already exists or is empty!');
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Delete category from the list
// // // // // // // // // // // // //   const handleDeleteCategory = (categoryToDelete) => {
// // // // // // // // // // // // //     setCategoryList((prevList) => prevList.filter((cat) => cat !== categoryToDelete));
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Edit category
// // // // // // // // // // // // //   const handleEditCategory = (categoryToEdit) => {
// // // // // // // // // // // // //     setCategory(categoryToEdit);
// // // // // // // // // // // // //     setIsEditing(true);
// // // // // // // // // // // // //     setEditCategoryId(categoryToEdit);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Save category changes
// // // // // // // // // // // // //   const handleSaveCategory = () => {
// // // // // // // // // // // // //     if (isEditing && editCategoryId) {
// // // // // // // // // // // // //       setCategoryList((prevList) =>
// // // // // // // // // // // // //         prevList.map((cat) => (cat === editCategoryId ? category : cat))
// // // // // // // // // // // // //       );
// // // // // // // // // // // // //       setCategory('');
// // // // // // // // // // // // //       setIsEditing(false);
// // // // // // // // // // // // //       setEditCategoryId(null);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Handle submit of form
// // // // // // // // // // // // //   const handleSubmit = (e) => {
// // // // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // // // //     if (amount && category) {
// // // // // // // // // // // // //       const newEntry = {
// // // // // // // // // // // // //         id: Date.now(),
// // // // // // // // // // // // //         amount: parseFloat(amount),
// // // // // // // // // // // // //         category,
// // // // // // // // // // // // //         date: startDate.toISOString(),
// // // // // // // // // // // // //         endDate: recurring ? endDate?.toISOString() : null,
// // // // // // // // // // // // //         recurring,
// // // // // // // // // // // // //       };
// // // // // // // // // // // // //       onSubmit(newEntry);
// // // // // // // // // // // // //       setAmount('');
// // // // // // // // // // // // //       setCategory('');
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Filter categories based on search term
// // // // // // // // // // // // //   const filteredCategories = categoryList.filter((cat) =>
// // // // // // // // // // // // //     cat.toLowerCase().startsWith(search.toLowerCase())
// // // // // // // // // // // // //   );

// // // // // // // // // // // // //   // Format date (Apr 10, 25)
// // // // // // // // // // // // //   const formatDate = (date) => {
// // // // // // // // // // // // //     const options = { year: '2-digit', month: 'short', day: 'numeric' };
// // // // // // // // // // // // //     return new Intl.DateTimeFormat('en-US', options).format(date);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Handle start date change (for recurring)
// // // // // // // // // // // // //   const handleStartDateChange = (e) => {
// // // // // // // // // // // // //     const newStartDate = new Date(e.target.value);
// // // // // // // // // // // // //     setStartDate(newStartDate);
// // // // // // // // // // // // //     if (recurring) {
// // // // // // // // // // // // //       const newEndDate = new Date(newStartDate);
// // // // // // // // // // // // //       newEndDate.setDate(newStartDate.getDate() + 7 * intervalCount);
// // // // // // // // // // // // //       setEndDate(newEndDate);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Handle recurring change
// // // // // // // // // // // // //   const handleRecurringChange = (e) => {
// // // // // // // // // // // // //     setRecurring(e.target.checked);
// // // // // // // // // // // // //     if (e.target.checked) {
// // // // // // // // // // // // //       const newEndDate = new Date(startDate);
// // // // // // // // // // // // //       newEndDate.setDate(startDate.getDate() + 7 * intervalCount); // Add 7 days for weekly
// // // // // // // // // // // // //       setEndDate(newEndDate);
// // // // // // // // // // // // //     } else {
// // // // // // // // // // // // //       setEndDate(null);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Handle interval change for recurring
// // // // // // // // // // // // //   const handleIntervalChange = (e) => {
// // // // // // // // // // // // //     const newIntervalCount = e.target.value;
// // // // // // // // // // // // //     setIntervalCount(newIntervalCount);
// // // // // // // // // // // // //     if (recurring) {
// // // // // // // // // // // // //       const newEndDate = new Date(startDate);
// // // // // // // // // // // // //       newEndDate.setDate(startDate.getDate() + 7 * newIntervalCount);
// // // // // // // // // // // // //       setEndDate(newEndDate);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <form onSubmit={handleSubmit} className="form-container">
// // // // // // // // // // // // //       <h2>Income & Expense Tracker</h2>

// // // // // // // // // // // // //       <div>
// // // // // // // // // // // // //         <label>Amount:</label>
// // // // // // // // // // // // //         <input
// // // // // // // // // // // // //           type="number"
// // // // // // // // // // // // //           value={amount}
// // // // // // // // // // // // //           onChange={handleAmountChange}
// // // // // // // // // // // // //           placeholder="Enter amount"
// // // // // // // // // // // // //           required
// // // // // // // // // // // // //         />
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       <div>
// // // // // // // // // // // // //         <label>Category:</label>
// // // // // // // // // // // // //         <input
// // // // // // // // // // // // //           type="text"
// // // // // // // // // // // // //           value={newCategory}
// // // // // // // // // // // // //           onChange={(e) => setNewCategory(e.target.value)}
// // // // // // // // // // // // //           placeholder="Enter category"
// // // // // // // // // // // // //         />
// // // // // // // // // // // // //         <button type="button" onClick={handleAddCategory}>
// // // // // // // // // // // // //           Add Category
// // // // // // // // // // // // //         </button>
// // // // // // // // // // // // //         <div>
// // // // // // // // // // // // //           <input
// // // // // // // // // // // // //             type="text"
// // // // // // // // // // // // //             placeholder="Search Category"
// // // // // // // // // // // // //             value={search}
// // // // // // // // // // // // //             onChange={handleSearchChange}
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //           <select value={category} onChange={handleCategoryChange}>
// // // // // // // // // // // // //             <option value="">Select a category</option>
// // // // // // // // // // // // //             {filteredCategories.map((cat) => (
// // // // // // // // // // // // //               <option key={cat} value={cat}>
// // // // // // // // // // // // //                 {cat}
// // // // // // // // // // // // //               </option>
// // // // // // // // // // // // //             ))}
// // // // // // // // // // // // //           </select>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       <div>
// // // // // // // // // // // // //         <label>Type:</label>
// // // // // // // // // // // // //         <select value={category} onChange={handleCategoryChange}>
// // // // // // // // // // // // //           <option value="Income">Income</option>
// // // // // // // // // // // // //           <option value="Expense">Expense</option>
// // // // // // // // // // // // //         </select>
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       <div>
// // // // // // // // // // // // //         <label>Recurring:</label>
// // // // // // // // // // // // //         <input
// // // // // // // // // // // // //           type="checkbox"
// // // // // // // // // // // // //           checked={recurring}
// // // // // // // // // // // // //           onChange={handleRecurringChange}
// // // // // // // // // // // // //         />
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       {recurring && (
// // // // // // // // // // // // //         <>
// // // // // // // // // // // // //           <div>
// // // // // // // // // // // // //             <label>Number of occurrences:</label>
// // // // // // // // // // // // //             <input
// // // // // // // // // // // // //               type="number"
// // // // // // // // // // // // //               value={intervalCount}
// // // // // // // // // // // // //               onChange={handleIntervalChange}
// // // // // // // // // // // // //             />
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //           <div>
// // // // // // // // // // // // //             <label>Start Date:</label>
// // // // // // // // // // // // //             <input
// // // // // // // // // // // // //               type="date"
// // // // // // // // // // // // //               value={formatDate(startDate)}
// // // // // // // // // // // // //               onChange={handleStartDateChange}
// // // // // // // // // // // // //             />
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //           {endDate && (
// // // // // // // // // // // // //             <div>
// // // // // // // // // // // // //               <label>End Date:</label>
// // // // // // // // // // // // //               <span>{formatDate(endDate)}</span>
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //           )}
// // // // // // // // // // // // //         </>
// // // // // // // // // // // // //       )}

// // // // // // // // // // // // //       <div>
// // // // // // // // // // // // //         <label>Taxed:</label>
// // // // // // // // // // // // //         <input type="checkbox" />
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       <button type="submit">Submit</button>

// // // // // // // // // // // // //       {/* Category list with edit/delete buttons */}
// // // // // // // // // // // // //       <div>
// // // // // // // // // // // // //         <h3>Categories</h3>
// // // // // // // // // // // // //         <ul>
// // // // // // // // // // // // //           {categoryList.map((cat) => (
// // // // // // // // // // // // //             <li key={cat}>
// // // // // // // // // // // // //               {cat}
// // // // // // // // // // // // //               <button onClick={() => handleEditCategory(cat)}>Edit</button>
// // // // // // // // // // // // //               <button onClick={() => handleDeleteCategory(cat)}>Delete</button>
// // // // // // // // // // // // //             </li>
// // // // // // // // // // // // //           ))}
// // // // // // // // // // // // //         </ul>
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </form>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // }
// // // // // // // // // // // // import React, { useState, useEffect } from 'react';

// // // // // // // // // // // // export default function Form({ onSubmit }) {
// // // // // // // // // // // //   const [amount, setAmount] = useState('');
// // // // // // // // // // // //   const [category, setCategory] = useState('');
// // // // // // // // // // // //   const [newCategory, setNewCategory] = useState('');
// // // // // // // // // // // //   const [categoryList, setCategoryList] = useState([]);
// // // // // // // // // // // //   const [search, setSearch] = useState('');
// // // // // // // // // // // //   const [startDate, setStartDate] = useState(new Date());
// // // // // // // // // // // //   const [endDate, setEndDate] = useState(null);
// // // // // // // // // // // //   const [recurring, setRecurring] = useState(false);
// // // // // // // // // // // //   const [intervalCount, setIntervalCount] = useState(1);

// // // // // // // // // // // //   // Load categories from localStorage or use a default set
// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     const savedCategories = localStorage.getItem('categories');
// // // // // // // // // // // //     if (savedCategories) {
// // // // // // // // // // // //       setCategoryList(JSON.parse(savedCategories));
// // // // // // // // // // // //     } else {
// // // // // // // // // // // //       setCategoryList(['Food', 'Transportation', 'Streetlives']);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   }, []);

// // // // // // // // // // // //   // Save categories to localStorage whenever they change
// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     if (categoryList.length > 0) {
// // // // // // // // // // // //       localStorage.setItem('categories', JSON.stringify(categoryList));
// // // // // // // // // // // //     }
// // // // // // // // // // // //   }, [categoryList]);

// // // // // // // // // // // //   // Handle amount change
// // // // // // // // // // // //   const handleAmountChange = (e) => {
// // // // // // // // // // // //     setAmount(e.target.value);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Handle category change
// // // // // // // // // // // //   const handleCategoryChange = (e) => {
// // // // // // // // // // // //     setCategory(e.target.value);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Handle search change (autocomplete)
// // // // // // // // // // // //   const handleSearchChange = (e) => {
// // // // // // // // // // // //     setSearch(e.target.value);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Add new category to the list
// // // // // // // // // // // //   const handleAddCategory = () => {
// // // // // // // // // // // //     if (newCategory && !categoryList.includes(newCategory)) {
// // // // // // // // // // // //       setCategoryList((prevList) => [...prevList, newCategory]);
// // // // // // // // // // // //       setNewCategory('');
// // // // // // // // // // // //     } else {
// // // // // // // // // // // //       alert('Category already exists or is empty!');
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Delete category from the list
// // // // // // // // // // // //   const handleDeleteCategory = (categoryToDelete) => {
// // // // // // // // // // // //     setCategoryList((prevList) => prevList.filter((cat) => cat !== categoryToDelete));
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Handle start date change (for recurring)
// // // // // // // // // // // //   const handleStartDateChange = (e) => {
// // // // // // // // // // // //     const newStartDate = new Date(e.target.value);
// // // // // // // // // // // //     setStartDate(newStartDate);
// // // // // // // // // // // //     if (recurring) {
// // // // // // // // // // // //       const newEndDate = new Date(newStartDate);
// // // // // // // // // // // //       newEndDate.setDate(newStartDate.getDate() + 7 * intervalCount);
// // // // // // // // // // // //       setEndDate(newEndDate);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Handle recurring change
// // // // // // // // // // // //   const handleRecurringChange = (e) => {
// // // // // // // // // // // //     setRecurring(e.target.checked);
// // // // // // // // // // // //     if (e.target.checked) {
// // // // // // // // // // // //       const newEndDate = new Date(startDate);
// // // // // // // // // // // //       newEndDate.setDate(startDate.getDate() + 7 * intervalCount); // Add 7 days for weekly
// // // // // // // // // // // //       setEndDate(newEndDate);
// // // // // // // // // // // //     } else {
// // // // // // // // // // // //       setEndDate(null);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Handle interval change for recurring
// // // // // // // // // // // //   const handleIntervalChange = (e) => {
// // // // // // // // // // // //     const newIntervalCount = e.target.value;
// // // // // // // // // // // //     setIntervalCount(newIntervalCount);
// // // // // // // // // // // //     if (recurring) {
// // // // // // // // // // // //       const newEndDate = new Date(startDate);
// // // // // // // // // // // //       newEndDate.setDate(startDate.getDate() + 7 * newIntervalCount);
// // // // // // // // // // // //       setEndDate(newEndDate);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Handle submit of form
// // // // // // // // // // // //   const handleSubmit = (e) => {
// // // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // // //     if (amount && category) {
// // // // // // // // // // // //       const newEntry = {
// // // // // // // // // // // //         id: Date.now(),
// // // // // // // // // // // //         amount: parseFloat(amount),
// // // // // // // // // // // //         category,
// // // // // // // // // // // //         date: startDate.toISOString(),
// // // // // // // // // // // //         endDate: recurring ? endDate?.toISOString() : null,
// // // // // // // // // // // //         recurring,
// // // // // // // // // // // //       };
// // // // // // // // // // // //       onSubmit(newEntry);
// // // // // // // // // // // //       setAmount('');
// // // // // // // // // // // //       setCategory('');
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Filter categories based on search term
// // // // // // // // // // // //   const filteredCategories = categoryList.filter((cat) =>
// // // // // // // // // // // //     cat.toLowerCase().startsWith(search.toLowerCase())
// // // // // // // // // // // //   );

// // // // // // // // // // // //   // Format date (Apr 10, 25)
// // // // // // // // // // // //   const formatDate = (date) => {
// // // // // // // // // // // //     const options = { year: '2-digit', month: 'short', day: 'numeric' };
// // // // // // // // // // // //     return new Intl.DateTimeFormat('en-US', options).format(date);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <form onSubmit={handleSubmit} className="form-container">
// // // // // // // // // // // //       <h2>Income & Expense Tracker</h2>

// // // // // // // // // // // //       <div>
// // // // // // // // // // // //         <label>Amount:</label>
// // // // // // // // // // // //         <input
// // // // // // // // // // // //           type="number"
// // // // // // // // // // // //           value={amount}
// // // // // // // // // // // //           onChange={handleAmountChange}
// // // // // // // // // // // //           placeholder="Enter amount"
// // // // // // // // // // // //           required
// // // // // // // // // // // //         />
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       <div>
// // // // // // // // // // // //         <label>Category:</label>
// // // // // // // // // // // //         <input
// // // // // // // // // // // //           type="text"
// // // // // // // // // // // //           value={newCategory}
// // // // // // // // // // // //           onChange={(e) => setNewCategory(e.target.value)}
// // // // // // // // // // // //           placeholder="Enter category"
// // // // // // // // // // // //         />
// // // // // // // // // // // //         <button type="button" onClick={handleAddCategory}>
// // // // // // // // // // // //           Add Category
// // // // // // // // // // // //         </button>
// // // // // // // // // // // //         <div>
// // // // // // // // // // // //           <input
// // // // // // // // // // // //             type="text"
// // // // // // // // // // // //             placeholder="Search Category"
// // // // // // // // // // // //             value={search}
// // // // // // // // // // // //             onChange={handleSearchChange}
// // // // // // // // // // // //           />
// // // // // // // // // // // //           <select value={category} onChange={handleCategoryChange}>
// // // // // // // // // // // //             <option value="">Select a category</option>
// // // // // // // // // // // //             {filteredCategories.map((cat) => (
// // // // // // // // // // // //               <option key={cat} value={cat}>
// // // // // // // // // // // //                 {cat}
// // // // // // // // // // // //               </option>
// // // // // // // // // // // //             ))}
// // // // // // // // // // // //           </select>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       <div>
// // // // // // // // // // // //         <label>Type:</label>
// // // // // // // // // // // //         <select value={category} onChange={handleCategoryChange}>
// // // // // // // // // // // //           <option value="Income">Income</option>
// // // // // // // // // // // //           <option value="Expense">Expense</option>
// // // // // // // // // // // //         </select>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       <div>
// // // // // // // // // // // //         <label>Recurring:</label>
// // // // // // // // // // // //         <input
// // // // // // // // // // // //           type="checkbox"
// // // // // // // // // // // //           checked={recurring}
// // // // // // // // // // // //           onChange={handleRecurringChange}
// // // // // // // // // // // //         />
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {recurring && (
// // // // // // // // // // // //         <>
// // // // // // // // // // // //           <div>
// // // // // // // // // // // //             <label>Number of occurrences:</label>
// // // // // // // // // // // //             <input
// // // // // // // // // // // //               type="number"
// // // // // // // // // // // //               value={intervalCount}
// // // // // // // // // // // //               onChange={handleIntervalChange}
// // // // // // // // // // // //             />
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <div>
// // // // // // // // // // // //             <label>Start Date:</label>
// // // // // // // // // // // //             <input
// // // // // // // // // // // //               type="date"
// // // // // // // // // // // //               value={formatDate(startDate)}
// // // // // // // // // // // //               onChange={handleStartDateChange}
// // // // // // // // // // // //             />
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           {endDate && (
// // // // // // // // // // // //             <div>
// // // // // // // // // // // //               <label>End Date:</label>
// // // // // // // // // // // //               <span>{formatDate(endDate)}</span>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           )}
// // // // // // // // // // // //         </>
// // // // // // // // // // // //       )}

// // // // // // // // // // // //       <div>
// // // // // // // // // // // //         <label>Taxed:</label>
// // // // // // // // // // // //         <input type="checkbox" />
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       <button type="submit">Submit</button>

// // // // // // // // // // // //       {/* Category list with edit/delete buttons */}
// // // // // // // // // // // //       <div>
// // // // // // // // // // // //         <h3>Categories</h3>
// // // // // // // // // // // //         <ul>
// // // // // // // // // // // //           {categoryList.map((cat) => (
// // // // // // // // // // // //             <li key={cat}>
// // // // // // // // // // // //               {cat}
// // // // // // // // // // // //               <button onClick={() => handleDeleteCategory(cat)}>Delete</button>
// // // // // // // // // // // //             </li>
// // // // // // // // // // // //           ))}
// // // // // // // // // // // //         </ul>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </form>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }
// // // // // // // // // // // import React, { useState, useEffect } from 'react';

// // // // // // // // // // // export default function Form({ onSubmit }) {
// // // // // // // // // // //   const [amount, setAmount] = useState('');
// // // // // // // // // // //   const [category, setCategory] = useState('');
// // // // // // // // // // //   const [categoryList, setCategoryList] = useState(['Food', 'Transportation', 'Streetlives']);
// // // // // // // // // // //   const [isRecurring, setIsRecurring] = useState(false);
// // // // // // // // // // //   const [recurrenceCount, setRecurrenceCount] = useState(1);
// // // // // // // // // // //   const [startDate, setStartDate] = useState('');
// // // // // // // // // // //   const [endDate, setEndDate] = useState('');
// // // // // // // // // // //   const [search, setSearch] = useState('');

// // // // // // // // // // //   // Calculate the end date for recurring events
// // // // // // // // // // //   const calculateEndDate = (startDate, recurrenceType, count) => {
// // // // // // // // // // //     const date = new Date(startDate);
// // // // // // // // // // //     if (recurrenceType === 'Weekly') {
// // // // // // // // // // //       date.setDate(date.getDate() + 7 * count);
// // // // // // // // // // //     } else if (recurrenceType === 'Monthly') {
// // // // // // // // // // //       date.setMonth(date.getMonth() + count);
// // // // // // // // // // //     } else if (recurrenceType === 'Yearly') {
// // // // // // // // // // //       date.setFullYear(date.getFullYear() + count);
// // // // // // // // // // //     }
// // // // // // // // // // //     return date;
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleAmountChange = (e) => setAmount(e.target.value);

// // // // // // // // // // //   const handleCategoryChange = (e) => setCategory(e.target.value);

// // // // // // // // // // //   const handleSearchChange = (e) => setSearch(e.target.value);

// // // // // // // // // // //   const handleRecurrenceChange = (e) => setIsRecurring(e.target.value === 'Yes');

// // // // // // // // // // //   const handleRecurrenceCountChange = (e) => setRecurrenceCount(e.target.value);

// // // // // // // // // // //   const handleDateChange = (date) => {
// // // // // // // // // // //     setStartDate(date);
// // // // // // // // // // //     setEndDate(calculateEndDate(date, 'Weekly', recurrenceCount).toLocaleDateString());
// // // // // // // // // // //   };

// // // // // // // // // // //   // Handle adding new categories
// // // // // // // // // // //   const handleAddCategory = () => {
// // // // // // // // // // //     if (category && !categoryList.includes(category)) {
// // // // // // // // // // //       setCategoryList([...categoryList, category]);
// // // // // // // // // // //       setCategory('');
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleSubmit = (e) => {
// // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // //     if (amount && category) {
// // // // // // // // // // //       const entry = {
// // // // // // // // // // //         id: Date.now(),
// // // // // // // // // // //         amount: parseFloat(amount),
// // // // // // // // // // //         category,
// // // // // // // // // // //         startDate,
// // // // // // // // // // //         endDate,
// // // // // // // // // // //         isRecurring,
// // // // // // // // // // //         recurrenceCount,
// // // // // // // // // // //       };
// // // // // // // // // // //       onSubmit(entry);
// // // // // // // // // // //       setAmount('');
// // // // // // // // // // //       setCategory('');
// // // // // // // // // // //       setStartDate('');
// // // // // // // // // // //       setEndDate('');
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const filteredCategories = categoryList.filter((cat) =>
// // // // // // // // // // //     cat.toLowerCase().includes(search.toLowerCase())
// // // // // // // // // // //   );

// // // // // // // // // // //   return (
// // // // // // // // // // //     <form onSubmit={handleSubmit}>
// // // // // // // // // // //       <h2>Income & Expense Tracker</h2>

// // // // // // // // // // //       {/* Amount input */}
// // // // // // // // // // //       <div>
// // // // // // // // // // //         <label>Amount:</label>
// // // // // // // // // // //         <input
// // // // // // // // // // //           type="number"
// // // // // // // // // // //           value={amount}
// // // // // // // // // // //           onChange={handleAmountChange}
// // // // // // // // // // //           placeholder="Enter amount"
// // // // // // // // // // //           required
// // // // // // // // // // //         />
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Category input with autocomplete */}
// // // // // // // // // // //       <div>
// // // // // // // // // // //         <label>Category:</label>
// // // // // // // // // // //         <input
// // // // // // // // // // //           type="text"
// // // // // // // // // // //           value={category}
// // // // // // // // // // //           onChange={handleCategoryChange}
// // // // // // // // // // //           placeholder="Enter or select category"
// // // // // // // // // // //         />
// // // // // // // // // // //         <button type="button" onClick={handleAddCategory}>Add Category</button>
// // // // // // // // // // //         <div>
// // // // // // // // // // //           <input
// // // // // // // // // // //             type="text"
// // // // // // // // // // //             placeholder="Search Category"
// // // // // // // // // // //             value={search}
// // // // // // // // // // //             onChange={handleSearchChange}
// // // // // // // // // // //           />
// // // // // // // // // // //           <select value={category} onChange={handleCategoryChange}>
// // // // // // // // // // //             <option value="">Select a category</option>
// // // // // // // // // // //             {filteredCategories.map((cat) => (
// // // // // // // // // // //               <option key={cat} value={cat}>{cat}</option>
// // // // // // // // // // //             ))}
// // // // // // // // // // //           </select>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Recurring and recurrence number */}
// // // // // // // // // // //       <div>
// // // // // // // // // // //         <label>Recurring:</label>
// // // // // // // // // // //         <select value={isRecurring ? 'Yes' : 'No'} onChange={handleRecurrenceChange}>
// // // // // // // // // // //           <option value="No">No</option>
// // // // // // // // // // //           <option value="Yes">Yes</option>
// // // // // // // // // // //         </select>
// // // // // // // // // // //       </div>
// // // // // // // // // // //       {isRecurring && (
// // // // // // // // // // //         <div>
// // // // // // // // // // //           <label>Number of occurrences:</label>
// // // // // // // // // // //           <input
// // // // // // // // // // //             type="number"
// // // // // // // // // // //             value={recurrenceCount}
// // // // // // // // // // //             onChange={handleRecurrenceCountChange}
// // // // // // // // // // //             min="1"
// // // // // // // // // // //             max="12"
// // // // // // // // // // //           />
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )}

// // // // // // // // // // //       {/* Start Date */}
// // // // // // // // // // //       <div>
// // // // // // // // // // //         <label>Start Date:</label>
// // // // // // // // // // //         <input
// // // // // // // // // // //           type="date"
// // // // // // // // // // //           value={startDate}
// // // // // // // // // // //           onChange={(e) => handleDateChange(e.target.value)}
// // // // // // // // // // //         />
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* End Date (auto-calculated) */}
// // // // // // // // // // //       <div>
// // // // // // // // // // //         <label>End Date:</label>
// // // // // // // // // // //         <input
// // // // // // // // // // //           type="text"
// // // // // // // // // // //           value={endDate || ''}
// // // // // // // // // // //           readOnly
// // // // // // // // // // //         />
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Submit button */}
// // // // // // // // // // //       <button type="submit">Submit</button>
// // // // // // // // // // //     </form>
// // // // // // // // // // //   );
// // // // // // // // // // // }
// // // // // // // // // // import React, { useState } from 'react'; // Removed useEffect

// // // // // // // // // // export default function Form({ onSubmit }) {
// // // // // // // // // //   const [amount, setAmount] = useState('');
// // // // // // // // // //   const [category, setCategory] = useState('');
// // // // // // // // // //   const [categoryList, setCategoryList] = useState(['Food', 'Transportation', 'Streetlives']);
// // // // // // // // // //   const [isRecurring, setIsRecurring] = useState(false);
// // // // // // // // // //   const [recurrenceCount, setRecurrenceCount] = useState(1);
// // // // // // // // // //   const [startDate, setStartDate] = useState('');
// // // // // // // // // //   const [endDate, setEndDate] = useState('');
// // // // // // // // // //   const [search, setSearch] = useState('');

// // // // // // // // // //   // Calculate the end date for recurring events
// // // // // // // // // //   const calculateEndDate = (startDate, recurrenceType, count) => {
// // // // // // // // // //     const date = new Date(startDate);
// // // // // // // // // //     if (recurrenceType === 'Weekly') {
// // // // // // // // // //       date.setDate(date.getDate() + 7 * count);
// // // // // // // // // //     } else if (recurrenceType === 'Monthly') {
// // // // // // // // // //       date.setMonth(date.getMonth() + count);
// // // // // // // // // //     } else if (recurrenceType === 'Yearly') {
// // // // // // // // // //       date.setFullYear(date.getFullYear() + count);
// // // // // // // // // //     }
// // // // // // // // // //     return date;
// // // // // // // // // //   };

// // // // // // // // // //   const handleAmountChange = (e) => setAmount(e.target.value);

// // // // // // // // // //   const handleCategoryChange = (e) => setCategory(e.target.value);

// // // // // // // // // //   const handleSearchChange = (e) => setSearch(e.target.value);

// // // // // // // // // //   const handleRecurrenceChange = (e) => setIsRecurring(e.target.value === 'Yes');

// // // // // // // // // //   const handleRecurrenceCountChange = (e) => setRecurrenceCount(e.target.value);

// // // // // // // // // //   const handleDateChange = (date) => {
// // // // // // // // // //     setStartDate(date);
// // // // // // // // // //     setEndDate(calculateEndDate(date, 'Weekly', recurrenceCount).toLocaleDateString());
// // // // // // // // // //   };

// // // // // // // // // //   // Handle adding new categories
// // // // // // // // // //   const handleAddCategory = () => {
// // // // // // // // // //     if (category && !categoryList.includes(category)) {
// // // // // // // // // //       setCategoryList([...categoryList, category]);
// // // // // // // // // //       setCategory('');
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleSubmit = (e) => {
// // // // // // // // // //     e.preventDefault();
// // // // // // // // // //     if (amount && category) {
// // // // // // // // // //       const entry = {
// // // // // // // // // //         id: Date.now(),
// // // // // // // // // //         amount: parseFloat(amount),
// // // // // // // // // //         category,
// // // // // // // // // //         startDate,
// // // // // // // // // //         endDate,
// // // // // // // // // //         isRecurring,
// // // // // // // // // //         recurrenceCount,
// // // // // // // // // //       };
// // // // // // // // // //       onSubmit(entry);
// // // // // // // // // //       setAmount('');
// // // // // // // // // //       setCategory('');
// // // // // // // // // //       setStartDate('');
// // // // // // // // // //       setEndDate('');
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const filteredCategories = categoryList.filter((cat) =>
// // // // // // // // // //     cat.toLowerCase().includes(search.toLowerCase())
// // // // // // // // // //   );

// // // // // // // // // //   return (
// // // // // // // // // //     <form onSubmit={handleSubmit}>
// // // // // // // // // //       <h2>Income & Expense Tracker</h2>

// // // // // // // // // //       {/* Amount input */}
// // // // // // // // // //       <div>
// // // // // // // // // //         <label>Amount:</label>
// // // // // // // // // //         <input
// // // // // // // // // //           type="number"
// // // // // // // // // //           value={amount}
// // // // // // // // // //           onChange={handleAmountChange}
// // // // // // // // // //           placeholder="Enter amount"
// // // // // // // // // //           required
// // // // // // // // // //         />
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Category input with autocomplete */}
// // // // // // // // // //       <div>
// // // // // // // // // //         <label>Category:</label>
// // // // // // // // // //         <input
// // // // // // // // // //           type="text"
// // // // // // // // // //           value={category}
// // // // // // // // // //           onChange={handleCategoryChange}
// // // // // // // // // //           placeholder="Enter or select category"
// // // // // // // // // //         />
// // // // // // // // // //         <button type="button" onClick={handleAddCategory}>Add Category</button>
// // // // // // // // // //         <div>
// // // // // // // // // //           <input
// // // // // // // // // //             type="text"
// // // // // // // // // //             placeholder="Search Category"
// // // // // // // // // //             value={search}
// // // // // // // // // //             onChange={handleSearchChange}
// // // // // // // // // //           />
// // // // // // // // // //           <select value={category} onChange={handleCategoryChange}>
// // // // // // // // // //             <option value="">Select a category</option>
// // // // // // // // // //             {filteredCategories.map((cat) => (
// // // // // // // // // //               <option key={cat} value={cat}>{cat}</option>
// // // // // // // // // //             ))}
// // // // // // // // // //           </select>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Recurring and recurrence number */}
// // // // // // // // // //       <div>
// // // // // // // // // //         <label>Recurring:</label>
// // // // // // // // // //         <select value={isRecurring ? 'Yes' : 'No'} onChange={handleRecurrenceChange}>
// // // // // // // // // //           <option value="No">No</option>
// // // // // // // // // //           <option value="Yes">Yes</option>
// // // // // // // // // //         </select>
// // // // // // // // // //       </div>
// // // // // // // // // //       {isRecurring && (
// // // // // // // // // //         <div>
// // // // // // // // // //           <label>Number of occurrences:</label>
// // // // // // // // // //           <input
// // // // // // // // // //             type="number"
// // // // // // // // // //             value={recurrenceCount}
// // // // // // // // // //             onChange={handleRecurrenceCountChange}
// // // // // // // // // //             min="1"
// // // // // // // // // //             max="12"
// // // // // // // // // //           />
// // // // // // // // // //         </div>
// // // // // // // // // //       )}

// // // // // // // // // //       {/* Start Date */}
// // // // // // // // // //       <div>
// // // // // // // // // //         <label>Start Date:</label>
// // // // // // // // // //         <input
// // // // // // // // // //           type="date"
// // // // // // // // // //           value={startDate}
// // // // // // // // // //           onChange={(e) => handleDateChange(e.target.value)}
// // // // // // // // // //         />
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* End Date (auto-calculated) */}
// // // // // // // // // //       <div>
// // // // // // // // // //         <label>End Date:</label>
// // // // // // // // // //         <input
// // // // // // // // // //           type="text"
// // // // // // // // // //           value={endDate || ''}
// // // // // // // // // //           readOnly
// // // // // // // // // //         />
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Submit button */}
// // // // // // // // // //       <button type="submit">Submit</button>
// // // // // // // // // //     </form>
// // // // // // // // // //   );
// // // // // // // // // // }
// // // // // // // // // import React, { useState, useEffect } from 'react';

// // // // // // // // // export default function Form({ onSubmit }) {
// // // // // // // // //   const [amount, setAmount] = useState('');
// // // // // // // // //   const [category, setCategory] = useState('');
// // // // // // // // //   const [categoryList, setCategoryList] = useState([]);
// // // // // // // // //   const [isRecurring, setIsRecurring] = useState('No');
// // // // // // // // //   const [recurrenceCount, setRecurrenceCount] = useState(1);
// // // // // // // // //   const [startDate, setStartDate] = useState('');
// // // // // // // // //   const [endDate, setEndDate] = useState('');
// // // // // // // // //   const [search, setSearch] = useState('');
  
// // // // // // // // //   // Load categories from localStorage or set default ones
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const savedCategories = localStorage.getItem('categories');
// // // // // // // // //     if (savedCategories) {
// // // // // // // // //       setCategoryList(JSON.parse(savedCategories));
// // // // // // // // //     } else {
// // // // // // // // //       setCategoryList(['Food', 'Transportation', 'Streetlives']);
// // // // // // // // //     }
// // // // // // // // //   }, []);

// // // // // // // // //   // Save categories to localStorage
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (categoryList.length > 0) {
// // // // // // // // //       localStorage.setItem('categories', JSON.stringify(categoryList));
// // // // // // // // //     }
// // // // // // // // //   }, [categoryList]);

// // // // // // // // //   // Calculate end date based on recurrence type
// // // // // // // // //   const calculateEndDate = (startDate, recurrenceType, count) => {
// // // // // // // // //     const date = new Date(startDate);
// // // // // // // // //     if (recurrenceType === 'Weekly') {
// // // // // // // // //       date.setDate(date.getDate() + 7 * count);
// // // // // // // // //     } else if (recurrenceType === 'Monthly') {
// // // // // // // // //       date.setMonth(date.getMonth() + count);
// // // // // // // // //     } else if (recurrenceType === 'Yearly') {
// // // // // // // // //       date.setFullYear(date.getFullYear() + count);
// // // // // // // // //     }
// // // // // // // // //     return date;
// // // // // // // // //   };

// // // // // // // // //   // Handle input changes
// // // // // // // // //   const handleAmountChange = (e) => setAmount(e.target.value);
// // // // // // // // //   const handleCategoryChange = (e) => setCategory(e.target.value);
// // // // // // // // //   const handleSearchChange = (e) => setSearch(e.target.value);

// // // // // // // // //   const handleRecurrenceChange = (e) => {
// // // // // // // // //     setIsRecurring(e.target.value);
// // // // // // // // //     if (e.target.value === 'No') {
// // // // // // // // //       setStartDate(new Date().toISOString().split('T')[0]);
// // // // // // // // //       setEndDate('');
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleRecurrenceCountChange = (e) => setRecurrenceCount(e.target.value);

// // // // // // // // //   const handleCategorySelect = (category) => setCategory(category);

// // // // // // // // //   const handleAddCategory = () => {
// // // // // // // // //     if (category && !categoryList.includes(category)) {
// // // // // // // // //       setCategoryList((prevList) => [...prevList, category]);
// // // // // // // // //       setCategory('');
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleDateChange = (date) => {
// // // // // // // // //     setStartDate(date);
// // // // // // // // //     setEndDate(calculateEndDate(date, isRecurring, recurrenceCount).toLocaleDateString());
// // // // // // // // //   };

// // // // // // // // //   const handleSubmit = (e) => {
// // // // // // // // //     e.preventDefault();
// // // // // // // // //     if (amount && category) {
// // // // // // // // //       const newEntry = {
// // // // // // // // //         id: Date.now(),
// // // // // // // // //         amount: parseFloat(amount),
// // // // // // // // //         category,
// // // // // // // // //         startDate,
// // // // // // // // //         endDate,
// // // // // // // // //         isRecurring,
// // // // // // // // //         recurrenceCount,
// // // // // // // // //       };
// // // // // // // // //       onSubmit(newEntry);
// // // // // // // // //       setAmount('');
// // // // // // // // //       setCategory('');
// // // // // // // // //       setStartDate('');
// // // // // // // // //       setEndDate('');
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   // Filter categories based on search term
// // // // // // // // //   const filteredCategories = categoryList.filter((cat) =>
// // // // // // // // //     cat.toLowerCase().includes(search.toLowerCase())
// // // // // // // // //   );

// // // // // // // // //   return (
// // // // // // // // //     <form onSubmit={handleSubmit}>
// // // // // // // // //       <h2>Income & Expense Tracker</h2>

// // // // // // // // //       {/* Amount input */}
// // // // // // // // //       <div>
// // // // // // // // //         <label>Amount:</label>
// // // // // // // // //         <input
// // // // // // // // //           type="number"
// // // // // // // // //           value={amount}
// // // // // // // // //           onChange={handleAmountChange}
// // // // // // // // //           placeholder="Enter amount"
// // // // // // // // //           required
// // // // // // // // //         />
// // // // // // // // //       </div>

// // // // // // // // //       {/* Category input with autocomplete */}
// // // // // // // // //       <div>
// // // // // // // // //         <label>Category:</label>
// // // // // // // // //         <input
// // // // // // // // //           type="text"
// // // // // // // // //           value={category}
// // // // // // // // //           onChange={handleCategoryChange}
// // // // // // // // //           placeholder="Enter or select category"
// // // // // // // // //         />
// // // // // // // // //         <button type="button" onClick={handleAddCategory}>
// // // // // // // // //           Add Category
// // // // // // // // //         </button>
// // // // // // // // //         <div>
// // // // // // // // //           <input
// // // // // // // // //             type="text"
// // // // // // // // //             placeholder="Search Category"
// // // // // // // // //             value={search}
// // // // // // // // //             onChange={handleSearchChange}
// // // // // // // // //           />
// // // // // // // // //           <select value={category} onChange={handleCategoryChange}>
// // // // // // // // //             <option value="">Select a category</option>
// // // // // // // // //             {filteredCategories.map((cat) => (
// // // // // // // // //               <option key={cat} value={cat}>{cat}</option>
// // // // // // // // //             ))}
// // // // // // // // //           </select>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Recurring input */}
// // // // // // // // //       <div>
// // // // // // // // //         <label>Recurring:</label>
// // // // // // // // //         <select value={isRecurring} onChange={handleRecurrenceChange}>
// // // // // // // // //           <option value="No">No</option>
// // // // // // // // //           <option value="Weekly">Weekly</option>
// // // // // // // // //           <option value="Monthly">Monthly</option>
// // // // // // // // //           <option value="Yearly">Yearly</option>
// // // // // // // // //         </select>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Recurrence count */}
// // // // // // // // //       {isRecurring !== 'No' && (
// // // // // // // // //         <div>
// // // // // // // // //           <label>Number of occurrences:</label>
// // // // // // // // //           <input
// // // // // // // // //             type="number"
// // // // // // // // //             value={recurrenceCount}
// // // // // // // // //             onChange={handleRecurrenceCountChange}
// // // // // // // // //             min="1"
// // // // // // // // //             max="12"
// // // // // // // // //           />
// // // // // // // // //         </div>
// // // // // // // // //       )}

// // // // // // // // //       {/* Start Date */}
// // // // // // // // //       <div>
// // // // // // // // //         <label>Start Date:</label>
// // // // // // // // //         <input
// // // // // // // // //           type="date"
// // // // // // // // //           value={startDate}
// // // // // // // // //           onChange={(e) => handleDateChange(e.target.value)}
// // // // // // // // //         />
// // // // // // // // //       </div>

// // // // // // // // //       {/* End Date (auto-calculated) */}
// // // // // // // // //       <div>
// // // // // // // // //         <label>End Date:</label>
// // // // // // // // //         <input
// // // // // // // // //           type="text"
// // // // // // // // //           value={endDate || ''}
// // // // // // // // //           readOnly
// // // // // // // // //         />
// // // // // // // // //       </div>

// // // // // // // // //       {/* Submit button */}
// // // // // // // // //       <button type="submit">Submit</button>
// // // // // // // // //     </form>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // import React, { useState, useEffect } from 'react';

// // // // // // // // export default function Form({ onSubmit }) {
// // // // // // // //   const [amount, setAmount] = useState('');
// // // // // // // //   const [category, setCategory] = useState('');
// // // // // // // //   const [categoryList, setCategoryList] = useState([]);
// // // // // // // //   const [isRecurring, setIsRecurring] = useState('No');
// // // // // // // //   const [recurrenceCount, setRecurrenceCount] = useState(1);
// // // // // // // //   const [startDate, setStartDate] = useState('');
// // // // // // // //   const [endDate, setEndDate] = useState('');
// // // // // // // //   const [search, setSearch] = useState('');

// // // // // // // //   // Load categories from localStorage or set default ones
// // // // // // // //   useEffect(() => {
// // // // // // // //     const savedCategories = localStorage.getItem('categories');
// // // // // // // //     if (savedCategories) {
// // // // // // // //       setCategoryList(JSON.parse(savedCategories));
// // // // // // // //     } else {
// // // // // // // //       setCategoryList(['Food', 'Transportation', 'Streetlives']);
// // // // // // // //     }
// // // // // // // //   }, []);

// // // // // // // //   // Save categories to localStorage
// // // // // // // //   useEffect(() => {
// // // // // // // //     if (categoryList.length > 0) {
// // // // // // // //       localStorage.setItem('categories', JSON.stringify(categoryList));
// // // // // // // //     }
// // // // // // // //   }, [categoryList]);

// // // // // // // //   // Calculate end date based on recurrence type
// // // // // // // //   const calculateEndDate = (startDate, recurrenceType, count) => {
// // // // // // // //     const date = new Date(startDate);
// // // // // // // //     if (recurrenceType === 'Weekly') {
// // // // // // // //       date.setDate(date.getDate() + 7 * count);
// // // // // // // //     } else if (recurrenceType === 'Monthly') {
// // // // // // // //       date.setMonth(date.getMonth() + count);
// // // // // // // //     } else if (recurrenceType === 'Yearly') {
// // // // // // // //       date.setFullYear(date.getFullYear() + count);
// // // // // // // //     }
// // // // // // // //     return date;
// // // // // // // //   };

// // // // // // // //   // Handle input changes
// // // // // // // //   const handleAmountChange = (e) => setAmount(e.target.value);
// // // // // // // //   const handleCategoryChange = (e) => setCategory(e.target.value);
// // // // // // // //   const handleSearchChange = (e) => setSearch(e.target.value);

// // // // // // // //   const handleRecurrenceChange = (e) => {
// // // // // // // //     setIsRecurring(e.target.value);
// // // // // // // //     if (e.target.value === 'No') {
// // // // // // // //       setStartDate(new Date().toISOString().split('T')[0]);
// // // // // // // //       setEndDate('');
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleRecurrenceCountChange = (e) => setRecurrenceCount(e.target.value);

// // // // // // // //   const handleAddCategory = () => {
// // // // // // // //     if (category && !categoryList.includes(category)) {
// // // // // // // //       setCategoryList((prevList) => [...prevList, category]);
// // // // // // // //       setCategory('');
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleDateChange = (date) => {
// // // // // // // //     setStartDate(date);
// // // // // // // //     setEndDate(calculateEndDate(date, isRecurring, recurrenceCount).toLocaleDateString());
// // // // // // // //   };

// // // // // // // //   const handleSubmit = (e) => {
// // // // // // // //     e.preventDefault();
// // // // // // // //     if (amount && category) {
// // // // // // // //       const newEntry = {
// // // // // // // //         id: Date.now(),
// // // // // // // //         amount: parseFloat(amount),
// // // // // // // //         category,
// // // // // // // //         startDate,
// // // // // // // //         endDate,
// // // // // // // //         isRecurring,
// // // // // // // //         recurrenceCount,
// // // // // // // //       };
// // // // // // // //       onSubmit(newEntry);
// // // // // // // //       setAmount('');
// // // // // // // //       setCategory('');
// // // // // // // //       setStartDate('');
// // // // // // // //       setEndDate('');
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // Filter categories based on search term
// // // // // // // //   const filteredCategories = categoryList.filter((cat) =>
// // // // // // // //     cat.toLowerCase().includes(search.toLowerCase())
// // // // // // // //   );

// // // // // // // //   return (
// // // // // // // //     <form onSubmit={handleSubmit}>
// // // // // // // //       <h2>Income & Expense Tracker</h2>

// // // // // // // //       {/* Amount input */}
// // // // // // // //       <div>
// // // // // // // //         <label>Amount:</label>
// // // // // // // //         <input
// // // // // // // //           type="number"
// // // // // // // //           value={amount}
// // // // // // // //           onChange={handleAmountChange}
// // // // // // // //           placeholder="Enter amount"
// // // // // // // //           required
// // // // // // // //         />
// // // // // // // //       </div>

// // // // // // // //       {/* Category input with autocomplete */}
// // // // // // // //       <div>
// // // // // // // //         <label>Category:</label>
// // // // // // // //         <input
// // // // // // // //           type="text"
// // // // // // // //           value={category}
// // // // // // // //           onChange={handleCategoryChange}
// // // // // // // //           placeholder="Enter or select category"
// // // // // // // //         />
// // // // // // // //         <button type="button" onClick={handleAddCategory}>
// // // // // // // //           Add Category
// // // // // // // //         </button>
// // // // // // // //         <div>
// // // // // // // //           <input
// // // // // // // //             type="text"
// // // // // // // //             placeholder="Search Category"
// // // // // // // //             value={search}
// // // // // // // //             onChange={handleSearchChange}
// // // // // // // //           />
// // // // // // // //           <select value={category} onChange={handleCategoryChange}>
// // // // // // // //             <option value="">Select a category</option>
// // // // // // // //             {filteredCategories.map((cat) => (
// // // // // // // //               <option key={cat} value={cat}>{cat}</option>
// // // // // // // //             ))}
// // // // // // // //           </select>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Recurring input */}
// // // // // // // //       <div>
// // // // // // // //         <label>Recurring:</label>
// // // // // // // //         <select value={isRecurring} onChange={handleRecurrenceChange}>
// // // // // // // //           <option value="No">No</option>
// // // // // // // //           <option value="Weekly">Weekly</option>
// // // // // // // //           <option value="Monthly">Monthly</option>
// // // // // // // //           <option value="Yearly">Yearly</option>
// // // // // // // //         </select>
// // // // // // // //       </div>

// // // // // // // //       {/* Recurrence count */}
// // // // // // // //       {isRecurring !== 'No' && (
// // // // // // // //         <div>
// // // // // // // //           <label>Number of occurrences:</label>
// // // // // // // //           <input
// // // // // // // //             type="number"
// // // // // // // //             value={recurrenceCount}
// // // // // // // //             onChange={handleRecurrenceCountChange}
// // // // // // // //             min="1"
// // // // // // // //             max="12"
// // // // // // // //           />
// // // // // // // //         </div>
// // // // // // // //       )}

// // // // // // // //       {/* Start Date */}
// // // // // // // //       <div>
// // // // // // // //         <label>Start Date:</label>
// // // // // // // //         <input
// // // // // // // //           type="date"
// // // // // // // //           value={startDate}
// // // // // // // //           onChange={(e) => handleDateChange(e.target.value)}
// // // // // // // //         />
// // // // // // // //       </div>

// // // // // // // //       {/* End Date (auto-calculated) */}
// // // // // // // //       <div>
// // // // // // // //         <label>End Date:</label>
// // // // // // // //         <input
// // // // // // // //           type="text"
// // // // // // // //           value={endDate || ''}
// // // // // // // //           readOnly
// // // // // // // //         />
// // // // // // // //       </div>

// // // // // // // //       {/* Submit button */}
// // // // // // // //       <button type="submit">Submit</button>
// // // // // // // //     </form>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // import React, { useState, useEffect } from 'react';

// // // // // // // export default function Form({ onSubmit }) {
// // // // // // //   const [amount, setAmount] = useState('');
// // // // // // //   const [category, setCategory] = useState('');
// // // // // // //   const [categoryList, setCategoryList] = useState([]);
// // // // // // //   const [isRecurring, setIsRecurring] = useState(false);
// // // // // // //   const [recurrenceCount, setRecurrenceCount] = useState(1);
// // // // // // //   const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]); // Default to today
// // // // // // //   const [endDate, setEndDate] = useState(''); // End date for recurring, calculated based on number of occurrences

// // // // // // //   // Load categories from localStorage or start with default set
// // // // // // //   useEffect(() => {
// // // // // // //     const savedCategories = localStorage.getItem('categories');
// // // // // // //     if (savedCategories) {
// // // // // // //       setCategoryList(JSON.parse(savedCategories));
// // // // // // //     } else {
// // // // // // //       setCategoryList(['Food', 'Transportation', 'Streetlives']);
// // // // // // //     }
// // // // // // //   }, []);

// // // // // // //   // Save categories to localStorage
// // // // // // //   useEffect(() => {
// // // // // // //     if (categoryList.length > 0) {
// // // // // // //       localStorage.setItem('categories', JSON.stringify(categoryList));
// // // // // // //     }
// // // // // // //   }, [categoryList]);

// // // // // // //   // Handle category selection and add new category if not exists
// // // // // // //   const handleCategoryChange = (e) => {
// // // // // // //     setCategory(e.target.value);
// // // // // // //   };

// // // // // // //   const handleAddCategory = () => {
// // // // // // //     if (category && !categoryList.includes(category)) {
// // // // // // //       setCategoryList([...categoryList, category]);
// // // // // // //       localStorage.setItem('categories', JSON.stringify([...categoryList, category]));
// // // // // // //     } else {
// // // // // // //       alert('Category already exists or is empty!');
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleRecurringChange = (e) => {
// // // // // // //     const value = e.target.value;
// // // // // // //     setIsRecurring(value !== 'No');
// // // // // // //     if (value === 'No') {
// // // // // // //       setEndDate(''); // Reset end date when non-recurring
// // // // // // //     } else {
// // // // // // //       calculateEndDate();
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const calculateEndDate = () => {
// // // // // // //     const start = new Date(startDate);
// // // // // // //     let end = new Date(start);
// // // // // // //     if (isRecurring && recurrenceCount > 0) {
// // // // // // //       end.setDate(start.getDate() + 7 * recurrenceCount); // Weekly calculation
// // // // // // //       setEndDate(end.toISOString().split('T')[0]);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleRecurrenceCountChange = (e) => {
// // // // // // //     setRecurrenceCount(e.target.value);
// // // // // // //     calculateEndDate(); // Recalculate end date when count changes
// // // // // // //   };

// // // // // // //   const handleSubmit = (e) => {
// // // // // // //     e.preventDefault();

// // // // // // //     if (!amount || !category) {
// // // // // // //       alert('Please fill in all required fields.');
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     const entry = {
// // // // // // //       id: Date.now(),
// // // // // // //       amount: parseFloat(amount),
// // // // // // //       category,
// // // // // // //       type: isRecurring ? 'Recurring' : 'Non-Recurring',
// // // // // // //       startDate,
// // // // // // //       endDate: isRecurring ? endDate : '', // Only show end date if recurring
// // // // // // //     };

// // // // // // //     onSubmit(entry); // Pass entry to the parent component for further processing
// // // // // // //     setAmount('');
// // // // // // //     setCategory('');
// // // // // // //     setStartDate(new Date().toISOString().split('T')[0]); // Reset to today
// // // // // // //     setEndDate(''); // Clear end date after submit
// // // // // // //     setRecurrenceCount(1); // Reset recurrences
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <form onSubmit={handleSubmit} className="form-container">
// // // // // // //       <h2>Income & Expense Tracker</h2>

// // // // // // //       <div>
// // // // // // //         <label>Amount:</label>
// // // // // // //         <input
// // // // // // //           type="number"
// // // // // // //           value={amount}
// // // // // // //           onChange={(e) => setAmount(e.target.value)}
// // // // // // //           placeholder="Enter amount"
// // // // // // //           required
// // // // // // //         />
// // // // // // //       </div>

// // // // // // //       <div>
// // // // // // //         <label>Category:</label>
// // // // // // //         <input
// // // // // // //           type="text"
// // // // // // //           value={category}
// // // // // // //           onChange={handleCategoryChange}
// // // // // // //           placeholder="Enter or select category"
// // // // // // //         />
// // // // // // //         <button type="button" onClick={handleAddCategory}>
// // // // // // //           Add Category
// // // // // // //         </button>
// // // // // // //         <select value={category} onChange={handleCategoryChange}>
// // // // // // //           <option value="">Select a category</option>
// // // // // // //           {categoryList.map((cat) => (
// // // // // // //             <option key={cat} value={cat}>
// // // // // // //               {cat}
// // // // // // //             </option>
// // // // // // //           ))}
// // // // // // //         </select>
// // // // // // //       </div>

// // // // // // //       <div>
// // // // // // //         <label>Recurring:</label>
// // // // // // //         <select value={isRecurring ? 'Weekly' : 'No'} onChange={handleRecurringChange}>
// // // // // // //           <option value="No">No</option>
// // // // // // //           <option value="Weekly">Weekly</option>
// // // // // // //           <option value="Monthly">Monthly</option>
// // // // // // //           <option value="Yearly">Yearly</option>
// // // // // // //         </select>
// // // // // // //       </div>

// // // // // // //       {isRecurring && (
// // // // // // //         <>
// // // // // // //           <div>
// // // // // // //             <label>Number of occurrences:</label>
// // // // // // //             <input
// // // // // // //               type="number"
// // // // // // //               value={recurrenceCount}
// // // // // // //               onChange={handleRecurrenceCountChange}
// // // // // // //               min="1"
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //           <div>
// // // // // // //             <label>Start Date:</label>
// // // // // // //             <input
// // // // // // //               type="date"
// // // // // // //               value={startDate}
// // // // // // //               onChange={(e) => setStartDate(e.target.value)}
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //           <div>
// // // // // // //             <label>End Date:</label>
// // // // // // //             <input type="text" value={endDate} disabled />
// // // // // // //           </div>
// // // // // // //         </>
// // // // // // //       )}

// // // // // // //       {!isRecurring && (
// // // // // // //         <div>
// // // // // // //           <label>Start Date:</label>
// // // // // // //           <input
// // // // // // //             type="date"
// // // // // // //             value={startDate}
// // // // // // //             onChange={(e) => setStartDate(e.target.value)}
// // // // // // //           />
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       <div>
// // // // // // //         <label>Taxed:</label>
// // // // // // //         <input
// // // // // // //           type="checkbox"
// // // // // // //           checked={false}
// // // // // // //           onChange={() => {}}
// // // // // // //         />
// // // // // // //       </div>

// // // // // // //       <button type="submit">Submit</button>
// // // // // // //     </form>
// // // // // // //   );
// // // // // // // }
// // // // // // import React, { useState, useEffect } from 'react';

// // // // // // export default function Form({ onSubmit }) {
// // // // // //   const [amount, setAmount] = useState('');
// // // // // //   const [category, setCategory] = useState('');
// // // // // //   const [categoryList, setCategoryList] = useState([]);
// // // // // //   const [isRecurring, setIsRecurring] = useState(false);
// // // // // //   const [recurrenceCount, setRecurrenceCount] = useState(1);
// // // // // //   const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]); // Default to today
// // // // // //   const [endDate, setEndDate] = useState(''); // End date for recurring, calculated based on number of occurrences
// // // // // //   const [search, setSearch] = useState(''); // Search field for category

// // // // // //   // Utility function to format dates as Apr 20, 25
// // // // // //   const formatDate = (date) => {
// // // // // //     const options = { year: '2-digit', month: 'short', day: '2-digit' };
// // // // // //     return new Date(date).toLocaleDateString('en-US', options);
// // // // // //   };

// // // // // //   // Load categories from localStorage or start with default set
// // // // // //   useEffect(() => {
// // // // // //     const savedCategories = localStorage.getItem('categories');
// // // // // //     if (savedCategories) {
// // // // // //       setCategoryList(JSON.parse(savedCategories));
// // // // // //     } else {
// // // // // //       setCategoryList(['Food', 'Transportation', 'Streetlives']);
// // // // // //     }
// // // // // //   }, []);

// // // // // //   // Save categories to localStorage
// // // // // //   useEffect(() => {
// // // // // //     if (categoryList.length > 0) {
// // // // // //       localStorage.setItem('categories', JSON.stringify(categoryList));
// // // // // //     }
// // // // // //   }, [categoryList]);

// // // // // //   // Handle category change and search functionality
// // // // // //   const handleCategoryChange = (e) => {
// // // // // //     setCategory(e.target.value);
// // // // // //   };

// // // // // //   const handleSearchChange = (e) => {
// // // // // //     setSearch(e.target.value);
// // // // // //   };

// // // // // //   // Handle adding new category
// // // // // //   const handleAddCategory = () => {
// // // // // //     if (category && !categoryList.includes(category)) {
// // // // // //       setCategoryList([...categoryList, category]);
// // // // // //       localStorage.setItem('categories', JSON.stringify([...categoryList, category]));
// // // // // //     } else {
// // // // // //       alert('Category already exists or is empty!');
// // // // // //     }
// // // // // //   };

// // // // // //   // Handle recurring change
// // // // // //   const handleRecurringChange = (e) => {
// // // // // //     const value = e.target.value;
// // // // // //     setIsRecurring(value !== 'No');
// // // // // //     if (value === 'No') {
// // // // // //       setEndDate(''); // Reset end date when non-recurring
// // // // // //     } else {
// // // // // //       calculateEndDate();
// // // // // //     }
// // // // // //   };

// // // // // //   // Calculate end date based on recurrence count and type
// // // // // //   const calculateEndDate = () => {
// // // // // //     const start = new Date(startDate);
// // // // // //     let end = new Date(start);
// // // // // //     if (isRecurring && recurrenceCount > 0) {
// // // // // //       end.setDate(start.getDate() + 7 * recurrenceCount); // Weekly calculation
// // // // // //       setEndDate(end.toISOString().split('T')[0]);
// // // // // //     }
// // // // // //   };

// // // // // //   // Handle recurrence count change
// // // // // //   const handleRecurrenceCountChange = (e) => {
// // // // // //     setRecurrenceCount(e.target.value);
// // // // // //     calculateEndDate(); // Recalculate end date when count changes
// // // // // //   };

// // // // // //   const handleSubmit = (e) => {
// // // // // //     e.preventDefault();

// // // // // //     if (!amount || !category) {
// // // // // //       alert('Please fill in all required fields.');
// // // // // //       return;
// // // // // //     }

// // // // // //     let calculatedEndDate = '';
// // // // // //     if (isRecurring && recurrenceCount > 0) {
// // // // // //       const start = new Date(startDate);
// // // // // //       let end = new Date(start);
// // // // // //       end.setDate(start.getDate() + 7 * recurrenceCount); // Weekly calculation, modify for monthly/yearly
// // // // // //       calculatedEndDate = end.toISOString().split('T')[0];
// // // // // //     }

// // // // // //     const entry = {
// // // // // //       id: Date.now(),
// // // // // //       amount: parseFloat(amount),
// // // // // //       category,
// // // // // //       type: isRecurring ? 'Recurring' : 'Non-Recurring',
// // // // // //       startDate,
// // // // // //       endDate: isRecurring ? calculatedEndDate : '', // Only show end date if recurring
// // // // // //     };

// // // // // //     onSubmit(entry); // Pass entry to the parent component for further processing
// // // // // //     setAmount('');
// // // // // //     setCategory('');
// // // // // //     setStartDate(new Date().toISOString().split('T')[0]); // Reset to today
// // // // // //     setEndDate(''); // Clear end date after submit
// // // // // //     setRecurrenceCount(1); // Reset recurrences
// // // // // //   };

// // // // // //   // Filtered categories based on search term
// // // // // //   const filteredCategories = categoryList.filter((cat) =>
// // // // // //     cat.toLowerCase().includes(search.toLowerCase())
// // // // // //   );

// // // // // //   return (
// // // // // //     <form onSubmit={handleSubmit} className="form-container">
// // // // // //       <h2>Income & Expense Tracker</h2>

// // // // // //       <div>
// // // // // //         <label>Amount:</label>
// // // // // //         <input
// // // // // //           type="number"
// // // // // //           value={amount}
// // // // // //           onChange={(e) => setAmount(e.target.value)}
// // // // // //           placeholder="Enter amount"
// // // // // //           required
// // // // // //         />
// // // // // //       </div>

// // // // // //       <div>
// // // // // //         <label>Category:</label>
// // // // // //         <input
// // // // // //           type="text"
// // // // // //           value={category}
// // // // // //           onChange={handleCategoryChange}
// // // // // //           placeholder="Enter or select category"
// // // // // //           list="categoryList"
// // // // // //         />
// // // // // //         <button type="button" onClick={handleAddCategory}>
// // // // // //           Add Category
// // // // // //         </button>
// // // // // //         <datalist id="categoryList">
// // // // // //           {filteredCategories.map((cat) => (
// // // // // //             <option key={cat} value={cat} />
// // // // // //           ))}
// // // // // //         </datalist>
// // // // // //       </div>

// // // // // //       <div>
// // // // // //         <label>Recurring:</label>
// // // // // //         <select value={isRecurring ? 'Weekly' : 'No'} onChange={handleRecurringChange}>
// // // // // //           <option value="No">No</option>
// // // // // //           <option value="Weekly">Weekly</option>
// // // // // //           <option value="Monthly">Monthly</option>
// // // // // //           <option value="Yearly">Yearly</option>
// // // // // //         </select>
// // // // // //       </div>

// // // // // //       {isRecurring && (
// // // // // //         <>
// // // // // //           <div>
// // // // // //             <label>Number of occurrences:</label>
// // // // // //             <input
// // // // // //               type="number"
// // // // // //               value={recurrenceCount}
// // // // // //               onChange={handleRecurrenceCountChange}
// // // // // //               min="1"
// // // // // //             />
// // // // // //           </div>
// // // // // //           <div>
// // // // // //             <label>Start Date:</label>
// // // // // //             <input
// // // // // //               type="date"
// // // // // //               value={startDate}
// // // // // //               onChange={(e) => setStartDate(e.target.value)}
// // // // // //             />
// // // // // //           </div>
// // // // // //           <div>
// // // // // //             <label>End Date:</label>
// // // // // //             <input type="text" value={formatDate(endDate)} disabled />
// // // // // //           </div>
// // // // // //         </>
// // // // // //       )}

// // // // // //       {!isRecurring && (
// // // // // //         <div>
// // // // // //           <label>Start Date:</label>
// // // // // //           <input
// // // // // //             type="date"
// // // // // //             value={startDate}
// // // // // //             onChange={(e) => setStartDate(e.target.value)}
// // // // // //           />
// // // // // //         </div>
// // // // // //       )}

// // // // // //       <div>
// // // // // //         <label>Taxed:</label>
// // // // // //         <input
// // // // // //           type="checkbox"
// // // // // //           checked={false}
// // // // // //           onChange={() => {}}
// // // // // //         />
// // // // // //       </div>

// // // // // //       <button type="submit">Submit</button>
// // // // // //     </form>
// // // // // //   );
// // // // // // }
// // // // // import React, { useState, useEffect } from 'react';

// // // // // export default function Form({ onSubmit }) {
// // // // //   const [amount, setAmount] = useState('');
// // // // //   const [category, setCategory] = useState('');
// // // // //   const [categoryList, setCategoryList] = useState([]);
// // // // //   const [isRecurring, setIsRecurring] = useState(false);
// // // // //   const [recurrenceCount, setRecurrenceCount] = useState(1);
// // // // //   const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]); // Default to today
// // // // //   const [endDate, setEndDate] = useState(''); // End date for recurring, calculated based on number of occurrences
// // // // //   const [search, setSearch] = useState(''); // Search field for category
// // // // //   const [isEditing, setIsEditing] = useState(false); // For delete functionality
// // // // //   const [selectedCategory, setSelectedCategory] = useState('');

// // // // //   // Utility function to format dates as Apr 20, 25
// // // // //   const formatDate = (date) => {
// // // // //     const options = { year: '2-digit', month: 'short', day: '2-digit' };
// // // // //     return new Date(date).toLocaleDateString('en-US', options);
// // // // //   };

// // // // //   // Load categories from localStorage or start with default set
// // // // //   useEffect(() => {
// // // // //     const savedCategories = localStorage.getItem('categories');
// // // // //     if (savedCategories) {
// // // // //       setCategoryList(JSON.parse(savedCategories));
// // // // //     } else {
// // // // //       setCategoryList(['Food', 'Transportation', 'Streetlives']);
// // // // //     }
// // // // //   }, []);

// // // // //   // Save categories to localStorage
// // // // //   useEffect(() => {
// // // // //     if (categoryList.length > 0) {
// // // // //       localStorage.setItem('categories', JSON.stringify(categoryList));
// // // // //     }
// // // // //   }, [categoryList]);

// // // // //   // Handle category change and search functionality
// // // // //   const handleCategoryChange = (e) => {
// // // // //     setCategory(e.target.value);
// // // // //   };

// // // // //   const handleSearchChange = (e) => {
// // // // //     setSearch(e.target.value);
// // // // //   };

// // // // //   // Handle adding or deleting category
// // // // //   const handleCategoryAction = () => {
// // // // //     if (category && !categoryList.includes(category)) {
// // // // //       setCategoryList([...categoryList, category]);
// // // // //       localStorage.setItem('categories', JSON.stringify([...categoryList, category]));
// // // // //     } else if (categoryList.includes(category)) {
// // // // //       setCategoryList(categoryList.filter((cat) => cat !== category));
// // // // //       localStorage.setItem('categories', JSON.stringify(categoryList.filter((cat) => cat !== category)));
// // // // //       setCategory('');
// // // // //     } else {
// // // // //       alert('Category is empty!');
// // // // //     }
// // // // //   };

// // // // //   // Handle recurring change
// // // // //   const handleRecurringChange = (e) => {
// // // // //     const value = e.target.value;
// // // // //     setIsRecurring(value !== 'No');
// // // // //     if (value === 'No') {
// // // // //       setEndDate(''); // Reset end date when non-recurring
// // // // //     } else {
// // // // //       calculateEndDate();
// // // // //     }
// // // // //   };

// // // // //   // Calculate end date based on recurrence count and type
// // // // //   const calculateEndDate = () => {
// // // // //     const start = new Date(startDate);
// // // // //     let end = new Date(start);
// // // // //     if (isRecurring && recurrenceCount > 0) {
// // // // //       end.setDate(start.getDate() + 7 * recurrenceCount); // Weekly calculation
// // // // //       setEndDate(end.toISOString().split('T')[0]);
// // // // //     }
// // // // //   };

// // // // //   // Handle recurrence count change
// // // // //   const handleRecurrenceCountChange = (e) => {
// // // // //     setRecurrenceCount(e.target.value);
// // // // //     calculateEndDate(); // Recalculate end date when count changes
// // // // //   };

// // // // //   const handleSubmit = (e) => {
// // // // //     e.preventDefault();

// // // // //     if (!amount || !category) {
// // // // //       alert('Please fill in all required fields.');
// // // // //       return;
// // // // //     }

// // // // //     let calculatedEndDate = '';
// // // // //     if (isRecurring && recurrenceCount > 0) {
// // // // //       const start = new Date(startDate);
// // // // //       let end = new Date(start);
// // // // //       end.setDate(start.getDate() + 7 * recurrenceCount); // Weekly calculation, modify for monthly/yearly
// // // // //       calculatedEndDate = end.toISOString().split('T')[0];
// // // // //     }

// // // // //     const entry = {
// // // // //       id: Date.now(),
// // // // //       amount: parseFloat(amount),
// // // // //       category,
// // // // //       type: isRecurring ? 'Recurring' : 'Non-Recurring',
// // // // //       startDate,
// // // // //       endDate: isRecurring ? calculatedEndDate : '', // Only show end date if recurring
// // // // //     };

// // // // //     onSubmit(entry); // Pass entry to the parent component for further processing
// // // // //     setAmount('');
// // // // //     setCategory('');
// // // // //     setStartDate(new Date().toISOString().split('T')[0]); // Reset to today
// // // // //     setEndDate(''); // Clear end date after submit
// // // // //     setRecurrenceCount(1); // Reset recurrences
// // // // //   };

// // // // //   // Filtered categories based on search term
// // // // //   const filteredCategories = categoryList.filter((cat) =>
// // // // //     cat.toLowerCase().startsWith(search.toLowerCase()) // Match at the start of the word
// // // // //   );

// // // // //   return (
// // // // //     <form onSubmit={handleSubmit} className="form-container">
// // // // //       <h2>Income & Expense Tracker</h2>

// // // // //       <div>
// // // // //         <label>Amount:</label>
// // // // //         <input
// // // // //           type="number"
// // // // //           value={amount}
// // // // //           onChange={(e) => setAmount(e.target.value)}
// // // // //           placeholder="Enter amount"
// // // // //           required
// // // // //         />
// // // // //       </div>

// // // // //       <div>
// // // // //         <label>Category:</label>
// // // // //         <input
// // // // //           type="text"
// // // // //           value={category}
// // // // //           onChange={handleCategoryChange}
// // // // //           placeholder="Enter or select category"
// // // // //           list="categoryList"
// // // // //         />
// // // // //         <button type="button" onClick={handleCategoryAction}>
// // // // //           {categoryList.includes(category) ? 'Delete Category' : 'Add Category'}
// // // // //         </button>
// // // // //         <datalist id="categoryList">
// // // // //           {filteredCategories.map((cat) => (
// // // // //             <option key={cat} value={cat} />
// // // // //           ))}
// // // // //         </datalist>
// // // // //       </div>

// // // // //       <div>
// // // // //         <label>Recurring:</label>
// // // // //         <select value={isRecurring ? 'Weekly' : 'No'} onChange={handleRecurringChange}>
// // // // //           <option value="No">No</option>
// // // // //           <option value="Weekly">Weekly</option>
// // // // //           <option value="Monthly">Monthly</option>
// // // // //           <option value="Yearly">Yearly</option>
// // // // //         </select>
// // // // //       </div>

// // // // //       {isRecurring && (
// // // // //         <>
// // // // //           <div>
// // // // //             <label>Number of occurrences:</label>
// // // // //             <input
// // // // //               type="number"
// // // // //               value={recurrenceCount}
// // // // //               onChange={handleRecurrenceCountChange}
// // // // //               min="1"
// // // // //             />
// // // // //           </div>
// // // // //           <div>
// // // // //             <label>Start Date:</label>
// // // // //             <input
// // // // //               type="date"
// // // // //               value={startDate}
// // // // //               onChange={(e) => setStartDate(e.target.value)}
// // // // //             />
// // // // //           </div>
// // // // //           <div>
// // // // //             <label>End Date:</label>
// // // // //             <input type="text" value={formatDate(endDate)} disabled />
// // // // //           </div>
// // // // //         </>
// // // // //       )}

// // // // //       {!isRecurring && (
// // // // //         <div>
// // // // //           <label>Start Date:</label>
// // // // //           <input
// // // // //             type="date"
// // // // //             value={startDate}
// // // // //             onChange={(e) => setStartDate(e.target.value)}
// // // // //           />
// // // // //         </div>
// // // // //       )}

// // // // //       <div>
// // // // //         <label>Taxed:</label>
// // // // //         <input
// // // // //           type="checkbox"
// // // // //           checked={false}
// // // // //           onChange={() => {}}
// // // // //         />
// // // // //       </div>

// // // // //       <button type="submit">Submit</button>
// // // // //     </form>
// // // // //   );
// // // // // }
// // // // export default function Form({ onSubmit, editingEntry }) {
// // // //   const [amount, setAmount] = useState('');
// // // //   const [category, setCategory] = useState('');
// // // //   const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
// // // //   const [isRecurring, setIsRecurring] = useState(false);
// // // //   const [recurrenceCount, setRecurrenceCount] = useState(1);

// // // //   useEffect(() => {
// // // //     if (editingEntry) {
// // // //       setAmount(editingEntry.amount);
// // // //       setCategory(editingEntry.category);
// // // //       setStartDate(editingEntry.startDate || new Date().toISOString().split('T')[0]);
// // // //       setIsRecurring(editingEntry.type === 'Recurring');
// // // //       // Add recurrenceCount logic if you store it
// // // //     }
// // // //   }, [editingEntry]);

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     if (!amount || !category) return alert("All fields are required.");

// // // //     const entry = {
// // // //       amount: parseFloat(amount),
// // // //       category,
// // // //       type: isRecurring ? "Recurring" : "Non-Recurring",
// // // //       startDate,
// // // //     };

// // // //     onSubmit(entry);
// // // //     setAmount('');
// // // //     setCategory('');
// // // //     setStartDate(new Date().toISOString().split('T')[0]);
// // // //     setIsRecurring(false);
// // // //     setRecurrenceCount(1);
// // // //   };

// // // //   return (
// // // //     <form onSubmit={handleSubmit}>
// // // //       <h2>{editingEntry ? 'Edit Entry' : 'Add Entry'}</h2>
// // // //       {/* Form fields here... */}
// // // //       <button type="submit">{editingEntry ? 'Update' : 'Submit'}</button>
// // // //     </form>
// // // //   );
// // // // }
// // // import React, { useEffect, useState } from "react";

// // // export default function Form({ onSubmit, editingEntry }) {
// // //   const [amount, setAmount] = useState('');
// // //   const [category, setCategory] = useState('');
// // //   const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
// // //   const [isRecurring, setIsRecurring] = useState(false);

// // //   useEffect(() => {
// // //     if (editingEntry) {
// // //       setAmount(editingEntry.amount);
// // //       setCategory(editingEntry.category);
// // //       setStartDate(editingEntry.startDate || new Date().toISOString().split('T')[0]);
// // //       setIsRecurring(editingEntry.type === "Recurring");
// // //     }
// // //   }, [editingEntry]);

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     if (!amount || !category) {
// // //       return alert("Please fill in all required fields.");
// // //     }

// // //     const entry = {
// // //       amount: parseFloat(amount),
// // //       category,
// // //       startDate,
// // //       type: isRecurring ? "Recurring" : "Non-Recurring",
// // //     };

// // //     onSubmit(entry);
// // //     setAmount('');
// // //     setCategory('');
// // //     setStartDate(new Date().toISOString().split('T')[0]);
// // //     setIsRecurring(false);
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit} className="form-container">
// // //       <h2>{editingEntry ? "Edit Entry" : "Add Entry"}</h2>
// // //       <div>
// // //         <label>Amount:</label>
// // //         <input
// // //           type="number"
// // //           value={amount}
// // //           onChange={(e) => setAmount(e.target.value)}
// // //           required
// // //         />
// // //       </div>

// // //       <div>
// // //         <label>Category:</label>
// // //         <input
// // //           type="text"
// // //           value={category}
// // //           onChange={(e) => setCategory(e.target.value)}
// // //           required
// // //         />
// // //       </div>

// // //       <div>
// // //         <label>Start Date:</label>
// // //         <input
// // //           type="date"
// // //           value={startDate}
// // //           onChange={(e) => setStartDate(e.target.value)}
// // //         />
// // //       </div>

// // //       <div>
// // //         <label>Recurring:</label>
// // //         <input
// // //           type="checkbox"
// // //           checked={isRecurring}
// // //           onChange={(e) => setIsRecurring(e.target.checked)}
// // //         />
// // //       </div>

// // //       <button type="submit">{editingEntry ? "Update" : "Submit"}</button>
// // //     </form>
// // //   );
// // // }
// // import React, { useState } from "react";

// // export default function Form({ onSubmit, categoryList }) {
// //   const [amount, setAmount] = useState('');
// //   const [category, setCategory] = useState('');
// //   const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
// //   const [isRecurring, setIsRecurring] = useState(false);
// //   const [isIncome, setIsIncome] = useState(true);
// //   const [taxed, setTaxed] = useState(false);
  

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (!amount || !category) return alert("All fields are required.");

// //     onSubmit({
// //       amount: parseFloat(amount),
// //       category,
// //       startDate,
// //       type: isRecurring ? "Recurring" : "Non-Recurring",
// //       taxed,
// //       isIncome
// //     });

// //     setAmount('');
// //     setCategory('');
// //     setIsRecurring(false);
// //     setTaxed(false);
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <div>
// //         <label>Amount:</label>
// //         <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
// //       </div>

// //       <div>
// //         <label>Category:</label>
// //         <input list="categories" value={category} onChange={(e) => setCategory(e.target.value)} />
// //         <datalist id="categories">
// //           {categoryList.map((cat, idx) => (
// //             <option key={idx} value={cat} />
// //           ))}
// //         </datalist>
// //       </div>

// //       <div>
// //         <label>Date:</label>
// //         <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
// //       </div>

// //       <div>
// //         <label>Recurring:</label>
// //         <input type="checkbox" checked={isRecurring} onChange={() => setIsRecurring(!isRecurring)} />
// //       </div>

// //       <div>
// //         <label>Taxable:</label>
// //         <input type="checkbox" checked={taxed} onChange={() => setTaxed(!taxed)} />
// //       </div>

// //       <div>
// //         <label>Type:</label>
// //         <label>
// //           <input
// //             type="radio"
// //             name="type"
// //             value="income"
// //             checked={isIncome}
// //             onChange={() => setIsIncome(true)}
// //           /> Income
// //         </label>
// //         <label>
// //           <input
// //             type="radio"
// //             name="type"
// //             value="expense"
// //             checked={!isIncome}
// //             onChange={() => setIsIncome(false)}
// //           /> Expense
// //         </label>
// //       </div>

// //       <button type="submit">Submit</button>
// //     </form>
// //   );
// // }
// import React, { useState, useEffect } from "react";

// export default function Form({ onSubmit, categoryList }) {
//   const [amount, setAmount] = useState('');
//   const [category, setCategory] = useState('');
//   const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
//   const [recurrenceType, setRecurrenceType] = useState('No');
//   const [recurrenceCount, setRecurrenceCount] = useState(1);
//   const [endDate, setEndDate] = useState('');
//   const [isIncome, setIsIncome] = useState(true);
//   const [taxed, setTaxed] = useState(false);

//   useEffect(() => {
//     calculateEndDate();
//   }, [startDate, recurrenceType, recurrenceCount]);

//   const calculateEndDate = () => {
//     if (recurrenceType === 'No') {
//       setEndDate('');
//       return;
//     }

//     const start = new Date(startDate);
//     const end = new Date(start);

//     switch (recurrenceType) {
//       case 'Weekly':
//         end.setDate(start.getDate() + 7 * recurrenceCount);
//         break;
//       case 'Monthly':
//         end.setMonth(start.getMonth() + recurrenceCount);
//         break;
//       case 'Yearly':
//         end.setFullYear(start.getFullYear() + recurrenceCount);
//         break;
//       default:
//         break;
//     }

//     setEndDate(end.toISOString().split('T')[0]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!amount || !category) return alert("All fields are required.");

//     onSubmit({
//       amount: parseFloat(amount),
//       category,
//       startDate,
//       endDate,
//       type: recurrenceType === 'No' ? 'Non-Recurring' : 'Recurring',
//       recurrenceType,
//       recurrenceCount,
//       taxed,
//       isIncome
//     });

//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Add Entry</h2>

//       <div>
//         <label>Amount:</label>
//         <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
//       </div>

//       <div>
//         <label>Category:</label>
//         <input list="categories" value={category} onChange={(e) => setCategory(e.target.value)} />
//         <datalist id="categories">
//           {categoryList.map((cat, idx) => (
//             <option key={idx} value={cat} />
//           ))}
//         </datalist>
//       </div>

//       <div>
//         <label>Start Date:</label>
//         <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
//       </div>

//       <div>
//         <label>Recurring:</label>
//         <select value={recurrenceType} onChange={(e) => setRecurrenceType(e.target.value)}>
//           <option value="No">No</option>
//           <option value="Weekly">Weekly</option>
//           <option value="Monthly">Monthly</option>
//           <option value="Yearly">Yearly</option>
//         </select>
//       </div>

//       {recurrenceType !== 'No' && (
//         <>
//           <div>
//             <label>Number of Occurrences:</label>
//             <input
//               type="number"
//               min="1"
//               value={recurrenceCount}
//               onChange={(e) => setRecurrenceCount(parseInt(e.target.value) || 1)}
//             />
//           </div>
//           <div>
//             <label>End Date:</label>
//             <input type="text" value={endDate} readOnly />
//           </div>
//         </>
//       )}

//       <div>
//         <label>Taxable:</label>
//         <input type="checkbox" checked={taxed} onChange={() => setTaxed(!taxed)} />
//       </div>

//       <div>
//         <label>Type:</label>
//         <label>
//           <input
//             type="radio"
//             name="type"
//             value="income"
//             checked={isIncome}
//             onChange={() => setIsIncome(true)}
//           /> Income
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="type"
//             value="expense"
//             checked={!isIncome}
//             onChange={() => setIsIncome(false)}
//           /> Expense
//         </label>
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// }
import React, { useState, useEffect } from "react";

export default function Form({ onSubmit, categoryList }) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [recurrenceType, setRecurrenceType] = useState('No');
  const [recurrenceCount, setRecurrenceCount] = useState(1);
  const [endDate, setEndDate] = useState('');
  const [isIncome, setIsIncome] = useState(true);
  const [taxed, setTaxed] = useState(false);

  useEffect(() => {
    if (recurrenceType === 'No') {
      setEndDate('');
      return;
    }

    const start = new Date(startDate);
    const end = new Date(start);

    switch (recurrenceType) {
      case 'Weekly':
        end.setDate(start.getDate() + 7 * recurrenceCount);
        break;
      case 'Monthly':
        end.setMonth(start.getMonth() + recurrenceCount);
        break;
      case 'Yearly':
        end.setFullYear(start.getFullYear() + recurrenceCount);
        break;
    }

    setEndDate(end.toISOString().split('T')[0]);
  }, [startDate, recurrenceType, recurrenceCount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !category) return alert("All fields are required.");
    if (parseFloat(amount) < 0) return alert("Amount cannot be negative.");


    onSubmit({
      amount: parseFloat(amount),
      category,
      startDate,
      endDate,
      type: recurrenceType === 'No' ? 'Non-Recurring' : 'Recurring',
      recurrenceType,
      recurrenceCount,
      taxed,
      isIncome
    });

  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Entry</h2>

      <div>
        <label>Amount:</label>
        <input
  type="number"
  min="0"
  value={amount}
  onChange={(e) => setAmount(e.target.value)}
/>

      </div>

      <div>
        <label>Category:</label>
        <input
          list="categories"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <datalist id="categories">
          {categoryList.map((cat, idx) => (
            <option key={idx} value={cat} />
          ))}
        </datalist>
      </div>

      <div>
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      <div>
        <label>Recurring:</label>
        <select value={recurrenceType} onChange={(e) => setRecurrenceType(e.target.value)}>
          <option value="No">No</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>

      {recurrenceType !== 'No' && (
        <>
          <div>
            <label>Number of Occurrences:</label>
            <input
              type="number"
              min="1"
              value={recurrenceCount}
              onChange={(e) => setRecurrenceCount(parseInt(e.target.value) || 1)}
            />
          </div>

          <div>
            <label>End Date:</label>
            <input type="text" value={endDate} readOnly />
          </div>
        </>
      )}

      <div>
        <label>Taxable:</label>
        <input
          type="checkbox"
          checked={taxed}
          onChange={() => setTaxed(!taxed)}
        />
      </div>
<div className="toggle-wrapper">
  <label className="switch">
    <input
      type="checkbox"
      checked={isIncome}
      onChange={() => setIsIncome(!isIncome)}
    />
    <span className="slider round"></span>
  </label>
  <span>{isIncome ? 'Income' : 'Expense'}</span>
</div>


      <button type="submit">Submit</button>
    </form>
  );
}
