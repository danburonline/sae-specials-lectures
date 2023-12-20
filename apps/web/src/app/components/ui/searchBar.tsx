type SearchBarProps = {
  onSearch: (query: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <form className="bg-red-500">
      <input type="text" placeholder="Search..." />
      <button>Search</button>
    </form>
  )
}

export default SearchBar
