// Libs
import React, { useContext } from 'react';

// Contexts
import { ExampleUseContext } from './Contexts';

const Grandchild = () => {
  const { clicks, handleClicks } = useContext(ExampleUseContext);
  return (
    <div style={{ border: '1px solid #03FFEF', padding: '1em', margin: '1em' }}>
      <h5>Nieto</h5>
      <button onClick={handleClicks}>clicks({clicks})</button>
    </div>
  );
};

export default Grandchild;
