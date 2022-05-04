/**
 *
 * Button
 *
 */
import * as React from 'react';
// import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { messages } from './messages';

type ButtonVariant = 'link' | 'button';

interface Props {
  variant?: ButtonVariant;
  href?: string;
}

export function Button({ variant = 'button', href }: Props) {
  const { t } = useTranslation();

  console.log(variant);

  if (variant === 'link')
    return <Link to={href}>{t(...messages.refresh())}</Link>;

  return <button>{t(...messages.refresh())}</button>;
}
