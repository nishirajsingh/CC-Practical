import { useState, useEffect } from 'react'
import { Menu, X, Code2, Sun, Moon } from 'lucide-react'
import Sidebar from './components/Sidebar'
import ProblemDetail from './components/ProblemDetail'
import problems from './data/problems.json'

function App() {
  const [activeProblemId, setActiveProblemId] = useState(problems[0]?.id || null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') !== 'light'
  })

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const activeProblem = problems.find(p => p.id === activeProblemId)

  const filteredProblems = problems.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans transition-colors duration-300">
      {/* Mobile Header */}
      <div className="lg:hidden shrink-0 w-full h-16 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 z-40 relative">
        <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400">
          <Code2 size={24} />
          <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">CC Lab Portal</span>
        </div>
        <div className="flex items-center space-x-1">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white p-2 transition-colors"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Sidebar relative container */}
      <div 
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:static top-0 lg:top-auto left-0 h-full lg:h-screen z-50 w-80 min-w-[20rem] shrink-0 transition-transform duration-300 ease-in-out shadow-[4px_0_24px_rgba(0,0,0,0.1)] lg:shadow-none`}
      >
        <Sidebar 
          problems={filteredProblems}
          activeProblemId={activeProblemId}
          onSelect={(id) => {
            setActiveProblemId(id)
            setIsSidebarOpen(false)
          }}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
      </div>
      
      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-slate-900/40 dark:bg-slate-900/80 backdrop-blur-sm z-40" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-[#0b1120] relative h-[calc(100vh-4rem)] lg:h-screen transition-colors duration-300 custom-scrollbar">
        <div className="p-4 lg:p-8 pb-32">
          {activeProblem ? (
            <ProblemDetail problem={activeProblem} isDarkMode={isDarkMode} />
          ) : (
            <div className="flex items-center justify-center h-full text-slate-500 dark:text-slate-500 text-lg">
              No problem selected or found.
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
