import React from 'react';
import { Container, ContainerProps } from 'react-bootstrap';
import classNames from 'classnames';

import './layout.scss';

type Props = {
  className?: string;
  noPadding?: boolean;
  children: React.ReactNode;
} & ContainerProps;

export function LayoutContainer({
  noPadding = false,
  className,
  ...rest
}: Props): React.ReactElement {
  const resultClassName = classNames(className, {
    'layout-container--no-padding': noPadding
  });

  return <Container className={resultClassName} {...rest} />;
}
