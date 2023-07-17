import React from 'react'

const Newcard = () => {
  return (
    <div class="card text-white bg-primary mb-3">
    <div class="card-header">{Header}</div>
    <div class="card-body">
      <h5 class="card-title"> {title}</h5>
      <p class="card-text">{text}</p>
    </div>
  </div>
  )
}

export default Newcard;