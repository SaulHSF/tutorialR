// Libs
import React, { CSSProperties } from 'react';

// Father
import { ItemChatData } from 'components/organisms/ChatRamdom';

// Props
interface ItemChatProps {
  data: ItemChatData;
}

// Styles
const sContainer: CSSProperties = {
  margin: '1em 0',
  padding: '1em',
  borderRadius: '1em',
  border: '1px solid gray',
  fontFamily: 'monospace'
};

const sContainerUser: CSSProperties = {
  flexDirection: 'row'
};

const sAvatar: CSSProperties = {
  height: '40px',
  width: '40px',
  borderRadius: '20px'
};

const ItemChat = (props: ItemChatProps) => {
  const { data } = props;
  return (
    <div style={sContainer}>
      <div style={sContainerUser}>
        <img style={sAvatar} src={data.avatar} alt='Avatar' />
        <strong>{data.name}</strong>
      </div>
      <div>{data.message}</div>
    </div>
  );
};

export default ItemChat;
