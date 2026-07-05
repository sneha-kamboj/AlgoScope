{/* ================= Huffman Coding ================= */}
function HuffmanInput() {
  return (
    
  <div className="mt-8 bg-slate-900 rounded-xl border border-slate-700 p-6">

    <h2 className="text-3xl font-bold text-white">
      Huffman Coding
    </h2>

    <p className="mt-4 text-slate-400 leading-8">
      Build an optimal prefix tree by repeatedly combining the two nodes having
      the smallest frequencies.
    </p>

    <div className="grid md:grid-cols-2 gap-6 mt-8">

      <div className="bg-slate-800 rounded-lg p-5">
        <h3 className="text-xl font-semibold text-emerald-400">
          Theory
        </h3>

        <p className="text-slate-300 mt-3">
          Insert all characters into a priority queue. Remove the two smallest
          nodes, merge them, and insert the new node again until only one node
          remains.
        </p>
      </div>

      <div className="bg-slate-800 rounded-lg p-5">
        <h3 className="text-xl font-semibold text-cyan-400">
          Complexity
        </h3>

        <p className="text-slate-300 mt-3">
          Time : O(n log n)
        </p>

        <p className="text-slate-300">
          Space : O(n)
        </p>
      </div>

    </div>

  </div>
  )
}
export default HuffmanInput;