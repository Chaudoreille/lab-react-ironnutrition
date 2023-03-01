import React from 'react'

const SearchBar = (props) => {
    const {foods, display} = {...props};
    const [searchString, setSearchString] = useState('');

    const searchFields = {
        name: (haystack, needle) => haystack.indexOf(needle) !== -1,
        calories: (value, low, high) =>
          (low ? low <= value : true) && (high ? high >= value : true),
        image: (haystack, needle) => haystack.indexOf(needle) !== -1,
        servings: (value, low, high) =>
          (low ? low <= value : true) && (high ? high >= value : true),
      };
      
    const filterDisplay = () => {
        const searchWords = searchString.split();
        const validators = searchWords.map(token => {
            const advancedSearch = token.split(':');
            let key = 'name';
            let search = [token];

            if (advancedSearch.length >= 2) {
                if (advancedSearch[0] in searchFields) {
                    key = advancedSearch[0];
                    search = advancedSearch[1].split('-');
                }
            }
            return (item) => searchFields[key](item, ...search);
        });

        setFoodDisplay((display) => {
            return foods.filter((item) => {
                return validators.reduce((select, validator) => validator(item) || select, false)
            });
        });
    };
    
  return (
    <div>SearchBar</div>
  )
}

export default SearchBar