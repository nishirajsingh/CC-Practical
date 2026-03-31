import { Search, Code2, Heart, Sun, Moon } from 'lucide-react'

export default function Sidebar({ problems, activeProblemId, onSelect, searchQuery, setSearchQuery, isDarkMode, setIsDarkMode }) {
  return (
    <div className="h-full bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col pt-4 lg:pt-0 transition-colors duration-300">
      {/* Search Header */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 shrink-0">
        <div className="hidden lg:flex items-center justify-between mb-6 px-1">
          <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400">
            <Code2 size={24} />
            <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white dark:drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]">CC Lab Portal</span>
          </div>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-1.5 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800 transition-colors"
            title="Toggle Theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
        
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-slate-400 dark:text-slate-500 group-focus-within:text-emerald-500 dark:group-focus-within:text-emerald-400 transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 dark:border-slate-700 rounded-lg leading-5 bg-slate-50 dark:bg-slate-800/50 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm text-slate-900 dark:text-slate-200 transition-all duration-300 dark:shadow-inner"
            placeholder="Search practicals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Problem List */}
      <div className="flex-1 overflow-y-auto w-full custom-scrollbar bg-slate-50/50 dark:bg-transparent">
        <ul className="p-3 space-y-2">
          {problems.map((p) => (
            <li key={p.id}>
              <button
                onClick={() => onSelect(p.id)}
                className={`group w-full flex flex-col items-start px-3 py-3 rounded-xl transition-all duration-200 ${
                  activeProblemId === p.id 
                    ? "bg-white dark:bg-slate-800 border border-slate-200 dark:border-transparent border-l-4 border-l-emerald-500 dark:border-l-emerald-500 text-slate-900 dark:text-white shadow-md shadow-slate-200/50 dark:shadow-black/20" 
                    : "bg-transparent text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200 border border-transparent border-l-4 hover:border-l-slate-300 dark:hover:border-l-slate-600"
                }`}
              >
                <div className="flex items-start w-full">
                  <span className={`shrink-0 text-[10px] mr-3 mt-0.5 rounded px-1.5 py-0.5 font-mono border ${activeProblemId === p.id ? 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500/20' : 'bg-slate-100 text-slate-500 border-slate-200 dark:bg-slate-800 dark:text-slate-500 dark:border-slate-700 group-hover:text-slate-700 dark:group-hover:text-slate-300'}`}>
                    #{p.id}
                  </span>
                  <span className="text-sm font-semibold text-left leading-snug tracking-wide line-clamp-2">{p.title}</span>
                </div>
                <div className="mt-2.5 flex space-x-2 pl-9">
                  <span className={`text-[10px] px-2 py-0.5 rounded font-medium ${activeProblemId === p.id ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20' : 'bg-slate-100 text-slate-500 border border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'}`}>
                    Difficulty: Medium
                  </span>
                </div>
              </button>
            </li>
          ))}
          {problems.length === 0 && (
            <div className="text-slate-500 dark:text-slate-500 text-sm text-center py-6">No problems found...</div>
          )}
        </ul>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-800 text-center shrink-0 bg-white dark:bg-slate-900">
        <p className="text-xs text-slate-500 dark:text-slate-500 font-medium">
          Made with <Heart size={12} className="inline-block text-red-500 mx-0.5 animate-pulse" /> by
        </p>
        <p className="text-sm font-bold text-slate-800 dark:text-slate-300 mt-1">
          Nishiraj Singh Panwar
        </p>
      </div>
    </div>
  )
}
