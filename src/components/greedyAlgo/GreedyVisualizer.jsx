export default function GreedyVisualizer() {
  return (
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
    {/* Algorithm Tabs */}
<div className="flex flex-wrap gap-3 mb-8">
  <button className="px-4 py-2 rounded-full bg-emerald-600 text-white font-medium">
    Activity Selection
  </button>

  <button className="px-4 py-2 rounded-full border border-slate-600 text-slate-300">
    Fractional Knapsack
  </button>

  <button className="px-4 py-2 rounded-full border border-slate-600 text-slate-300">
    Huffman Coding
  </button>

  <button className="px-4 py-2 rounded-full border border-slate-600 text-slate-300">
    Job Sequencing
  </button>
</div>
  </div>
</div>
  );
}