// Libs
import React, { ReactNode } from 'react';

// Props
interface ErrorViewProps {
  children?: ReactNode;
}

const ErrorView = (props: ErrorViewProps) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default ErrorView;
