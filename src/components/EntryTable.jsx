import React, { useState } from "react";

export default function EntryTable({ entries, onDelete }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("startDate");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (key) => {
    if (sortBy === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  const filteredEntries = entries.filter((entry) => {
    const term = searchTerm.toLowerCase();
    return (
      entry.category.toLowerCase().includes(term) ||
      entry.amount.toString().includes(term)
    );
  });

  const sortedEntries = [...filteredEntries].sort((a, b) => {
    const aVal = sortBy === "amount" ? a.amount : new Date(a.startDate);
    const bVal = sortBy === "amount" ? b.amount : new Date(b.startDate);
    return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
  });

  return (
    <div className="table-container">
      <h2>Entries</h2>
      <input
        type="text"
        placeholder="Search by category or amount"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px" }}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("startDate")} style={{ cursor: "pointer" }}>
              Start Date {sortBy === "startDate" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
            </th>
            <th>End Date</th>
            <th onClick={() => handleSort("amount")} style={{ cursor: "pointer" }}>
              Amount {sortBy === "amount" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
            </th>
            <th>Category</th>
            <th>Taxed</th>
            <th>Type</th>
            <th># Occurrences</th>
            <th>Income?</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedEntries.length === 0 ? (
            <tr>
              <td colSpan="9">No entries found.</td>
            </tr>
          ) : (
            sortedEntries.map((entry) => (
              <tr key={entry.id}>
                <td>{new Date(entry.startDate).toLocaleDateString()}</td>
                <td>{entry.endDate ? new Date(entry.endDate).toLocaleDateString() : '-'}</td>
                <td>${entry.amount.toFixed(2)}</td>
                <td>{entry.category}</td>
                <td>{entry.taxed ? "Yes" : "No"}</td>
                <td>{entry.type}</td>
                <td>{entry.recurrenceCount}</td>
                <td>{entry.isIncome ? "Yes" : "No"}</td>
                <td>
                  <button onClick={() => onDelete(entry.id)}>🗑️</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
