import React, {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './components/Contact';
import Alert from './components/Alert'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, toggleChange] = useState("light");
  const [alert, setAlert] = useState(null);
  const [hexCode, changeCode] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const colorChange = () => {
    changeCode("#d25d6w")
    document.body.backgroundColor = "#000000";
    showAlert('Color Chaned', 'success');
  }

  const toggleMode = () => {
    if(mode === "light"){
      toggleChange("dark")
      document.body.backgroundColor = "bg-gray-300";
      showAlert('Dark Mode Enabled', 'success');
      document.title="TextUtils - Dark Mode";
    } else {
      toggleChange("light")
      document.body.backgroundColor = "bg-white";
      showAlert('Light Mode Enabled', 'success');
      document.title="TextUtils - Light Mode";
    }
  }

  return (
    <>   
    <Router> 
      <Navbar logo = {"TextUtils"} contact = {"Contact Us"} mode={mode} toggleMode={toggleMode} hexCode={hexCode} colorChange={colorChange} />
      <Alert alert={alert} />
      <Routes>
        <Route path='/' element={<TextForm mode={mode} hexCode={hexCode} showAlert={showAlert} />}></Route>
        <Route path='/contact' element={<Contact mode={mode} hexCode={hexCode} showAlert={showAlert} />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
