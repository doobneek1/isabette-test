// // // export default function EntryTable({ entries, onDelete, onEdit }) {
// // //     return (
// // //       <div className="table-container">
// // //         <h2>Entries</h2>
// // //         <table>
// // //           <thead>
// // //             <tr>
// // //               <th>Date</th>
// // //               <th>Amount</th>
// // //               <th>Category</th>
// // //               <th>Type</th>
// // //               <th>Actions</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {entries.map((entry) => (
// // //               <tr key={entry.id}>
// // //                 <td>{new Date(entry.date).toLocaleDateString()}</td>
// // //                 <td>{entry.amount}</td>
// // //                 <td>{entry.category}</td>
// // //                 <td>{entry.type}</td>
// // //                 <td>
// // //                   <button onClick={() => onDelete(entry.id)}>Delete</button>
// // //                   <button onClick={() => onEdit(entry.id, entry)}>Edit</button>
// // //                 </td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //     );
// // //   }
// // export default function EntryTable({ entries, onDelete, onEdit }) {
// //   return (
// //     <div className="table-container">
// //       <h2>Entries</h2>
// //       <table>
// //         <thead>
// //           <tr>
// //             <th>Date</th>
// //             <th>Amount</th>
// //             <th>Category</th>
// //             <th>Type</th>
// //             <th>Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {entries.map((entry) => (
// //             <tr key={entry.id}>
// //               <td>{new Date(entry.startDate).toLocaleDateString()}</td>
// //               <td>${entry.amount.toFixed(2)}</td>
// //               <td>{entry.category}</td>
// //               <td>{entry.type}</td>
// //               <td>
// //                 <button onClick={() => onEdit(entry.id, entry)}>Edit</button>
// //                 <button onClick={() => onDelete(entry.id)}>Delete</button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }
// import React from "react";

// export default function EntryTable({ entries, onDelete, onEdit }) {
//   return (
//     <div className="table-container">
//       <h2>Entries</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Amount</th>
//             <th>Category</th>
//             <th>Type</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {entries.map((entry) => (
//             <tr key={entry.id}>
//               <td>{new Date(entry.startDate).toLocaleDateString()}</td>
//               <td>${entry.amount.toFixed(2)}</td>
//               <td>{entry.category}</td>
//               <td>{entry.type}</td>
//               <td>
//                 <button onClick={() => onEdit(entry)}>Edit</button>
//                 <button onClick={() => onDelete(entry.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
import React from "react";

export default function EntryTable({ entries, onDelete, onEdit }) {

  console.log("Entries in table:", entries);

  return (
    <div className="table-container">
      <h2>Entries</h2>
      <table>
        <thead>
          <tr>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Taxed</th>
            <th>Type</th>
            <th>Number of occurrences</th>
            <th>Income?</th>
          </tr>
        </thead>
        <tbody>
  {entries.length === 0 ? (
    <tr>
      <td colSpan="8">No entries yet.</td>
    </tr>
  ) : (
    entries.map((entry) => (
      <tr key={entry.id}>
        <td>{new Date(entry.startDate).toLocaleDateString()}</td>
        <td>{entry.endDate ? new Date(entry.endDate).toLocaleDateString() : '-'}</td>
        <td>${entry.amount.toFixed(2)}</td>
        <td>{entry.category}</td>
        <td>{entry.taxed ? "Yes" : "No"}</td>
        <td>{entry.type}</td>
        <td>{entry.recurrenceCount}</td>
        <td>{entry.isIncome ? "Yes" : "No"}</td>

      </tr>
    ))
  )}
</tbody>

      </table>
    </div>
  );
}
  