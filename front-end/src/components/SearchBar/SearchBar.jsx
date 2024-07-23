const SearchBar = ({ inputValue, setInputValue }) => {
  return (
    <>
      <div className=" flex border rounded ">
        <div>
          <img className="w-6" src="src/assets/images/search.png" alt="" />
        </div>
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
          className="w-60"
          type="text"
          placeholder="Rechercher"
        />
        <button className="bg-green-600 text-white w-24">Rechercher</button>
      </div>
    </>
  );
};
export default SearchBar;
