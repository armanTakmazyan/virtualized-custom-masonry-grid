import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  SearchContainer,
  SearchInput,
  SearchButton,
  StyledForm,
} from './styles';
import { HandleSubmit } from './types';

export const SearchHeader: React.FC<{}> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get('search') ?? '',
  );

  const handleSubmit: HandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      return setSearchParams({ search: searchTerm.trim() });
    }

    setSearchParams({});
  };

  return (
    <SearchContainer>
      <StyledForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search"
        />
        <SearchButton type="submit">Search</SearchButton>
      </StyledForm>
    </SearchContainer>
  );
};
