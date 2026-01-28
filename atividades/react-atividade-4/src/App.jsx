import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/viva-dark/theme.css"

import { Button } from 'primereact/button';
import Paths from "./routes/Paths";
import { AuthContext } from "./contexts/AuthContext";
import { useState } from "react";
        
const App = () => {
  
  
  return ( 
    <>
      <AuthContext>
        <Paths/>
      </AuthContext>
    </>

   );
}
 
export default App;