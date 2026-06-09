import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import { Home } from './components/Home'
import { AboutPage } from './components/AboutPage'
import { MainLayout } from './components/MainLayout'
import { UserPage } from './components/UserPage'
import { userLoader } from './loader/user-loader'
import { userAction } from './actions/user-action'
import { InfoPage } from './components/InfoPage'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/about',
          element: <AboutPage />
        },
        {
          path: '/users',
          element: <UserPage />,
          loader: userLoader,
          action:userAction
        },
        {
          path: '/users/:id',
          element: <InfoPage />,
        }
      ]
    }
  ])
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
