// libs
import React, { useState, ChangeEvent, lazy, Suspense } from 'react';

// Organisms
import ControllerForm from 'components/organisms/Form/ControllerForm';
import SearchImage from 'components/organisms/SearchImage';
import SelectorScreen from 'components/molecules/SelectorScreen';
import SearchFilms from 'components/organisms/SearchFilms';
import ChatRandom from 'components/organisms/ChatRamdom';
import ListTask from 'components/organisms/ListTask';
import FatherComponent from 'components/organisms/ObserverPatter'; // ejemplo de patron observador.
import FatherContextComponent from 'components/organisms/apiContext'; // api context
import PatterRenderProp from 'components/organisms/patternRenderProp'; // ejemplo de pasar un component en las props
import EncapsulatedS from 'components/organisms/hoc';
import Hooks from 'components/organisms/hooks';
import Children from 'components/organisms/children';
import AnimationsAndTransitionCSS from 'components/organisms/animationAndTransitionCSS';
import ComponentStyles from 'components/organisms/componentStyles';

// Styles
import styles from './App.module.css';

// Constants
import { OptionsSelectedModule } from 'config';

// Lazy Components
const CodeSplitting = lazy(async () => await import('components/organisms/codeSplitting'));

const App = () => {
  const [optionSelected, setOptionSelected] = useState(OptionsSelectedModule.componentStyles);
  const onChangeOption = (event: ChangeEvent<any>) => {
    setOptionSelected(parseInt(event.target!.value));
  };
  return (
    <div className={styles.container}>
      <h1>React practica</h1>
      <SelectorScreen optionSelected={optionSelected} onChangeOption={onChangeOption} />
      {OptionsSelectedModule.searchImage === optionSelected && <SearchImage />}
      {OptionsSelectedModule.form === optionSelected && <ControllerForm />}
      {OptionsSelectedModule.searchFilms === optionSelected && <SearchFilms />}
      {OptionsSelectedModule.chatRandom === optionSelected && <ChatRandom />}
      {OptionsSelectedModule.listTask === optionSelected && <ListTask />}
      {OptionsSelectedModule.observerPattern === optionSelected && <FatherComponent />}
      {OptionsSelectedModule.apiContext === optionSelected && <FatherContextComponent />}
      {OptionsSelectedModule.patternRenderProp === optionSelected && <PatterRenderProp />}
      {OptionsSelectedModule.hoc === optionSelected && <EncapsulatedS />}
      {OptionsSelectedModule.hooks === optionSelected && <Hooks title='Hooks uso y aplicaciones' />}
      {OptionsSelectedModule.children === optionSelected && <Children title='Children' />}
      <Suspense fallback={<h3>Cargando ...</h3>}>
        {OptionsSelectedModule.codeSplitting === optionSelected && <CodeSplitting title='Children' />}
      </Suspense>
      {OptionsSelectedModule.animationsAndTransitions === optionSelected && (
        <AnimationsAndTransitionCSS title='Animaciones y transiciones' />
      )}
      {OptionsSelectedModule.componentStyles === optionSelected && <ComponentStyles title='Component Styles' />}
    </div>
  );
};

export default App;
