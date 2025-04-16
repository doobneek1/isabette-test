// // import React, { useEffect, useState } from "react";
// // import Plotly from "plotly.js-dist";

// // export default function Dashboard({ entries }) {
// //   const [rangeStart, setRangeStart] = useState(() => {
// //     const d = new Date(); d.setDate(d.getDate() - 30);
// //     return d.toISOString().split("T")[0];
// //   });

// //   const [rangeEnd, setRangeEnd] = useState(() => {
// //     return new Date().toISOString().split("T")[0];
// //   });

// //   const initialWealthDate = "2025-04-15";
// //   const initialWealthValue = 253605+500+550+500+5000+4000;

// //   useEffect(() => {
// //     if (!entries || entries.length === 0) return;

// //     const parsed = entries.flatMap(entry => {
// //       const start = new Date(entry.startDate);
// //       const end = entry.recurrenceType !== "No" && entry.endDate
// //         ? new Date(entry.endDate)
// //         : start;

// //       const numDays = Math.max(1, (end - start) / (1000 * 60 * 60 * 24) + 1);
// //       const dailyAmount = entry.recurrenceType === "No"
// //         ? entry.amount
// //         : (entry.amount * entry.recurrenceCount) / numDays;

// //       const days = [];
// //       for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
// //         days.push({
// //           date: new Date(d),
// //           amount: dailyAmount,
// //           isIncome: entry.isIncome,
// //           taxed: entry.taxed,
// //           category: entry.category || "Uncategorized"
// //         });
// //       }
// //       return days;
// //     });

// //     parsed.sort((a, b) => a.date - b.date);

// //     // Group by day
// //     const dailyTotals = {};
// //     let net = initialWealthValue;
// //     let taxedIncome = 0, rent = 0, totalIncome = 0;
// //     const incomeByCategory = {}, expenseByCategory = {};

// //     parsed.forEach(entry => {
// //       const day = entry.date.toISOString().split("T")[0];
// //       if (day < rangeStart || day > rangeEnd) return;

// //       const adjusted = entry.isIncome
// //         ? entry.taxed ? entry.amount : entry.amount * 1.333
// //         : entry.taxed ? entry.amount * 1.08 : entry.amount;

// //       if (!dailyTotals[day]) {
// //         dailyTotals[day] = { income: 0, expense: 0 };
// //       }

// //       if (entry.isIncome) {
// //         dailyTotals[day].income += adjusted;
// //         totalIncome += adjusted;
// //         if (entry.taxed) taxedIncome += entry.amount;
// //         incomeByCategory[entry.category] = (incomeByCategory[entry.category] || 0) + adjusted;
// //       } else {
// //         dailyTotals[day].expense += adjusted;
// //         if ((entry.category || "").toLowerCase().includes("rent")) {
// //           rent += adjusted;
// //         }
// //         expenseByCategory[entry.category] = (expenseByCategory[entry.category] || 0) + adjusted;
// //       }
// //     });


// //     const x = Object.keys(dailyTotals).sort();
// //     const income = [], expense = [], netWorth = [];

// //     x.forEach(day => {
// //       const { income: inc, expense: exp } = dailyTotals[day];
// //       income.push(inc);
// //       expense.push(exp);

// //       if (new Date(day) >= new Date(initialWealthDate)) {
// //         net += inc - exp;
// //         netWorth.push(net);
// //       } else {
// //         netWorth.push(null);
// //       }
      
// //     });

// //     // Rent burden and taxes
// //     const rentBurden = totalIncome ? (rent / totalIncome) * 100 : 0;
// //     const taxOwed = taxedIncome * 0.25;

// //     document.getElementById("rentBurden").innerText = `${rentBurden.toFixed(1)}%`;
// //     document.getElementById("taxOwed").innerText = `$${taxOwed.toFixed(2)}`;

// //     // Plot line charts
// //     Plotly.newPlot("incomeExpenseChart", [
// //       { x, y: income, name: "Income", mode: "lines", line: { color: "green" } },
// //       { x, y: expense, name: "Expense", mode: "lines", line: { color: "red" } }
// //     ], {
// //       title: "Income & Expense",
// //       xaxis: { title: "Date" },
// //       yaxis: { title: "$" }
// //     });

// //     Plotly.newPlot("netWorthChart", [
// //       { x, y: netWorth, name: "Net Worth", mode: "lines", line: { color: "orange" } }
// //     ], {
// //       title: "Net Worth",
// //       xaxis: { title: "Date" },
// //       yaxis: { title: "$" }
// //     });

// //     const pie = (id, data, title) => {
// //       Plotly.newPlot(id, [{
// //         type: "pie",
// //         labels: Object.keys(data),
// //         values: Object.values(data),
// //         textinfo: "label+percent"
// //       }], { title });
// //     };

// //     pie("incomePie", incomeByCategory, "Income Breakdown");
// //     pie("expensePie", expenseByCategory, "Expense Breakdown");

// //   }, [entries, rangeStart, rangeEnd]);

// //   return (
// //     <div style={{ marginTop: "30px" }}>
// //       {/* 📅 Range Picker */}
// //       <div>
// //         <label>
// //           Start Date:
// //           <input type="date" value={rangeStart} onChange={e => setRangeStart(e.target.value)} />
// //         </label>
// //         <label style={{ marginLeft: "15px" }}>
// //           End Date:
// //           <input type="date" value={rangeEnd} onChange={e => setRangeEnd(e.target.value)} />
// //         </label>
// //       </div>

// //       {/* 📊 Calculated Stats */}
// //       <div style={{ fontSize: "18px", margin: "10px 0" }}>
// //         🏡 Rent Burden: <span id="rentBurden">-</span> | 💰 Taxes Owed: <span id="taxOwed">-</span>
// //       </div>

// //       {/* 📈 Line Charts */}
// //       <div style={{ display: "flex", gap: "2%", marginBottom: "30px" }}>
// //         <div id="incomeExpenseChart" style={{ width: "49%", height: "400px" }}></div>
// //         <div id="netWorthChart" style={{ width: "49%", height: "400px" }}></div>
// //       </div>

// //       {/* 🥧 Pie Charts */}
// //       <div style={{ display: "flex", gap: "2%" }}>
// //         <div id="incomePie" style={{ width: "49%", height: "350px" }}></div>
// //         <div id="expensePie" style={{ width: "49%", height: "350px" }}></div>
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useEffect, useState } from "react";
// import Plotly from "plotly.js-dist";

// export default function Dashboard({ entries }) {
//   const [rangeStart, setRangeStart] = useState(() => {
//     const d = new Date();
//     d.setDate(d.getDate() - 30);
//     return d.toISOString().split("T")[0];
//   });

//   const [rangeEnd, setRangeEnd] = useState(() => {
//     return new Date().toISOString().split("T")[0];
//   });

//   const initialWealthDate = "2025-04-15";
//   const initialWealthValue = 253605 + 500 + 550 + 500 + 5000 + 4000;

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

//     // Determine full date range
//     const minDate = parsed.length ? parsed[0].date : new Date(initialWealthDate);
//     const maxDate = parsed.length ? parsed[parsed.length - 1].date : new Date();

//     // Fill date range
//     const dateCursor = new Date(minDate);
//     const dailyTotals = {};
//     while (dateCursor <= maxDate) {
//       const key = dateCursor.toISOString().split("T")[0];
//       dailyTotals[key] = { income: 0, expense: 0 };
//       dateCursor.setDate(dateCursor.getDate() + 1);
//     }

//     // Aggregate income and expenses
//     let taxedIncome = 0, rent = 0, totalIncome = 0;
//     const incomeByCategory = {}, expenseByCategory = {};

//     parsed.forEach(entry => {
//       const key = entry.date.toISOString().split("T")[0];
//       const adjusted = entry.isIncome
//         ? entry.taxed ? entry.amount : entry.amount * 1.333
//         : entry.taxed ? entry.amount * 1.08 : entry.amount;

//       if (entry.isIncome) {
//         dailyTotals[key].income += adjusted;
//         totalIncome += adjusted;
//         if (entry.taxed && entry.isIncome) {
//           const dateStr = entry.date.toISOString().split("T")[0];
//           if (dateStr >= rangeStart && dateStr <= rangeEnd) {
//             taxedIncome += entry.amount;
//           }
//         }
        
//         incomeByCategory[entry.category] = (incomeByCategory[entry.category] || 0) + adjusted;
//       } else {
//         dailyTotals[key].expense += adjusted;
//         if ((entry.category || "").toLowerCase().includes("rent")) rent += adjusted;
//         expenseByCategory[entry.category] = (expenseByCategory[entry.category] || 0) + adjusted;
//       }
//     });

//     const sortedDates = Object.keys(dailyTotals).sort();
//     const x = [], income = [], expense = [], netWorth = [];

//     let net = initialWealthValue;
//     for (const day of sortedDates) {
//       const { income: inc, expense: exp } = dailyTotals[day];
//       net += inc - exp;
//       x.push(day);
//       income.push(inc);
//       expense.push(exp);
//       netWorth.push(net);
//     }

//     // Calculated outputs
//     const rentBurden = totalIncome ? (rent / totalIncome) * 100 : 0;
//     const taxOwed = taxedIncome * 0.25;

//     document.getElementById("rentBurden").innerText = `${rentBurden.toFixed(1)}%`;
//     document.getElementById("taxOwed").innerText = `$${taxOwed.toFixed(2)}`;

//     // Plots
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

//       <div style={{ fontSize: "18px", margin: "10px 0" }}>
//         🏡 Rent Burden: <span id="rentBurden">-</span> | 💰 Taxes Owed: <span id="taxOwed">-</span>
//       </div>

//       <div style={{ display: "flex", gap: "2%", marginBottom: "30px" }}>
//         <div id="incomeExpenseChart" style={{ width: "49%", height: "400px" }}></div>
//         <div id="netWorthChart" style={{ width: "49%", height: "400px" }}></div>
//       </div>

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
    const d = new Date();
    d.setDate(d.getDate() - 30);
    return d.toISOString().split("T")[0];
  });

  const [rangeEnd, setRangeEnd] = useState(() => new Date().toISOString().split("T")[0]);

  const initialWealthDate = "2025-04-15";
  const initialWealthValue = 263155; // sum of known assets

  useEffect(() => {
    if (!entries?.length) return;

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

    const dailyTotals = {};
    const incomeByCategory = {};
    const expenseByCategory = {};
    let taxedIncome = 0;
    let totalIncome = 0;
    let rent = 0;

    const minDate = parsed[0]?.date || new Date(initialWealthDate);
    const maxDate = parsed[parsed.length - 1]?.date || new Date();
    for (let d = new Date(minDate); d <= maxDate; d.setDate(d.getDate() + 1)) {
      dailyTotals[d.toISOString().split("T")[0]] = { income: 0, expense: 0 };
    }

    parsed.forEach(({ date, amount, isIncome, taxed, category }) => {
      const key = date.toISOString().split("T")[0];
      const adjusted = isIncome
        ? taxed ? amount : amount * 1.333
        : taxed ? amount * 1.08 : amount;

      if (isIncome) {
        dailyTotals[key].income += adjusted;
        totalIncome += adjusted;
        if (taxed && key >= rangeStart && key <= rangeEnd) taxedIncome += amount;
        incomeByCategory[category] = (incomeByCategory[category] || 0) + adjusted;
      } else {
        dailyTotals[key].expense += adjusted;
        if (category.toLowerCase().includes("rent")) rent += adjusted;
        expenseByCategory[category] = (expenseByCategory[category] || 0) + adjusted;
      }
    });

    const x = [];
    const income = [];
    const expense = [];
    const netWorth = [];
    let net = initialWealthValue;

    Object.entries(dailyTotals)
      .sort(([a], [b]) => new Date(a) - new Date(b))
      .forEach(([day, { income: inc, expense: exp }]) => {
        x.push(day);
        income.push(inc);
        expense.push(exp);
        net += inc - exp;
        netWorth.push(net);
      });

    const rentBurden = totalIncome ? (rent / totalIncome) * 100 : 0;
    const taxOwed = taxedIncome * 0.25;

    document.getElementById("rentBurden").innerText = rentBurden.toFixed(1) + "%";
    document.getElementById("taxOwed").innerText = "$" + taxOwed.toFixed(2);

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

    const drawPie = (id, data, title) => {
      Plotly.newPlot(id, [{
        type: "pie",
        labels: Object.keys(data),
        values: Object.values(data),
        textinfo: "label+percent"
      }], { title });
    };

    drawPie("incomePie", incomeByCategory, "Income Breakdown");
    drawPie("expensePie", expenseByCategory, "Expense Breakdown");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entries, rangeStart, rangeEnd]);

  return (
    <div style={{ marginTop: "30px" }}>
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

      <div style={{ fontSize: "18px", margin: "10px 0" }}>
        🏡 Rent Burden: <span id="rentBurden">-</span> | 💰 Taxes Owed: <span id="taxOwed">-</span>
      </div>

      <div style={{ display: "flex", gap: "2%", marginBottom: "30px" }}>
        <div id="incomeExpenseChart" style={{ width: "49%", height: "400px" }}></div>
        <div id="netWorthChart" style={{ width: "49%", height: "400px" }}></div>
      </div>

      <div style={{ display: "flex", gap: "2%" }}>
        <div id="incomePie" style={{ width: "49%", height: "350px" }}></div>
        <div id="expensePie" style={{ width: "49%", height: "350px" }}></div>
      </div>
    </div>
  );
}
