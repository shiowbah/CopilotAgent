import { useState } from 'react'

type Theme = 'light' | 'dark'

function App() {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <main className={`app app--${theme}`}>
      <h1>CopilotAgent</h1>
      <p>Minimal main page</p>
      <button type="button" onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} theme
      </button>
    </main>
  )
}

export default App
