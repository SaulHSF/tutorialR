// Libs
import React, { useRef } from 'react';

// Interface
export interface DataSendInterface {
  name?: string;
  email?: string;
}

// Props
interface FormNotControllerProps {
  onSend: (data: DataSendInterface) => void;
}

const FormNotController = (props: FormNotControllerProps) => {
  const { onSend } = props;
  const nameInput = useRef(null);
  const emailInput = useRef(null);

  // const handleSend = () => {
  //   const dataSend: DataSendInterface = { name: undefined, email: undefined };
  //   if (nameInput !== null) {
  //     const instance: InputHTMLAttributes<any> = nameInput.current!;
  //     dataSend.name = instance!.value as string;
  //   }
  //   if (emailInput !== null) {
  //     const instance: InputHTMLAttributes<any> = emailInput.current!;
  //     dataSend.email = instance!.value as string;
  //   }
  //   onSend(dataSend);
  // };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const dataSend: DataSendInterface = { name: undefined, email: undefined };
    if (event.target[0].value) {
      dataSend.name = event.target[0].value;
    }
    if (event.target[1].value) {
      dataSend.email = event.target[1].value;
    }
    onSend(dataSend);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' ref={nameInput} placeholder='Name' />
      <input type='text' ref={emailInput} placeholder='Email' />
      <button>enviar</button>
    </form>
  );
};

export default FormNotController;
