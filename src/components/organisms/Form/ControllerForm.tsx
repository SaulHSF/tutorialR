// Libs
import React, { useReducer } from 'react';

// Organisms
import InputController from 'components/organisms/Form/InputController';

// Enum
export enum ActionTypeForm {
  name,
  email
}

const ControllerForm = () => {
  const [state, dispatch] = useReducer(
    (prevState: any, action: { type: ActionTypeForm; value: string }) => {
      switch (action.type) {
        case ActionTypeForm.name:
          return {
            ...prevState,
            name: action.value
          };
        case ActionTypeForm.email:
          return {
            ...prevState,
            email: action.value
          };
      }
    },
    {
      name: undefined,
      email: undefined
    }
  );

  const validate = (actionType: ActionTypeForm, value: string) => {
    // console.log(actionType, value);
    dispatch({ type: actionType, value });
  };

  const onSend = () => {
    console.log('onSend', state);
  };

  return (
    <div>
      <div>
        <div>
          <label htmlFor='name'>Nombre:</label>
          <InputController placeholder='name' name={ActionTypeForm.name} onChange={validate} id={'name'} />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <InputController placeholder='email' name={ActionTypeForm.email} onChange={validate} id={'email'} />
        </div>
      </div>
      <div>
        <button onClick={onSend}>Send</button>
      </div>
    </div>
  );
};

export default ControllerForm;
