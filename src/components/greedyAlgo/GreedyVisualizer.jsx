// import React from "react";

// export default function GreedyVisualizer({
//   selectedAlgorithm,
//   inputData,
//   currentStep,
// }) {
    
//     const [activities, setActivities] = useState([
//   { start: 1, finish: 2 },
//   { start: 3, finish: 4 },
//   { start: 0, finish: 6 },
//   { start: 5, finish: 7 },
//   { start: 8, finish: 9 },
//   { start: 5, finish: 9 },
// ]);

// const [currentIndex, setCurrentIndex] = useState(-1);

// const [selectedActivities, setSelectedActivities] = useState([]);

// const [rejectedActivities, setRejectedActivities] = useState([]);
//   // ===========================
//   // Activity Selection
//   // ===========================
// function ActivitySelectionVisualizer({
//   activities,
//   currentIndex,
//   selectedActivities,
//   rejectedActivities,
// }) {
//   return (
//     <div className="w-full rounded-xl border border-slate-700 bg-slate-900 p-6">

//       {/* Heading */}

//       <div className="mb-8 text-center">

//         <p className="text-xs tracking-[0.35em] uppercase text-cyan-400">
//           Visualization
//         </p>

//         <h2 className="mt-2 text-3xl font-bold text-white">
//           Activity Selection
//         </h2>

//       </div>

//       {/* Legend */}

//       <div className="flex justify-center gap-6 mb-8 text-sm">

//         <div className="flex items-center gap-2">

//           <div className="w-4 h-4 rounded bg-blue-500"></div>

//           <span className="text-slate-300">
//             Current
//           </span>

//         </div>

//         <div className="flex items-center gap-2">

//           <div className="w-4 h-4 rounded bg-green-500"></div>

//           <span className="text-slate-300">
//             Selected
//           </span>

//         </div>

//         <div className="flex items-center gap-2">

//           <div className="w-4 h-4 rounded bg-red-500"></div>

//           <span className="text-slate-300">
//             Rejected
//           </span>

//         </div>

//       </div>

//       {/* Activities */}

//       <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">

//         {activities.map((activity, index) => {

//           let bg =
//             "bg-slate-800 border-slate-700";

//           if (selectedActivities.includes(index))
//             bg = "bg-green-500/20 border-green-400";

//           if (rejectedActivities.includes(index))
//             bg = "bg-red-500/20 border-red-400";

//           if (currentIndex === index)
//             bg =
//               "bg-blue-500/20 border-blue-400 scale-105";

//           return (

//             <div
//               key={index}
//               className={`transition-all duration-500 rounded-xl border p-5 ${bg}`}
//             >

//               <div className="text-center">

//                 <h3 className="text-lg font-bold text-white">

//                   A{index + 1}

//                 </h3>

//                 <div className="mt-4 space-y-2">

//                   <p className="text-slate-400 text-sm">
//                     Start
//                   </p>

//                   <p className="text-cyan-300 font-bold text-xl">
//                     {activity.start}
//                   </p>

//                   <p className="text-slate-400 text-sm">
//                     Finish
//                   </p>

//                   <p className="text-orange-300 font-bold text-xl">
//                     {activity.finish}
//                   </p>

//                 </div>

//               </div>

//             </div>

//           );

//         })}

//       </div>

//       {/* Current */}

//       <div className="mt-10 rounded-xl bg-slate-800 p-5">

//         <h3 className="text-cyan-400 font-semibold">
//           Current Step
//         </h3>

//         <p className="mt-3 text-slate-300">

//           {currentIndex === -1
//             ? "Waiting..."
//             : `Checking Activity ${
//                 currentIndex + 1
//               }`}

//         </p>

//       </div>

//       {/* Output */}

//       <div className="mt-6 rounded-xl bg-slate-800 p-5">

//         <h3 className="text-green-400 font-semibold">

//           Selected Activities

//         </h3>

//         <div className="flex gap-3 mt-4 flex-wrap">

//           {selectedActivities.length === 0 ? (

//             <span className="text-slate-500">

//               None

//             </span>

//           ) : (

//             selectedActivities.map((i) => (

//               <div
//                 key={i}
//                 className="px-4 py-2 rounded-lg bg-green-500 text-white font-bold"
//               >

//                 A{i + 1}

//               </div>

//             ))

//           )}

//         </div>

//       </div>

//     </div>
//   );
// }

//   // ===========================
//   // Fractional Knapsack
//   // ===========================

//   const renderFractionalKnapsack = () => {
//     return (
//       <div>
//         {/* Fractional Knapsack Visualization */}
//       </div>
//     );
//   };

//   // ===========================
//   // Huffman Coding
//   // ===========================

//   const renderHuffmanCoding = () => {
//     return (
//       <div>
//         {/* Huffman Tree Visualization */}
//       </div>
//     );
//   };

//   // ===========================
//   // Dijkstra Algorithm
//   // ===========================

//   const renderDijkstra = () => {
//     return (
//       <div>
//         {/* Graph Visualization */}
//       </div>
//     );
//   };

//   // ===========================
//   // Decide which visualization to show
//   // ===========================

//   const renderVisualization = () => {

//     switch (selectedAlgorithm) {

//       case "Activity Selection":
//         return renderActivitySelection();

//       case "Fractional Knapsack":
//         return renderFractionalKnapsack();

//       case "Huffman Coding":
//         return renderHuffmanCoding();

//       case "Dijkstra's Algorithm":
//         return renderDijkstra();

//       default:
//         return (
//           <div className="flex items-center justify-center h-[500px] rounded-xl border border-slate-700 bg-slate-900">

//             <p className="text-slate-400 text-lg">
//               Select an Algorithm
//             </p>

//           </div>
//         );
//     }
//   };

//   return (

//     <div className="w-full rounded-xl border border-slate-700 bg-slate-900 p-6">

//       {renderVisualization()}

//     </div>
    
//   );
// }