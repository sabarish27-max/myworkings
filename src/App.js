import React from 'react';
import Importexport from './Importexport.js'
import { variable,importfunction } from './Importexport.js';
const App=()=>{
    const template="also i am triing to print template litrals"
    return(
        <>
<Importexport />
<h1>{`hello iam just trying the import and export in react ${variable} ,${template}`}</h1>
{/* <h2>{`Here is the expmle for importing and exporting function in the react ${importfunction()}`}</h2> */}
<h1>{importfunction()}</h1>
        </>
    )
}

export default App;
