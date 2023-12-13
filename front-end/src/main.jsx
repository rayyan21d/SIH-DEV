
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Form from './components/Form.jsx'
import Navbar from './components/Navbar.jsx'
import Map from './components/Map.jsx'
import SignIn from './components/SignIn.jsx'
import DataTable from './components/DataTable.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <>
  {/* <Navbar />
  <App />
  <Form />
  <Map/ > */}
  <SignIn />
  <DataTable/>
  </>
  
)
