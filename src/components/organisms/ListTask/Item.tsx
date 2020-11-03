// Libs
import React from 'react';

// Father
import { ItemData } from './index';

// Props
interface ItemProps {
  item: ItemData;
  onRemove: (data: ItemData) => void;
}

const Item = (props: ItemProps) => {
  const { item, onRemove } = props;

  const handleRemove = () => {
    onRemove(item);
  };

  // console.log('render 🔥 - ', item.value);

  return (
    <div>
      <div>{item.value}</div>
      <button onClick={handleRemove}>x</button>
    </div>
  );
};

export default Item;
