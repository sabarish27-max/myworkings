import React from 'react';
// import Importexport,{color,newfunction} from './Importexport.js'
// import Bootstrap from './Bootstrap.js';

import Navbar from './Navabar.js';
import Footer from './Footer.js';
import Wholecards from './Wholecards.js';
import Table from './Table.js';



const App=()=>{
   
    return(
        <>
        <Navbar />
        <Wholecards />
        <Table />
        
      
       <Footer />
       
        </>
    )
}

export default App;
