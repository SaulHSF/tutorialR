// Libs
import React, { useState, CSSProperties, useRef } from 'react';

// Image
import arrow from '../../../img/right-arrow.svg';

// Props
type AccordionProps = {
  title?: string;
  content?: string;
  colorHeader?: string;
};

const Accordion = ({ title, content, colorHeader = 'black' }: AccordionProps) => {
  const [isShow, setIsShow] = useState(false);
  const refContent = useRef<HTMLDivElement>(null);

  const panelStyles: CSSProperties = {
    background: colorHeader,
    color: '#fff',
    padding: '0.5em 1em',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    userSelect: 'none'
  };

  const contentStyles: CSSProperties = {
    height: isShow ? refContent.current?.scrollHeight : 0,
    overflow: 'hidden',
    border: `1px solid ${colorHeader}`,
    transition: 'all 350ms ease',
    padding: isShow ? '1em 0.5em' : '0 0.5em'
  };

  const iconStyle: CSSProperties = {
    width: 15,
    transform: isShow ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
    transition: 'all 350ms ease',
    color: 'white'
  };

  return (
    <div>
      <div style={panelStyles} onClick={() => setIsShow(!isShow)}>
        <span>{title}</span>
        <img src={arrow} alt='arrow' style={iconStyle} />
      </div>
      <div ref={refContent} style={contentStyles}>
        {content}
      </div>
    </div>
  );
};

export default Accordion;
