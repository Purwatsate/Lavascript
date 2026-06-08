import './App.css'
import { UsersList } from './components/UsersList'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <UsersList />
    </ThemeProvider>
  )
}

export default App
