import { Content } from '@entities/cms';
import Image from 'next/image';
import React from 'react';
import {
  LinkPopularSearch,
  NoSuggestionMessageContainer,
  NoSuggestionsContainer,
  PopularSearchesContainer,
} from './styles';

const NoSuggestions: React.FC<Content> = ({
  popularSearches,
  icon,
  description,
  title,
}) => {
  return (
    <NoSuggestionsContainer>
      <PopularSearchesContainer>
        <h2 className="title">Búsquedas Populares</h2>
        {popularSearches?.split(',').map((item, index) => (
          <LinkPopularSearch key={`${item}-${index}`} href={`/${item}/p`}>
            {item}
          </LinkPopularSearch>
        ))}
      </PopularSearchesContainer>

      <NoSuggestionMessageContainer>
        <Image src={icon!} alt="icon-no-suggestion" height={80} width={80} />
        <div className="message">
          <h2 className="title">{title}</h2>
          <span>{description}</span>
        </div>
      </NoSuggestionMessageContainer>
    </NoSuggestionsContainer>
  );
};

export default NoSuggestions;
