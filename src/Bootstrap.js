import React from 'react'
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Bootstrap = () => {
  return (
    <div>Bootstrap
   
        <div className="mb-3">
  <label for="formGroupExampleInput" className="form-label">Example label</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Another label</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
</div>
    </div>

  )
}

export default Bootstrap;