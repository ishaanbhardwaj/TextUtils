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
    <Navbar logo = {"TextUtils"} about = {"About Us"} mode={mode} toggleMode={toggleMode} hexCode={hexCode} colorChange={colorChange} />
    <Alert alert={alert} />
    <TextForm mode={mode} hexCode={hexCode} showAlert={showAlert} />
    {/* <DarkMode /> */}
    </>
  );
}

export default App;
