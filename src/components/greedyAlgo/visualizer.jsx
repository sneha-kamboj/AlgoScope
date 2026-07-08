import { useState } from "react";
import { CODE_EXAMPLES } from "../../data/codeExample";
import CodeViewer from "../CodeViewer";
import GreedyVisualizer from "./GreedyVisualizer";


const ALGORITHMS = [
  "Activity Selection",
  "Fractional Knapsack",
  "Huffman Coding",
  "Dijkstra's Algorithm",
]

const ALGORITHM_DETAILS = {
  "Activity Selection": {
    short: "Pick the maximum number of non-overlapping activities by sorting by finish time.",
    complexity: "O(n log n)",
  },
  "Fractional Knapsack": {
    short: "Choose items by highest value/weight ratio to maximize profit in the knapsack.",
    complexity: "O(n log n)",
  },
  "Huffman Coding": {
    short: "Build an optimal prefix code by greedily merging the two smallest frequencies.",
    complexity: "O(n log n)",
  },
  "Dijkstra's Algorithm": {
    short: "Find the shortest path from a source by expanding the nearest unvisited node.",
    complexity: "O((V+E) log V)",
  },
}

export default function Visualizer() {

  const [selectedAlgorithm, setSelectedAlgorithm] = useState(ALGORITHMS[0]);

     const [selectedLanguage, setSelectedLanguage] = useState("javascript");
     const languages = ["javascript", "python", "java", "cpp"];
      const currentCode =
  CODE_EXAMPLES[selectedAlgorithm]?.[selectedLanguage] || "";


  // const [activities, setActivities] = useState([]);
  // const [currentStep, setCurrentStep] = useState(
  //   "Waiting... Click Run Algorithm."
  // );
  // const [currentIndex, setCurrentIndex] = useState(-1);
  const [running, setRunning] = useState(false);
  const [startTimes, setStartTimes] = useState("");
  const [finishTimes, setFinishTimes] = useState("");

  const handleRun = () => {
    if (selectedAlgorithm !== "Activity Selection") return;

    const starts = startTimes
      .split(",")
      .map((item) => Number(item.trim()));

    const finishes = finishTimes
      .split(",")
      .map((item) => Number(item.trim()));

    if (starts.length !== finishes.length) {
      alert("Start and Finish arrays must have same length");
      return;
    }

    const demo = starts.map((start, index) => ({
      id: `A${index + 1}`,
      start,
      finish: finishes[index],
      status: "pending",
    }));

    demo.forEach((activity, index) => {
      if (index === 0) {
        activity.status = "selected";
      } else if (activity.start >= demo[0].finish) {
        activity.status = "selected";
      } else {
        activity.status = "rejected";
      }
    });

    // setActivities(demo);
    // setCurrentIndex(0);
    // setCurrentStep("Activity A1 selected.");
  //   setRunning(true);
  // };

  // const handleReset = () => {
  //   setActivities([]);
  //   setCurrentIndex(-1);
  //   setCurrentStep("Waiting... Click Run Algorithm.");
  //   setRunning(false);
  //   setStartTimes("");
  //   setFinishTimes("");
  // };

  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white mb-3">
          Greedy Algorithms
        </h1>
        <p className="text-slate-400 text-lg max-w-3xl leading-8">
          Greedy algorithms build a solution step by step by always choosing the
          best possible option at the current moment. They work efficiently for
          problems that satisfy the Greedy Choice Property and Optimal
          Substructure.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          <span className="px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm">
            Interactive Visualization
          </span>

          <span className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-sm">
            Theory
          </span>

          <span className="px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500/40 text-violet-300 text-sm">
            Complexity Analysis
          </span>

          <span className="px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-sm">
            Code Examples
          </span>
        </div>

        <h2 className="text-emerald-400 mt-6 text-xl">
          {selectedAlgorithm}
        </h2>
      </div>

      {/* Algorithm Selection Tabs */}
      <div className="mt-10 flex flex-wrap gap-3">
        {ALGORITHMS.map((algorithm) => (
          <button
            key={algorithm}
            onClick={() => setSelectedAlgorithm(algorithm)}
            className={`px-5 py-2 rounded-lg font-medium transition-all duration-300
              ${
                selectedAlgorithm === algorithm
                  ? "bg-emerald-500 text-white shadow-lg"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
          >
            {algorithm}
          </button>
        ))}
      </div>

      {/* =========================== MAIN LAYOUT =========================== */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">

        {/* ================= Left Panel ================= */}

        <div className="lg:col-span-1">

          {/* Activity Selection Input */}
          {selectedAlgorithm === "Activity Selection" && (
            <div className="bg-slate-900 rounded-xl border border-slate-700 p-6">
              <h2 className="text-2xl font-bold text-white mb-5">
                Activity Selection Input
              </h2>

              <input
                type="text"
                placeholder="Start Times (1,3,0,5,8,5)"
                className="w-full p-3 mb-4 rounded-lg bg-slate-800 border border-slate-700 text-white"
                value={startTimes}
                onChange={(e) => setStartTimes(e.target.value)}
              />

              <input
                type="text"
                placeholder="Finish Times (2,4,6,7,9,9)"
                className="w-full p-3 mb-4 rounded-lg bg-slate-800 border border-slate-700 text-white"
                value={finishTimes}
                onChange={(e) => setFinishTimes(e.target.value)}
              />

              <button
                onClick={handleRun}
                className="w-full bg-emerald-500 hover:bg-emerald-600 py-3 rounded-lg text-white font-semibold"
              >
                {running ? "Re-run Algorithm" : "Run Algorithm"}
              </button>
            </div>
          )}

          {/* Fractional Knapsack Input */}
          {selectedAlgorithm === "Fractional Knapsack" && (
            <div className="bg-slate-900 rounded-xl border border-slate-700 p-6">
              <h2 className="text-2xl font-bold text-white mb-5">
                Fractional Knapsack Input
              </h2>

              <input
                type="text"
                placeholder="Weights (10,20,30)"
                className="w-full p-3 mb-4 rounded-lg bg-slate-800 border border-slate-700 text-white"
              />

              <input
                type="text"
                placeholder="Values (60,100,120)"
                className="w-full p-3 mb-4 rounded-lg bg-slate-800 border border-slate-700 text-white"
              />

              <input
                type="number"
                placeholder="Capacity"
                className="w-full p-3 mb-4 rounded-lg bg-slate-800 border border-slate-700 text-white"
              />

              <button
                onClick={handleRun}
                className="w-full bg-emerald-500 hover:bg-emerald-600 py-3 rounded-lg text-white font-semibold"
              >
                Run Algorithm
              </button>
            </div>
          )}

          {/* Huffman Coding Input */}
          {selectedAlgorithm === "Huffman Coding" && (
            <div className="bg-slate-900 rounded-xl border border-slate-700 p-6">
              <h2 className="text-2xl font-bold text-white mb-5">
                Huffman Coding Input
              </h2>

              <input
                type="text"
                placeholder="Characters (A,B,C,D,E,F)"
                className="w-full p-3 mb-4 rounded-lg bg-slate-800 border border-slate-700 text-white"
              />

              <input
                type="text"
                placeholder="Frequencies (5,9,12,13,16,45)"
                className="w-full p-3 mb-4 rounded-lg bg-slate-800 border border-slate-700 text-white"
              />

              <button
                onClick={handleRun}
                className="w-full bg-emerald-500 hover:bg-emerald-600 py-3 rounded-lg text-white font-semibold"
              >
                Run Algorithm
              </button>
            </div>
          )}

          {/* Dijkstra Input */}
          {selectedAlgorithm === "Dijkstra's Algorithm" && (
            <div className="bg-slate-900 rounded-xl border border-slate-700 p-6">
              <h2 className="text-2xl font-bold text-white mb-5">
                Dijkstra Input
              </h2>

              <textarea
                rows={5}
                placeholder={`0 1 4\n0 2 1\n2 1 2\n1 3 1`}
                className="w-full p-3 mb-4 rounded-lg bg-slate-800 border border-slate-700 text-white"
              />

              <input
                type="number"
                placeholder="Source Node"
                className="w-full p-3 mb-4 rounded-lg bg-slate-800 border border-slate-700 text-white"
              />

              <button
                onClick={handleRun}
                className="w-full bg-emerald-500 hover:bg-emerald-600 py-3 rounded-lg text-white font-semibold"
              >
                Run Algorithm
              </button>
            </div>
          )}
          <div>
            {/* ==========================================================
                                  Visualization
            ========================================================== */}

            {/* <h2 className="text-2xl font-bold text-white mb-6">
              Visualization
            </h2> */}

            {/* <div className="h-[420px] rounded-xl bg-slate-800 border border-slate-700 p-6 overflow-auto">
              {selectedAlgorithm === "Activity Selection" && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-6">
                    Activities
                  </h3>
                  <div className="space-y-4">
                    {activities.map((activity, idx) => (
                      <div
                        key={activity.id}
                        className={`flex items-center gap-4 rounded-lg transition-all duration-200 ${
                          idx === currentIndex
                            ? "ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-800"
                            : ""
                        }`}
                      >
                        <span className="w-10 text-slate-300">
                          {activity.id}
                        </span>
                        <div
                          className={`flex-1 h-10 rounded flex items-center px-4 text-white
                            ${
                              activity.status === "selected"
                                ? "bg-green-500"
                                : activity.status === "rejected"
                                ? "bg-red-500"
                                : "bg-slate-600"
                            }
                          `}
                        >
                          Start : {activity.start}
                          &nbsp;&nbsp;
                          Finish : {activity.finish}
                        </div>

                      </div>
                    ))}

                  </div>
                </div>
              )}

            </div>

          
 
 */}

             </div>
         {/* ================= Buttons ================= */}
          {/* <div className="flex gap-3 mt-6">

            <button
              onClick={handleRun}
              className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition-all duration-200"
            >
              {running ? "▶ Re-run Algorithm" : "▶ Run Algorithm"}
            </button>

            <button
              onClick={handleReset}
              disabled={!running}
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ↺ Reset
            </button>

          </div> */}

        </div>

        {/* ================= Right Panel ================= */}

        <div className="lg:col-span-2">

          <div className="bg-slate-900 rounded-xl border border-slate-700 p-6">
            <div className="flex items-center justify-between px-5 py-3 border-b border-slate-700">

    <h2 className="text-white font-bold">
        Implementation
    </h2>
<div className="flex gap-2">

  {languages.map((lang) => (
    <button
      key={lang}
      onClick={() => setSelectedLanguage(lang)}
      className={`px-3 py-1 rounded text-sm ${
        selectedLanguage === lang
          ? "bg-cyan-500 text-white"
          : "bg-slate-700 text-slate-300"
      }`}
    >
      {lang}
    </button>
  ))}

  <button className="px-3 py-1 rounded bg-slate-700">
    Copy
  </button>

</div>

</div>
<CodeViewer
  language={selectedLanguage}
  code={currentCode}
  title={`${selectedAlgorithm} Implementation`}
/>
<GreedyVisualizer
    selectedAlgorithm={selectedAlgorithm}
/>
</div>
 <div className="bg-slate-800 rounded-xl border border-slate-700 p-5 mt-6">
  <h3 className="text-lg font-semibold text-amber-400 mb-4">
    Code Examples
  </h3>
    
            {/* ==========================================================
                                  Complexity
            ========================================================== */}

            <div className="mt-6 grid md:grid-cols-2 gap-5">

              <div className="bg-slate-800 rounded-xl border border-slate-700 p-5">

                <h3 className="text-lg font-semibold text-emerald-400">
                  Time Complexity
                </h3>

                <p className="text-white mt-3">
                  {selectedAlgorithm === "Activity Selection" && "O(n log n)"}
                  {selectedAlgorithm === "Fractional Knapsack" && "O(n log n)"}
                  {selectedAlgorithm === "Huffman Coding" && "O(n log n)"}
                  {selectedAlgorithm === "Dijkstra's Algorithm" && "O((V + E) log V)"}
                </p>

              </div>

              <div className="bg-slate-800 rounded-xl border border-slate-700 p-5">

                <h3 className="text-lg font-semibold text-cyan-400">
                  Space Complexity
                </h3>

                <p className="text-white mt-3">
                  {selectedAlgorithm === "Activity Selection" && "O(1)"}
                  {selectedAlgorithm === "Fractional Knapsack" && "O(1)"}
                  {selectedAlgorithm === "Huffman Coding" && "O(n)"}
                  {selectedAlgorithm === "Dijkstra's Algorithm" && "O(V)"}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}
