import { AppProvider } from '@/providers/app-provider'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './router'

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  )
}

export default App
