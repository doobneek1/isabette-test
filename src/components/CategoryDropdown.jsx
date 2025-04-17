import React, { useState, useRef, useEffect } from "react";

export default function CategoryDropdown({ value, onChange, categoryList, onDeleteCategory }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState(value || "");
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (cat) => {
    setInputVal(cat);
    onChange(cat);
    setIsOpen(false);
  };

  const filtered = categoryList.filter(c =>
    c.toLowerCase().includes(inputVal.toLowerCase())
  );

  return (
    <div ref={wrapperRef} style={{ position: "relative", width: "250px" }}>
      <input
        type="text"
        value={inputVal}
        placeholder="Select or type new"
        onChange={(e) => {
          setInputVal(e.target.value);
          onChange(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        style={{ width: "100%", padding: "6px", borderRadius: "4px", border: "1px solid #ccc" }}
      />
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            background: "#f9f9f9",
            border: "1px solid #ddd",
            borderTop: "none",
            zIndex: 1000,
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          {filtered.length === 0 ? (
            <div style={{ padding: "8px", fontStyle: "italic", color: "#888" }}>No matches</div>
          ) : (
            filtered.map((cat) => (
              <div
                key={cat}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "6px 10px",
                  borderBottom: "1px solid #eee",
                  cursor: "pointer"
                }}
              >
                <span onClick={() => handleSelect(cat)}>{cat}</span>
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteCategory(cat);
                  }}
                  style={{
                    color: "#e91e63",
                    fontWeight: "bold",
                    cursor: "pointer",
                    paddingLeft: "10px"
                  }}
                >
                  ❌
                </span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
