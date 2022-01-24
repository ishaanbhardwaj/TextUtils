//import logo from './logo.svg';
// import './App.css';
import React, {useState} from 'react'
import DarkMode from './components/DarkMode';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, toggleChange] = useState("light");

  const toggleMode = () => {
    if(mode === "light"){
      toggleChange("dark")
      document.body.backgroundColor = "bg-gray-300";
    } else {
      toggleChange("light")
      document.body.backgroundColor = "bg-white";
    }
  }
  return (
    <>
    <Navbar logo = {"Ishaan Bhardwaj"} about = {"About Us"} contact = {"Contact Us"} mode={mode} toggleMode={toggleMode} />
    <TextForm mode={mode} />
    {/* <DarkMode /> */}
    </>
  );
}

export default App;
