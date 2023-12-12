
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Form from './components/Form.jsx'
import Navbar from './components/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <>
  <Navbar />
    <App />
    <Form />
  </>
)
