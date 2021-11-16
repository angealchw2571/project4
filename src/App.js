import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from "react-router"
import Main from './components/Main';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Login';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes> 
        <Route path="/main" element={<Main/>} />            
      </Routes>
      <Routes> 
        <Route path="/login" element={<Login/>} />            
      </Routes>
      <Footer className=".flex-col"/>
    </BrowserRouter>
  )
}

export default App;
