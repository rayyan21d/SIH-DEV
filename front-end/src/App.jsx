
import{ Route, Routes,} from "react-router-dom"

import SignIn from "./pages/shared/SignIn"
import Dashboard from "./pages/shared/Dashboard"
function App() {

  return (

    <>
    {/* <nav>

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


    </nav> */}


      
      <Routes>
    
        <Route exact path="/" Component={SignIn} />
        <Route path="/dashboard/*" Component={Dashboard}/>

      </Routes>



      {/* <Routes>

  
      <Route path="/" element={<Home/>} />


      <Route path="/sign-in" element={<SignIn />}/>
      <Route path="/admin" element={<Admin />}/>
      <Route path="/station" element={<Station />}/>
      <Route path="/siding" element={<Siding />}>

        <Route path=":id" element={<Siding />}/>
      </Route>

      <Route path="/siding/:id" element={<Siding />}/>
      
      
      <Route path="*" element={<NotFound />} />

    </Routes> */}

    </>
    
  )
}

export default App
