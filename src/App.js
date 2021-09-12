import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
  return (<>
  <Navbar title="textutils" aboutText="About" />
  <div className="container">
  <TextForm heading="ENTER YOUR TEXT HERE"/>

  </div>
 
  </>
  );
}

export default App;
