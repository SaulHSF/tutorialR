// Libs
import React, { CSSProperties, useRef, useReducer, useEffect } from 'react';
import Faker from 'faker';

// Component
import ItemChat from './itemChat';

export interface ItemChatData {
  id: string;
  name: string;
  avatar: string;
  message: string;
}

// Initial values
const InitialList: Array<ItemChatData> = [];

// Styles
const stylesContainer: CSSProperties = {
  height: '80vh',
  borderRadius: '1em',
  border: '3px solid gray',
  width: '300px',
  padding: '1em'
};

const stylesContainerList: CSSProperties = {
  height: '77vh',
  overflow: 'auto'
};

const stylesContainerBottom: CSSProperties = {
  height: '3vh',
  margin: '3px',
  alignItems: 'center',
  justifyContent: 'center'
};

const ChatRandom = () => {
  const refContainer = useRef(null);
  const [state, dispatch] = useReducer(
    (prevState: any, action: { type: string; value: ItemChatData[] }) => {
      const refC: any = refContainer.current!;
      switch (action.type) {
        case 'list':
          if (refC.scrollTop + refC.offsetHeight >= refC.scrollHeight) {
            return {
              ...prevState,
              list: action.value,
              updateScroll: true
            };
          } else {
            return {
              ...prevState,
              list: action.value,
              updateScroll: false
            };
          }
        default:
          return {
            ...prevState
          };
      }
    },
    {
      list: InitialList,
      updateScroll: true
    }
  );

  const newMessageRandom = () => {
    const newMes: ItemChatData = {
      id: Faker.random.uuid(),
      name: Faker.name.findName(),
      avatar: Faker.image.avatar(),
      message: Faker.hacker.phrase()
    };
    dispatch({ type: 'list', value: [...state.list, newMes] });
  };

  useEffect(() => {
    if (refContainer) {
      const refC: any = refContainer.current!;
      if (state.updateScroll) {
        refC.scrollTop = refC.scrollHeight;
      }
    }
  }, [state]);

  return (
    <div style={stylesContainer}>
      <div ref={refContainer} style={stylesContainerList}>
        {state.list.length > 0 && state.list.map((item: ItemChatData) => <ItemChat key={item.id} data={item} />)}
      </div>
      <div style={stylesContainerBottom}>
        <button onClick={newMessageRandom}>New message</button>
      </div>
    </div>
  );
};

export default ChatRandom;
