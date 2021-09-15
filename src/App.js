import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from "react";

function App() {

const [mode, setMode] = useState("light");
const toggleMode = ()=>{
  if(mode === "light"){
    setMode("dark");
    document.body.style.backgroundColor='#030c3b';
  }
  else{
    setMode("light");
    document.body.style.backgroundColor='white';

  }
}
  return (
  <>

  <Navbar title="textutils" aboutText="About"  toggleMode={toggleMode} mode={mode}/>

   <div className="container">
  <TextForm heading="ENTER YOUR TEXT HERE" mode={mode}/> 
  </div>

  <About/>

  </>
  );
}

export default App;
