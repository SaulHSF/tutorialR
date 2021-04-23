// Libs
import React from 'react';

// Components
import Grandchild from './Grandchild';

const Son = () => {
  return (
    <div style={{ border: '1px solid #02B9E8', padding: '1em', margin: '1em' }}>
      <h4>Hijo</h4>
      <Grandchild />
    </div>
  );
};

export default Son;
