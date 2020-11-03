// Libs
import React, { useState } from 'react';

// Component
import Item from './Item';

export interface ItemData {
  value: string;
  id: string;
}

const InitialItemData: ItemData[] = [];

const ListTask = () => {
  const [list, setList] = useState(InitialItemData);

  const handleAddNewItem = (e: any) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    setList([...list, { value: e.target[0].value, id: Math.random().toString(16) }]);
    e.target[0].value = '';
  };

  const handleRemoveItem = (item: ItemData) => {
    // console.log(item);
    setList(list.filter(data => data.id !== item.id));
  };

  return (
    <div>
      <div>List items</div>
      <form onSubmit={handleAddNewItem}>
        <input type='text' />
        <button>search</button>
      </form>
      <div>{list.length > 0 && list.map((item: ItemData) => <Item key={item.id} item={item} onRemove={handleRemoveItem} />)}</div>
    </div>
  );
};

export default ListTask;
