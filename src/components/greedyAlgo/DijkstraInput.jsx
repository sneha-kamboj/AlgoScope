{/* ================= Dijkstra ================= */}
function DijkstraInput() {
  return (
   
  <div className="mt-8 bg-slate-900 rounded-xl border border-slate-700 p-6">

    <h2 className="text-3xl font-bold text-white">
      Dijkstra's Algorithm
    </h2>

    <p className="mt-4 text-slate-400 leading-8">
      Find the shortest distance from the source node to every other node using
      a priority queue.
    </p>

    <div className="grid md:grid-cols-2 gap-6 mt-8">

      <div className="bg-slate-800 rounded-lg p-5">
        <h3 className="text-xl font-semibold text-emerald-400">
          Theory
        </h3>

        <p className="text-slate-300 mt-3">
          Start from the source node. Always visit the node with the minimum
          distance and relax all its adjacent edges until every node is visited.
        </p>
      </div>

      <div className="bg-slate-800 rounded-lg p-5">
        <h3 className="text-xl font-semibold text-cyan-400">
          Complexity
        </h3>

        <p className="text-slate-300 mt-3">
          Time : O((V + E) log V)
        </p>

        <p className="text-slate-300">
          Space : O(V)
        </p>
      </div>

    </div>

  </div>

  
)
}
export default DijkstraInput;