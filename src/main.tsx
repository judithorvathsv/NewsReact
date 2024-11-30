import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'
import { NewsContextProvider } from './context/NewsContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NewsContextProvider>
    <RouterProvider router={router} />
    </NewsContextProvider>    
  </StrictMode>,
)
