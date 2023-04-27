import React from "react";
import { BrowserRouter} from "react-router-dom";
import Mainroute from "./Routes";

function App() {
  return (
   <>
   <BrowserRouter>
   <Mainroute/>
   </BrowserRouter>
   </>
  );
}

export default App;
