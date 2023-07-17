import Carsprops from './Carsprops.js';
import Bootstrapcards, { title1 } from './Bootstrapcards.js';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import data,{data1,cardnew} from './Data.js'
import Newcard from './Newcard.js';

const Wholecards = () => {
  return (
    <div>
      <h1>{title1()}</h1>
      <div className="container">
        <div className="row">
        {data1.map((values)=>
          {
            return(
              <Bootstrapcards
              title={values.title}
              imgsrc={values.imgsrc}
            />
            )
          })}
          
        
          {data.map((values)=>{
            return(
              <Carsprops
              key={values.id}
              title={values.title}
              text={values.text}
              imgsrc={values.imgsrc}
              btn={values.btn}
            />

            )
          })}
          {cardnew.map((values)=>{
            return(
              <Newcard 
              Header={values.Header}
              title={values.title}
              text={values.text}
              />
            )
          })}
         
        
         
        </div>
      </div>
    </div>


  );
};

export default Wholecards;
