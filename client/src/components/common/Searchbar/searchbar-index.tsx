import './searchbar-style.scss';

export interface Props {
  placeholder: string,
  searchValue: string,
  setSearchValue: (value: React.SetStateAction<string>) => void
}

const SearchBar: React.FC<Props> = ({ placeholder, searchValue, setSearchValue }) => {
  return (
    <div className='searchbar'>
    <input type='text' className='search-input' placeholder={placeholder} value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>

    {searchValue &&
    <a onClick={() => setSearchValue('')}><i className="fas fa-times"></i></a>
    }
  </div>
  );
}

export default SearchBar;