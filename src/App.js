//import logo from './logo.svg';
// import './App.css';
import React, {useState} from 'react'
import Alert from './components/Alert';
import DarkMode from './components/DarkMode';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, toggleChange] = useState("light");
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === "light"){
      toggleChange("dark")
      document.body.backgroundColor = "bg-gray-300";
      showAlert('Dark Mode Enabled', 'success');
    } else {
      toggleChange("light")
      document.body.backgroundColor = "bg-white";
      showAlert('Light Mode Enabled', 'warning');
    }
  }

  return (
    <>    
    <Navbar logo = {"Ishaan Bhardwaj"} about = {"About Us"} contact = {"Contact Us"} mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <TextForm mode={mode} showAlert={showAlert} />
    {/* <DarkMode /> */}
    </>
  );
}

export default App;
