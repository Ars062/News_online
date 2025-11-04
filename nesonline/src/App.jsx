import React from 'react'; 
import { useState } from 'react';
import Newsboard from './Components/Newsboard';
import Navbar from './Components/Navbar';


const App=()=>{
  const [category,setcategory]=useState('general');
   return (
     <div>
      
      <Navbar setcategory={setcategory}/>
      <Newsboard category={category} />
    </div>
   );
  } 
export default App;