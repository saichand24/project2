import React from 'react';
import Featurebox from './Featurebox';
import fimage1 from '../images/11.svg'; 
import fimage2 from '../images/21.svg'; 
import fimage3 from '../images/31.svg'; 
import fimage4 from '../images/41.svg'; 

function Feature() {
  return (
    <div id='features'>
        <h1>WE OFFER</h1>
        <div className='a-container'>
            <Featurebox image={fimage1} title="Makeup" />
            <Featurebox image={fimage2} title="Hair" />
            <Featurebox image={fimage3} title="Mehandhi" />
            <Featurebox image={fimage4} title="Skin" />
        </div>
    </div>
  )
}

export default Feature