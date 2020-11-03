// Libs
import React from 'react';

// Props
interface OptionsButtonProps {
  actionsShow: () => void;
}

const OptionsButton = (props: OptionsButtonProps) => {
  const { actionsShow } = props;
  return (
    <div>
      <button onClick={actionsShow}>show</button>
    </div>
  );
};

export default OptionsButton;
