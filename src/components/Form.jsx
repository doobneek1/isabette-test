import React, { useState, useEffect } from "react";
import { format, parseISO, isBefore, isToday } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Form({ onSubmit, categoryList, onDeleteCategory }) {
  const [showDeleteList, setShowDeleteList] = useState(false);

  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [recurrenceType, setRecurrenceType] = useState('');
  const [recurrenceCount, setRecurrenceCount] = useState(1);
  const [endDate, setEndDate] = useState('');
  const [isIncome, setIsIncome] = useState(true);
  const [taxed, setTaxed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!recurrenceType || recurrenceType === 'No') {
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
      default:
        break;
    }

    setEndDate(end.toISOString().split('T')[0]);
  }, [startDate, recurrenceType, recurrenceCount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !category) return;

    onSubmit({
      amount: parseFloat(amount),
      category,
      startDate,
      endDate,
      type: !recurrenceType || recurrenceType === 'No' ? 'Non-Recurring' : 'Recurring',
      recurrenceType: recurrenceType || 'No',
      recurrenceCount,
      taxed,
      isIncome
    });

    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 2000); // Reset button after 2s

  };

  const formattedEndDate = endDate ? format(parseISO(endDate), "MMM d, yy") : null;
  const today = new Date();
  const endDateMessage = () => {
    if (!endDate) return "";
    const end = parseISO(endDate);
    if (isToday(end)) return "The last payment is happening today.";
    if (isBefore(end, today)) return `The last payment happened on ${formattedEndDate}`;
    return `The last payment will happen on ${formattedEndDate}`;
  };

  const isValid = !!amount && !!category;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Entry</h2>
      <button
  type="button"
  onClick={() => setShowDeleteList(!showDeleteList)}
  style={{
    marginBottom: "10px",
    backgroundColor: "#eee",
    border: "1px solid #ccc",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer"
  }}
>
  {showDeleteList ? "Hide Categories" : "Delete Categories"}
</button>




      {/* Category */}
      <div>
        <label>Category:</label>
        <input
          list="categories"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
        {showDeleteList && (
  <div style={{ marginTop: "10px", maxHeight: "200px", overflowY: "auto" }}>
    {categoryList.map((cat, idx) => (
      <div
        key={idx}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "6px 8px",
          borderBottom: "1px solid #eee",
          background: "#fafafa"
        }}
      >
        <span>{cat}</span>
        <button
          type="button"
          onClick={() => onDeleteCategory(cat)}
          style={{
            background: "transparent",
            border: "none",
            color: "#e53935",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          ❌
        </button>
      </div>
    ))}
  </div>
)}

        <datalist id="categories">
          {categoryList.map((cat, idx) => (
            <option key={idx} value={cat} />
          ))}
        </datalist>
      </div>
      {/* Amount */}
      <div>
        <label>{`How much did you ${isIncome ? 'earn' : 'spend'} on ${category || 'this category'}?`}</label>
        <input
          type="number"
          min="1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </div>
      {/* Recurrence */}
      {amount && category && (
        <div style={{ marginTop: "10px" }}>
          <label>{`Was $${amount} a one-time ${isIncome ? 'income' : 'expense'} ${isIncome ? 'from' : 'on'} ${category}, or recurring?`}</label>
          <select
            value={recurrenceType}
            onChange={(e) => setRecurrenceType(e.target.value)}
            style={{ marginLeft: "10px" }}
          >
            <option value="No">It was one-time</option>
            <option value="Weekly">Recurring, weekly</option>
            <option value="Monthly">Recurring, monthly</option>
            <option value="Yearly">Recurring, yearly</option>
          </select>
        </div>
      )}

      {/* Recurrence Count */}
      {recurrenceType && recurrenceType !== 'No' && (
        <>
          <div>
            <label>
              {`How many ${
                recurrenceType === 'Weekly' ? 'weekly' :
                recurrenceType === 'Monthly' ? 'monthly' : 'yearly'
              } payments are you reporting?`}
            </label>
            <input
              type="number"
              min="1"
              value={recurrenceCount}
              onChange={(e) => setRecurrenceCount(parseInt(e.target.value) || 1)}
            />
          </div>
        </>
      )}

{amount && category && (
  <div>
    <label style={{ display: "block", marginTop: "12px" }}>
      {recurrenceType && recurrenceType !== 'No'
        ? "When did the first payment occur?"
        : `The payment was ${isIncome ? 'received' : 'made'} on:`}
    </label>
    <DatePicker
      selected={parseISO(startDate)}
      onChange={(date) => setStartDate(date.toISOString().split("T")[0])}
      dateFormat="MMM d, yy"
      placeholderText="Select date"
      style={{ marginTop: "8px" }}
    />
  </div>
)}


      {/* End Date Message */}
      {recurrenceType && recurrenceType !== 'No' && endDateMessage() && (
        <p style={{ fontStyle: "italic", marginTop: "10px" }}>{endDateMessage()}</p>
      )}

      {/* Taxable Button */}
      <div style={{ marginTop: "10px" }}>
        <label>Was this {isIncome ? 'income' : 'expense'} taxable?</label>
        <button
          type="button"
          onClick={() => setTaxed(!taxed)}
          style={{
            marginLeft: "10px",
            backgroundColor: taxed ? "#4caf50" : "#999",
            color: "white",
            border: "none",
            padding: "5px 10px",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          {taxed ? "Yes" : "No"}
        </button>
      </div>

      {/* Income/Expense Toggle */}
      <div className="toggle-wrapper" style={{ marginTop: "10px" }}>
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

      {/* Submit */}
      <button
  type="submit"
  disabled={!isValid}
  style={{
    marginTop: "15px",
    backgroundColor: isValid ? "#4caf50" : "#ccc", // ✅ green like toggle
    color: "white",
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    fontWeight: "bold",
    cursor: isValid ? "pointer" : "not-allowed",
    transition: "background-color 0.3s ease"
  }}
>
  {submitted ? "Submitted" : "Submit"}
</button>

    </form>
  );
}
