import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Bootstrapcards.css';
import './index.css'


const title1 = () => {
  return (
    <div>  <h1 className="text-center text-primary my-4">BOOTSTRAP CARDS</h1></div>
  )
}

export  {title1};


const Bootstrapcards = (props) => {

  return (
    <>
    
     
     
          <div className="col-md-4">
            <div className="card my-2" >
              <img src={props.imgsrc} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-success text-center">{props.title}</h5>
                <p className="card-text cardtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ducimus sit sequi natus neque doloribus blanditiis assumenda nisi animi reprehenderit.</p>
                <div className="d-flex justify-content-center">
                  <a href="#" className="btn btn-success">like</a>
                </div>
              </div>
            </div>
          </div>
         
         
   
    </>
  );
};

export default Bootstrapcards;
