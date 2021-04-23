// Libs
import React from 'react';

// Atoms
import HeaderModule from '../../molecules/header';

// Component
import HookUseState from './useState';
import HookUseEffect from './useEffect';
import HookUseLayoutEffect from './useLayoutEffect';
import HookUseContext from './useContext';
import HookUseRef from './useRef';
import ExamplePractice from './useStateEffectRef';
import HookUseReducer from './useReducer';
import HookUseImperativeHandle from './useImperativeHandle';
import Memo from './memo';
import HookUseCallback from './useCallback';
import HookUseMemo from './useMemo';
import HookUseCustom from './useCustomHooks';

// Props
type HooksProps = {
  title?: string;
};

const Hooks = ({ title }: HooksProps) => {
  return (
    <HeaderModule {...{ title }}>
      <HookUseState title='useState' />
      <HookUseEffect title='useEffect' />
      <HookUseLayoutEffect title='useLayoutEffect' />
      <HookUseContext title='useContext' />
      <HookUseRef title='useRef' />
      <ExamplePractice title={'Ejemplo practico del uso de useState, useEffect, useRef'} />
      <HookUseReducer title='useReducer' />
      <HookUseImperativeHandle title='useImperativeHandle' />
      <Memo title='Memo (Mejora el rendimiento de la App)' />
      <HookUseCallback title='useCallback' />
      <HookUseMemo title='useMemo' />
      <HookUseCustom title='useCustom' />
    </HeaderModule>
  );
};

export default Hooks;
