// import React, { useEffect, useState } from "react";
// import Plotly from "plotly.js-dist";

// export default function Dashboard({ entries }) {
//   const [rangeStart, setRangeStart] = useState(() => {
//     const d = new Date(); d.setDate(d.getDate() - 30);
//     return d.toISOString().split("T")[0];
//   });

//   const [rangeEnd, setRangeEnd] = useState(() => {
//     return new Date().toISOString().split("T")[0];
//   });

//   const initialWealthDate = "2025-04-10";
//   const initialWealthValue = 100000;

//   useEffect(() => {
//     if (!entries || entries.length === 0) return;

//     const parsed = entries.flatMap(entry => {
//       const start = new Date(entry.startDate);
//       const end = entry.recurrenceType !== "No" && entry.endDate
//         ? new Date(entry.endDate)
//         : start;

//       const numDays = Math.max(1, (end - start) / (1000 * 60 * 60 * 24) + 1);
//       const dailyAmount = entry.recurrenceType === "No"
//         ? entry.amount
//         : (entry.amount * entry.recurrenceCount) / numDays;

//       const days = [];
//       for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
//         days.push({
//           date: new Date(d),
//           amount: dailyAmount,
//           isIncome: entry.isIncome,
//           taxed: entry.taxed,
//           category: entry.category || "Uncategorized"
//         });
//       }
//       return days;
//     });

//     parsed.sort((a, b) => a.date - b.date);

//     const filtered = parsed.filter(entry => {
//       const d = entry.date.toISOString().split("T")[0];
//       return d >= rangeStart && d <= rangeEnd;
//     });

//     const x = [], income = [], expense = [], netWorth = [];
//     const incomeByCategory = {}, expenseByCategory = {};
//     let net = initialWealthValue;
//     let taxedIncome = 0, rent = 0, totalIncome = 0;

//     filtered.forEach(entry => {
//       const day = entry.date.toISOString().split("T")[0];
//       const adjusted = entry.isIncome
//         ? entry.taxed ? entry.amount : entry.amount * 1.333
//         : entry.taxed ? entry.amount * 1.08 : entry.amount;

//       x.push(day);
//       income.push(entry.isIncome ? adjusted : 0);
//       expense.push(!entry.isIncome ? adjusted : 0);

//       if (entry.date >= new Date(initialWealthDate)) {
//         net += entry.isIncome ? adjusted : -adjusted;
//         netWorth.push(net);
//       } else {
//         netWorth.push(null);
//       }

//       if (entry.isIncome) {
//         totalIncome += adjusted;
//         if (entry.taxed) taxedIncome += entry.amount;
//         incomeByCategory[entry.category] = (incomeByCategory[entry.category] || 0) + adjusted;
//       } else {
//         if ((entry.category || "").toLowerCase().includes("rent")) {
//           rent += adjusted;
//         }
//         expenseByCategory[entry.category] = (expenseByCategory[entry.category] || 0) + adjusted;
//       }
//     });

//     const rentBurden = totalIncome ? (rent / totalIncome) * 100 : 0;
//     const taxOwed = taxedIncome * 0.25;

//     document.getElementById("rentBurden").innerText = `${rentBurden.toFixed(1)}%`;
//     document.getElementById("taxOwed").innerText = `$${taxOwed.toFixed(2)}`;

//     Plotly.newPlot("incomeExpenseChart", [
//       { x, y: income, name: "Income", mode: "lines", line: { color: "green" } },
//       { x, y: expense, name: "Expense", mode: "lines", line: { color: "red" } }
//     ], {
//       title: "Income & Expense",
//       xaxis: { title: "Date" },
//       yaxis: { title: "$" }
//     });

//     Plotly.newPlot("netWorthChart", [
//       { x, y: netWorth, name: "Net Worth", mode: "lines", line: { color: "orange" } }
//     ], {
//       title: "Net Worth",
//       xaxis: { title: "Date" },
//       yaxis: { title: "$" }
//     });

//     const pie = (id, data, title) => {
//       Plotly.newPlot(id, [{
//         type: "pie",
//         labels: Object.keys(data),
//         values: Object.values(data),
//         textinfo: "label+percent"
//       }], { title });
//     };

//     pie("incomePie", incomeByCategory, "Income Breakdown");
//     pie("expensePie", expenseByCategory, "Expense Breakdown");

//   }, [entries, rangeStart, rangeEnd]);

//   return (
//     <div style={{ marginTop: "30px" }}>
//       {/* 📅 Range Picker */}
//       <div>
//         <label>
//           Start Date:
//           <input type="date" value={rangeStart} onChange={e => setRangeStart(e.target.value)} />
//         </label>
//         <label style={{ marginLeft: "15px" }}>
//           End Date:
//           <input type="date" value={rangeEnd} onChange={e => setRangeEnd(e.target.value)} />
//         </label>
//       </div>

//       {/* 📊 Calculated Stats */}
//       <div style={{ fontSize: "18px", margin: "10px 0" }}>
//         🏡 Rent Burden: <span id="rentBurden">-</span> | 💰 Taxes Owed: <span id="taxOwed">-</span>
//       </div>

//       {/* 📈 Line Charts */}
//       <div style={{ display: "flex", gap: "2%", marginBottom: "30px" }}>
//         <div id="incomeExpenseChart" style={{ width: "49%", height: "400px" }}></div>
//         <div id="netWorthChart" style={{ width: "49%", height: "400px" }}></div>
//       </div>

//       {/* 🥧 Pie Charts */}
//       <div style={{ display: "flex", gap: "2%" }}>
//         <div id="incomePie" style={{ width: "49%", height: "350px" }}></div>
//         <div id="expensePie" style={{ width: "49%", height: "350px" }}></div>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import Plotly from "plotly.js-dist";

export default function Dashboard({ entries }) {
  const [rangeStart, setRangeStart] = useState(() => {
    const d = new Date(); d.setDate(d.getDate() - 30);
    return d.toISOString().split("T")[0];
  });

  const [rangeEnd, setRangeEnd] = useState(() => {
    return new Date().toISOString().split("T")[0];
  });

  const initialWealthDate = "2025-01-10";
  const initialWealthValue = 250000;

  useEffect(() => {
    if (!entries || entries.length === 0) return;

    const parsed = entries.flatMap(entry => {
      const start = new Date(entry.startDate);
      const end = entry.recurrenceType !== "No" && entry.endDate
        ? new Date(entry.endDate)
        : start;

      const numDays = Math.max(1, (end - start) / (1000 * 60 * 60 * 24) + 1);
      const dailyAmount = entry.recurrenceType === "No"
        ? entry.amount
        : (entry.amount * entry.recurrenceCount) / numDays;

      const days = [];
      for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        days.push({
          date: new Date(d),
          amount: dailyAmount,
          isIncome: entry.isIncome,
          taxed: entry.taxed,
          category: entry.category || "Uncategorized"
        });
      }
      return days;
    });

    parsed.sort((a, b) => a.date - b.date);

    // Group by day
    const dailyTotals = {};
    let net = initialWealthValue;
    let taxedIncome = 0, rent = 0, totalIncome = 0;
    const incomeByCategory = {}, expenseByCategory = {};

    parsed.forEach(entry => {
      const day = entry.date.toISOString().split("T")[0];
      if (day < rangeStart || day > rangeEnd) return;

      const adjusted = entry.isIncome
        ? entry.taxed ? entry.amount : entry.amount * 1.333
        : entry.taxed ? entry.amount * 1.08 : entry.amount;

      if (!dailyTotals[day]) {
        dailyTotals[day] = { income: 0, expense: 0 };
      }

      if (entry.isIncome) {
        dailyTotals[day].income += adjusted;
        totalIncome += adjusted;
        if (entry.taxed) taxedIncome += entry.amount;
        incomeByCategory[entry.category] = (incomeByCategory[entry.category] || 0) + adjusted;
      } else {
        dailyTotals[day].expense += adjusted;
        if ((entry.category || "").toLowerCase().includes("rent")) {
          rent += adjusted;
        }
        expenseByCategory[entry.category] = (expenseByCategory[entry.category] || 0) + adjusted;
      }
    });

    const x = Object.keys(dailyTotals).sort();
    const income = [], expense = [], netWorth = [];

    x.forEach(day => {
      const { income: inc, expense: exp } = dailyTotals[day];
      income.push(inc);
      expense.push(exp);

      if (new Date(day) >= new Date(initialWealthDate)) {
        net += inc - exp;
        netWorth.push(net);
      } else {
        netWorth.push(null);
      }
      
    });

    // Rent burden and taxes
    const rentBurden = totalIncome ? (rent / totalIncome) * 100 : 0;
    const taxOwed = taxedIncome * 0.25;

    document.getElementById("rentBurden").innerText = `${rentBurden.toFixed(1)}%`;
    document.getElementById("taxOwed").innerText = `$${taxOwed.toFixed(2)}`;

    // Plot line charts
    Plotly.newPlot("incomeExpenseChart", [
      { x, y: income, name: "Income", mode: "lines", line: { color: "green" } },
      { x, y: expense, name: "Expense", mode: "lines", line: { color: "red" } }
    ], {
      title: "Income & Expense",
      xaxis: { title: "Date" },
      yaxis: { title: "$" }
    });

    Plotly.newPlot("netWorthChart", [
      { x, y: netWorth, name: "Net Worth", mode: "lines", line: { color: "orange" } }
    ], {
      title: "Net Worth",
      xaxis: { title: "Date" },
      yaxis: { title: "$" }
    });

    const pie = (id, data, title) => {
      Plotly.newPlot(id, [{
        type: "pie",
        labels: Object.keys(data),
        values: Object.values(data),
        textinfo: "label+percent"
      }], { title });
    };

    pie("incomePie", incomeByCategory, "Income Breakdown");
    pie("expensePie", expenseByCategory, "Expense Breakdown");

  }, [entries, rangeStart, rangeEnd]);

  return (
    <div style={{ marginTop: "30px" }}>
      {/* 📅 Range Picker */}
      <div>
        <label>
          Start Date:
          <input type="date" value={rangeStart} onChange={e => setRangeStart(e.target.value)} />
        </label>
        <label style={{ marginLeft: "15px" }}>
          End Date:
          <input type="date" value={rangeEnd} onChange={e => setRangeEnd(e.target.value)} />
        </label>
      </div>

      {/* 📊 Calculated Stats */}
      <div style={{ fontSize: "18px", margin: "10px 0" }}>
        🏡 Rent Burden: <span id="rentBurden">-</span> | 💰 Taxes Owed: <span id="taxOwed">-</span>
      </div>

      {/* 📈 Line Charts */}
      <div style={{ display: "flex", gap: "2%", marginBottom: "30px" }}>
        <div id="incomeExpenseChart" style={{ width: "49%", height: "400px" }}></div>
        <div id="netWorthChart" style={{ width: "49%", height: "400px" }}></div>
      </div>

      {/* 🥧 Pie Charts */}
      <div style={{ display: "flex", gap: "2%" }}>
        <div id="incomePie" style={{ width: "49%", height: "350px" }}></div>
        <div id="expensePie" style={{ width: "49%", height: "350px" }}></div>
      </div>
    </div>
  );
}
