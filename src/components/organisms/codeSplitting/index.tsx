// Libs
import React, { useState } from 'react';

// Components
import HeaderPartModule from '../../molecules/header/headerPartModule';

// Props
type CodeSplittingProps = {
  title?: string;
};

const CodeSplitting = ({ title }: CodeSplittingProps) => {
  const [isShow, setIsShow] = useState(false);

  const styles = {
    width: '300px',
    margin: '1em',
    height: '100%'
  };

  return (
    <HeaderPartModule {...{ title }}>
      <button onClick={() => setIsShow(!isShow)}>{!isShow ? 'Ver' : 'Ocultar'}</button>
      {isShow && (
        <img
          style={styles}
          src='https://images.pexels.com/photos/4596641/pexels-photo-4596641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          alt='image pexels'
        />
      )}
    </HeaderPartModule>
  );
};

export default CodeSplitting;
