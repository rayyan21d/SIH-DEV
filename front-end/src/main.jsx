
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Form from './components/Form.jsx'
import Navbar from './components/Navbar.jsx'
import Map from './components/Map.jsx'
import SignIn from './pages/signIn/SignIn.jsx'
import DataTable from './components/DataTable.jsx'
import { BrowserRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Layout from './components/Layout.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(

  <>
  <BrowserRouter>
  {/* <Navbar />
  <Form />
  <Map/ > */}
  {/* <SignIn /> */}
  {/* <DataTable/> */}
  {/* <RouterProvider router={router}/> 
   */}

  <App />
  </BrowserRouter>
  </>  

)
