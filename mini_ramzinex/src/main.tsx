import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { ramzinexApi } from './api/apiSlice.ts'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/marketslist",
    element: <div>list</div>
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApiProvider api={ramzinexApi}>
      <RouterProvider router={router} />
    </ApiProvider>
  </StrictMode>,
)
