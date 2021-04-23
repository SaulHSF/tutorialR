// Libs
import React, { ReactNode } from 'react';
import styled from 'styled-components';

// Components
import HeaderPartModule from '../../molecules/header/headerPartModule';

// Configs
import { THEME_PRIMARY, METRIC_COMPONENTS } from '../../../config';

// Props
type ComponentSyntaxProps = {
  title?: string;
};

const getLinearGradient = (rot: string, color1: string, color2: string) => {
  return `background: linear-gradient(${rot}, ${color1}, ${color2});`;
};

// Styles
const Header = styled.header`
  font-size: 1.5em;
  text-align: center;
  color: ${THEME_PRIMARY.light};
  margin: 1em;
  ${METRIC_COMPONENTS.padding}
  ${getLinearGradient('0deg', 'orange', 'cyan')}
  border-radius: 1em;
  opacity: 0.5;
  transition: all 500ms ease;

  &:hover {
    opacity: 1;

    h1 {
      color: ${THEME_PRIMARY.primaryLight};
    }
  }

  h1 {
    color: ${THEME_PRIMARY.primaryDark};
  }

  div {
    background: ${THEME_PRIMARY.primaryLight};
    ${METRIC_COMPONENTS.padding}
  }

  .only {
    background: green;
    ${METRIC_COMPONENTS.padding}
  }
`;

const Paragraf = styled.p`
  color: ${THEME_PRIMARY.primary};
`;

interface ButtonCustomProps {
  onClick?: () => void;
  children?: ReactNode;
  bgColor?: string;
}

//const ButtonCustom = ({ onClick, children }: ButtonCustomProps) => {
  //return <button {...{ onClick }}>{children}</button>;
//};

const Button = styled.button`
  background: ${({ bgColor }: ButtonCustomProps) => bgColor || 'black'};
  margin: 1em 1.4em;
  padding: 1.5em 2em;
  border-radius: 1em;
  border: 0px;
  color: ${THEME_PRIMARY.light};
`;

const ComponentSyntax = ({ title }: ComponentSyntaxProps) => {
  return (
    <HeaderPartModule {...{ title }}>
      <Header>
        <h1>Title</h1>
        <div>------</div>
        <div className='only'>------</div>
      </Header>
      <Paragraf>al ser un template string se pueden pasar variables en volviendo entres {'${}'}</Paragraf>
      <Button>Derecha</Button>
      <Button bgColor='blue'>izquierda</Button>
    </HeaderPartModule>
  );
};

export default ComponentSyntax;
