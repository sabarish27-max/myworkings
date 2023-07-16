import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Carsprops = (props) => {
  console.log(props);
  return (
    <>
      
          <div className="col-md-3">
            <div className="card my-2">
              <img src={props.imgsrc} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <div className="d-flex justify-content-center">
                  <a href="#" className="btn btn-success">{props.btn}</a>
                </div>
              </div>
            </div>
          </div>
        
    </>
  );
};

export default Carsprops;
