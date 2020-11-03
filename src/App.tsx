// libs
import React, { useState, ChangeEvent } from 'react';

// Organisms
import ControllerForm from 'components/organisms/Form/ControllerForm';
import SearchImage from 'components/organisms/SearchImage';
import SelectorScreen from 'components/molecules/SelectorScreen';
import SearchFilms from 'components/organisms/SearchFilms';
import ChatRandom from 'components/organisms/ChatRamdom';
import ListTask from 'components/organisms/ListTask';
import FatherComponent from 'components/organisms/ObserverPatter'; // ejemplo de patron observador.
import FatherContextComponent from 'components/organisms/apiContext'; // api context

// Constants
import { OptionsSelectedModule } from 'config';

const App = () => {
  const [optionSelected, setOptionSelected] = useState(OptionsSelectedModule.observerPattern);
  const onChangeOption = (event: ChangeEvent<any>) => {
    setOptionSelected(parseInt(event.target!.value));
  };
  return (
    <div>
      <SelectorScreen optionSelected={optionSelected} onChangeOption={onChangeOption} />
      {OptionsSelectedModule.searchImage === optionSelected && <SearchImage />}
      {OptionsSelectedModule.form === optionSelected && <ControllerForm />}
      {OptionsSelectedModule.searchFilms === optionSelected && <SearchFilms />}
      {OptionsSelectedModule.chatRandom === optionSelected && <ChatRandom />}
      {OptionsSelectedModule.listTask === optionSelected && <ListTask />}
      {OptionsSelectedModule.observerPattern === optionSelected && <FatherComponent />}
      {OptionsSelectedModule.apiContext === optionSelected && <FatherContextComponent />}
    </div>
  );
};

export default App;
