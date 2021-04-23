// Libs
import React, { ChangeEvent } from 'react';

// Config
import { OptionsSelectedModule } from 'config';

// Styles
import styles from './index.module.css';

// Props
interface SelectorScreenProps {
  optionSelected: OptionsSelectedModule;
  onChangeOption: (event: ChangeEvent<any>) => void;
}

const SelectorScreen = (props: SelectorScreenProps) => {
  const { optionSelected = OptionsSelectedModule.animationsAndTransitions, onChangeOption } = props;

  return (
    <div className={styles.container}>
      <select value={optionSelected} onChange={onChangeOption}>
        <option value={OptionsSelectedModule.searchImage}>Buscador de imágenes - Consumo Api con Axios</option>
        <option value={OptionsSelectedModule.form}>Formulario</option>
        <option value={OptionsSelectedModule.searchFilms}>Buscador de películas - Consumo Api con Axios</option>
        <option value={OptionsSelectedModule.chatRandom}>Chat random (get­Snapshot­Before­Update, component­Did­Update)</option>
        <option value={OptionsSelectedModule.observerPattern}>Patron Observador - PubSubjs</option>
        <option value={OptionsSelectedModule.apiContext}>Api Context</option>
        <option value={OptionsSelectedModule.patternRenderProp}>Pattern Render Prop</option>
        <option value={OptionsSelectedModule.hoc}>(HOC) High Order Component</option>
        <option value={OptionsSelectedModule.hooks}>uso de los Hooks</option>
        <option value={OptionsSelectedModule.children}>children uso</option>
        <option value={OptionsSelectedModule.codeSplitting}>Separacion y carga perezosa (codeSplitting y lazy loading)</option>
        <option value={OptionsSelectedModule.animationsAndTransitions}>Animaciones y transiciones CSS</option>
        <option value={OptionsSelectedModule.componentStyles}>Component Styles</option>
      </select>
    </div>
  );
};

export default SelectorScreen;
