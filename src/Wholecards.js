import Carsprops from './Carsprops.js';
import Bootstrapcards, { title1 } from './Bootstrapcards.js';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import data from './Data.js'

const Wholecards = () => {
  return (
    <div>
      <h1>{title1()}</h1>
      <div className="container">
        <div className="row">
          <Bootstrapcards
            title="Plumeria Garden Painting"
            imgsrc="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/plumeria-garden-marionette-taboniar.jpg"
          />
          <Bootstrapcards
            title="Sunflowers"
            imgsrc="https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/sunflowers-mia-tavonatti.jpg"
          />
          <Bootstrapcards
            title="Flower Power"
            imgsrc="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/flower-power-watercolor-olga-shvartsur.jpg"
          />
          <Carsprops
            title={data[0].title}
            text={data[0].text}
            imgsrc={data[0].imgsrc}
            btn={data[0].btn}
          />
          <Carsprops
           title={data[1].title}
           text={data[1].text}
           imgsrc={data[1].imgsrc}
           btn={data[1].btn}
          />
          <Carsprops
            title={data[2].title}
            text={data[2].text}
            imgsrc={data[2].imgsrc}
            btn={data[2].btn}
          />
          <Carsprops
           title={data[3].title}
           text={data[3].text}
           imgsrc={data[3].imgsrc}
           btn={data[3].btn}
          />
        </div>
      </div>
    </div>
  );
};

export default Wholecards;
