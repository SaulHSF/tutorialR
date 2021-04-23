// Libs
import React, { useReducer, ChangeEvent } from 'react';

// Molecules
import HeaderPartModule from '../../../molecules/header/headerPartModule';

// Props
type HookUseReducerProps = {
  title?: string;
};

// Value Initial
const initialReducer = {
  count: 0,
  title: ''
};

// Enum
enum ActionReducer {
  decrement,
  increment,
  setTitle
}

// Funtions
const reducer = (
  state: { count: number; title: string },
  { type, value }: { type: ActionReducer; value?: string }
): { count: number; title: string } => {
  switch (type) {
    case ActionReducer.increment:
      return {
        ...state,
        count: state.count + 1
      };
    case ActionReducer.decrement:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return {
        ...state,
        title: value || ''
      };
  }
};

const HookUseReducer = ({ title }: HookUseReducerProps) => {
  const [state, dispatch] = useReducer(reducer, initialReducer);

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: ActionReducer.setTitle, value: e.target.value });
  };

  const increment = () => {
    dispatch({ type: ActionReducer.increment });
  };

  const decrement = () => {
    dispatch({ type: ActionReducer.decrement });
  };

  return (
    <HeaderPartModule {...{ title }}>
      <p>Se usa cando se tiene muchos estados sueltos para agruparlos de mejor forma</p>
      <h3>
        {state.title} - {state.count}
      </h3>
      <input onChange={handleTitle} type='text' value={state.title} />
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </HeaderPartModule>
  );
};

export default HookUseReducer;
