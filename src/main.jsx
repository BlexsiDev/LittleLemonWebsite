//React imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Pages
import HomePage from './Pages/HomePage.jsx'
import BookingPage from './Pages/BookingPage.jsx'
import NotFound from './Pages/NotFound.jsx'
import ConfirmationPage from './Pages/ConfirmationPage.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <HomePage/>,
  errorElement: <NotFound/>,
},
{
  path: '/booking',
  element: <BookingPage/>
},
{
  path: '/booking/confirmation',
  element: <ConfirmationPage/>
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
