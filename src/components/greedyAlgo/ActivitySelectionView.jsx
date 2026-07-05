  {/* Activity Selection */}

         
const [weights, setWeights] = useState("");
const [profits, setProfits] = useState("");
const [capacity, setCapacity] = useState("");

const [characters, setCharacters] = useState("");
const [frequencies, setFrequencies] = useState("");

const [deadlines, setDeadlines] = useState("");
const [jobProfits, setJobProfits] = useState("");




 const [activityStart, setActivityStart] = useState("");
const [activityFinish, setActivityFinish] = useState("");

{selectedAlgorithm === "Activity Selection" && (
  <div className="mt-8 bg-slate-900 rounded-xl border border-slate-700 p-6">

    <h2 className="text-3xl font-bold text-white">
      Activity Selection
    </h2>

    <p className="mt-4 text-slate-400 leading-8">
      Select the maximum number of non-overlapping activities by always choosing
      the activity that finishes first.
    </p>

    <div className="grid md:grid-cols-2 gap-6 mt-8">

      <div className="bg-slate-800 rounded-lg p-5">
        <h3 className="text-xl font-semibold text-emerald-400">
          Theory
        </h3>

        <p className="text-slate-300 mt-3">
          Sort all activities according to their finishing time. Pick the first
          activity and keep selecting the next activity whose start time is
          greater than or equal to the finish time of the previously selected
          activity.
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
          Space : O(1)
        </p>
      </div>

    </div>

  </div>
)}

