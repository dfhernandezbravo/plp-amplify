import { Content } from '@entities/cms';
import React from 'react';
import { DescriptionNotFound, TitleNotFound } from './styles';

const PLPNotFoundText: React.FC<Content> = ({ title, description }) => {
  return (
    <div>
      <TitleNotFound>{title}</TitleNotFound>
      <DescriptionNotFound>{description}</DescriptionNotFound>
    </div>
  );
};

export default PLPNotFoundText;
