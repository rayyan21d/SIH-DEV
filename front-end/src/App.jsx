
import{Route, Routes, Link} from "react-router-dom"

import Home from "./pages/Home"
import SignIn from "./pages/signIn/SignIn"
import Station from "./pages/station/Station"
import Admin from "./pages/admin/Admin"
import Siding from "./pages/siding/Siding"
import NotFound from "./pages/NotFound"
function App() {

  return (

    <>
    <nav>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="sign-in">Sign In</Link>
        </li>

        <li>
          <Link to="admin">Admin</Link>
        </li>

        
        <li>
          <Link to="station">Station</Link>
        </li>

        <li>
          <Link to="siding">Siding</Link>
        </li>

      </ul>


    </nav>



    <Routes>

  
      <Route path="/" element={<Home/>} />


      <Route path="/sign-in" element={<SignIn />}/>
      <Route path="/admin" element={<Admin />}/>
      <Route path="/station" element={<Station />}/>
      <Route path="/siding" element={<Siding />}>

        <Route path=":id" element={<Siding />}/>
      </Route>

      <Route path="/siding/:id" element={<Siding />}/>
      
      
      <Route path="*" element={<NotFound />} />


    </Routes>

    
    </>
    
  )
}

export default App
