import { useState } from "react"; 
import { SearchContainer, SearchInput, SearchIcon, SearchIconContainer } from './searchBar.styles';

export default function SearchBar({ onSearch }) {
    const [id, setId] = useState('');

    const handleChange= (event) => {
      setId(event.target.value)
    }
    
    return (
      <SearchContainer>
      
          <SearchInput type='search' onChange={handleChange} value={id}/>
          <SearchIconContainer>
            <SearchIcon onClick={() => {onSearch(id); setId('')}} >Add</SearchIcon>
          </SearchIconContainer>
      </SearchContainer>
    );
 }