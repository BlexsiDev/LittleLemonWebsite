import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import BookingPage from './Pages/BookingPage.jsx'
import NotFound from './Pages/NotFound.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <HomePage/>,
  errorElement: <NotFound/>,
},
{
  path: '/booking',
  element: <BookingPage/>
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
