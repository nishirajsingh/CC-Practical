import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus, prism } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Clock, Database, BrainCircuit, MessageSquare, FileCode2 } from 'lucide-react'

export default function ProblemDetail({ problem, isDarkMode }) {
  const [activeTab, setActiveTab] = useState('java')

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-500">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3 mb-2">
          <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 px-3 py-1 rounded-full text-sm font-semibold border border-emerald-200 dark:border-emerald-500/20 shadow-sm dark:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-colors">
            Practical #{problem.id}
          </span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight drop-shadow-sm dark:drop-shadow-md transition-colors">
          {problem.title}
        </h1>
      </div>

      {/* Complexities Badges */}
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center space-x-3 bg-white dark:bg-slate-800/80 backdrop-blur border border-slate-200 dark:border-slate-700/50 px-4 py-3 rounded-2xl shadow-sm dark:shadow-lg ring-1 ring-slate-900/5 dark:ring-white/5 transition-colors">
          <div className="p-2 bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 rounded-xl">
            <Clock size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Time Complexity</p>
            <p className="text-sm font-bold text-slate-800 dark:text-white font-mono mt-0.5">{problem.tc}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 bg-white dark:bg-slate-800/80 backdrop-blur border border-slate-200 dark:border-slate-700/50 px-4 py-3 rounded-2xl shadow-sm dark:shadow-lg ring-1 ring-slate-900/5 dark:ring-white/5 transition-colors">
          <div className="p-2 bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400 rounded-xl">
            <Database size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Space Complexity</p>
            <p className="text-sm font-bold text-slate-800 dark:text-white font-mono mt-0.5">{problem.sc}</p>
          </div>
        </div>
      </div>

      {/* Logic / Algorithm */}
      <div className="bg-white dark:bg-slate-800/40 rounded-3xl border border-slate-200 dark:border-slate-700/50 p-6 shadow-md dark:shadow-xl relative overflow-hidden group transition-colors">
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-emerald-400 to-blue-500 group-hover:w-3 transition-all duration-300"></div>
        <div className="flex items-center space-x-3 mb-4 pl-4">
          <BrainCircuit className="text-emerald-500 dark:text-emerald-400" size={24} />
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">Logic & Algorithm</h2>
        </div>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed pl-4 font-medium">
          {problem.logicSummary}
        </p>
      </div>

      {/* Code Section */}
      <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-700/50 shadow-lg dark:shadow-2xl overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5 transition-colors">
        <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700/50 transition-colors">
          <div className="flex items-center space-x-2">
            <FileCode2 className="text-emerald-500 dark:text-emerald-400" size={20} />
            <span className="font-semibold text-slate-800 dark:text-white">Source Code</span>
          </div>
          <div className="flex space-x-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-lg transition-colors">
            <button
              onClick={() => setActiveTab('java')}
              className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all duration-200 ${
                activeTab === 'java'
                  ? 'bg-white text-emerald-600 shadow-sm dark:bg-slate-700 dark:text-white dark:shadow-md'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              Java
            </button>
            <button
              onClick={() => setActiveTab('python')}
              className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all duration-200 ${
                activeTab === 'python'
                  ? 'bg-white text-emerald-600 shadow-sm dark:bg-slate-700 dark:text-white dark:shadow-md'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              Python
            </button>
          </div>
        </div>
        <div className="p-4 bg-slate-50 dark:bg-[#0d1117] max-h-[500px] overflow-y-auto custom-scrollbar text-sm transition-colors">
          <SyntaxHighlighter
            language={activeTab}
            style={isDarkMode ? vscDarkPlus : prism}
            customStyle={{ background: 'transparent', padding: 0, margin: 0 }}
            showLineNumbers={true}
            wrapLines={true}
          >
            {activeTab === 'java' ? problem.java : problem.python}
          </SyntaxHighlighter>
        </div>
      </div>

      {/* Viva Prep */}
      <div className="bg-gradient-to-br from-indigo-50 to-emerald-50 dark:from-slate-800/80 dark:to-slate-900/80 rounded-3xl border border-slate-200 dark:border-slate-700/50 p-6 shadow-md dark:shadow-xl relative overflow-hidden transition-colors">
        <div className="absolute -right-6 -top-6 text-slate-900/5 dark:text-slate-700/20 rotate-12 pointer-events-none transition-colors">
          <MessageSquare size={120} />
        </div>
        <h2 className="text-xl font-bold mb-6 flex items-center text-slate-800 dark:text-white relative z-10 transition-colors">
          <MessageSquare className="mr-3 text-emerald-500 dark:text-emerald-400" size={24} />
          Viva Prep Mode
        </h2>
        <div className="space-y-4 relative z-10">
          {problem.viva.map((faq, idx) => (
            <div key={idx} className="bg-white/80 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:border-emerald-300 dark:hover:border-emerald-500/30 transition-colors shadow-sm group cursor-default">
              <div className="flex items-start">
                <span className="flex-shrink-0 text-slate-400 dark:text-slate-500 font-mono font-bold mr-3 mt-0.5 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                  Q{idx + 1}.
                </span>
                <p className="text-slate-800 dark:text-slate-200 font-bold">{faq.q ?? faq}</p>
              </div>
              {faq.a && (
                <div className="flex items-start mt-3 pt-3 border-t border-slate-200 dark:border-slate-700/50 pl-2">
                  <span className="flex-shrink-0 text-blue-500 dark:text-blue-400 font-mono font-bold mr-3 mt-0.5 transition-colors">
                    A.
                  </span>
                  <p className="text-slate-600 dark:text-slate-400 font-medium text-[15px] leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
