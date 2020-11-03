// Libs
import React, { useState, ChangeEvent } from 'react';

// Styles
import styles from 'components/organisms/Form/InputController.module.css';

// Enum
import { ActionTypeForm } from 'components/organisms/Form/ControllerForm';

// Props
interface InputControllerProps {
  name: ActionTypeForm;
  onChange: (actionType: ActionTypeForm, value: string) => void;
  placeholder: string;
  id?: string;
}

const InputController = (props: InputControllerProps) => {
  const { name, onChange, placeholder, id } = props;
  const [value, setValue] = useState('');
  const [styleClass, setStyleClass] = useState(styles.neutro);

  const onValidate = (event: ChangeEvent<any>) => {
    const valueCurrent: string = event.target.value;
    if (valueCurrent.length > 5 && valueCurrent !== '') {
      setStyleClass(styles.available);
    } else {
      setStyleClass(styles['in-available']);
    }

    setValue(event.target.value);
    onChange(name, event.target.value);
  };

  return <input type='text' value={value} onChange={onValidate} placeholder={placeholder} className={styleClass} id={id} />;
};

export default InputController;
