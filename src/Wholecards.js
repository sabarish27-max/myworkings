import Carsprops from './Carsprops.js';
import Bootstrapcards, { title1 } from './Bootstrapcards.js';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
            title="Butterfly"
            text="this is sample for 1st card"
            imgsrc="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/1-zen-fox-roeselien-raimond.jpg"
            btn="Readmore"
          />
          <Carsprops
            title="Bull"
            text="this is sample for 2nd card"
            imgsrc="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/big-smoke-eric-fan.jpg"
            btn="Readmore"
          />
          <Carsprops
            title="Rabbit"
            text="this is sample for 3rd card"
            imgsrc="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/welcome-spring-lori-deiter.jpg"
            btn="Readmore"
          />
          <Carsprops
            title="lion"
            text="this is sample for 4th card"
            imgsrc="https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/lioness-displaying-dangerous-teeth-in-a-rainstorm-johan-swanepoel.jpg"
            btn="Readmore"
          />
        </div>
      </div>
    </div>
  );
};

export default Wholecards;
