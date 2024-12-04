import React from "react";
import BasicEffect from "./components/BasicEffect";
import UseEffectsBasics from "./components/UseEffectsBasics";
import CouterEffect from "./components/CouterEffect";
import FetchDataEffect from "./components/FetchDataEffect";
import Switcher from "./components/Switcher";


const App = () => {
  


  return (
    <section>
      {/* <UseEffectsBasics/> */}
      <BasicEffect/>
      <CouterEffect/>
      <FetchDataEffect/>
      <Switcher/>
    </section>
  )
}

export default App;