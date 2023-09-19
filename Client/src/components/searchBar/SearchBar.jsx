import { useState } from "react"; 
import { SearchContainer, SearchInput, SearchIcon, SearchIconContainer } from './searchBar.styles';

export default function SearchBar({ onSearch }) {
    const [id, setId] = useState('');

    const handleSearch = () => {
      onSearch(id);
      setId('');
    }
    
    return (
      <SearchContainer>
          <SearchInput
            type='search'
            onChange={(event) => setId(event.target.value)}
            value={id}
          />
          <SearchIconContainer>
            <SearchIcon onClick={handleSearch}>Add</SearchIcon>
          </SearchIconContainer>
      </SearchContainer>
    );
}
