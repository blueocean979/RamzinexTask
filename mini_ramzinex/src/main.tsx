import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { ramzinexApi } from './api/apiSlice.ts'
import MarketLists from './components/marketList/marketsList.tsx'
import MarketDetails from './components/marketDetails/marketDetails.tsx'
import "./assets/fonts/Vazirmatn.ttf"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/marketslist",
    element: <MarketLists />
  },
  {
    path: "/marketDetails/:id",
    element: <MarketDetails />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApiProvider api={ramzinexApi}>
      <RouterProvider router={router} />
    </ApiProvider>
  </StrictMode>,
)
