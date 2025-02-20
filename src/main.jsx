import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'
import AuthProvider from './Provider/AuthProvider'
import TenstackProvider from './Provider/TenstackProvider'
import { DarkModeProvider } from './Provider/DarkModeProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TenstackProvider>
      <AuthProvider>
        <DarkModeProvider>
          <RouterProvider router={router} />
        </DarkModeProvider>
      </AuthProvider>
    </TenstackProvider>
  </StrictMode>,
)
